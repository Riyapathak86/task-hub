const CompleteTask = ({ task, user }) => {
  return (
    <div
      className="col-md-3 p-4 text-white"
      style={{
        background: "orange",
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

      <div style={{ maxHeight: "400px", paddingRight: "5px" }}>
        <p>{task?.taskDescription}</p>

        <div className="d-flex gap-2 mt-3">
          <button className="btn btn-success btn-sm">Complete</button>
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;
