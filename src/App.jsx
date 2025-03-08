import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Directory from "./pages/Directory";
import Events from "./pages/Events";
import Mentorship from "./pages/Mentorship";
import Jobs from "./pages/Jobs";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Forums from "./pages/Forums";

import StudentDashboard from "./pages/dashboards/StudentDashboard";
import AlumniDashboard from "./pages/dashboards/AlumniDashboard";
import InstituteDashboard from "./pages/dashboards/InstituteDashboard";
import { AuthProvider } from "./contexts/AuthContext";

const queryClient = new QueryClient();

const Layout = ({ children }) => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.includes("/dashboard") || location.pathname.includes("/messages");

  return (
    <div className="flex min-h-screen flex-col">
      {!isDashboardRoute && <Navbar />}
      <main className={`flex-1 ${!isDashboardRoute ? "pt-20" : ""}`}>{children}</main>
      {!isDashboardRoute && <Footer />}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/events" element={<Events />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Dashboard routes (now public) */}
            <Route path="/dashboard/student" element={<StudentDashboard />} />
            <Route path="/dashboard/alumni" element={<AlumniDashboard />} />
            <Route path="/dashboard/institute" element={<InstituteDashboard />} />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
