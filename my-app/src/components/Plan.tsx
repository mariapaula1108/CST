import React from 'react';
import './Column.css';
import  Semester from './Semester';
import Hubs from './Hubs'; 




export default function Plan() {
 

    return (
        <div className="column">
            <div className='head'> 
                <h3>Your plan</h3>
                Please view the Instructions to use CST. 
            </div>
            <Semester/>
            <Hubs/>
            
        </div>
    );

}
