"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Product = function (_a) {
    var id = _a.id, name = _a.name, image = _a.image, description = _a.description, onAddToCart = _a.onAddToCart;
    return (<div style={{
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
        }} src={image} alt={name}/>
        <ds-button labelText={'Add to cart'} onClick={function () { return onAddToCart(id); }}/>

    </div>);
};
exports.default = Product;
