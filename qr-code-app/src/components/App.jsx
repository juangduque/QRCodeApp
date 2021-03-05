import React, {Fragment, useState} from "react";
import Tabs from "./Tabs";
import ScanArea from "./ScanArea.jsx";


import "../style/css/app.css";
import Prueba from "./Prueba.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url1: "",
      url2: "",
      url3: "",
      fileName1: "Choose file",
      fileName2: "Choose file",
      fileName3: "Choose file",
      location1: "store1",
      location2: "store2",
      location3: "store3",
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleFileNameChange1 = this.handleFileNameChange1.bind(this);
    this.handleFileNameChange2 = this.handleFileNameChange2.bind(this);
    this.handleFileNameChange3 = this.handleFileNameChange3.bind(this);
  };

  handleChange1 = value => {
    this.setState({
      url1: value,
    })
  }

  handleChange2 = value => {
    this.setState({
      url2: value,
    })
  }

  handleChange3 = value => {
    this.setState({
      url3: value,
    })
  }

  handleFileNameChange1 = value => {
    this.setState({
      fileName1: value,
    })
  }

  handleFileNameChange2 = value => {
    this.setState({
      fileName2: value,
    })
  }

  handleFileNameChange3 = value => {
    this.setState({
      fileName3: value,
    })
  }

  render(){
    return (
      <Fragment>
        {/* <Prueba /> */}
        <header className="center-align headerSection">
          <h1>Generate your QR code</h1>
          <h2>You can generate multiple QR codes from the files you upload, the files can be images or PDF.</h2>
        </header>

        {/* <ScanArea 
          url={ this.state.url1 } 
          onChange={ this.handleChange1 }
          fileName={ this.state.fileName1 }
          fileNameOnChange={ this.handleFileNameChange1 }
          location={ this.state.location1 }
        /> */}
        <Tabs>
          <div label="QR Code 1">
            <ScanArea 
              url={ this.state.url1 } 
              onChange={ this.handleChange1 }
              fileName={ this.state.fileName1 }
              fileNameOnChange={ this.handleFileNameChange1 }
              location={ this.state.location1 }
            />
          </div>
          <div label="QR Code 2">
            <ScanArea 
              url={ this.state.url2 } 
              onChange={ this.handleChange2 }
              fileName={ this.state.fileName2 }
              fileNameOnChange={ this.handleFileNameChange2 }
              location={ this.state.location2 }  
            />
          </div>
          <div label="QR Code 3">
            <ScanArea 
              url={ this.state.url3 } 
              onChange={ this.handleChange3 }
              fileName={ this.state.fileName3 }
              fileNameOnChange={ this.handleFileNameChange3 }
              location={ this.state.location3 }
            />
          </div>
        </Tabs>
        
        <div className="cardContainer">
          <div className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <p className="cardText">You can update the file uploaded just by uploading other.</p>
              </div>              
            </div>
          </div>
        </div>

            
      </Fragment>
    );
  }
}

export default App;
