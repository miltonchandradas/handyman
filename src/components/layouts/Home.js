import React from "react";

import Header from "./Header";
import Booking from "./Booking";
import Howitworks from "./Howitworks";
import Footer from "./Footer";

const Home = ({ screenSize }) => {
   return (
      <div>
         <Header screenSize={screenSize}></Header>
         <Booking screenSize={screenSize}></Booking>
         <Howitworks></Howitworks>
         <Footer></Footer>
      </div>
   );
};

export default Home;
