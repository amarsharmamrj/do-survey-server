import { User } from "../models/user.js";

const validateUserByEmail = async (req, res, next) => {
    const email = req.body.email
    const user = await User.findOne({ email: email })
    if (user) {
        next()
    } else {
        res.status(404).send({ mesage: 'no user found with given email!' })
    }
}

export { validateUserByEmail }