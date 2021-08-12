require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = {
    async generationtoken(id){
        return jwt.sign({id}, process.env.SECRET, {expiresIn: '1h'})
    },
    
    async verifyToken (req, res, next){
        const token = req.headers['x-access-token'];
        if(!token) res.status(401);
        
        return jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) return res.status(401)
    
            req.userId = decoded.id;
            next();
        });
    }
}