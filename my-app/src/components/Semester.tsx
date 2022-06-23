import React, {useState}from 'react';
import './Semester.css';
import  {Coursebox, EmptyCourse} from './Coursebox';



interface semesterProps { 
    semester: string; 

}



export function DegreeSemester(props: semesterProps) { 
    return (
        <div className="semester" id={"Degree"}>
        <div className="title"> 
            {props.semester}
            
        </div>
        {/* render courseboxes based on type of semester passed in  */}
        {  Array.from({length: 5}, () => <Coursebox courseColor = '#ff9897' />) 

        }
    </div>
    ); 

}



export function Semester(props: semesterProps) {
    const [id, setId] = useState(props.semester); 

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
            {  
                Array.from({length: 6}, () => <EmptyCourse />)
            }

            <button type= 'button' className='clear'>Clear</button>
        </div>
    );
}

