import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";

import "./index.css";
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Ionic Theme variables */
import "./variables.css";

setupIonicReact();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={App} />
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </React.StrictMode>
);
