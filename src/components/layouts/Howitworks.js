import React from "react";

import { Timeline, TimelineItem } from "@ui5/webcomponents-react";

const Howitworks = () => {
   return (
      <section>
         <h3 className="howitworks-text">How it works ?</h3>
         <Timeline>
            <TimelineItem
               icon="call"
               onNameClick={function noRefCheck() {}}
               subtitleText="Step 1"
               titleText="Tell us what your home needs"
            >
               From routine maintenance and repairs to dream home renovations,
               we can help with any project — big or small.
            </TimelineItem>
            <TimelineItem
               icon="calendar"
               onNameClick={function noRefCheck() {}}
               subtitleText="Step 2"
               titleText="We'll match you with personalized solutions"
            >
               See your price and book services in an instant. Or, request and
               compare quotes from highly rated pros near you.
            </TimelineItem>
            <TimelineItem
               icon="complete"
               onNameClick={function noRefCheck() {}}
               subtitleText="Step 3"
               titleText="Start to finish, we've got you covered"
            >
               When you book and pay with Handyman, you’re covered by our
               Happiness Guarantee. We’ll cover your projects up to full
               purchase price, plus limited damage protection.
            </TimelineItem>
         </Timeline>
      </section>
   );
};

export default Howitworks;
