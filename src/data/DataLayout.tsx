import { Outlet } from "react-router";
import reactLogo from "../assets/react.svg";


export default function DataLayout() {
    return (
      <>
        <header className="header-bar">
          <a href="" className="logo">
            <img src={reactLogo} className="framework" alt="React logo" />
          </a>
          <nav className="nav-menu">
            <a href="/data">Data Home</a>
            <a href="/data/customer">Customer</a>
            <a href="/data/seller">Seller</a>
            <a href="/data/products">Products</a>
          </nav>
        </header>
        <div className="content">
          <Outlet></Outlet>
        </div>
        <div className="data-footer">
          <p>&copy; 2023 Data Layout. All rights reserved.</p>
        </div>
      </>
    );
}