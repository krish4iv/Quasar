import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { currentUser } = useAuth();
  
  if (!currentUser) {
    // User is not logged in, redirect to sign in
    return <Navigate to="/signin" replace />;
  }
  
  if (allowedRoles.length > 0 && !allowedRoles.includes(currentUser.role)) {
    // User doesn't have the required role, redirect to appropriate dashboard
    switch (currentUser.role) {
      case "student":
        return <Navigate to="/dashboard/student" replace />;
      case "alumni":
        return <Navigate to="/dashboard/alumni" replace />;
      case "institute":
        return <Navigate to="/dashboard/institute" replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }
  
  return children;
};

export default ProtectedRoute;