import { createContext, useState, useEffect } from "react";
import { getLocalstorage, setLocalStorage } from "../Utils/LocalStorage";
const AuthContext = createContext();

const AuthState = ({ children }) => {

  const [userData, setUserData] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState({ employees: [], admin: null });
  const [completedCount, setCompletedCount] = useState(0);
  const [newTaskCount, setnewTaskCount] = useState(0);
  const [failedCount, setFailedCount] = useState(0);
  const [showButton, setShowButton] = useState(true);
  const [showButton2, setShowButton2] = useState(true);
  const [accepted, setaccepted] = useState(0);
  useEffect(() => {
    setLocalStorage();
    const { employees } = getLocalstorage();
    setUserData(employees);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userData,
        data,
        setData,
        setUserData,
        setRefresh,
        completedCount,
        setCompletedCount,
        failedCount,
        setFailedCount,
        showButton,
        setShowButton,
        showButton2,
        setShowButton2,
        newTaskCount,
        setnewTaskCount,
        accepted,
        setaccepted,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthState };
