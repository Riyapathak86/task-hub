import { createBrowserRouter } from 'react-router-dom'; 
import FailedTask from '../components/TaskList/FailedTask';
import App from '../App';
import EmployeeDashboard from '../components/Dashboard/EmployeeDashboard';
import Login from '../components/Auth/Login';
import AdminDashboard from '../components/Dashboard/AdminDashboard';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/FailedTask',
    element: <FailedTask />,
  },
  {
    path:"/Login",
    element: <Login/>,
  },
  {
    path:"/EmployeeDashboard",
    element: <EmployeeDashboard/>,
  },
  {
    path:"/AdminDashboard",
    element: <AdminDashboard/>,
  }

  
]);

export default router;
