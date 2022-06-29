import react from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom';
import DropDown from "./SemesterButton";
import { Semester } from "./Semester";
import Switch from "react-switch";




const SemesterMenu: React.FC = (): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectSem, setSelectSem] = useState<string>("");
    const [semesterList,setArray] = useState<string[]>([])
    const [count, setCount] = useState<number>(4)
    let num = ""
   
    const semesters = () => {
        return ["Fall", "Spring", "Summer(BU)"];
    };

    /** Toggle dropdown menu */
    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    };

    /** Hide menu if click occurs outside of element.
     @param event  mouse event */
     
    const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): any => {
        if (event.currentTarget === event.target) {
            let sem = event.currentTarget.value
            setShowDropDown(false);
        }
    };

    /**
     @param semester  selected semester */
    const semesterSelection = (semester: string): any => {
        semesterList.push(semester)
        setCount(count +1)
        num = '2'
        console.log(num)
        setSelectSem(semester)  
        
    };

    return (
     
        <>
        {semesterList.map(data => {
              return ( 
                <Semester semester={data} semesterid= {num} /> 
              )})}
            <button
                className={showDropDown ? "active" : undefined}
                onClick={() : void => toggleDropDown()}
                onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
                    dismissHandler(e)
                }
            >
                <div>{ "Add Semester +"} </div>
                {showDropDown && (
                    <DropDown
                        semesterSelection={semesterSelection}
                        semesters={semesters()}
                        showDropDown={false}
                        toggleDropDown={(): void => toggleDropDown()}

                       
                    />
                )}
            </button>
           
        </>
    );
};


export default SemesterMenu;

