import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Plan from './components/Plan';
import Degree from './components/Degree';
import {CourseContext} from './components/CourseContext'; 
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // our context uses the state variables of app 
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [selectedid, setId] = useState('');
  const [delid, setDel] = useState('');
  const [clearedid, setClearedId] = useState('');

  function storeName (newname:string) { 
    setName(name => (newname))

  }

  function storeColor (newcolor:string) { 
    setColor(color => (newcolor)); 
    console.log("Color", newcolor); 

  }
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
    console.log("Cleared planned course", cleared); 
    console.log("Clearedid: ", clearedid)
  
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
        <CourseContext.Provider value = {{name, storeName, color, storeColor, selectedid, storeId, delid,storeDel, clearedid, storeCleared}} > 
      
        <Plan/>
        <Degree/>
        </CourseContext.Provider>

      </div>

   
    </div>
  );
}

export default App;
