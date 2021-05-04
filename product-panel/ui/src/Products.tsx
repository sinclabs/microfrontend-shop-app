import React from "react";
import Product from "./Product";

const productsData = [
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
]

const Products = () => <div style={{
  height: "auto",
  display: "flex",
  backgroundColor: "#e8e9eb",
  padding: "10px",
}}>
  {
    productsData.map(product => <Product
      id={product.id}
      name={product.name}
      image={product.image}
      description={product.description}
      onAddToCart={(id: string) => console.log("Adding", id, product)} 
    />)
  }
</div>;

export default Products;