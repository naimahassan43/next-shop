//Option 2a: fetch products on the client side(in useEffect())
// directly from an external API
// this is a valid approach if we want to fetch fresh data every time
// & this ok to access the backend API directly from the browser

import Head from "next/head";
import { useState, useEffect } from "react";
import Title from "../components/Title";
import { getProducts } from "../lib/products";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  console.log("[HomePage] render:", products);

  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
