import React, { Fragment, useState, useEffect } from "react";

import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Home";

import "./App.css";

const App = () => {
   const [screenSize, setScreenSize] = useState(0);

   const updateDimensions = () => {
      setScreenSize(window.innerWidth);
   };

   useEffect(() => {
      updateDimensions();

      window.addEventListener("resize", updateDimensions);

      return () => window.removeEventListener("resize", updateDimensions);
   }, []);

   return (
      <Fragment>
         <Navbar></Navbar>
         <Home screenSize={screenSize}></Home>
      </Fragment>
   );
};

export default App;
