import React, { Fragment } from "react";

import { StandardListItem } from "@ui5/webcomponents-react";

const MyProject = ({ project }) => {
   return (
      <Fragment>         
         <StandardListItem mode="None" headerText="List with StandardListItems" description={project.name} icon="employee" separators="All"></StandardListItem>
      </Fragment>
   );
};

export default MyProject;
