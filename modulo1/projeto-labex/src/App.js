import React from "react";
import { GlobalStyle } from "./constants/GlobalStyle"
import { Router } from "./routes/Router";

function App() {
  return (
    <div className="App.css">
      <GlobalStyle />
      <body>
        <Router/>
      </body>
    </div>
  );
}

export default App;
