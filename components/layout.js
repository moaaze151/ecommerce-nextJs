import Navbar from "./navbar";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
