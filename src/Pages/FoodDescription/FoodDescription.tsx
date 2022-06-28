import React from "react";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import ProductDescription from "../../components/ProductDescription/ProductDescription";

const FoodDescription = ({ id }: { id: string }): JSX.Element => (
  <>
    <ProductDescription id={id} />
    <Contacts />
    <Footer />
  </>
);

export default FoodDescription;
