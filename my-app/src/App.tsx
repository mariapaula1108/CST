import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Plan from './components/Plan';
import Degree from './components/Degree'; 
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-main">
        {/* app main contains the main body of the page-- everything except the header */}
        <div className="headline"> 
          <h1> Program Planning</h1> <h3 style={{display: "inline"}}> for venika</h3> 
        </div> 
      
        <Plan/>
        <Degree/>

      </div>

   
    </div>
  );
}

export default App;
