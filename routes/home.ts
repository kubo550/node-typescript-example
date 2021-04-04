import { Router } from "express";

const homeRouter = Router()

homeRouter.get('/', (req, res) => {
    res.send('hello from my home')
})

export { homeRouter }