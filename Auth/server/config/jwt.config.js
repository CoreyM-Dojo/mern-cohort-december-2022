const jwt = require('jsonwebtoken')
const secret = process.env.SECRET_KEY;
module.exports.secret = secret
module.exports.authenticate = (req, res, next) => {
    console.log(req.cookies.usertoken)
    console.log({secret})
    jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
        if (err) {
            res.status(401).json({message: "Unauthorized user"})
        } else {
            next();
        }

    } )


}