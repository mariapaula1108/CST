import React from 'react'; 
export const CourseContext = React.createContext({
    name: '', 
    storeName: (name: string) => {},
    color: '', 
    storeColor: (color: string) => {}, 
    selectedid: '', 
    storeId: (id: string) => {},
    delid: '',
    storeDel: (delid:string) => {},
    clearedid: '',
    storeCleared: (clearedid:string) => {},


  });
  