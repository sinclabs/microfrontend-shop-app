import React, { useState, useEffect } from "react";
import Product from "./Product";

export interface IProduct {
  _id: string
  name: string
  image: string
  description: string
  isInCart: boolean
}

const Products = () => {
  const [products, setProducts] = useState<Array<IProduct>>([])

  const fetchProducts = () => fetch("http://localhost:8083/products")
      .then(res => res.json())
      .then(res => setProducts([...res.products]))
      .catch(console.error)

  useEffect(() => { 
    fetchProducts() 
  }, [])  

  const addToCartHandler = (product: IProduct) => {
    fetch(`http://localhost:8083/products/${product._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isInCart: !product.isInCart
      }),
    })
    .then(response => response.json())
    .then(data => {
      document.getElementsByTagName('shopping-cart')[0].dispatchEvent(new CustomEvent('itemAddedToCart', { detail: product }))
      
      const newProducts = [...products]
      const indexOfEle = newProducts.indexOf(newProducts.find((currProduct) => currProduct._id === product._id) ?? product)
      newProducts.splice(indexOfEle, 1, data)
      setProducts(newProducts)
    })
    .catch(console.error);
  }
  
  return (
    <div style={{
      height: "auto",
      display: "flex",
      backgroundColor: "#e8e9eb",
      padding: "10px",
    }}>
      {
        products.map(product => {
          return <Product
            product={product}
            key={product._id}
            onAddToCart={addToCartHandler} 
          />
        })
      }
    </div>
  );
};

export default Products;