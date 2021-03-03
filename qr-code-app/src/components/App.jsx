import React from "react";
import Tabs from "./Tabs";
import "../style/app.css";

function App() {
  return (
    <div>
      <h1>You can make several qr code</h1>
      <Tabs>
        <div label="QR Code 1">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="QR Code 2">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="QR Code 3">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
    </div>
  );
}

export default App;
