import { User } from "../models/user.js";
import bcrypt from 'bcrypt'

const create = async (model) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(model.password, salt)
    const newModel = { ...model, password: hashedPassword }
    console.log("newModel:", newModel)
    const user = new User(newModel)
    return user.save()
}

const update = (model) => {
    return User.findByIdAndUpdate(model.userId, { name: model.name })
}


const get = (id) => {
    return User.findOne({ _id: id })
}

const login = async (model) => {
    console.log("entry:", model)
    const user = await User.findOne({ email: model.email })
    console.log("user hash", user._doc)
    if (user) {
        const match = await bcrypt.compare(model.password, user._doc.password);
        if (match) {
            return user
        } else {
            return null
        }
    } else {
       return null
    }
}

const userService = {
    create,
    update,
    get,
    login
}

export { userService }