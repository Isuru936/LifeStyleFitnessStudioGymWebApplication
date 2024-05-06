import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/user.model.js';

const protect = asyncHandler(async (req , res , next) =>{
    let token;

    token = req.cookies.jwt;

    if (token){
        try {
            const decoded= jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password');
            next();
        } catch (error) {
            res.status(401);
            throw new Error ('Not Authorized, Invalid Token')
        }

    }else{
        res.status(401);
        throw new Error ('Not Authorized, No token')
    }
});

export {protect};