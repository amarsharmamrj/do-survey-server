import { wedMessageService } from "../services/wedMessage.js";

const create = async (req, res) => {
    try {
        const wed = await wedMessageService.create(req.body)
        res.status(200).send(wed)
    } catch (error) {
        res.status(400).send(error)
    }
}


const wedMessageController = {
    create,
}

export { wedMessageController }