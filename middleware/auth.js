const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.authenticate = async (req, res, next) => {
    try{
        const token=req.header('Authorization');
        
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
       
        const userDetails = await User.findById(decoded.userId);

        req.user=userDetails;
        next();
    } catch(err){
        console.error("Authentication error:", err);
        return res.status(401).json({ success: false, message: 'Authentication failed' });
    }
};