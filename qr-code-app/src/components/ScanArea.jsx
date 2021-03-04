import React, {useState} from 'react';
import {Fab, TextField, Grid} from '@material-ui/core';
import { GetApp} from '@material-ui/icons';
import QRcode from 'qrcode.react';

function ScanArea( props ) {
  const qr = props.url ; //replace 'qr' with 'props.url'.

  // const [qr, setQr] = useState( props.url ); //replace 'qr' with 'props.url'.
  // const handleChange = (event) => {
  //     setQr(event.target.value);
  // };
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
      <span>QR Generator</span>
      
      <div style={{marginTop:30}}>
        {/* <TextField onChange={ handleChange } style={{width:320}} */}
        <TextField onChange={ props.onChange } style={{width:320}}
        value={ qr } label="QR content" size="large" variant="outlined" color="primary" 
        />
      </div>

      <div>
        {
          qr ?
          <QRcode 
            id="myqr"
            value={ qr } 
            size={320}
            includeMargin={true}
          /> :
          <p>No QR code preview</p>
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