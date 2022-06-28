import React, { useState, useEffect, useContext } from 'react';
import './Semester.css';
import  {Coursebox, EmptyCourse} from './Coursebox';
import { CourseContext } from './CourseContext';

interface semesterProps { 
    semester: string; 
    semesterid?:string; 

}



export function DegreeSemester(props: semesterProps) { 
    // semesters on the right 
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



export function Semester(props: semesterProps) {
    // semesters on the left
    // idk these probably could be combined into one semester-- todo

    return (
        <div className="semester" id={props.semester}>
            <div className="title"> 
            { 
                props.semester === 'AP' && <text>AP/IB/GCE (Only one Hub unit counted per course – consult <a href="https://www.bu.edu/admissions/files/2018/06/Advanced-Credit-Guide.pdf">Advanced Credit Guide</a>)</text>
            }
            { 
                props.semester === 'Transfer' && <text>Transfer (No Hub Units)</text>
            }
            { 
                props.semester === ('Fall' || 'Summer' || 'Spring') && <form><label htmlFor='year'>{props.semester}</label> <input type="text" id="year" name="year" placeholder={"Enter year"}/> </form>
            }
                
                
            </div>
            {/* render courseboxes based on type of semester passed in  */}
              
                <EmptyCourse courseid={props.semesterid + '1'} />
                <EmptyCourse courseid={props.semesterid + '2'} />
                <EmptyCourse courseid={props.semesterid + '3'}  />
                <EmptyCourse courseid={props.semesterid + '4'} />
                <EmptyCourse courseid={props.semesterid + '5'} />
                <EmptyCourse courseid={props.semesterid + '6'} />


            

            <button type= 'button' className='clear'>Clear</button>
        </div>
    );
}

