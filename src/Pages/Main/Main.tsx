import React from "react";
import Promo from "../../components/Promo/Promo";
import FoodCards from "../../components/FoodCards/FoodCards";
import About from "../../components/About/About";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";

const Main = (): JSX.Element => (
  <>
    <Promo />
    <FoodCards />
    <About />
    <Contacts />
    <Footer />
  </>
);

export default Main;
