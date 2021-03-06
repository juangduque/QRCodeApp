import React, { useState, useEffect } from 'react';
import QRcode from 'qrcode.react';
import FileUpload from './FileUpload.jsx';
import Loader from "./Loader.jsx";

class ScanArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  };

  setLoadingTrue = () => {
    this.setState({
      loading: true
    })
  }

  setLoadingFalse = () => {
    this.setState({
      loading: false
    })
  }

  downloadQR = () => {
      const canvas = document.getElementById("myqr");
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "myqr.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
  };

  render(){
    return (
      <div className="scanAreaContainer">
        {/* Upload file section */}
        <FileUpload 
          onChange={ this.props.onChange }
          fileName={ this.props.fileName }
          fileNameOnChange={ this.props.fileNameOnChange }
          location={ this.props.location } 
          handleUploadTrue={ this.setLoadingTrue }
          handleUploadFalse={ this.setLoadingFalse }
          loading={ this.state.loading }
        />
        
        {/* QR Section */}
        <div className="QRVisualization">
          {/* Display QR Section */}
          <div >
          {
            this.props.url ?
            <div>
              <p className="QRLabel">QR code generated</p>
              <div className="displayQRCodeContainer">
               { this.state.loading ?
                <Loader />  
                :
                <QRcode 
                  id="myqr"
                  value={ this.props.url } 
                  size={300}
                  includeMargin={true}
                /> 
               }                
              </div>
            </div>
            : null
          } 
          </div>
  
          {/* Download QR code section */}
          <div>
            {
              this.props.url ? 
              <div className="downloadBtnContainer">
                <button onClick={ this.downloadQR } className="btn">Download QR code</button>
              </div>
              : null
            }
          </div>
        </div>      
      </div>
    );
  }
}

export default ScanArea;