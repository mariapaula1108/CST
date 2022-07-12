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
                ((props.semester === 'Fall') || (props.semester === 'Summer(BU)') || (props.semester === 'Spring')) && <form><label htmlFor='year'>{props.semester}</label> <input type="text" id="year" name="year" placeholder={"Enter year"}/> </form>
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
              <Coursebox courseColor = '#ff9897' degCourseId={props.semesterid + '1'} courseName='Calculus I' courseNumber='CAS MA 123' courseHubs='QR2; CRT' courseCredits={4}/>
              <Coursebox courseColor = '#FFCD5D' degCourseId={props.semesterid + '2'} courseName='Prncp Gen Chem' courseNumber='CAS CH 131' courseHubs='SI1, QR1' courseCredits={4}/>
              <Coursebox courseColor = '#FFDBB5' degCourseId={props.semesterid + '3'} courseName='Freshman Seminar' courseNumber='ENG EK 100' courseCredits={0}/>
              <Coursebox courseColor = '#FFDBB5' degCourseId={props.semesterid + '4'} courseName='Progrm for Engs' courseNumber='ENG EK 125' courseHubs='QR1; CRI' courseCredits={4}/>
              <Coursebox courseColor = '#e1efd8' degCourseId={props.semesterid + '5'} courseName='Writing Seminar' courseNumber='CAS WR 120' courseHubs='FYW' courseCredits={4}/>
    
            
        </div>
        ); 

    }
}

