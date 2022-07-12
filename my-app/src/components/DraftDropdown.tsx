import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './DraftDropdown.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import SaveButton from './SaveButton'


function DraftDropdown() {
    return (
        <div className="dropdown">
            <Button className="btn" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select Draft
            </Button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <Button className="dropdown-item" type="button">Draft Name</Button>
                <Button className="dropdown-item" type="button">Draft Name</Button>
                <Button className="dropdown-item" type="button">Draft Name</Button>
                <div className="dropdown-divider"></div>
                <SaveButton/>
             </div>   
        </div>
    )

}


export default DraftDropdown