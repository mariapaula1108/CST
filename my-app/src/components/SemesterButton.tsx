import React, { useEffect, useState } from 'react';
import './SemesterButton.css'
 
type DropDownProps = {
 semesters: string[];
 showDropDown: boolean;
 toggleDropDown: Function;
 semesterSelection: Function;
};
 
const DropDown: React.FC<DropDownProps> = ({
 semesters,
 semesterSelection,
}: DropDownProps): JSX.Element => {
 const [showDropDown, setShowDropDown] = useState<boolean>(false);
 
 /**
  * Handle passing the city name
  * back to the parent component
  *
  * @param semester  The selected city
  */
 const onClickHandler = (semester: string): void => {
   semesterSelection(semester);
 };
 
 useEffect(() => {
   setShowDropDown(showDropDown);
 }, [showDropDown]);
 
 return (
   <><div>
     <div className={showDropDown ? 'dropdown' : 'dropdown active'}>

       {semesters.map(
         (semester: string, index: number): JSX.Element => {
           return (
             <p className = "semesters-container" 
               key={index}
               onClick={(): void => {
                 onClickHandler(semester);
               }}
             >
              <p className='dropdown-t'>
               {semester}
               </p>
             </p>
           );
         }
       )}
 
     </div>
     </div>
   </>
 );
};
 
export default DropDown;