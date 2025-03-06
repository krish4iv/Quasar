import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import AnimatedSection from "../../components/AnimatedSection";
import StudentEvents from "../../components/students/StudentEvents";
import AlumniConnector from "../../components/students/AlumniConnector";
import Forums from "../Forums";
import { GraduationCap, BookOpen, Users, Clock, Calendar, Map, Building, Award, MessageCircle, UserRound } from "lucide-react";

const StudentDashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navbar */}
      <div className="flex justify-between items-center bg-white rounded-xl shadow p-4 mb-6">
        <h1 className="text-3xl font-bold">Student Dashboard</h1>
        <div className="flex items-center gap-4">
          <button 
            className={`px-4 py-2 rounded-xl ${activeTab === "profile" ? "bg-[#C3A1FF] text-white" : "bg-white"}`}
            onClick={() => setActiveTab("profile")}
          >
            <UserRound className="inline-block mr-2 h-4 w-4" />
            Profile
          </button>
          <button 
            className={`px-4 py-2 rounded-xl ${activeTab === "events" ? "bg-[#C3A1FF] text-white" : "bg-white"}`}
            onClick={() => setActiveTab("events")}
          >
            <Calendar className="inline-block mr-2 h-4 w-4" />
            Events
          </button>
          <button 
            className={`px-4 py-2 rounded-xl ${activeTab === "alumni" ? "bg-[#C3A1FF] text-white" : "bg-white"}`}
            onClick={() => setActiveTab("alumni")}
          >
            <Users className="inline-block mr-2 h-4 w-4" />
            Alumni Network
          </button>
          <button 
            className={`px-4 py-2 rounded-xl ${activeTab === "forums" ? "bg-[#C3A1FF] text-white" : "bg-white"}`}
            onClick={() => setActiveTab("forums")}
          >
            <MessageCircle className="inline-block mr-2 h-4 w-4" />
            Forums
          </button>
          <button className="px-4 py-2 border rounded-xl" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <AnimatedSection>
            <div className="p-6 bg-white shadow rounded-xl">
              <div className="flex flex-col items-center text-center">
                <div className="h-24 w-24 mb-4 rounded-xl-full overflow-hidden">
                  <img 
                    src={currentUser?.profileImage || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"} 
                    alt={currentUser?.firstName} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h2 className="text-xl font-bold">{currentUser?.firstName} {currentUser?.lastName}</h2>
                <p className="text-gray-500">Student</p>
                <p className="mt-2 text-sm text-gray-500">{currentUser?.graduationYear ? `Class of ${currentUser.graduationYear}` : "Current Student"}</p>

                <button className="w-full mt-4 px-4 py-2 border rounded-xl">Edit Profile</button>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Major</p>
                    <p className="text-sm text-gray-500">Computer Science</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Building className="text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">University</p>
                    <p className="text-sm text-gray-500">State University</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Map className="text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-gray-500">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="md:col-span-2">
          {activeTab === "profile" && (
            <AnimatedSection delay={100}>
              <div className="bg-white shadow rounded-xl">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Education</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <BookOpen className="h-10 w-10 p-2 bg-white rounded-xl" />
                      <div>
                        <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                        <p className="text-gray-500">State University</p>
                        <p className="text-sm text-gray-500">2020 - Present</p>
                        <p className="text-sm mt-2">GPA: 3.8/4.0</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Award className="h-10 w-10 p-2 bg-white rounded-xl" />
                      <div>
                        <h4 className="font-medium">Dean's List</h4>
                        <p className="text-gray-500">Academic Achievement</p>
                        <p className="text-sm text-gray-500">Fall 2020 - Spring 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {activeTab === "events" && (
            <AnimatedSection delay={100}>
              <StudentEvents />
            </AnimatedSection>
          )}

          {activeTab === "alumni" && (
            <AnimatedSection delay={100}>
              <AlumniConnector />
            </AnimatedSection>
          )}

          {activeTab === "forums" && (
            <AnimatedSection delay={100}>
              <div className="bg-white shadow rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Forum Discussions</h3>
                <p className="text-gray-500 mb-6">
                  Participate in discussions with fellow students and alumni. Ask questions, share advice, and connect with your community.
                </p>

                <div className="space-y-4">
                  <div className="p-4 border rounded-xl">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium px-1 hover:bg-[#c3a1ff] rounded-xl cursor-pointer">Career Advice for New Graduates</h4>
                      <span className="text-xs bg-white rounded-xl-full px-2 py-1">Career</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      What advice would you give to someone who just graduated and is looking for their first job in this market?
                    </p>
                    <div className="mt-3 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-xl-full overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" alt="Emma Johnson" />
                        </div>
                        <span className="text-xs">Emma Johnson</span>
                        <span className="text-xs text-gray-500">2 days ago</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>24 replies</span>
                        <span>•</span>
                        <span>156 views</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-xl">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium px-1 hover:bg-[#c3a1ff] rounded-xl cursor-pointer">Graduate School Application Tips</h4>
                      <span className="text-xs bg-white rounded-xl-full px-2 py-1">Education</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Looking for advice on preparing grad school applications. Any tips on personal statements?
                    </p>
                    <div className="mt-3 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-xl-full overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" alt="James Miller" />
                        </div>
                        <span className="text-xs">James Miller</span>
                        <span className="text-xs text-gray-500">1 week ago</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>18 replies</span>
                        <span>•</span>
                        <span>203 views</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <button className="px-4 py-2 bg-[#C3A1FF] text-white rounded-xl">
                    <MessageCircle className="inline-block mr-2 h-4 w-4" />
                    View All Forums
                  </button>
                </div>
              </div>
            </AnimatedSection>
          )}

          {activeTab === "profile" && (
            <AnimatedSection delay={200} className="mt-6">
              <div className="bg-white shadow rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Clock className="h-10 w-10 p-2 bg-white rounded-xl shrink-0" />
                    <div>
                      <h4 className="font-medium">Career Fair</h4>
                      <p className="text-gray-500">Main Campus, Building C</p>
                      <p className="text-sm text-gray-500">October 15, 2023 • 10:00 AM - 4:00 PM</p>
                      <div className="mt-2">
                        <button className="px-4 py-2 border rounded-xl">Add to Calendar</button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-10 w-10 p-2 bg-white rounded-xl shrink-0" />
                    <div>
                      <h4 className="font-medium">Workshop: Resume Building</h4>
                      <p className="text-gray-500">Virtual Event</p>
                      <p className="text-sm text-gray-500">October 20, 2023 • 3:00 PM - 5:00 PM</p>
                      <div className="mt-2">
                        <button className="px-4 py-2 border rounded-xl">Add to Calendar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;