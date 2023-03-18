import React from "react";

function Introduction(props)
{
    return(
        <div className="App">
            <div>
                <div className="cell" style={{width: "60%", textAlign: "start"}}>
                    <label><b>Name    :</b> </label>{props.name}<br/>
                    <label><b>Location: </b> </label>{props.location}<br/>
                    <label><b>Mail    : </b></label>{props.mail}<br/>
                    <label><b>Mobile No: </b> </label>{props.number}<br/>
                </div>
                <div className="cell" style={{width:"40%",textAlign:"end"}}>
                   
                </div>

            </div>
            

            <div>
                <p><b>Description:</b>To secure a challenging position in a reputable <br></br>organization to utilize my learnings and knowledg</p>
            </div>

        </div>
       
    )
}

export default Introduction;