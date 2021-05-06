import React from "react";
import Product from "./Product";

export interface IProduct {
  id: string
  name: string
  image: string
  description: string
}

const productsData: Array<IProduct> = [
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
    name: "Super Great Product",
    image: "https://picsum.photos/200/300?random=3",
    description: "This is a great product"
  }
]

const Products = () => <div style={{
  height: "auto",
  display: "flex",
  backgroundColor: "#e8e9eb",
  padding: "10px",
}}>
  {
    productsData.map(product => <Product
      product={product}
      key={product.id}
      onAddToCart={(product: IProduct) => {
        document.getElementsByTagName('shopping-cart')[0].dispatchEvent(new CustomEvent('itemAddedToCart', { detail: product }))
        console.log("Adding", product)
      }} 
    />)
  }
</div>;

export default Products;