import React from 'react';
import ReactDOM from 'react-dom';

import '../style/css/modal.css';


const Modal = ( props ) => {
  if (! props.onOpen ) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={ props.onClose } className="Modal__close-button">
          X
        </button>

        {/* ----- Begin of content */}
        { props.children}
        {/* ---End of content */}

      </div>
    </div>,
    document.getElementById( 'modal' )
  );
}

export default Modal;