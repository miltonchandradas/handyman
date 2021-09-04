import { FlexBox } from "@ui5/webcomponents-react";
import React from "react";

const Footer = () => {
   return (
      <footer>
         <FlexBox justifyContent="Center">
            <p>
               Copyright &copy; 2021 by SAP UI5 Web Components. All rights
               reserved.
            </p>
         </FlexBox>
      </footer>
   );
};

export default Footer;
