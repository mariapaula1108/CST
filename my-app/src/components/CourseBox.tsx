import * as React from 'react';
import Box from '@mui/material/Box';


export interface courseProps {
    courseName: string;
    courseColor: string;
}


function CourseBox({ courseName, courseColor }: courseProps) {
    return (
        <>
            <div className="course">
                <h3> {courseName} </h3>
                <Box
                    sx={{
                        width: 300,
                        height: 300,
                        backgroundColor: {courseColor},
                        '&:hover': {
                            backgroundColor: 'yellow',
                            opacity: [0.9, 0.8, 0.7],
                        }
                    }}
                />
            </div>
        </>
    );
}
export default CourseBox;
