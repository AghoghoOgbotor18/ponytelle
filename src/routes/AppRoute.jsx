import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import ProductDetails from '../pages/ProductDetails';
import NotFound from '../pages/NotFound';
import ScrollToTop from '../components/common/ScrollToTop';

const AppRoute = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoute
