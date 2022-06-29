import React, { useState, useEffect, useContext } from 'react';
import './Semester.css';
import  {Coursebox, EmptyCourse} from './Coursebox';
import { CourseContext } from './CourseContext';

interface semesterProps { 
    semester: string; 
    semesterid:string; 
    isPlan: boolean;

}






export default function Semester(props: semesterProps) {
    const {storeCleared, storeId} = useContext(CourseContext);


    

     function clearCourses() { 
        storeCleared(props.semesterid); 
        storeId('');
        
     }

    
    if (props.isPlan) {
    return (
        <div className="semester" id={props.semester}>
            <div className="title"> 
            { 
                props.semester === 'AP' && <text>AP/IB/GCE (Only one Hub unit counted per course – consult <a id="bootstrap-override" href="https://www.bu.edu/admissions/files/2018/06/Advanced-Credit-Guide.pdf">Advanced Credit Guide</a>)</text>
            }
            { 
                props.semester === 'Transfer' && <text>Transfer (No Hub Units)</text>
            }
            { 
                ((props.semester === 'Fall') || (props.semester === 'Summer') || (props.semester === 'Spring')) && <form><label htmlFor='year'>{props.semester}</label> <input type="text" id="year" name="year" placeholder={"Enter year"}/> </form>
            }
                
                
            </div>
            {/* render courseboxes based on type of semester passed in  */}
              
                <EmptyCourse courseid={props.semesterid + '1'} />
                <EmptyCourse courseid={props.semesterid + '2'} />
                <EmptyCourse courseid={props.semesterid + '3'} />
                <EmptyCourse courseid={props.semesterid + '4'} />
                <EmptyCourse courseid={props.semesterid + '5'} />
                <EmptyCourse courseid={props.semesterid + '6'} />


            

            <button type= 'button' className='clear' onClick={() => clearCourses()}>Clear</button>
        </div>
    );
    }

    else {
        return (
            <div className="semester" id={"Degree"}>
            <div className="title"> 
                {props.semester}
                
            </div>
            {/* render courseboxes based on type of semester passed in  */}
              <Coursebox courseColor = '#ff9897' degCourseId={props.semesterid + '1'}/>
              <Coursebox courseColor = '#ffdbb5' degCourseId={props.semesterid + '2'}/>
              <Coursebox courseColor = '#ff9897' degCourseId={props.semesterid + '3'}/>
              <Coursebox courseColor = '#ffdbb5' degCourseId={props.semesterid + '4'}/>
              <Coursebox courseColor = '#ffdbb5' degCourseId={props.semesterid + '5'}/>
    
            
        </div>
        ); 

    }
}

