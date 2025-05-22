import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";
const AdminDashboard = (props) => {
  const data = props.data;

  return (
    <div>
      <Header changeUser={props.changeUser} data={data} />
      <CreateTask />
      <AllTask data={data} />
    </div>
  );
};

export default AdminDashboard;
