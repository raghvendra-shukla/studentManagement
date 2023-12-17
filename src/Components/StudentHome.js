import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Section1 from './Section1';

function StudentHome(props) {
    const navigate = useNavigate();
    const {showAlert}=props;
    // const host="http://localhost:5000";
    const [task, settask] = useState([]);
    const getalltask=async()=>{
        //API call
        const response = await fetch("http://localhost:5000/api/student/fetchalltask", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem("token"),
          },
        });
        const json= await response.json();
        // console.log(json);
        settask(json);
      }
      useEffect(() => {
        if(localStorage.getItem("token")){
          getalltask();
        }
        else{
          navigate("/login")
        }
    },);
    return (
      <>
      <div className="container my-2">
      <div className="row my-2">
          <h1 className='text-center'>Your Task to Complete</h1>
          {task.map((element)=>{
            return(
                <div className="col-md-3" key={element._id}>
                    <Section1 task={element.task} days={element.days} showAlert={showAlert}/>
              </div>
            )
        })}
        </div>
       </div>
      </>
      
    )
}

export default StudentHome