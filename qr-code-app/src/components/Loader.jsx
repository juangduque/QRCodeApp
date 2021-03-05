import React from 'react';

import '../styles/css/pages/pageLoading.css';

function Loader() {
  return (
    <div className="loader ">
      <div className="lds-grid">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loader;