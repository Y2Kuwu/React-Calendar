const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

async function create(req, res) {
    try {
        const user = await User.create(req.body);
        const token = createJWT(user);
        return res.json(token);
    } catch (error) {
        res.status(400).json(error);
    }
}

function createJWT(user) {
    return jwt.sign(
        {user},
        process.env.SECRET,
        {expiresIn: '24h'}
    );
}

async function login(req, res) {
    try {
        const user = await User.findOne({email: req.body.email});
        if (!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        res.status(400).json('Bad Credentials');
    }
}

async function userImage(req,res){
    try {
        const user = await User.findOne({_id : req.user._id});
        const pic = await user.findOne({profilePicture : user.profilePicture})
        if (!pic) next();
        if(pic) return res.json(pic)
    } catch (err) {
        res.status(400).json('Bad Credentials');
    }
}

function checkToken(req, res) {
    console.log('req.user', req.user);
    res.json(req.exp);
}

module.exports = {
    create,
    login,
    checkToken,
    userImage,
};