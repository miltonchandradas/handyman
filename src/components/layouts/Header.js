import React, { Fragment } from "react";

import { Button, Input, FlexBox } from "@ui5/webcomponents-react";

const Header = ({ screenSize }) => {
   return (
      <header>
         <div className="header-div">
            {screenSize > 1200 ? (
               <h1>Handyman - For all your Home Improvement needs !!</h1>
            ) : (
               <h1>Handyman - Home Improvement services</h1>
            )}

            <FlexBox
               className="header-flex"
               alignItems="Start"
               direction={screenSize > 480 ? "Row" : "Column"}
            >
               <Input
                  accessibleName="searchHandyman"
                  placeholder="How can we help you today ?"
               ></Input>
               <Button design="Emphasized">Search</Button>
            </FlexBox>
            {screenSize > 600 ? (
               <FlexBox className="header-flex">
                  <Button className="header-button" design="Transparent">
                     Plumbing
                  </Button>
                  <Button className="header-button" design="Transparent">
                     Handymen
                  </Button>
                  <Button className="header-button" design="Transparent">
                     Lawn Care
                  </Button>
                  <Button className="header-button" design="Transparent">
                     Roofing
                  </Button>
                  <Button className="header-button" design="Transparent">
                     Electrical
                  </Button>
                  <Button className="header-button" design="Transparent">
                     Remodeling
                  </Button>
               </FlexBox>
            ) : (
               <Fragment></Fragment>
            )}
         </div>
      </header>
   );
};

export default Header;
