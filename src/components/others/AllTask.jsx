import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const AllTask = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="bg-dark text-white p-4 rounded mt-4">
      <div className="bg-danger text-white p-3 mb-3 rounded text-center fw-bold">
        Employee Task Summary
      </div>

      {userData.map((elem, idx) => (
        <div key={idx} className="border border-success rounded p-3 mb-4">
          <div className="row text-center text-secondary fw-semibold">
            <div className="col">name</div>
            <div className="col">New</div>
            <div className="col">Accept</div>
            <div className="col">Completed</div>
            <div className="col">Failed</div>
          </div>

          <div className="row text-center mt-2 fw-bold">
            <div className="col text-info">{elem.name}</div>
            <div className="col text-info">{elem.taskCounts.newTask}</div>
            <div className="col text-warning">{elem.taskCounts.active}</div>
            <div className="col text-success">{elem.taskCounts.completed}</div>
            <div className="col text-danger">{elem.taskCounts.failed}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
