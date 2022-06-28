import React, { useEffect, useContext, useState } from 'react';
import './Coursebox.css';
//import Popup from 'reactjs-popup';
//import {CourseContext} from '/Users/me../Desktop/cst/my-app/src/App';
import {CourseContext} from "./CourseContext";

interface courseProps  {
    courseColor: string; 
    degCourseId?: string;


}
interface planProps  {
    courseColor: string; 
    references: string;
    setCourseRef: any;
   

}
interface emptyprops { 
    courseid: string; 
  


 
}



export function EmptyCourse(props: emptyprops) { 

    const {color, selectedid, storeId, storeColor,refid, storeRef} = useContext(CourseContext); 

    const [courseColor, setCourseColor] = useState('');
    const [courseRef, setCourseRef] = useState('');
    // basically, the CURRENT color/id/etc that's being moved around is what's stored in context-- this is temporary
    // but what is permanent (eg: fixing the color of the course on the plan) is in EmptyCourse's state

    
   
    useEffect(()=>{
        /* when the component updates, this checks to see if the selected temporary id is each emptycourse's id
        if it is, then it checks if a degree course on the right has been moved into context (if we clicked on something basically)
        we also check if we've received a background color
        if so then we change the state to reflect this information and clear it from the global context 
        since now it has been 'moved'! */
        if(selectedid === props.courseid){ 
           
            if(refid !== '' && color !=='') { 
                setCourseColor(col => color);  
                setCourseRef(r => refid);
                storeColor('');
                storeRef('');
                storeId('');

            }
  
          

        }
    },[selectedid, props.courseid, color, refid, storeColor, storeRef, storeId])

    
    

    return (

        /*if the courseRef state of emptycourse is referencing a degree course on the right it creates a 'planbox 
        which is just a degree course with extra functionality */

        (courseRef !== '') ? 
        (<Planbox courseColor={courseColor} references={courseRef} setCourseRef={setCourseRef} />)
  
        : /* or else it just returns an empty course */
        (
        
            
       
        <div className="course" id = {selectedid === props.courseid ? "emptyselect" : "empty"} onClick = {() => storeId(props.courseid)}> 
        
            
        <div className="add">
            &#43;
            <p id = {selectedid === props.courseid ? "pselect" : "pempty"}>Add course</p>
        </div>

       </div> 
        )
             
    );
    
    
} 




export function Coursebox(props: courseProps) {
    
    const [isSelected, setSelected] = useState(false); 
    const {delid,storeDel,selectedid, storeColor,storeName,storeRef} = useContext(CourseContext);

    useEffect(()=>{
        // delid stores the id of the degree course that needs tobe deleted. so this checks to see if its id matches
        // and if it does then it ungrays it out and resets the delete context/global variable
        if(delid === (props.degCourseId) && isSelected){ 

            setSelected(s => !s);  
            storeDel('');


        }
    },[delid,storeDel])
    
    function handleClick(selectedid: any, storeColor:any,storeRef:any) { 
        /* this handles part 2 of the selection process for courses: the part where you select a course on the right to
        be moved. this checks to see if a destination location on the left has been selected AND that the current 
        course isn't already selected, and if both conditions are true it stores the current course information in the global
        context variable and grays out the current course. */
        if (selectedid !== '' && isSelected===false) { 
            setSelected(val => !val);
            storeColor(props.courseColor); 
            storeRef(props.degCourseId);

            
           
        };

    };

    return (
        
  
        <div className="course" style={{backgroundColor: isSelected ? '#cccccc' : props.courseColor}} onClick={() => handleClick(selectedid, storeColor, storeRef)}>
        <h4>MA293</h4>
        </div>
     
    
    );
}


export function Planbox(props: planProps) { 
    const {storeDel} = useContext(CourseContext);

   
    
    function handleClick() { 
        /* on click (gotta change this to onclick of the trashcan icon) this stores the course it's referencing in the 
        global variable to be deleted. eg: if we want to delete 'MA293' from spring 2023, we store MA293's id in delid*/
        storeDel(props.references); 
        // now that we want to delete this course, this box is no longer referencing any course, so we set that to be blank
        props.setCourseRef('');
        
    }

    return (
        <div className="course" style={{backgroundColor: props.courseColor}} onClick={()=> handleClick()}>
        <h4>MA293 </h4>
        </div>
        
    ); 


}

