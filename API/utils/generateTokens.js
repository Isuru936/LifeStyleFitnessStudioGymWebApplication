import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d' // Token expires in 30 days
    });

    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
        secure: process.env.NODE_ENV !== 'development', // Only send cookie over HTTPS in production
        sameSite: 'strict' // Restrict cookie to same origin
    });
};

export default generateToken;
