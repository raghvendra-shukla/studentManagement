import React from "react";
import Addtask from "./Addtask";
import { useEffect,useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Section from "./Section";

function Createtask(props) {
  const navigate = useNavigate();
  const { showAlert } = props;
  const ref=useRef(null);
  const refclose=useRef(null);
  // const host = "http://localhost:5000";
  const [task, settask] = useState([]);
  const gettask = async () => {
    //API call
    const response = await fetch(
      "http://localhost:5000/api/student/fetchalltask",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    // console.log(json);
    settask(json);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      gettask();
    } else {
      navigate("/login");
    }
  },);

  //Delete a task
  const deletetask = async (id) => {
    //Deleting a task
    const response = await fetch(
      `http://localhost:5000/api/admin/deletetask/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(),
      }
    );
    const json = response.json();
    const newtask = task.filter((task) => {
      return task._id !== id;
    });
    settask(newtask);
  };
  return (
    <>
      <div className="container my-2">
        <h1 className="text-center">Welcome Admin</h1>
        <Addtask showAlert={showAlert} />
        <div className="row my-2">
          <h2>Create The Task</h2>
          {task.map((element) => {
            return (
              <div className="col-md-3" key={element._id}>
                <Section
                  task={element.task}
                  days={element.days}
                  showAlert={showAlert}
                  deletetask={deletetask}
                  id={element._id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Createtask;