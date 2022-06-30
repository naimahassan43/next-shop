//Option 2b: fetch products on the client side(in useEffect())
// from an internal API route
// fetching the data from an API route on the same next js app
// so the browser doesn't need access to the backend API'
// this requires writing an API handler that runs on the same next js server & fetches the data from the backend CMS
//possibly transforming the data in the process

import Head from "next/head";
import { useState, useEffect } from "react";
import Title from "../components/Title";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/products");
      const products = await response.json();
      setProducts(products);
    })();
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
