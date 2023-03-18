import React from "react";

function Skills(props)
{
    return(
        <>
        <span className="largerFont"><b>Projects</b></span><br></br>
        <table border="1" className="tbl">
            <thead>
                <tr>
                    <th>Sno</th>
                    <th>Project name</th>
                    <th>Technology</th>
                </tr>
            </thead>
            <tbody>
                {props.projects.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.sno}</td>
                            <td>{item.projectname}</td>
                            <td>{item.technology}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table><br></br>

        <small><b>Skills</b></small>
        <ul>
            <li key="1">HTML</li>
            <li key="2">CSS</li>
            <li key="3">JS</li>
            <li key="4">Angular</li>
            <li key="5">Node API</li>
        </ul><br></br>

        <small><b>Hobbies</b></small>
        <ol>
            <li key="1">Cooking</li>
            <li key="2">Gardening</li>
            <li key="3">Listening music</li>
        </ol>

        </>
    )
}

export default Skills;