import jwt from 'jsonwebtoken';

export const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET_ACCESS, {
    expiresIn: '15m',
  });
};

export const generateRefreshToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET_REFRESH, {
    expiresIn: '365d',
  });
};

/* export const generateResetToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET_RESET, {
    expiresIn: '1h',
  });
}; */

export const verifyAccessToken = (token) => {
  //console.log('token', jwt.verify(token, process.env.JWT_SECRET_ACCESS));
  return jwt.verify(token, process.env.JWT_SECRET_ACCESS);
};

export const verifyRefreshToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET_REFRESH);
};
