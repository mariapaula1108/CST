import React from 'react';
import './Semester.css';
import  Coursebox from './Coursebox';



export default function Semester() {


    return (
        <div className="semester">
            <div className="title"> 
                <text>Freshman 1</text>
            </div>
            
            <Coursebox courseColor='#ff9897'/> 
            <Coursebox courseColor='#ff9897'/> 
            <Coursebox courseColor='#ff9897'/> 
            <Coursebox courseColor='#ff9897'/> 
            <Coursebox courseColor='#ff9897'/> 

        </div>
    );
}

