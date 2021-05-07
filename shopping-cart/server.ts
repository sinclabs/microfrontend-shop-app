import express from "express";
import path from "path";
import cors from "cors";
import { json } from "body-parser";

import { createDBConnection, getCartModel } from "./db";

(async function main() {
    const app = express()
    const port = 3000

    await createDBConnection()
    const Cart = getCartModel()

    app.use(cors())
    app.use(json())
    
    app.use('/static', express.static(path.join(__dirname, 'ui')))
    app.get('/', (_req, res) => res.end('Hello World!'))

    app.get('/cart', async (req, res) => {
        res.setHeader("Content-Type", "application/json")

        Cart.find({}, (error, docs) => {
            if(error) {
                return res.end(JSON.stringify({ error }))
            }
            res.end(JSON.stringify(docs))
        })
    })

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
})()
