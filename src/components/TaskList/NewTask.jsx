import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
const NewTask = ({ task }) => {
  const [bgColor, setBgColor] = useState("red");
  const [showButton, setShowButton] = useState(true);
  const { setaccepted, setnewTaskCount } = useContext(AuthContext);
  const handleAccept = () => {
    setBgColor("green");
    setaccepted((prev) => prev + 1);
    setnewTaskCount((prev) => prev - 1);

    setShowButton(false);
  };

  console.log("newtask", task);
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
      </div>

      <div className="d-flex mt-3">
        {showButton && (
          <button className="btn btn-success btn-sm p-3" onClick={handleAccept}>
            Accept Task
          </button>
        )}
      </div>
    </div>
  );
};

export default NewTask;
