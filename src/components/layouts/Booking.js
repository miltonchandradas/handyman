import React from "react";

import { Button, Card, CardHeader, FlexBox } from "@ui5/webcomponents-react";

import lawn from "../../../src/resources/images/lawn.jpg";
import electrical from "../../../src/resources/images/electrical.jpg";
import plumbing from "../../../src/resources/images/plumbing.jpg";

const Booking = ({ screenSize }) => {
   return (
      <section>
         <h3 className="booking-text">Book now !!</h3>
         <FlexBox
            direction={screenSize > 480 ? "Row" : "Column"}
            justifyContent="Center"
         >
            <Card
               header={
                  <CardHeader
                     titleText="Lawn Mowing"
                     subtitleText="Rating: 4.3 (33.7k)"
                  />
               }
               style={{
                  width: "300px",
                  marginRight: "30px",
               }}
            >
               <div className="booking-container">
                  <img src={lawn} alt="Lawn Mowing" width="100%" />
                  <div className="booking-block">
                     <p>Time saver...</p>
                  </div>
               </div>
               <Button>From $59 / Book now !!</Button>
            </Card>

            <Card
               header={
                  <CardHeader
                     titleText="Electrical"
                     subtitleText="Rating: 4.9 (68.7k)"
                  />
               }
               style={{
                  width: "300px",
                  marginRight: "30px",
               }}
            >
               <div className="booking-container">
                  <img src={electrical} alt="Electrical" width="100%" />
                  <div className="booking-block">
                     <p>Best seller...</p>
                  </div>
               </div>
               <Button>From $129 / Book now !!</Button>
            </Card>

            <Card
               header={
                  <CardHeader
                     titleText="Plumbing"
                     subtitleText="Rating: 4.7 (46.7k)"
                  />
               }
               style={{
                  width: "300px",
                  marginRight: "30px",
               }}
            >
               <div className="booking-container">
                  <img src={plumbing} alt="Plumbing" width="100%" />
                  <div className="booking-block">
                     <p>On sale...</p>
                  </div>
               </div>
               <Button>From $89 / Book now !!</Button>
            </Card>
         </FlexBox>
      </section>
   );
};

export default Booking;
