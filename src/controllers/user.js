import { userService } from "../services/user.js";

const create = async (req, res) => {
    try {
        console.log("reqBody:", req.body)
        const user = await userService.create(req.body)
        if (user != null) {
            const { name, email } = user._doc
            res.status(200).send({ name, email })
        } else {
            res.status(400).send('something went wrong!')
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

const update = async (req, res) => {
    try {
        console.log("reqBody:", req.body)
        const user = await userService.update(req.body)
        if (user != null) {
            const { name, email } = user._doc
            res.status(200).send({ name, email })
        } else {
            res.status(400).send('something went wrong!')
        }
    } catch (error) {
        res.status(400).send(error)
    }
}


const get = async (req, res) => {
    try {
        const user = await userService.get(req.params.id)
        if (user) {
            const { name, email } = user._doc
            res.status(200).send({ name, email })
        } else {
            res.status(400).send('something went wrong!')
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

const login = async (req, res) => {
    try {
        const user = await userService.login(req.body)
        if (user) {
            const { name, email, _id: userId } = user._doc
            res.status(200).send({ name, email, userId })
        } else {
            res.status(404).send({ 'message': 'either email or password is wrong!' })
        }
    } catch (error) {
        res.status(400).send(error)
    }
}



const userController = {
    create,
    update,
    get,
    login
}

export { userController }