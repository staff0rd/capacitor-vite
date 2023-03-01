import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { IonButton, IonContent, IonPage } from "@ionic/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <IonPage>
      <IonContent>
        <div className="App">
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React + Ionic</h1>
          <div className="card">
            <IonButton onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </IonButton>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default App;
