import Head from "next/head";
import Image from "next/image";
import HomeStyle from "../../styles/Home.module.css";
// import { useRouter } from "next/dist/client/router";

const ProductId = ({ product }) => {
  const { image, title, price, description, category } = product;
  //   const route = useRouter();
  //   const id = route.query.id;
  //   console.log(id);
  console.log(product);
  return (
    <div className={HomeStyle.ProductItem}>
      <Head>
        <title>Home | The best ecommerce website</title>
      </Head>
      <div className="container">
        <div className={HomeStyle.image}>
          <Image
            src={image}
            alt="Picture of the author"
            width={350}
            height={350}
          />
        </div>
        <div>
          <h2>
            <span>Title:</span>{title}
          </h2>
          <h3>
            <span>category:</span>{category}
          </h3>
          <h3>
            <span>Price:</span>{price}$
          </h3>
          <p>
            <span>descripe:</span>{description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductId;

export async function getStaticPaths() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const products = await res.json();
  const paths = products.map((product) => {
    return {
      params: { id: product.id.toString() }, // = context
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://fakestoreapi.com/products/` + id);
  const product = await res.json();
  return {
    props: { product },
  };
}
