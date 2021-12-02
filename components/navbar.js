import Link from "next/link";
import NavbarStyle from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <header className={NavbarStyle.header} >
      <div className={`${NavbarStyle.container} container`}>
        <div className={NavbarStyle.logo}>
          <h2>Mo3azDv</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/cart">
                <a>Cart</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
