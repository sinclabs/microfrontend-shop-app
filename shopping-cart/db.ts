import mongoose from 'mongoose';

export interface ICartItem extends mongoose.Document {
    _id: string
    name: string
    quantity: number
}

export async function createDBConnection() {
    try {
        await mongoose.connect('mongodb://mongodb-server/shopping-cart', {
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

export function getCartModel() {
    const {ObjectId, String, Number} = mongoose.SchemaTypes
    const CartItemSchema = new mongoose.Schema({
        _id: ObjectId,
        name: String,
        quantity: Number,
    })

    return mongoose.model<ICartItem>('cart-item', CartItemSchema)
}
