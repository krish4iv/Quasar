import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import AnimatedSection from "../components/AnimatedSection";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real application, we would validate credentials with a backend
    // For demo purposes, we'll use a simple check and role-based redirect
    if (email && password) {
      let role;
      
      if (email.includes("student")) {
        role = "student";
      } else if (email.includes("alumni")) {
        role = "alumni";
      } else if (email.includes("institute")) {
        role = "institute";
      } else {
        // Default to student for demo
        role = "student";
      }
      
      // Create a user object with the role
      const user = {
        email,
        firstName: email.split('@')[0],
        lastName: "User",
        role,
        graduationYear: role === "student" ? "2025" : "2020"
      };
      
      // Log in the user
      login(user);
      
      // Show success alert
      alert(`Welcome back! You are signed in as ${role}.`);
      
      // Redirect to the appropriate dashboard
      if (role === "student") {
        navigate('/dashboard/student');
      } else if (role === "alumni") {
        navigate('/dashboard/alumni');
      } else if (role === "institute") {
        navigate('/dashboard/institute');
      }
    }
  };

  return (
    <div className="container mx-auto px-4 min-h-[calc(100vh-200px)] flex items-center justify-center py-16">
      <AnimatedSection className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-muted-[#0A0A0D]">Sign in to your alumni account</p>
        </div>
        
        <div className="bg-card border border-border/60 rounded-xl p-6 md:p-8 shadow-sm">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-[#0A0A0D] h-4 w-4" />
                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-10 py-2 rounded-xl border border-border bg-background text-[#0A0A0D] placeholder:text-muted-[#0A0A0D] focus:outline-none focus:ring-2 focus:ring-[#C3A1FF] focus:border-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                  <p className="text-xs text-muted-foreground">
                    For demo: Use student@example.com, alumni@example.com, or institute@example.com
                  </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-sm text-[#C3A1FF] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-[#0A0A0D] h-4 w-4" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full px-10 py-2 rounded-lg border border-border bg-background text-[#0A0A0D] placeholder:text-muted-[#0A0A0D] focus:outline-none focus:ring-2 focus:ring-[#C3A1FF] focus:border-transparent"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-[#0A0A0D] hover:text-[#0A0A0D] transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <input 
                  id="remember" 
                  type="checkbox"
                  className="h-4 w-4 rounded border-border text-[#C3A1FF] focus:ring-[#C3A1FF]"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#C3A1FF] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#C3A1FF]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C3A1FF] focus:ring-offset-2"
              >
                Sign In
              </button>
            </div>
          </form>
          
          <div className="mt-6 pt-6 border-t border-border">
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-[#0A0A0D]">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#C3A1FF] hover:underline font-medium">
                  Sign up
                </Link>
              </p>
              
              <div className="flex flex-col gap-3">
                <button className="w-full px-4 py-2 border border-border rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#F4F4F7]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C3A1FF] focus:ring-offset-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" fill="currentColor" />
                  </svg>
                  Continue with Google
                </button>
                
                <button className="w-full px-4 py-2 border border-border rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#F4F4F7]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C3A1FF] focus:ring-offset-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" fill="currentColor" />
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" fill="currentColor" />
                  </svg>
                  Continue with Apple
                </button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default SignIn;
