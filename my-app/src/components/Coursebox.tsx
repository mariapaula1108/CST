import React from 'react';
import './Coursebox.css';

interface courseProps  {
    courseColor: string; 
}

export function EmptyCourse() { 

    return (
        <div className="course" id = "empty"> 
            <div className="add">
                &#43;
                <p>Add course</p>
            </div>
           
    

        </div>


    );
    

}


export function Coursebox(props: courseProps) {

    return (
     <div className="course" style={{backgroundColor: props.courseColor}}>
        <h4>MA293</h4>
    </div>
    );
}

