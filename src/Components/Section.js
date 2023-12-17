import React from 'react';

function Section(props) {
    const {task,days,deletetask,id}=props;
    
  return (
    <>
    <div className="card text-center">
  <div className="card-header">
    Task
  </div>
  <div className="card-body">
    <h5 className="card-title">Task For Students</h5>
    <p className="card-text">{task}</p>
    <button className="btn btn-primary m-2" onClick={()=>{deletetask(id);props.showAlert("Deleted successfully","success")}}>Delete Task</button>
  </div>
  <div className="card-footer text-muted">
    {days} days
  </div>
</div>
    </>
  )
}
{/* <img src="https://www.kindpng.com/picc/m/52-525985_transparent-unknown-person-png-unknown-icon-png-download.png" className="card-img-top" alt="..."/> */}

export default Section