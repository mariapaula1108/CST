import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Plan from './components/Plan';
import Degree from './components/Degree';
import {CourseContext} from './components/CourseContext'; 



function App() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [selectedid, setId] = useState('');
  const [refid, setRef] = useState('');
  const [delid, setDel] = useState('');

  function storeName (newname:string) { 
    setName(name => (newname))

  }

  function storeColor (newcolor:string) { 
    setColor(color => (newcolor)); 
    console.log("Color", newcolor); 

  }
  function storeId (newid:string) { 
    setId(id => (newid)); 
    console.log("ID", newid); 

  }

  function storeRef (ref:string) { 
    setRef(r => (ref)); 
    console.log("Referenced", ref); 

  }

  function storeDel (del:string) { 
    setDel(d => (del)); 
    console.log("Deleted", del); 

  }





  return (
    <div className="App">
      <Header/>
      <div className="App-main">
        {/* app main contains the main body of the page-- everything except the header */}
        <div className="headline"> 
          <h1> Program Planning</h1> <h3 style={{display: "inline"}}> for venika</h3> 
        </div> 
        <CourseContext.Provider value = {{name, storeName, color, storeColor, selectedid, storeId, refid, storeRef, delid,storeDel}} > 
      
        <Plan/>
        <Degree/>
        </CourseContext.Provider>

      </div>

   
    </div>
  );
}

export default App;
