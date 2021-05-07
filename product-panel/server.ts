import express from "express";
import path from "path";
import fs from 'fs';
import cors from "cors";
import { json } from "body-parser";

import { createDBConnection, getProductModel as getProductsModel, IProduct } from "./db";

(async function main() {
    const app = express()
    const port = 3000

    await createDBConnection()
    const Products = getProductsModel()

    app.use(cors())
    app.use(json())

    app.use('/static', express.static(path.join(__dirname, 'ui', 'build')))
    app.get('/dev', (req, res) => fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res))
    app.get('/', (req, res) => res.send('Hello World!'))

    app.get('/products', (req, res) => {
        res.setHeader("Content-Type", "application/json")
        
        Products.find({}, (error: any, docs: IProduct[]) => {
            if(error) {
                return res.end(JSON.stringify({ error }))
            }
            res.end(JSON.stringify({products: docs}))
        })
    })

    app.put('/products/:id', (req, res) => {
        res.setHeader("Content-Type", "application/json")

        const { id } = req.params
        const { isInCart } = req.body

        Products.findByIdAndUpdate(id, { isInCart }, { new: true }, (error, doc) => {
            if(error) {
                return res.end(JSON.stringify({ error }))
            }
            res.end(JSON.stringify(doc))
        })        
    })

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
})()