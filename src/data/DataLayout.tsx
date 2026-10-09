import { Link, Outlet } from "react-router";
import reactLogo from "../assets/react.svg";
import "./DataLayout.css";


export default function DataLayout() {
    return (
      <>
        <header className="header-bar">
          <Link to="/data" className="logo-link">
            <img src={reactLogo} className="framework" alt="React logo" />
          </Link>
          <nav className="nav-menu">
            <ul>
              <li>
                <Link to="/data">Data Home</Link>
              </li>
              <li>
                <Link to="/data/customer">Customer</Link>
              </li>
              <li>
                <Link to="/data/seller">Seller</Link>
              </li>
              <li>
                <Link to="/data/products">Products</Link>
              </li>
            </ul>
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