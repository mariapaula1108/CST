import React, { useEffect, useContext, useState } from 'react';
import './Coursebox.css';
import {CourseContext} from "./CourseContext";
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

interface courseProps  {
    courseColor: string; 
    degCourseId?: string;


}

interface emptyprops { 
    courseid: string; 
}




export function EmptyCourse(props: emptyprops) { 

    const {color, selectedid, storeId, storeColor, storeDel, clearedid, storeCleared} = useContext(CourseContext); 

    const [courseColor, setCourseColor] = useState('');
    const [isSelected, setSelected] = useState(false); 

    
  


    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Fill Course Details</Popover.Header>
          <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
          </Popover.Body>
        </Popover>
      );
   
     useEffect(()=>{
        
        if (clearedid === props.courseid[0]) { 

            setSelected(false); 
            
        }   
    },[clearedid, props.courseid])
     

    function deleteCourse() { 
        /* on click (gotta change this to onclick of the trashcan icon) this stores the course it's referencing in the 
        global variable to be deleted. eg: if we want to delete 'MA293' from spring 2023, we store MA293's id in delid*/
        storeDel(props.courseid); 
        // now that we want to delete this course, this box is no longer referencing any course, so we set that to be blank
        setSelected(false); 
    
    }

    
    useEffect(()=>{
        /* when the component updates, this checks to see if the selected temporary id is each emptycourse's id
        if it is, then it checks if a degree course on the right has been selected (if we clicked on something basically)
        by checking if we've received a background color
        if so then we change the state to reflect this information and clear it from the global context 
        since now it has been 'moved'! */
        if(selectedid === props.courseid){ 
            storeCleared('');
           
            if(color !=='') { 
                
                setCourseColor(col => color);  
                setSelected(true);
                storeColor('');
                storeId('');

            }

        }
    },[selectedid, props.courseid, color,  storeColor,  storeId, storeCleared])

    

    return (

        /*if the courseRef state of emptycourse is referencing a degree course on the right it creates a 'planbox 
        which is just a degree course with extra functionality */

        (isSelected) ? 
        (
        <div className="course" id="bootstrap-override" style={{backgroundColor: courseColor}} onClick={()=> deleteCourse()}>
        <h4 id="bootstrap-override" >CAS MA 293 </h4>
        </div>
        
        )
        : /* or else it just returns an empty course */ 
        (
            
        <OverlayTrigger placement="right" overlay={popover} rootClose trigger="click">
        
        <div className="course" id = {selectedid === props.courseid ? "emptyselect" : "empty"} onClick = {() => storeId(props.courseid)} > 
        
          
        <div className="add">
            &#43;
            <p id = {selectedid === props.courseid ? "pselect" : "pempty"}>Add course</p>
        </div>

       </div> 
    
       </OverlayTrigger>  
        )
             
    );
    
    
} 




export function Coursebox(props: courseProps) {
    
    const [references, setCourseRef] = useState('');
    const {delid,storeDel,selectedid, storeColor,storeName, clearedid} = useContext(CourseContext);

    useEffect(()=>{
        // delid stores the id of the degree course that needs tobe deleted. so this checks to see if its id matches
        // and if it does then it ungrays it out and resets the delete context/global variable
        if(delid === (references) && delid !== ''){ 
            setCourseRef('');
            storeDel('');


        }
    },[delid,storeDel,references])

    useEffect(()=>{
    
        if(references !== '' && clearedid === references[0]){ 
            setCourseRef(''); 
 }
    },[clearedid,references, setCourseRef])
    
    function handleClick(selectedid: any, storeColor:any) { 
        /* this handles part 2 of the selection process for courses: the part where you select a course on the right to
        be moved. this checks to see if a destination location on the left has been selected AND that the current 
        course isn't already selected, and if both conditions are true it stores the current course information in the global
        context variable and grays out the current course. */
        if (selectedid !== '' && references === '') { 
            setCourseRef(selectedid);
            storeColor(props.courseColor); 
 
        };

    };

    return (
        
  
        <div className="course" style={{backgroundColor: references !== '' ? '#cccccc' : props.courseColor}} onClick={() => handleClick(selectedid, storeColor)}>
        <h4 id="bootstrap-override">CAS MA 293</h4>
        </div>
     
    
    );
}



