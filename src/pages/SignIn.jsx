import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import supabase from "../contexts/supabaseclient";

const SignIn = () => {
  const [role, setRole] = useState("student"); // Default role
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      setError(null);
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: `${window.location.origin}/dashboard/${role}/` },
      });
      //  const user_uidd =(await supabase.auth.getUser()).data.user.id;

      if (error) throw error;
    } catch (error) {
      setError(error.message);
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 min-h-[calc(100vh-200px)] flex items-center justify-center py-16">
      <AnimatedSection className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted">Sign in to your alumni account</p>
        </div>

        <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8 shadow-sm">
          {/* Role Selection */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="role" className="text-sm font-medium">
                I am a...
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted h-4 w-4" />
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full pl-10 px-3 py-2 rounded-lg border border-border bg-background text-black focus:outline-none focus:ring-2 focus:ring-[#C3A1FF] focus:border-transparent"
                >
                  <option value="student">Student</option>
                  <option value="alumni">Alumni</option>
                  <option value="institute">Institute</option>
                </select>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && <div className="text-sm text-red-500 mt-2">{error}</div>}

          {/* Google Sign-In Button */}
          <div className="mt-6">
            <button
              onClick={handleGoogleSignIn}
              className="w-full px-4 py-2 border border-border rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#F4F4F7]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C3A1FF] focus:ring-offset-2"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" fill="currentColor" />
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Sign-Up Link */}
          <p className="text-center text-sm text-muted mt-6">
            Don't have an account? <Link to="/signup" className="text-[#C3A1FF] hover:underline font-medium">Sign up</Link>
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default SignIn;
