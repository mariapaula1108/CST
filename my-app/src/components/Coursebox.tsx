import React from 'react';
import './Coursebox.css';

interface courseProps  {
    courseColor: string; 
}


export default function Coursebox(props: courseProps) {

    return (
     <div className="course" style={{backgroundColor: props.courseColor}}>
        <h4>MA293</h4>
    </div>
    );
}