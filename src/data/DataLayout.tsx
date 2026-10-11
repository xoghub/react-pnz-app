import { NavLink, Outlet } from "react-router";
import reactLogo from "../assets/react.svg";
import "./DataLayout.css";


export default function DataLayout() {
    return (
      <>
        <header className="header-bar">
          <NavLink to="/data" className="logo-link">
            <img src={reactLogo} className="framework" alt="React logo" />
          </NavLink>
          <nav className="nav-menu">
            <ul>
              <li>
                <NavLink to="/data/customer">Customer</NavLink>
              </li>
              <li>
                <NavLink to="/data/seller">Seller</NavLink>
              </li>
              <li>
                <NavLink to={{
                  pathname: '/data/products'
                }}>Products</NavLink>
              </li>
              <li>
                <NavLink to={{
                  pathname: '/data/products/search',
                  search: '?category=electronics&sort=price',
                  hash: '#top'
                }}>Products Search</NavLink>
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