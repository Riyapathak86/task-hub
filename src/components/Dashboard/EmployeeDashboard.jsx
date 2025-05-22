import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import AcceptTask from "../TaskList/AcceptTask";

const EmployeeDashboard = (props) => {
  const data = props.data;

  {
    console.log("date-titlec", data?.taskCounts?.completed);
  }
  return (
    <div>
      <Header changeUser={props.changeUser} data={data} />
      <TaskListNumbers data={data} />
    </div>
  );
};

export default EmployeeDashboard;
