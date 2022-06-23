import React, {useEffect, useRef, useState} from 'react';
import './Column.css';
import  {Semester} from './Semester';
import Hubs from './Hubs'; 
//import Select from 'react-select' 



export default function Plan() {
   
   


    return (
        
        <div className="column" style={{borderRight:'1px solid #cccccc'}}>

            <div className='head'> 
                <h3>Your plan</h3>
                Please view the Instructions to use CST. 
            </div>


            <Semester semester={"AP"}/>
            <Semester semester={"Transfer"}/>
            <Semester semester={"Fall"}/>
            

           

            <Hubs/>
            
        </div>
    );

}
