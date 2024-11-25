import User from "../models/userModels.js";

const authenticate = async (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if(!apiKey) return res.status(401).json({ message: 'API Key não fornecida.' });

    const user = await User.findOne({ where: { apiKey } });
    if (!user) {
        return res.status(403).json({ message: 'API Key inválida.' });
    }

    req.user = user;
    next();
};

export default authenticate;