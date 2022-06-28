import React from 'react';
import './Column.css';
import  {DegreeSemester} from './Semester';




export default function Degree() {
 

    return (
        <div className="column" style={{paddingLeft:'1.5%'}}>
            <div className='head'> 
                <h3>Degree requirements</h3>
                <b>BME 2024 (133 Credits)</b> 
            </div>
            <DegreeSemester semester={"Freshman 1"} semesterid={'1'}/>
            <DegreeSemester semester={"Freshman 2"} semesterid={'2'}/>
            
        </div>
    );

}
