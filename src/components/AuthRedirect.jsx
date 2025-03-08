import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../contexts/supabaseclient";

const AuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        // Get the current session
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          // No session, redirect to sign in
          navigate("/signin");
          return;
        }

        // Get the user's role
        let role;

        // First check user metadata
        if (session.user.user_metadata?.role) {
          role = session.user.user_metadata.role;
        } else {
          // Try to get role from the database
          const { data: userData, error } = await supabase
            .from('users')
            .select('role')
            .eq('id', session.user.id)
            .single();

          if (error) {
            console.error("Error fetching user role:", error);
            navigate("/signin");
            return;
          }

          role = userData.role;
        }

        // Get the selected role from localStorage if available (higher priority)
        const selectedRole = localStorage.getItem("selectedRole");
        if (selectedRole) {
          role = selectedRole;
          localStorage.removeItem("selectedRole");
          
          // Update user metadata with the new role
          await supabase.auth.updateUser({
            data: { role: selectedRole }
          });
          
          // Update user record in the database
          await supabase
            .from('users')
            .upsert([{ 
              id: session.user.id, 
              role: selectedRole,
              email: session.user.email,
              updated_at: new Date().toISOString()
            }], { onConflict: 'id' });
        }

        // Redirect based on role
        switch (role) {
          case "student":
            navigate("/dashboard/student");
            break;
          case "alumni":
            navigate("/dashboard/alumni");
            break;
          case "institute":
            navigate("/dashboard/institute");
            break;
          default:
            navigate("/");
        }
      } catch (error) {
        console.error("Auth redirect error:", error);
        navigate("/signin");
      }
    };

    handleRedirect();
  }, [navigate]);

  return <div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C3A1FF] mx-auto"></div>
      <p className="mt-4 text-lg">Redirecting...</p>
    </div>
  </div>;
};

export default AuthRedirect;