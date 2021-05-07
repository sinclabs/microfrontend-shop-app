import React from "react";
import { IProduct } from "./Products";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ds-button': {
                label: string
                [key: string]: any
            };
        }
    }
}

export interface IProductProps {
    product: IProduct
    onAddToCart: (id: IProduct) => void
}

const Product: React.FC<IProductProps> = ({ product, onAddToCart }) => (
    <div style={{
        width: "clamp(23ch, 50%, 38ch)",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        background: "#313638",
        color: "#E0DFD5",
        borderRadius: "10px",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
        margin: "10px",
    }}>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <img style={{
            height: "125px",
            width: "100%",
        }} src={product.image} alt={product.name} />
        <ds-button 
            label={
                product.isInCart ? 'Remove from cart' : 'Add to cart'
            }
            color={
                product.isInCart ? '#EF6461' : '#377b37'
            }
            onClick={
                () => onAddToCart(product)
            } 
        />
    </div>
);

export default Product;