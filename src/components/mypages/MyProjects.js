import React, { useState, useEffect } from "react";

import { Label, List } from "@ui5/webcomponents-react";
import { BASE_URL, PROJECTS_PATH } from "../../utils/constants";

import MyProject from "./MyProject";
import {
   getProjectsFromClientStorage,
   addProjectsToClientStorage,
} from "../../utils/clientStorage";

const MyProjects = ({ screenSize }) => {
   const [networkStatus, setNetworkStatus] = useState(
      "Network connection is OK, showing latest results"
   );
   const [projects, setProjects] = useState([]);

   const getProjectsFromBackend = async () => {
      const requestUrl = `${BASE_URL}${PROJECTS_PATH}`;
      const response = await fetch(requestUrl);
      const data = await response.json();

      let modifiedProjects = data.map((project) => {
         return {
            key: project.id,
            value: project,
         };
      });

      await addProjectsToClientStorage(modifiedProjects);
      setProjects(modifiedProjects);
   };

   useEffect(() => {
      console.log("From MyProjects - useEffect is called");

      const getProjects = async () => {
         try {
            await getProjectsFromBackend();
            return "Network connection is OK, showing latest results";
         } catch (err) {
            let projects = await getProjectsFromClientStorage();
            setProjects(projects);
            return "No network connection, showing offline results";
         }
      };

      const asyncFetchPromise = async () => {
         let status = await getProjects();

         console.log("Setting network status: ", status);
         setNetworkStatus(status);
      };

      asyncFetchPromise();
   }, []);

   return (
      <section>
         <h1>My Projects</h1>
         <Label>{networkStatus}</Label>
         <List headerText="My Projects !!">
            {projects &&
               projects.map((project) => {
                  return (
                     <MyProject key={project.key} project={project.value} />
                  );
               })}
         </List>
      </section>
   );
};

export default MyProjects;
