import React, { useEffect, useContext, useState } from 'react';
import './Coursebox.css';
import {CourseContext} from "./CourseContext";
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
interface courseProps  {
    courseColor: string; 
    degCourseId?: string;
    courseName?:string; 
    courseNumber?:string;
    courseHubs?:string; 
    courseCredits?:number;


}


interface emptyprops { 
    courseid: string; 
}




export function EmptyCourse(props: emptyprops) { 

    const {selectedid, storeId, storeDel, clearedid, storeCleared, courseProps, storeCourseProps} = useContext(CourseContext); 
    const [courseValues, setValues] = useState({
        courseName: '',
        courseNumber: '',
        courseHubs: '',
        courseCredits: 0,
        courseColor:'',
     })

    const [isSelected, setSelected] = useState(false); 
   
    useEffect(()=>{
        
        if (clearedid === props.courseid[0]) { 

            setSelected(false); 
            setValues(prevState => ({courseNumber:'', courseName:'', courseCredits:0, courseHubs:'', courseColor:''})); 
            
            
        }   
    },[clearedid, props.courseid,setValues])
     

    function deleteCourse() { 
        /* on click (gotta change this to onclick of the trashcan icon) this stores the course it's referencing in the 
        global variable to be deleted. eg: if we want to delete 'MA293' from spring 2023, we store MA293's id in delid*/
        if (courseValues.courseColor !== '#cccccc') { 
        storeDel(props.courseid); }
        // now that we want to delete this course, this box is no longer referencing any course, so we set that to be blank
        setSelected(false); 
        setValues(prevState => ({courseNumber:'', courseName:'', courseCredits:0, courseHubs:'', courseColor:''})); 
    
    
    }

    useEffect(()=>{
        /* when the component updates, this checks to see if the selected temporary id is each emptycourse's id
        if it is, then it checks if a degree course on the right has been selected (if we clicked on something basically)
        by checking if we've received a background color
        if so then we change the state to reflect this information and clear it from the global context 
        since now it has been 'moved'! */
        if(selectedid === props.courseid){ 
            storeCleared('');
           
            if(courseProps.courseColor !=='') { 
                
           
                setValues(prev => courseProps)
                setSelected(true);
                storeId('');
                storeCourseProps('', '', '', 0, '');

            }

        }
    },[selectedid, props.courseid,  storeId, storeCleared, courseProps, storeCourseProps])

    const onFormChange = (e:any) => {
        const name = e.target.name;
        console.log(name);
        const value = e.target.value;
        setValues({ ...courseValues, [name]: value });
        console.log(courseValues);
    };
    
    const onFormSubmit = (e:any) => { 
        e.preventDefault();
        console.log(courseValues);
        setValues(courseValues => ({...courseValues, courseColor:'#cccccc'}));
        console.log(courseValues);
        storeId('');
        setSelected(true);
        
        
    }

    const clearFields = (e:any) => { 
        setValues(prevState => ({courseNumber:'', courseName:'', courseCredits:0, courseHubs:'', courseColor:''}));         
    }

    const popover = (
       
        <Popover id="popover-basic">
          <Popover.Header as="h3">Fill Course Details</Popover.Header>
          <Popover.Body>
          <Form onSubmit={onFormSubmit}>
            <Form.Group className="mb-3" controlId="formCourseNumber">
                <Form.Label>Course Number</Form.Label>
                <Form.Control name="courseNumber" onChange={onFormChange} type="text" placeholder="Eg: CAS PY 251" defaultValue=''/>
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCourseName">
                <Form.Label>Name</Form.Label>
                <Form.Control name = "courseName" onChange={onFormChange} type="text" placeholder="Eg: Calculus" defaultValue=''/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCredits">
                <Form.Label>Credits</Form.Label>
                <Form.Select aria-label="Credit selection" onChange={onFormChange} name="courseCredits" defaultValue=''>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHubs">
                <Form.Label>Hub Units</Form.Label>
                <Form.Control name= "courseHubs" onChange={onFormChange} type="text" defaultValue=''/>
            </Form.Group>
            <Button variant="primary" type="submit" size="sm">
                Save
            </Button>{' '}
            <Button type="reset" size="sm" style={{border: "1px solid #f44336"}} variant="outline-dark" onClick={() => document.body.click()} >
                Close
            </Button>
            </Form>
          </Popover.Body>
        </Popover>
        
      );

    

    return (

        /*if the courseRef state of emptycourse is referencing a degree course on the right it creates a 'planbox 
        which is just a degree course with extra functionality */

        (isSelected) ? 
        (
        <div className="course" id="bootstrap-override" style={{backgroundColor: courseValues.courseColor}} >
        <h4 id="bootstrap-override">{courseValues.courseNumber}</h4>
        <h5 id="bootstrap-override">{courseValues.courseName}</h5>
        <h6 id="bootstrap-override">{courseValues.courseHubs}</h6>
        <h3 id="bootstrap-override">{courseValues.courseCredits}</h3> 
        <div className='delete' onClick={()=> deleteCourse()}>&#128465;</div> 
        <div className='info'>&#8505; </div>
        </div>
        
        )
        : /* or else it just returns an empty course */ 
        (
            
        <OverlayTrigger placement="right" overlay= {popover} rootClose trigger="click" onEntered={clearFields}        >
        
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
    const {delid,storeDel,selectedid, clearedid, storeCourseProps} = useContext(CourseContext);

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
    
    function handleClick(selectedid: any, storeCourseprops:any) { 
        /* this handles part 2 of the selection process for courses: the part where you select a course on the right to
        be moved. this checks to see if a destination location on the left has been selected AND that the current 
        course isn't already selected, and if both conditions are true it stores the current course information in the global
        context variable and grays out the current course. */
        if (selectedid !== '' && references === '') { 
            setCourseRef(selectedid);
            
            storeCourseProps(props.courseName?props.courseName:'', props.courseNumber?props.courseNumber:'', props.courseHubs?props.courseHubs:'', props.courseCredits?props.courseCredits:0, props.courseColor);
 
        };

    };

    return (
        
  
        <div className="course" id={references !== '' ? "select" : ""} style={{backgroundColor: references !== '' ? '#eeeeee' : props.courseColor}} onClick={() => handleClick(selectedid, storeCourseProps)}>
        <h4 id="bootstrap-override">{props.courseNumber}</h4>
        <h5 id="bootstrap-override">{props.courseName}</h5>
        <h6 id="bootstrap-override">{props.courseHubs}</h6>
        <h3 id="bootstrap-override">{props.courseCredits}</h3> 
        </div>
     
    
    );
}



