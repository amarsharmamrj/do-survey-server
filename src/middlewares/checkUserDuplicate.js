import { User } from "../models/user.js";

const checkUserDuplicate = async (req, res, next) => {
    const email = req.body.email
    const user = await User.findOne({ email: email })
    if (user) {
        console.log("duplicate:", user._doc)
        res.status(409).send({ mesage: 'email already exists in the system!' })
    } else {
        next()
    }
}

export { checkUserDuplicate }