import { pollService } from "../services/poll.js";

const create = async (req, res) => {
    try {
        console.log("model controller:", req.body)
        const poll = await pollService.create(req.body)
        res.status(201).send(poll)
    } catch (error) {
        console.log("create poll:", error)
        res.status(400).send(error)
    }
}

const update = async (req, res) => {
    try {
        console.log("model controller:", req.body)
        const poll = await pollService.update(req.body)
        res.status(201).send(poll)
    } catch (error) {
        console.log("update poll:", error)
        res.status(400).send(error)
    }
}

const getAll = async (req, res) => {
    try {
        const polls = await pollService.getAll(req.params.userId)
        res.status(200).send(polls)
    } catch (error) {
        console.log("error in getAll for poll:", error)
    }
}

const getPoll = async (req, res) => {
    try {
        const poll = await pollService.getPoll(req.params.id)
        res.status(200).send(poll)
    } catch (error) {
        console.log("error in get poll:", error)
        res.status(400).send(error)
    }
}

const pollController = {
    create,
    update,
    getAll,
    getPoll
}

export {
    pollController
}