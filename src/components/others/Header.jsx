import React from "react";

const Header = (props) => {
  const { data, changeUser } = props;
  const logOut = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };
  return (
    <div className="container-fluid m-10">
      <div className="row m-3 text-white ">
        <h1 className="col-6">👋 Hello , {data?.name || "Admin"}😇</h1>

        <div className="col-6  d-flex justify-content-end">
          <button
            class="btn btn-primary"
            style={{ justifyContent: "end" }}
            onClick={logOut}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
