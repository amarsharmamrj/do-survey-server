import { WedMessage } from '../models/wedMessage.js'

const create = (model) => {
    const wed = new WedMessage(model)
    wed.save()
    return wed
}


const wedMessageService = {
    create
}

export { wedMessageService }