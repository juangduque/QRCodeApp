import React, {useState} from "react";
import Tabs from "./Tabs";
import ScanArea from "./ScanArea.jsx";

import "../style/app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "hola mundox",
      url2: "ho",
      url3: "lets go",      
  };
  }
  render(){

    return (
      <div>
        <h1>You can make several QR code</h1>
        <Tabs>
          <div label="QR Code 1">
            <ScanArea url={ this.state.url }/>
          </div>
          <div label="QR Code 2">
            <ScanArea url={ this.state.url2 }/>          
          </div>
          <div label="QR Code 3">
            <ScanArea url={ this.state.url3 }/>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
