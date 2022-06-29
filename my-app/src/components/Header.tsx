import React from 'react';
import './Header.css';
import Image from 'react-bootstrap/Image';


export default function Header() {

  return (
    <div className="header">
      
    
      <img id="bootstrap-overrides" src="http://www.bu.edu/dbin/eng/common/images/bu_engineering.gif" alt="BU Engineering"></img>  
    
      <a href="https://weblogin.bu.edu/logout/"><button type="button" className='logout'> Logout</button></a>
    </div>  
  );
}
