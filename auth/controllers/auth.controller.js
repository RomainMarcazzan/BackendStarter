import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from '../services/token.service.js';
import bcrypt from 'bcrypt';
import { prisma } from '../../utils/prisma.js';

export const register = async (req, res) => {
  const { email, password, firstname, lastname, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Create a new user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstname,
        lastname,
        role,
      },
    });

    // Create a refresh token for the new user
    const refresh_token = generateRefreshToken(user.id);
    await prisma.refreshToken.create({
      data: {
        token: refresh_token,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    // Generate access token for the new user
    const access_token = generateAccessToken(user.id);

    // Send response with user and tokens
    res.json({
      message: 'User created successfully',
      user,
      access_token,
      refresh_token,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: 'An error occurred while creating the user' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const access_token = generateAccessToken(user.id);
    const refresh_token = generateRefreshToken(user.id);

    const createdRefreshToken = await prisma.refreshToken.create({
      data: {
        token: refresh_token,
        user: { connect: { id: user.id } },
      },
    });
    res.json({
      message: 'Successful login',
      access_token,
      refresh_token,
    });
  } catch (err) {
    res.status(500).json({ message: 'An error occurred while logging in' });
  }
};

export const refresh = async (req, res) => {
  const { refreshToken } = req.body;
  try {
    const { userId } = verifyRefreshToken(refreshToken);
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const access_token = generateAccessToken(user.id);
    res.json({ access_token });
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export const logout = async (req, res) => {
  const { refresh_token } = req.body;
  try {
    await prisma.refreshToken.delete({ where: { token: refresh_token } });
    res.json({ message: 'logout successfull' });
  } catch (error) {
    res.status(500).json({ message: 'An error occured while logging out' });
  }
};
