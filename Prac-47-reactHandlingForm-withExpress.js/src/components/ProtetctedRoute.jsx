import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Make a request to check if the user is logged in
    fetch('http://localhost:3000/dashboard', { method: 'GET', credentials: 'same-origin' })
      .then((res) => {
        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch(() => setIsAuthenticated(false));
  }, []);

  if (isAuthenticated) {
    return children;
  }

  // If not authenticated, redirect to the login page
  return <Navigate to="/login" />;
}

export default ProtectedRoute;