const serviceworkerDEV = async () => {
   let swUrl = `${process.env.PUBLIC_URL}/serviceworker.js`;
   console.log("From serviceWorkerDEV - swUrl: ", swUrl);

   if (!("serviceWorker" in navigator)) {
      return;
   }

   try {
      const swRegistration = await navigator.serviceWorker.register(swUrl, {
         scope: "",
      });
      let serviceWorker;

      if (swRegistration.installing) {
         console.log(
            "From serviceWorkerDEV - Resolved on installing: ",
            swRegistration
         );
         serviceWorker = swRegistration.installing;
      } else if (swRegistration.waiting) {
         console.log(
            "From serviceWorkerDEV - Resolved on installed/waiting: ",
            swRegistration
         );
         serviceWorker = swRegistration.waiting;
      } else if (swRegistration.active) {
         console.log(
            "From serviceWorkerDEV - Resolved on activated: ",
            swRegistration
         );
         serviceWorker = swRegistration.active;
      }

      serviceWorker.addEventListener("statechange", (e) => {
         console.log(e.target.state);
      });

      swRegistration.addEventListener("updatefound", () => {
         swRegistration.installing.addEventListener("statechange", (e) => {
            console.log(
               "From serviceWorkerDEV - New service worker state: ",
               e.target.state
            );
         });
         console.log(
            "From serviceWorkerDEV - New service worker found!",
            swRegistration
         );
      });

      //An extra event that is fired when the service worker controlling this page changes
      //through the self.skipWaiting()
      navigator.serviceWorker.addEventListener("controllerchange", () => {
         console.log("From serviceWorkerDEV - Controller Changed!");
      });
   } catch (err) {
      console.log("From serviceWorkerDEV - Error registering: ", err);
      return;
   }
};

export default serviceworkerDEV;
