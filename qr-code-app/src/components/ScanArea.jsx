import React, { Fragment } from 'react';
import QRcode from 'qrcode.react';
import FileUpload from './FileUpload.jsx';

function ScanArea( props ) {
  const downloadQR = () => {
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

  return (
    <div className="scanAreaContainer">
      {/* Upload file section */}
      <FileUpload 
        onChange={ props.onChange }
        fileName={ props.fileName }
        fileNameOnChange={ props.fileNameOnChange }
        location={ props.location } 
      />
      
      {/* QR Section */}
      <div className="QRVisualization">
        {/* Display QR Section */}
        <div >
          {
            props.url ?
            <div>
              <p className="QRLabel">QR code generated</p>
              <div className="displayQRCodeContainer">
                <QRcode 
                  id="myqr"
                  value={ props.url } 
                  size={300}
                  includeMargin={true}
                /> 
              </div>
            </div>
            : null
          }
        </div>

        {/* Download QR code section */}
        <div>
          {
            props.url ? 
            <div className="downloadBtnContainer">
              <button onClick={downloadQR} className="btn">Download QR code</button>
            </div>
            : null
          }
        </div>
      </div>      
    </div>
  );
}

export default ScanArea;