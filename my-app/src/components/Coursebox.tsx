import React from 'react';
import './Coursebox.css';

interface courseProps  {
    courseColor: string; 
}


export default function Coursebox(props: courseProps) {

    return (
     <div className="course" style={{backgroundColor: props.courseColor}}>
        <h3>MA293</h3>
    </div>
    );
}