import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import OrderDetails from "../../components/OrderDetails/OrderDetails";

const Order = (): JSX.Element => (
  <>
    <Header />
    <OrderDetails />
    <Footer />
  </>
);

export default Order;
