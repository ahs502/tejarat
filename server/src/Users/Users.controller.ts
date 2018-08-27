import { Router } from "express"

export const router = new Router()

router.get('/', (req, res, next) => {
    res.json({
        data: 123
    })
})
