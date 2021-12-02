import Products from "../components/products";
import React, { useEffect, useState } from "react";
import HomeStyle from "../styles/Home.module.css";
import Head from "next/head";

const Home = ({ products }) => {
  const [product, setProduct] = useState(null);
  // useEffect(() => {
  //   setProduct(data[0]);
  // }, []);
  console.log(products);
  return (
    <div className={HomeStyle.home}>
      <Head>
        <title>Home | The best ecommerce website</title>
      </Head>
      <div className="container">
        <div className={HomeStyle.content}>
          {products ? (
            products.map((el) => <Products product={el} key={el.id} />)
          ) : (
            <p>There's no added product yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const products = await res.json();
  return {
    props: { products },
  };
}
