import React, { Fragment, useState } from 'react';
import Progress from './Progress.jsx';
import {app} from '../js/fireBaseConfig.js';

const FileUpload = ( props ) => {
  let uploadAdvice = "";
  const [file, setFile] = useState('');

  const onChange = e => {
    setFile(e.target.files[0]);
    props.fileNameOnChange( e.target.files[0].name );
  };

  const uploadFile = () => {
    const storageRef = app.storage().ref().child(`${ props.location }/${ file.name }`);
    storageRef.put(file).then(() => {
      storageRef.getDownloadURL().then( downLoadURL => {
        props.onChange( downLoadURL );
      }).catch( err => {
        alert( err.message );// PONER MODAL
      });
    }).catch( err => {
      alert( err.message ); // PONER MODAL
    })
    alert("uploaded file");
  }

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const regex = /.+(jpg|jpeg|png|pdf)/;
      let prevFile = "";  //Previous file / file already existing on storage
      let storageRef = app.storage().ref().child(`${ props.location }`);
      if( regex.test(file.name) ){
        
        storageRef.list().then( list => {          
          // prevFile = list.items[0]._delegate._location.path_
          
          if( list.items[0]._delegate === undefined){
            alert("There is nothing uploaded")
          }else{
            prevFile = list.items[0]._delegate._location.path_
            storageRef = app.storage().ref().child( prevFile );
            storageRef.delete().then( () => {
              console.log( "Deleted" );
              uploadFile();        
            }).catch( err => {
              alert( err.message );// PONER MODAL
            });
          }        
        }).catch( err => {
          uploadFile();          
        });
        

      }else if( file.name === undefined){
        alert("You haven't uploaded fila"); // PONER MODAL
      }else{
        alert("File format don't allowed, must be pdf, png, jpg or jpeg");// PONER MODAL
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            { props.fileName }
          </label>
        </div>

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
    </Fragment>
  );
};

export default FileUpload;