import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import AnimatedSection from "../../components/AnimatedSection";
import { BriefcaseIcon, GraduationCapIcon, UsersIcon, MapPinIcon, MailIcon, BuildingIcon, NetworkIcon, CalendarIcon, MessageCircleIcon } from "lucide-react";
import EventManagement from "../../components/alumni/EventsManagement";
import ForumManagement from "../../components/alumni/FormManagement";

const AlumniDashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [activeProfileTab, setActiveProfileTab] = useState("experience");

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Alumni Dashboard</h1>
        <button 
          className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-100"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Horizontal Navbar */}
      <AnimatedSection>
        <div className="bg-white rounded-xl shadow p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button 
              className={`flex items-center px-4 py-2 rounded-xl ${
                activeTab === "profile" 
                  ? "bg-[#C3A1FF] text-white" 
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("profile")}
            >
              <UsersIcon className="mr-2 h-4 w-4" />
              Profile
            </button>
            <button 
              className={`flex items-center px-4 py-2 rounded-xl ${
                activeTab === "events" 
                  ? "bg-[#C3A1FF] text-white" 
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("events")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              Events
            </button>
            <button 
              className={`flex items-center px-4 py-2 rounded-xl ${
                activeTab === "forums" 
                  ? "bg-[#C3A1FF] text-white" 
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("forums")}
            >
              <MessageCircleIcon className="mr-2 h-4 w-4" />
              Forums
            </button>
            <button 
              className={`flex items-center px-4 py-2 rounded-xl ${
                activeTab === "mentorship" 
                  ? "bg-[#C3A1FF] text-white" 
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("mentorship")}
            >
              <NetworkIcon className="mr-2 h-4 w-4" />
              Mentorship
            </button>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <AnimatedSection>
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-24 w-24 mb-4 rounded-full overflow-hidden">
                  <img 
                    src={currentUser?.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"} 
                    alt={currentUser?.firstName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold">{currentUser?.firstName} {currentUser?.lastName}</h2>
                <p className="text-gray-600">Senior Software Engineer at Tech Corp</p>
                <p className="mt-2 text-sm">{currentUser?.graduationYear ? `Class of ${currentUser.graduationYear}` : "Alumni"}</p>
                
                <div className="w-full mt-4">
                  <button className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-100">
                    Edit Profile
                  </button>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <BriefcaseIcon className="text-gray-600" />
                  <div>
                    <p className="text-sm font-medium">Current Position</p>
                    <p className="text-sm text-gray-600">Senior Software Engineer</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <BuildingIcon className="text-gray-600" />
                  <div>
                    <p className="text-sm font-medium">Company</p>
                    <p className="text-sm text-gray-600">Tech Corp</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPinIcon className="text-gray-600" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MailIcon className="text-gray-600" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-gray-600">{currentUser?.email || "alumni@example.com"}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        <div className="md:col-span-3">
          {activeTab === "profile" && (
            <AnimatedSection delay={100}>
              <div className="bg-white rounded-xl shadow">
                <div className="border-b">
                  <div className="flex">
                    <button 
                      className={`px-4 py-2 ${
                        activeProfileTab === "experience" 
                          ? "border-b-2 border-gray-900" 
                          : ""
                      }`}
                      onClick={() => setActiveProfileTab("experience")}
                    >
                      Experience
                    </button>
                    <button 
                      className={`px-4 py-2 ${
                        activeProfileTab === "education" 
                          ? "border-b-2 border-gray-900" 
                          : ""
                      }`}
                      onClick={() => setActiveProfileTab("education")}
                    >
                      Education
                    </button>
                    <button 
                      className={`px-4 py-2 ${
                        activeProfileTab === "networking" 
                          ? "border-b-2 border-gray-900" 
                          : ""
                      }`}
                      onClick={() => setActiveProfileTab("networking")}
                    >
                      Networking
                    </button>
                  </div>
                </div>
                
                {activeProfileTab === "experience" && (
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Work Experience</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <BriefcaseIcon className="h-10 w-10 p-2 bg-gray-100 rounded shrink-0" />
                        <div>
                          <h4 className="font-medium">Senior Software Engineer</h4>
                          <p className="text-gray-600">Tech Corp</p>
                          <p className="text-sm text-gray-600">January 2020 - Present</p>
                          <p className="text-sm mt-2">
                            Leading development of cloud-native applications and mentoring junior engineers.
                            Implemented new features that increased user engagement by 25%.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <BriefcaseIcon className="h-10 w-10 p-2 bg-gray-100 rounded shrink-0" />
                        <div>
                          <h4 className="font-medium">Software Engineer</h4>
                          <p className="text-gray-600">Startup Inc.</p>
                          <p className="text-sm text-gray-600">June 2016 - December 2019</p>
                          <p className="text-sm mt-2">
                            Developed and maintained web applications using React and Node.js.
                            Collaborated with cross-functional teams to deliver features on time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeProfileTab === "education" && (
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Education</h3>
                    <div className="flex gap-4">
                      <GraduationCapIcon className="h-10 w-10 p-2 bg-gray-100 rounded" />
                      <div>
                        <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                        <p className="text-gray-600">State University</p>
                        <p className="text-sm text-gray-600">2012 - 2016</p>
                        <p className="text-sm mt-2">Graduated with honors</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeProfileTab === "networking" && (
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Alumni Network</h3>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <NetworkIcon className="h-10 w-10 p-2 bg-gray-100 rounded shrink-0" />
                        <div>
                          <h4 className="font-medium">Mentorship Program</h4>
                          <p className="text-sm text-gray-600">Currently mentoring 2 students</p>
                          <div className="mt-2">
                            <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100">
                              Manage Mentees
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <UsersIcon className="h-10 w-10 p-2 bg-gray-100 rounded shrink-0" />
                        <div>
                          <h4 className="font-medium">Alumni Groups</h4>
                          <p className="text-sm text-gray-600">Member of Computer Science Alumni Association</p>
                          <div className="mt-2">
                            <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100">
                              View Groups
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          )}
          
          {activeTab === "events" && (
            <AnimatedSection delay={100}>
              <EventManagement />
            </AnimatedSection>
          )}
          
          {activeTab === "forums" && (
            <AnimatedSection delay={100}>
              <ForumManagement />
            </AnimatedSection>
          )}
          
          {activeTab === "mentorship" && (
            <AnimatedSection delay={100}>
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Mentorship Program</h3>
                <p className="text-gray-600 mb-6">
                  Share your knowledge and experience with current students. Join our mentorship program to help guide the next generation of professionals.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 border rounded-xl">
                    <h4 className="font-medium mb-2">Your Current Mentees</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                            alt="Alex Johnson"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Alex Johnson</p>
                          <p className="text-xs text-gray-600">Computer Science, Junior</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                            alt="Samantha Lee"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Samantha Lee</p>
                          <p className="text-xs text-gray-600">Computer Science, Senior</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button className="px-3 py-1 text-sm bg-[#C3A1FF] text-white rounded hover:bg-gray-800">
                        Schedule Meeting
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-xl">
                    <h4 className="font-medium mb-2">Mentorship Requests</h4>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full overflow-hidden">
                            <img 
                              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                              alt="Maria Rodriguez"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">Maria Rodriguez</p>
                            <p className="text-xs text-gray-600">Computer Science, Sophomore</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100">
                            Decline
                          </button>
                          <button className="px-3 py-1 text-sm bg-[#C3A1FF] text-white rounded hover:bg-gray-800">
                            Accept
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
          
          {activeTab === "profile" && (
            <AnimatedSection delay={200} className="mt-6">
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Upcoming Alumni Events</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CalendarIcon className="h-10 w-10 p-2 bg-gray-100 rounded shrink-0" />
                    <div>
                      <h4 className="font-medium">Annual Alumni Reunion</h4>
                      <p className="text-gray-600">Main Campus, Grand Hall</p>
                      <p className="text-sm text-gray-600">December 5, 2023 • 6:00 PM - 9:00 PM</p>
                      <div className="mt-2">
                        <button className="px-3 py-1 text-sm bg-[#C3A1FF] text-white rounded hover:bg-gray-800">
                          RSVP
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CalendarIcon className="h-10 w-10 p-2 bg-gray-100 rounded shrink-0" />
                    <div>
                      <h4 className="font-medium">Tech Industry Panel</h4>
                      <p className="text-gray-600">Virtual Event</p>
                      <p className="text-sm text-gray-600">November 15, 2023 • 5:00 PM - 7:00 PM</p>
                      <div className="mt-2">
                        <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100">
                          Add to Calendar
                        </button>
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

export default AlumniDashboard;