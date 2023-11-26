import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Button from "component_app/Button";
import { map, join } from "lodash";

const App = () => (
  <div className="container">
    <div>Name: main-app</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <div>{join(map(["1", "2"]), "-")}</div>
    <Button
      onClick={() => {
        console.log("Clicked!!");
      }}
    >
      Primary
    </Button>
    <Button type="warning">Warning</Button>
  </div>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
