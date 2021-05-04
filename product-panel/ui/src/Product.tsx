import React from "react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ds-button': {
                labelText: string
                [key: string]: any
            };
        }
    }
}

export interface IProductProps {
    id: string
    name: string
    image: string
    description: string
    onAddToCart: (id: string) => void
}

const Product: React.FC<IProductProps> = ({ id, name, image, description, onAddToCart }) => (
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
        <h1>{name}</h1>
        <p>{description}</p>
        <img style={{
            height: "125px",
            width: "100%",
        }} src={image} alt={name} />
        <ds-button labelText={'Add to cart'} onClick={() => onAddToCart(id)} />

    </div>
);

export default Product;