
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

const AcceptTask = ({ task }) => {
  const [bgColor, setBgColor] = useState("green");
  const [showButton, setShowButton] = useState(true);
  const [showButton2, setShowButton2] = useState(true);
  const { setFailedCount, setCompletedCount, setnewTaskCount } = useContext(AuthContext);

  const handleMarkCompleted = () => {
    setBgColor("orange");
    setCompletedCount(prev => prev + 1);
    setShowButton(false);
  };

  const handleFailCompleted = () => {
    setBgColor("blue");
    setFailedCount(prev => prev + 1);
   setCompletedCount(prev => (prev > 0 ? prev - 1 : 0));
    setShowButton2(false);
  };

  return (
    <div
      className="col-md-3 p-4 text-white"
      style={{
        background: bgColor,
        height: "45vh",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "'Segoe UI', 'Roboto', sans-serif",
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <button className="btn btn-primary">{task?.category}</button>
        <span>{task?.taskDate}</span>
      </div>

      <div className="text-center mt-2">
        <h2>{task?.taskTitle}</h2>
      </div>

      <div style={{ maxHeight: "200px", paddingRight: "5px" }}>
        <p>{task?.taskDescription}</p>

        <div className="d-flex gap-2 mt-3">
          {showButton && (
            <button
              className="btn btn-success btn-sm"
              onClick={handleMarkCompleted}
            >
              Mark as Completed
            </button>
          )}
          {showButton2 && (
            <button
              className="btn btn-danger btn-sm px-2 py-1"
              onClick={handleFailCompleted}
            >
              Mark as Failed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;
