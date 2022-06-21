import React from 'react';
import './Column.css';
import  Semester from './Semester';




export default function Plan() {
 

    return (
        <div className="column" style={{borderLeft:'1px solid #cccccc'}}>
            <div className='head'> 
                <h3>Degree requirements</h3>
                <b>BME 2024 (133 Credits)</b> 
            </div>
            <Semester/>
            
        </div>
    );

}
