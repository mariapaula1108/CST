import React from 'react'
import { useState } from 'react';
import DropDown from "./SemesterButton";
import { Semester } from "./Semester";





const SemesterMenu: React.FC = (): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectSem, setSelectSem] = useState<string>("");
    const [count, setCount] = useState<number>(4)  /* Count initialized as 4 since the website has 3 courses by default */
    
    const semesters = () => {
        return ["Fall", "Spring", "Summer(BU)"];
    };

    /* Create array for the selected semester and the courseid */
    const [semesterList, setList] = useState<{
        selectedSem: string;
        courseid: string
    }[]>(
        [],
    );


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
        setCount(count + 1)
        setList(prevList => [   /* Push the selected semester and count+1 to array */
            ...prevList,
            { selectedSem: semester, courseid: count.toString() },
        ])
        setSelectSem(semester)
    };

    return (

        <> 
            {semesterList.map((data, index) => {  
                return (<>
                    <div key={index}></div>
                    <Semester semester={data.selectedSem} semesterid={data.courseid} /> </>
                )
            })}
            
            <button 
                className={showDropDown ? "active" : undefined}   
                onClick={(): void => toggleDropDown()}
                onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
                    dismissHandler(e)
                }
            >
                <div>{"Add Semester +"} </div>
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

