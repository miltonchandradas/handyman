import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Home";
import MyProjects from "./components/mypages/MyProjects";
import MyReviews from "./components/mypages/MyReviews";
import MyAccount from "./components/mypages/MyAccount";
import NotFound from "./components/pages/NotFound";

import "@ui5/webcomponents-icons/dist/AllIcons";

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
         <Router>
            <Navbar></Navbar>
            <Switch>
               <Route
                  exact
                  path="/"
                  render={(props) => (
                     <Home {...props} screenSize={screenSize} />
                  )}
               />
               <Route
                  exact
                  path="/myprojects"
                  render={(props) => (
                     <MyProjects {...props} screenSize={screenSize} />
                  )}
               />
               <Route
                  exact
                  path="/myreviews"
                  render={(props) => (
                     <MyReviews {...props} screenSize={screenSize} />
                  )}
               />
               <Route
                  exact
                  path="/myaccount"
                  render={(props) => (
                     <MyAccount {...props} screenSize={screenSize} />
                  )}
               />
               <Route component={NotFound} />
            </Switch>
         </Router>
      </Fragment>
   );
};

export default App;
