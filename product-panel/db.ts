import mongoose from 'mongoose';

export interface IProduct extends mongoose.Document {
    _id: string
    name: string
    image: string
    description: string
    isInCart: boolean
}

export async function createDBConnection() {
    try {
        await mongoose.connect('mongodb://mongodb-server/products', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
            authSource: 'admin',
            auth: {
                user: 'mongoadmin',
                password: 'mongoadmin'
            }
        });
    } catch(err) {
        console.log(err)
    }
}

export function getProductModel() {
    const {ObjectId, String, Boolean} = mongoose.SchemaTypes
    const ProductSchema = new mongoose.Schema({
        _id: ObjectId,
        name: String,
        image: String,
        description: String,
        isInCart: Boolean,
    })

    return mongoose.model<IProduct>('product', ProductSchema)
}
