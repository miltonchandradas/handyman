import React, { useRef } from "react";

import {
   ShellBar,
   StandardListItem,
   Avatar,
   Popover,
   ProductSwitch,
   ProductSwitchItem,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons";

import logo from "../../resources/images/logo.png";

const Navbar = (props) => {
   const popoverRef = useRef(null);

   const productSwitchClickHandler = (e) => {
      console.log("Product Switch was clicked...");
      popoverRef.current.showAt(e.detail.targetRef);
   };

   const projectsClickHandler = (e) => {
      console.log("Projects Product Switch Item was clicked...");
   };

   const reviewsClickHandler = (e) => {
      console.log("Reviews Product Switch Item was clicked...");
   };

   const settingsClickHandler = (e) => {
      console.log("Settings Product Switch Item was clicked...");
   };

   return (
      <div>
         <ShellBar
            className=""
            logo={<img src={logo} alt="" />}
            menuItems={
               <>
                  <StandardListItem data-key="1">Menu Item 1</StandardListItem>
                  <StandardListItem data-key="2">Menu Item 2</StandardListItem>
                  <StandardListItem data-key="3">Menu Item 3</StandardListItem>
               </>
            }
            notificationsCount="10"
            primaryTitle="Handyman Application"
            profile={
               <Avatar
                  colorScheme="Accent2"
                  icon="employee"
                  size="S"
                  shape="Square"
               />
            }
            secondaryTitle="For all your Home Improvement needs !!"
            showNotifications
            showProductSwitch
            slot=""
            style={{}}
            tooltip=""
            onProductSwitchClick={productSwitchClickHandler}
         ></ShellBar>
         <Popover placementType="Bottom" ref={popoverRef}>
            <ProductSwitch>
               <ProductSwitchItem
                  icon="add-equipment"
                  onClick={projectsClickHandler}
                  subtitleText="Home Improvement"
                  titleText="Projects"
               />
               <ProductSwitchItem
                  icon="add-document"
                  onClick={reviewsClickHandler}
                  subtitleText="Vendor Reviews"
                  titleText="Reviews"
               />
               <ProductSwitchItem
                  icon="settings"
                  onClick={settingsClickHandler}
                  subtitleText="Personal Information"
                  titleText="Settings"
               />
            </ProductSwitch>
         </Popover>
      </div>
   );
};

export default Navbar;
