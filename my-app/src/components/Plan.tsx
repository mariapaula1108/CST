import React, {useEffect, useRef, useState} from 'react';
import './Column.css';
import  {Semester} from './Semester';
import Hubs from './Hubs'; 
import SemesterMenu from './SemesterMenu';


export default function Plan() {
   
   


    return (
        
        <div className="column" style={{borderRight:'1px solid #cccccc'}}>

            <div className='head'> 
                <h3>Your plan</h3>
                Please view the Instructions to use CST. 
            </div>


            <Semester semester={"AP"} semesterid={'1'}/>
            <Semester semester={"Transfer"} semesterid={'2'}/>
            <Semester semester={"Fall"}semesterid={'3'} />
            
            
            <SemesterMenu/>
           

            <Hubs/>
            
        </div>
    );

}
