import React from 'react'

function Section1(props) {
    const {task,days}=props;
    
    return (
      <>
      <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">Your Task</h5>
      <p className="card-text">{task}</p>
      <button className="btn btn-primary" onClick={()=>{props.showAlert("Task completed","success")}}>Mark as Complete</button>
    </div>
    <div className="card-footer text-muted">
      {days} days to go
    </div>
  </div>
      </>
    )
}

export default Section1