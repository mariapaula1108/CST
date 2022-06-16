import React from 'react';
import './App.css';
import CourseBox from './components/CourseBox';


function App() {
  return (
    <div >
      <CourseBox 
      courseName='Calculus I'
      courseColor='green'
      />
    </div>
  );
}

export default App;
