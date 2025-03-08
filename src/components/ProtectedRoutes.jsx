import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import supabase from "../contexts/supabaseclient"; // Import Supabase client

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check the current session and set the user
    const fetchSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        setUser(session?.user || 'student');
      } catch (error) {
        console.error("Error fetching session:", error);
      } finally {
        console.log(data);
        setLoading(false);
      }
    };

    fetchSession();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user || null);
        setLoading(false);
      }
    );

    // Cleanup listener on unmount
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  if (loading) {
    // Show a loading spinner or message while checking auth state
    return <div>Loading...</div>;
  }

  if (!user) {
    // User is not logged in, redirect to sign in
    return <Navigate to="/signin" replace />;
  }

  // Get the user's role from user_metadata
  const userRole = user.user_metadata?.role;

  if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
    // User doesn't have the required role, redirect to appropriate dashboard
    switch (userRole) {
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

  // User is authenticated and has the required role, render the children
  return children;
};

export default ProtectedRoute;