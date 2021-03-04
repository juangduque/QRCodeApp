import React, {useState} from 'react';
import {Fab, TextField, Grid} from '@material-ui/core';
import { GetApp} from '@material-ui/icons';
import QRcode from 'qrcode.react';
import FileUpload from './FileUpload.jsx';

function ScanArea( props ) {
  const qr = props.url ; 
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
    <div>
      
      {/* <div style={{marginTop:30}}>
        <TextField onChange={ props.onChange } style={{width:320}}
        value={ qr } label="QR content" size="large" variant="outlined" color="primary" 
        />
      </div> */}
      <FileUpload />

      <div>
        {
          qr ?
          <QRcode 
            id="myqr"
            value={ qr } 
            size={320}
            includeMargin={true}
          /> :null
        }
      </div>
      <div>
        {
          qr ? 
          <Grid container>              
              <Grid item xs={3}>
              <Fab onClick={downloadQR} style={{marginLeft:10}} color="primary">
                <GetApp/>
              </Fab>
              </Grid>
          </Grid> :
          ''
        }
      </div>
    </div>
  );
}

export default ScanArea;