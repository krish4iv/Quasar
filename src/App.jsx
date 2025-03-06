import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
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
import ProtectedRoute from "./components/ProtectedRoutes";


const queryClient = new QueryClient();
// Replace this with actual authentication logic from AuthContext

const Layout = ({ children }) => {
  const location = useLocation();
  
  // Check if the current path is a dashboard path
  const isDashboardRoute = location.pathname.includes('/dashboard') || location.pathname.includes('/messages');
  
  return (
    <div className="flex min-h-screen flex-col">
      {!isDashboardRoute && <Navbar />}
      <main className={`flex-1 ${!isDashboardRoute ? 'pt-20' : ''}`}>
        {children}
      </main>
      {!isDashboardRoute && <Footer />}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/events" element={<Events />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
                      
                      
                      {/* Protected dashboard routes */}
                      <Route 
                        path="/dashboard/student" 
                        element={
                          <ProtectedRoute allowedRoles={["student"]}>
                            <StudentDashboard />
                          </ProtectedRoute>
                        } 
                      />
                      <Route 
                        path="/dashboard/alumni" 
                        element={
                          <ProtectedRoute allowedRoles={["alumni"]}>
                            <AlumniDashboard />
                          </ProtectedRoute>
                        } 
                      />
                      <Route 
                        path="/dashboard/institute" 
                        element={
                          <ProtectedRoute allowedRoles={["institute"]}>
                            <InstituteDashboard />
                          </ProtectedRoute>
                        } 
                      />
                      
                      {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;