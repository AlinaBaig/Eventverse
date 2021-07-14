import React from 'react';
import spinner from '../assets/Loader.gif';
import "../css/Loader.css"


export default () => {
  return (
    <div className="Loader">
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: '200px', margin: ' 40px auto', display: 'block' }}
      />
    </div>
  );
};
