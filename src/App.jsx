import React, { useContext, useEffect } from "react";
import Login from "./components/Auth/Login";
import { AuthContext } from "./Context/AuthContext";
import { Link } from "react-router";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { useState } from "react";
const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const { userData, data, setData, setUserData } = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (Array.isArray(userData)) {
      const employee = userData.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "16px" }}>
      <>
        {!user ? <Login handleClick={handleLogin} /> : ""}
        {user == "admin" ? (
          <AdminDashboard changeUser={setUser} data={loggedInUserData} />
        ) : user == "employee" ? (
          <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
        ) : null}
        {console.log("Tasklist data:", loggedInUserData)}

        {console.log("date-titlec", loggedInUserData?.taskCounts?.completed)}
      </>
    </div>
  );
};

export default App;
