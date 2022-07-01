import React from 'react'; 
export const CourseContext = React.createContext({
    courseProps: {courseName:'', courseNumber: '', courseHubs:'', courseCredits:0, courseColor:''}, 
    storeCourseProps: (name:string, num: string, hubs: string, credits: number, color:string) => {},
    selectedid: '', 
    storeId: (id: string) => {},
    delid: '',
    storeDel: (delid:string) => {},
    clearedid: '',
    storeCleared: (clearedid:string) => {},


  });
  