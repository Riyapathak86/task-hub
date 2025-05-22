import { useContext, useState } from "react";
import Tasklist from "./Tasklist";
import { AuthContext } from "../../Context/AuthContext";

const TaskListNumbers = ({ data }) => {
  const { completedCount, failedCount, accepted, newTaskCount } =
    useContext(AuthContext);
  return (
    <div className="task-container">
      <div className="task-row">
        <div className="task-box orange-bg">
          <h2 className="task-title">
            {data?.taskCounts?.completed + completedCount}
          </h2>

          <h2 className="task-label">Completed Task</h2>
        </div>
        <div className="task-box red-bg">
          <h2 className="task-title">
            {data?.taskCounts?.newTask + newTaskCount}
          </h2>

          <h2 className="task-label">New Task</h2>
        </div>
        <div className="task-box green-bg">
          <h2 className="task-title">{data?.taskCounts?.active + accepted}</h2>
          <h2 className="task-label">Accepted Task</h2>
        </div>
        <div className="task-box blue-bg">
          <h2 className="task-title">
            {data?.taskCounts?.failed + failedCount}
          </h2>
          <h2 className="task-label">Failed Task</h2>
        </div>
      </div>
      <Tasklist data={data} />
    </div>
  );
};

export default TaskListNumbers;
