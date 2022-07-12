import React from 'react';
import './Header.css';
import SaveButton from './SaveButton'
import DraftDropdown from './DraftDropdown';

export default function Header() {

  return (
    <div className="header">
      <img id="bootstrap-overrides" src="http://www.bu.edu/dbin/eng/common/images/bu_engineering.gif" alt="BU Engineering"></img>  
       <div className="Draft">
      <SaveButton/>
      </div>
      <div className="SaveDraft">
      <DraftDropdown/>
      </div>
      <a href="https://weblogin.bu.edu/logout/"><button type="button" className='logout'> Logout</button></a>
      

    </div>  

  );
}
