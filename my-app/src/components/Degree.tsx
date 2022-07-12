import React from 'react';
import './Column.css';
import  Semester from './Semester';




export default function Degree() {
 

    return (
        <div className="column" style={{paddingLeft:'1.5%'}}>
            <div className='head'> 
                <h3>Degree requirements</h3>
                <b>BME 2024 (133 Credits)</b> 
            </div>
            <Semester semester={"Freshman 1"} semesterid={'1'} isPlan={false}/>
            <Semester semester={"Freshman 2"} semesterid={'2'}isPlan={false}/>
            
        </div>
    );

}
