"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Product_1 = __importDefault(require("./Product"));
var productsData = [
    {
        id: "1",
        name: "Awesome Product",
        image: "https://picsum.photos/200/300?random=1",
        description: "This is an awesome product"
    },
    {
        id: "2",
        name: "Very Cool Product",
        image: "https://picsum.photos/200/300?random=2",
        description: "This is a cool product"
    },
    {
        id: "3",
        name: "Great Product",
        image: "https://picsum.photos/200/300?random=3",
        description: "This is a great product"
    }
];
var Products = function () { return <div style={{
        height: "auto",
        display: "flex",
        backgroundColor: "#e8e9eb",
        padding: "10px",
    }}>
  {productsData.map(function (product) { return <Product_1.default id={product.id} name={product.name} image={product.image} description={product.description} onAddToCart={function (id) { return console.log("Adding", id, product); }}/>; })}
</div>; };
exports.default = Products;
