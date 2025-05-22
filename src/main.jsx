import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';  // ✅ Use RouterProvider
import './index.css';
import router from './Router/router.jsx';  // ✅ Correct Import
import { AuthState } from './Context/AuthContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthState>
<RouterProvider router={router} /> 

</AuthState>




  </StrictMode>
);
