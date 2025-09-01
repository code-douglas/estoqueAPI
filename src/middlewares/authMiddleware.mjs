import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  const header = req.headers['authorization'];
  if (!header) {
    return res.status(401).json({ error: 'Token missing' });
  }

  const token = header.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Invalid token format' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};
