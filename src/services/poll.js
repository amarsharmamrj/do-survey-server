import { Poll } from '../models/poll.js'

const create = async (model) => {
    console.log("model:", model)
    const poll = new Poll(model)
    poll.save()
    return poll
}

const update = async (model) => {
    return Poll.findByIdAndUpdate(model.id, model)
}


const getAll = (userId) => {
    return Poll.find({ userId: userId }).sort({ "createdAt": -1 })
}


const getPoll = (id) => {
    return Poll.find({ _id: id })
}

const pollService = {
    create,
    update,
    getAll,
    getPoll
}
export {
    pollService
}