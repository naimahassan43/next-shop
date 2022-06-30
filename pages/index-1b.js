//Option 1b: fetch products on the server side
// with Incremental Static Regeneration (in getStaticProps())
// this means we get all the benefits of a staticly generated page but the page will be regenerated periodically
//which means that if the data changes in the backend the page will also be up-to-date
//the only downside is that this approach is not compatible with exporting the website staticly using the next export command

import Head from "next/head";
import Title from "../components/Title";
import { getProducts } from "../lib/products";

export async function getStaticProps() {
  console.log("HomePage getStaticProps");

  const products = await getProducts();
  return {
    props: { products },
    revalidate: 30, //seconds
  };
}

function HomePage({ products }) {
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
