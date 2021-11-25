const jwt = require('jsonwebtoken');

const secret = 'tempSecretSh';
const expiration = '2h';

const authMiddleware = ({ req }) => {
    let token = req.body.token || req.query.token || req.headers.authorization; 

    if (req.headers.authorization) {
        token = token.split(' ').pop().trim();
    }

    if (!token) {
        return req;
    }

    try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        req.user = data;
    } catch {
        console.log('Invalid Token');
    };

    return req;
};

const signToken = ({ username }) => {
    const payload = { username };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

module.exports = {
    authMiddleware,
    signToken,
}