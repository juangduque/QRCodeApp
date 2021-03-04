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
      url3: "",      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);


  };

  handleChange = event => {
    this.setState({
      url: event.target.value,
    })
  }

  handleChange2 = event => {
    this.setState({
      url2: event.target.value,
    })
  }

  handleChange3 = event => {
    this.setState({
      url3: event.target.value,
    })
  }

  render(){
    return (
      <div>
        <h1>You can make several QR code</h1>
        <Tabs>
          <div label="QR Code 1">
            <ScanArea url={ this.state.url } onChange={ this.handleChange }/>
          </div>
          <div label="QR Code 2">
            <ScanArea url={ this.state.url2 } onChange={ this.handleChange2 }/>
          </div>
          <div label="QR Code 3">
            <ScanArea url={ this.state.url3 } onChange={ this.handleChange3 }/>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
