import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import AnimatedSection from "../../components/AnimatedSection";
import { Building, Users, Calendar, GraduationCap, Mail, MapPin, FileText, BarChart } from "lucide-react";

const InstituteDashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("metrics");

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "metrics":
        return (
          <>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Alumni Engagement</h3>
              <button className="flex items-center border border-border px-3 py-1.5 rounded-lg text-sm hover:bg-secondary/80">
                <FileText className="mr-2 h-4 w-4" />
                Export Report
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <h4 className="text-sm text-muted-foreground">Alumni Registered</h4>
                <p className="text-2xl font-bold mt-1">12,543</p>
                <p className="text-xs text-green-500">+15% from last year</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <h4 className="text-sm text-muted-foreground">Active Mentors</h4>
                <p className="text-2xl font-bold mt-1">342</p>
                <p className="text-xs text-green-500">+8% from last year</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <h4 className="text-sm text-muted-foreground">Event Attendance</h4>
                <p className="text-2xl font-bold mt-1">78%</p>
                <p className="text-xs text-green-500">+5% from last year</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-3">Top Industries</h4>
              <div className="space-y-3">
                {[
                  { name: "Technology", percentage: 35 },
                  { name: "Finance", percentage: 25 },
                  { name: "Healthcare", percentage: 18 },
                  { name: "Education", percentage: 12 },
                  { name: "Other", percentage: 10 }
                ].map((industry) => (
                  <div key={industry.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">{industry.name}</span>
                      <span className="text-sm font-medium">{industry.percentage}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full">
                      <div
                        className="h-2 bg-[#C3A1FF] rounded-full"
                        style={{ width: `${industry.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      case "events":
        return (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Annual Alumni Meetup 2024</h4>
                    <p className="text-sm text-muted-foreground mt-1">Join us for networking and celebration</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">March 15, 2024</span>
                    </div>
                  </div>
                  <button className="border border-border px-3 py-1.5 rounded-lg text-sm hover:bg-secondary/80">
                    View Details
                  </button>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Career Fair Spring 2024</h4>
                    <p className="text-sm text-muted-foreground mt-1">Connect with potential employers</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">April 5, 2024</span>
                    </div>
                  </div>
                  <button className="border border-border px-3 py-1.5 rounded-lg text-sm hover:bg-secondary/80">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case "programs":
        return (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Active Programs</h3>
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Mentorship Program</h4>
                    <p className="text-sm text-muted-foreground mt-1">Connect experienced alumni with current students</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">342 Active Mentors</span>
                    </div>
                  </div>
                  <button className="border border-border px-3 py-1.5 rounded-lg text-sm hover:bg-secondary/80">
                    Manage Program
                  </button>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Alumni Speaker Series</h4>
                    <p className="text-sm text-muted-foreground mt-1">Industry experts sharing their experiences</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">Monthly Events</span>
                    </div>
                  </div>
                  <button className="border border-border px-3 py-1.5 rounded-lg text-sm hover:bg-secondary/80">
                    View Schedule
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navbar */}
      <div className="flex justify-between items-center bg-white rounded-xl shadow p-4 mb-6">
        <h1 className="text-3xl font-bold">Institute Dashboard</h1>
        <div className="flex items-center gap-4">
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium ${activeTab === "metrics" ? "bg-[#C3A1FF] text-white" : "bg-secondary/80 text-muted-foreground"}`}
            onClick={() => setActiveTab("metrics")}
          >
            Alumni Metrics
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium ${activeTab === "events" ? "bg-[#C3A1FF] text-white" : "bg-secondary/80 text-muted-foreground"}`}
            onClick={() => setActiveTab("events")}
          >
            Events
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium ${activeTab === "programs" ? "bg-[#C3A1FF] text-white" : "bg-secondary/80 text-muted-foreground"}`}
            onClick={() => setActiveTab("programs")}
          >
            Programs
          </button>
          <button className="border border-border px-4 py-2 rounded-lg hover:bg-secondary/80" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <AnimatedSection>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-24 w-24 mb-4 rounded-full overflow-hidden">
                  <img
                    src={currentUser?.profileImage || "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"}
                    alt={currentUser?.instituteName}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold">{currentUser?.instituteName || "State University"}</h2>
                <p className="text-muted-foreground">Educational Institution</p>
                <p className="mt-2 text-sm">Founded 1950</p>

                <div className="w-full mt-4">
                  <button className="w-full mt-2 border border-border px-4 py-2 rounded-lg hover:bg-secondary/80">Edit Profile</button>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Building className="text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Institution Type</p>
                    <p className="text-sm text-muted-foreground">Public University</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Contact</p>
                    <p className="text-sm text-muted-foreground">{currentUser?.email || "admin@university.edu"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Total Alumni</p>
                    <p className="text-sm text-muted-foreground">25,000+</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="md:col-span-2">
          <AnimatedSection delay={100}>
            <div className="bg-card border border-border rounded-lg p-6">
              {renderTabContent()}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default InstituteDashboard;