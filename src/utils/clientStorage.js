import localforage from "localforage";
import { extendPrototype } from "localforage-setitems";

extendPrototype(localforage);

const projectsInstance = localforage.createInstance({
   name: "projects",
});

export const addProjectsToClientStorage = async (projects) => {
   console.log(
      "From clientStorage - addProjectsToClientStorage: ",
      JSON.stringify(projects)
   );
   await projectsInstance.setItems(projects);
};

export const getProjectsFromClientStorage = async () => {
   let projects = [];

   let promise = await new Promise((resolve, reject) => {
      projectsInstance
         .iterate(function (value, key) {
            projects.push({
               key,
               value,
            });
         })
         .then(function () {
            resolve(projects);
         })
         .catch(function (err) {
            reject([
               { key: -100, value: { name: "Unable to read data from cache..." } },
            ]);
         });
   });

   return promise;
};
