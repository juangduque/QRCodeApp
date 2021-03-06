import React, { Fragment, useState, useEffect } from 'react';
import {app} from '../js/fireBaseConfig.js';
import Modal from './Modal.jsx';

import uploadIcon from '../assets/img/uploadIcon.png';
import errorIcon from '../assets/img/errorIcon.png';


const FileUpload = ( props ) => {
  const regex = /.+(jpg|jpeg|png|pdf)/;
  const [file, setFile] = useState('');
  const [modalIsOpen, setModal] = useState(false);
  const buttonHandler = () => {
    setModal(current => !current)
  }

  useEffect( () => {
  }, [modalIsOpen]);


  const onChange = e => {
    setFile(e.target.files[0]);
    props.fileNameOnChange( e.target.files[0].name );
  };

  const uploadFile = () => {
    const storageRef = app.storage().ref().child(`${ props.location }/${ file.name }`);
    storageRef.put(file).then(() => {
      storageRef.getDownloadURL().then( downLoadURL => {
        props.onChange( downLoadURL );
        props.handleUploadFalse();        
      }).catch( err => {
        alert( err.message );
      });
    }).catch( err => {
      alert( err.message ); 
    })
    console.log("File uploaded sucessfully");
  }

  const onSubmit = async e => {
    props.handleUploadTrue();
    props.onChange( "Generating URL" );

    e.preventDefault();
    try {
      // regex = /.+(jpg|jpeg|png|pdf)/;
      let prevFile = "";  //Previous file / file already existing on storage
      let storageRef = app.storage().ref().child(`${ props.location }`);
      if( regex.test(file.name) ){

        storageRef.list().then( list => {      
          
          if( list.items[0]._delegate === undefined){
            console.log("There is nothing uploaded in the storage yet")
          }else{
            prevFile = list.items[0]._delegate._location.path_
            storageRef = app.storage().ref().child( prevFile );
            storageRef.delete().then( () => {
              console.log( "Previous file Deleted" );
              uploadFile();        
            }).catch( err => {
              console.error( err.message );// PONER MODAL
            });
          }        
        }).catch( err => {
          uploadFile();          
        });       
      }else if( file.name === undefined){
        console.error("You haven't selected a file"); 
      }else{
        console.error("File format don't allowed, must be pdf, png, jpg or jpeg");// PONER MODAL
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Fragment>
      {/* File input */}
      <form onSubmit={onSubmit}>
        <div className='custom-file fileUploadArea'>
          <input
            className='custom-file-input truncate fileInput'
            type='file'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label truncate fileLabel' htmlFor='customFile'>
            { props.fileName }
          </label>
        </div>

        {/* Upload button */}
        <input
          onClick={ buttonHandler } 
          type='submit'
          value='Upload'
          className='btn uploadButton'
        />
        <Modal onOpen={ modalIsOpen } onClose={ buttonHandler }>
          {
          props.fileName !== "Choose file" ? 
            regex.test( props.fileName ) ? 
            <div className="modalContent">
                <img src={ uploadIcon } alt="Upload sucessfully icon"/>
                <h4 className="center-align">Your file has been uploaded, now the QR code is being generated ...</h4>
                <button onClick={ buttonHandler } className="btn green">
                  OK
                </button>
              </div>
            :
            <div className="modalContent">
              <img src={ errorIcon } alt="Error icon"/>
              <h4 className="center-align">The file format is not supported. Only pdf, png, jpg and jpeg files are supported.</h4>
              <button onClick={ buttonHandler } className="btn red">
                OK
              </button>
            </div>
            
          :
            <div className="modalContent">
              <img src={ errorIcon } alt="Error icon"/>
              <h4 className="center-align">You haven't selected a file</h4>
              <button onClick={ buttonHandler } className="btn red">
                OK
              </button>
            </div>
          }
        </Modal>

      </form>
    </Fragment>
  );
};

export default FileUpload;