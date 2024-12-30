import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product._id} className="border p-4">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
