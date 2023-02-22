import jwt from 'jsonwebtoken';

export const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15m',
  });
};

export const generateRefreshToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '365d',
  });
};

export const verifyAccessToken = (token) => {
  console.log('token', jwt.verify(token, process.env.JWT_SECRET));
  return jwt.verify(token, process.env.JWT_SECRET);
};

export const verifyRefreshToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
