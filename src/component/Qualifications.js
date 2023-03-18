import React from "react";

function Qualifications(props)
{
    return(
        <>
        <span className="largerFont"><b>Qualifications</b></span><br></br>
        <table border="1" className="tbl">
            <thead>
                <tr>
                    <th>Class</th>
                    <th>Percentage</th>
                    <th>Year of passing</th>
                    <th>College</th>
                </tr>
            </thead>
            <tbody>
                {props.qualifications.map((item,index)=>
                {
                    return(
                        <tr key={index}>
                            <td>{item.class}</td>
                            <td>{item.percentage}</td>
                            <td>{item.year}</td>
                            <td>{item.college}</td>
                        </tr>
                    )

                })}
            </tbody>
        </table>
        </>
    )
}

export default Qualifications;