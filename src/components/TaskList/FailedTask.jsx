import React from "react";

const FailedTask = ({ task, user }) => {
  return (
    <div
      className="col p-4 text-white"
      style={{
        background: "violet",
        height: "45vh",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "'Segoe UI', 'Roboto', sans-serif",
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <button className="btn btn-primary">{task?.category}</button>{" "}

        <span>{task?.taskDate}</span> 
      </div>

      <div className="text-center mt-2">
        <h2>{task?.taskTitle}</h2> 
      </div>

      <div
        style={{
          overflowY: "auto",
          maxHeight: "200px",
          paddingRight: "5px",
        }}
      >
        <p>{task?.taskDescription}</p>

        <div className="d-flex mt-3">
          <button className="btn btn-success btn-sm p-3">Failed</button>
        </div>
      </div>
    </div>
  );
};

export default FailedTask;
