import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import NotFound from '../pages/NotFound';
import ScrollToTop from '../components/common/ScrollToTop';
import Wishlist from '../pages/Wishlist';
const OrderSuccess =  React.lazy(() => import("../pages/OrderSuccess"))
const Checkout = React.lazy(() => import("../pages/Checkout"))

const AppRoute = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<p>loading..</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="product/:id" element={<ProductDetails />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="order-success" element={<OrderSuccess />} />
              <Route path="wishlist" element={<Wishlist />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default AppRoute
