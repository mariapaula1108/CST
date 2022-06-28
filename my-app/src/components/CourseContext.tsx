import React from 'react'; 
export const CourseContext = React.createContext({
    name: '', 
    storeName: (name: string) => {},
    color: '', 
    storeColor: (color: string) => {}, 
    selectedid: '', 
    storeId: (id: string) => {},
    refid: '', 
    storeRef: (refid:string) => {},
    delid: '',
    storeDel: (delid:string) => {},

  });
  