import React from 'react';
import {Fab, Grid} from '@material-ui/core';
import { GetApp} from '@material-ui/icons';
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
    <div>
      <FileUpload 
        onChange={ props.onChange }
        fileName={ props.fileName }
        fileNameOnChange={ props.fileNameOnChange }
        location={ props.location } 
      />

      <div>
        {
          props.url ?
          <QRcode 
            id="myqr"
            value={ props.url } 
            size={320}
            includeMargin={true}
          /> :null
        }
      </div>
      <div>
        {
          props.url ? 
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