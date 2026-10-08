import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes} from 'react-router'
import Home from './Home.tsx'
import About from './About.tsx'
import Customer from './data/Customer.tsx'
import Seller from './data/Seller.tsx'
import Products from './data/Products.tsx'
import Data from './data/Data.tsx'
import DataLayout from './data/DataLayout.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/app" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/data" element={<DataLayout />}>
        <Route index element={<Data />}></Route>
        <Route path="customer" element={<Customer />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="seller" element={<Seller />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
);
