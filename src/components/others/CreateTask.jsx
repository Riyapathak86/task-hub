import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const CreateTask = () => {
  const [taskForm, setTaskForm] = useState({
    taskTitle: "",
    taskDate: "",
    assignedPerson: "",
    category: "",
    taskDescription: "",
  });

  const { userData, setUserData, setRefresh } = useContext(AuthContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();

    const taskDetails = {
      ...taskForm,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    let personFound = false;

    const updatedEmployeeList = userData
      ? userData.map((person) => {
          if (
            person.name?.toLowerCase() === taskForm.assignedPerson.toLowerCase()
          ) {
            personFound = true;
            return {
              ...person,
              tasks: [...person.tasks, taskDetails],
              taskCounts: {
                ...person.taskCounts,
                newTask: person.taskCounts.newTask + 1,
              },
            };
          }
          return person;
        })
      : [];

    if (personFound) {
      localStorage.setItem("employees", JSON.stringify(updatedEmployeeList));
      setUserData(updatedEmployeeList);
      {
        console.log(
          "Updated Employee Listtttttttttttttttttttttttttttttt:",
          updatedEmployeeList
        );
      }
      alert("✅ Task successfully created!");
      setTaskForm({
        taskTitle: "",
        taskDate: "",
        assignedPerson: "",
        category: "",
        taskDescription: "",
      });
      setRefresh((prev) => !prev);
    } else {
      alert("❌ Please assign task to: sarthak, harsh, Ruhi, Riya, or Aman.");
    }
  };

  return (
    <div
      className="container-fluid py-5"
      style={{ minHeight: "100vh", backgroundColor: "#1a1a1a" }}
    >
      <div
        className="p-5 rounded shadow-lg mx-auto"
        style={{
          backgroundColor: "#2c2c2c",
          color: "white",
          maxWidth: "95%",
        }}
      >
        <div className="text-center mb-4">
          <h3 className="fw-bold">📄 Create Task</h3>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Add task details and assign them smartly!
          </p>
        </div>

        <form onSubmit={handleTaskSubmit}>
          <div className="row g-4">
            {/* Task Title */}
            <div className="col-md-6">
              <label className="form-label">Task Title</label>
              <input
                type="text"
                name="taskTitle"
                value={taskForm.taskTitle}
                onChange={handleInputChange}
                className="form-control bg-dark text-white border-secondary"
                placeholder="Make UI Design"
              />
            </div>

            {/* Date */}
            <div className="col-md-6">
              <label className="form-label">Date</label>
              <input
                type="date"
                name="taskDate"
                value={taskForm.taskDate}
                onChange={handleInputChange}
                className="form-control bg-dark text-white border-secondary"
              />
            </div>

            {/* Description */}
            <div className="col-md-12">
              <label className="form-label">Description</label>
              <textarea
                name="taskDescription"
                value={taskForm.taskDescription}
                onChange={handleInputChange}
                className="form-control bg-dark text-white border-secondary"
                rows="2"
                placeholder="Detailed description of task (Max 100 words)"
              />
            </div>

            {/* Assign To */}
            <div className="col-md-6">
              <label className="form-label">Assign To</label>
              <input
                type="text"
                name="assignedPerson"
                value={taskForm.assignedPerson}
                onChange={handleInputChange}
                className="form-control bg-dark text-white border-secondary"
                placeholder="Enter user name"
              />
            </div>

            {/* Category */}
            <div className="col-md-6">
              <label className="form-label">Category</label>
              <input
                type="text"
                name="category"
                value={taskForm.category}
                onChange={handleInputChange}
                className="form-control bg-dark text-white border-secondary"
                placeholder="Design, Development, etc."
              />
            </div>
          </div>

          <button type="submit" className="btn btn-success w-100 mt-4">
            ✅ Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
