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
    
   
    useEffect(()=>{
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

        (courseRef !== '') ? 
        (<Planbox courseColor={courseColor} references={courseRef} setCourseRef={setCourseRef} />)
  
        :(
            
       
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
    const {delid,storeDel} = useContext(CourseContext);

    useEffect(()=>{
        if(delid === (props.degCourseId) && isSelected){ 

            setSelected(s => !s);  
            storeDel('');


        }
    },[delid,storeDel])
    
    function handleClick(selectedid: any, storeColor:any,storeRef:any) { 
        if (selectedid !== '' && isSelected===false) { 
            setSelected(val => !val);
            storeColor(props.courseColor); 
            storeRef(props.degCourseId);

            
           
        };

    };

    return (
        <CourseContext.Consumer>
        {({selectedid, storeColor,storeName,storeRef}) => (
  
        <div className="course" style={{backgroundColor: isSelected ? '#cccccc' : props.courseColor}} onClick={() => handleClick(selectedid, storeColor, storeRef)}>
        <h4>MA293</h4>
        </div>
        )}


       </CourseContext.Consumer>
    
    );
}


export function Planbox(props: planProps) { 
    const {storeDel} = useContext(CourseContext);


   
    
    function handleClick() { 
        storeDel(props.references); 
        props.setCourseRef('');
        
    }

    return (
        <div className="course" style={{backgroundColor: props.courseColor}} onClick={()=> handleClick()}>
        <h4>MA293 </h4>
        </div>
        
    ); 


}

