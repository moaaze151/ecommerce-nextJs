import Image from "next/image";
import HomeStye from "../styles/Home.module.css";
import Link from "next/link";
const Products = ({ product }) => {
  const { title, price, description, image, category, id } = product;
  return (
    <div className={HomeStye.products}>
      <div>
        <Image
          src={image}
          alt="Picture of the author"
          width={150}
          height={150}
        />
        <ul>
          <li>
            <span>Title:</span> {title}
          </li>
          <li>
            <span>Price:</span> {price}$
          </li>

          {/* <li>description: {description}</li>
        <li>category: {category}</li> */}
        </ul>
      </div>
      <Link href={`/products/${id}`}>
        <button>More Details</button>
      </Link>
    </div>
  );
};

export default Products;
