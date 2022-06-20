import React from 'react';
import './Header.css';



export default function Header() {

  return (
    <div className="header">
      <img src="http://www.bu.edu/dbin/eng/common/images/bu_engineering.gif" alt="BU Engineering"></img>  
      <a href="https://weblogin.bu.edu/logout/"><button type="button"> Logout</button></a>
    </div>  
  );
}
