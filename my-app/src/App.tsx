import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Plan from './components/Plan';
import Degree from './components/Degree';
import {CourseContext} from './components/CourseContext'; 



function App() {
  // our context uses the state variables of app 
  const [selectedid, setId] = useState('');
  const [delid, setDel] = useState('');
  const [clearedid, setClearedId] = useState('');
  const [courseProps, setCourseProps] = useState({
    courseName: '',
    courseNumber: '',
    courseHubs: '',
    courseCredits: 0,
    courseColor:'',
 });
  

 

  function storeId (newid:string) { 
    setId(id => (newid)); 
    // console logs for debugging purposes
    console.log("ID", newid); 

  }
  

  function storeDel (del:string) { 
    setDel(d => (del)); 
    console.log("Deleted", del); 
  
  }

  function storeCleared (cleared:string) { 
    setClearedId(i => (cleared)); 
  
  }

  function storeCourseProps (coursename:string, coursenum:string, coursehubs:string, coursecredits:number , coursecolor:string) { 
    setCourseProps(prevState => ({courseName: coursename, courseNumber: coursenum, courseHubs:coursehubs, courseCredits:coursecredits, courseColor:coursecolor} ) ); 
    console.log(courseProps);
  }



  return (
    <div className="App">
      <Header/>
      <div className="App-main">
        {/* app main contains the main body of the page-- everything except the header */}
        <div className="headline"> 
          <h1> Program Planning</h1> <h3 style={{display: "inline"}}> for venika</h3> 
        </div> 
        {/* this provides an initial value for the variables and their associated functions for any children components to access*/}
        <CourseContext.Provider value = {{selectedid, storeId, delid,storeDel, clearedid, storeCleared, courseProps, storeCourseProps}} > 
      
        <Plan/>
        <Degree/>
        </CourseContext.Provider>

      </div>

   
    </div>
  );
}

export default App;
