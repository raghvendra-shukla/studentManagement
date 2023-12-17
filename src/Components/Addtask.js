import { useState } from "react";
import React from 'react';


function Addtask(props) {
    const [tasks, settasks] = useState([]);
    const [task, settask] = useState({task:"",days:""});
    const addtask= async(task,days)=>{
        //API call
        const response = await fetch("http://localhost:5000/api/admin/addtask", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({task,days})
        });
        const tas= await response.json();
        // console.log(prof);
        settasks(tasks.concat(tas));
      }
    const handleonchange=(e)=>{ 
        settask({...task,[e.target.name]:e.target.value})
    }
    const handleonclick=(e)=>{
        e.preventDefault();
        addtask(task.task,task.days)
        settask({task:"",days:""})
        props.showAlert("task has been added successfully","success");
    }
  return (
    <div>
        <h1>Add a task</h1>
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Task</label>
                <textarea type="text" className="form-control" onChange={handleonchange} id="task" name="task" aria-describedby="emailHelp" minLength={2} required value={task.task}></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="degree" className="form-label">Days</label>
                <input type="text" className="form-control" id="description" onChange={handleonchange} name="days" required value={task.days}/>
            </div>
            <button disabled={task.task.length<3|| task.days.length<0}type="submit" className="btn btn-primary" onClick={handleonclick}>Add task</button>
        </form>
    </div>
  )
}

export default Addtask