import { useState } from "react";
import { Search, Filter, UserPlus, Mail, MessageCircle } from "lucide-react";

const AlumniConnector = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [connections, setConnections] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [activeTab, setActiveTab] = useState("discover");
 
  
  // Mock alumni data
  const alumni = [
    { 
      id: 1, 
      name: "Emma Johnson", 
      graduation: "2019", 
      field: "Computer Science", 
      company: "Google",
      position: "Senior Software Engineer",
      location: "San Francisco", 
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      connected: false,
      pending: false
    },
    { 
      id: 2, 
      name: "James Miller", 
      graduation: "2020", 
      field: "Business Administration", 
      company: "JP Morgan",
      position: "Investment Analyst",
      location: "New York", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      connected: false,
      pending: false
    },
    { 
      id: 3, 
      name: "Olivia Wang", 
      graduation: "2018", 
      field: "Marketing", 
      company: "Meta",
      position: "Marketing Manager",
      location: "Chicago", 
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      connected: true,
      pending: false
    },
    { 
      id: 4, 
      name: "Michael Smith", 
      graduation: "2021", 
      field: "Engineering", 
      company: "Tesla",
      position: "Product Engineer",
      location: "Boston", 
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      connected: false,
      pending: false
    },
    { 
      id: 5, 
      name: "Sophia Martinez", 
      graduation: "2020", 
      field: "Psychology", 
      company: "Health Network Inc.",
      position: "Organizational Psychologist",
      location: "Los Angeles", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      connected: false,
      pending: true
    },
    { 
      id: 6, 
      name: "David Kim", 
      graduation: "2019", 
      field: "Finance", 
      company: "Goldman Sachs",
      position: "Financial Advisor",
      location: "Seattle", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      connected: false,
      pending: false
    },
  ];
  
  // Initialize connections and pending requests from alumni data
  useState(() => {
    setConnections(alumni.filter(a => a.connected));
    setPendingRequests(alumni.filter(a => a.pending));
  }, []);
  
  const filteredAlumni = alumni.filter(person => 
    !person.connected && !person.pending &&
    (person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     person.field.toLowerCase().includes(searchQuery.toLowerCase()) ||
     person.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
     person.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
     person.position.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const handleConnect = (alumnus) => {
    alumnus.pending = true;
    setPendingRequests([...pendingRequests, alumnus]);
    // In a real app, this would send a connection request
  };
  
  const handleMessage = (alumnus) => {
    // In a real app, this would navigate to a messaging interface
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Connect with Alumni</h2>
      </div>

      <div className="mb-6">
        <div className="flex border-b">
          <button
            className={`px-4 py-2 ${activeTab === "discover" ? "border-b-2 border-[#C3A1FF]" : ""}`}
            onClick={() => setActiveTab("discover")}
          >
            Discover
          </button>
          <button
            className={`px-4 py-2 ${activeTab === "connections" ? "border-b-2 border-[#C3A1FF]" : ""}`}
            onClick={() => setActiveTab("connections")}
          >
            My Connections
          </button>
          <button
            className={`px-4 py-2 ${activeTab === "pending" ? "border-b-2 border-[#C3A1FF]" : ""}`}
            onClick={() => setActiveTab("pending")}
          >
            Pending
          </button>
        </div>
        
        {activeTab === "discover" && (
          <div>
            <div className="mb-6">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  className="w-full pl-10 py-2 border rounded-xl"
                  placeholder="Search alumni by name, field, company, position or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {["Computer Science", "Business", "Engineering", "Marketing", "Finance"].map((filter) => (
                  <button 
                    key={filter}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
                    onClick={() => setSearchQuery(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              {filteredAlumni.length > 0 ? (
                filteredAlumni.map((alumnus) => (
                  <div 
                    key={alumnus.id}
                    className="border rounded-xl p-4 flex flex-col sm:flex-row gap-4 hover:shadow-sm transition-shadow"
                  >
                    <div className="h-16 w-16 rounded-full overflow-hidden">
                      <img src={alumnus.image} alt={alumnus.name} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-lg">{alumnus.name}</h3>
                      <p className="text-gray-600">
                        {alumnus.position} at {alumnus.company}
                      </p>
                      <div className="mt-1 flex flex-wrap gap-2 text-sm">
                        <span className="text-gray-600">{alumnus.field}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-600">Class of {alumnus.graduation}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-600">{alumnus.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                      <button 
                        className="flex items-center gap-1 px-3 py-1 text-sm border rounded-xl hover:bg-gray-50"
                        onClick={() => {
                          alert("Request sent!");

                          handleConnect(alumnus);
                        }}
                      >
                        <UserPlus size={16} />
                        Connect
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-6 text-gray-600">
                  No alumni matched your search criteria. Try different keywords.
                </div>
              )}
            </div>
          </div>
        )}
        
        {activeTab === "connections" && (
          <div>
            {connections.length > 0 ? (
              <div className="space-y-4">
                {connections.map((alumnus) => (
                  <div 
                    key={alumnus.id}
                    className="border rounded-xl p-4 flex flex-col sm:flex-row gap-4 hover:shadow-sm transition-shadow"
                  >
                    <div className="h-16 w-16 rounded-full overflow-hidden">
                      <img src={alumnus.image} alt={alumnus.name} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-lg">{alumnus.name}</h3>
                      <p className="text-gray-600">
                        {alumnus.position} at {alumnus.company}
                      </p>
                      <div className="mt-1 flex flex-wrap gap-2 text-sm">
                        <span className="text-gray-600">{alumnus.field}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-600">Class of {alumnus.graduation}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-600">{alumnus.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                      <button 
                        className="flex items-center gap-1 px-3 py-1 text-sm border rounded-xl hover:bg-gray-50"
                        onClick={() => handleMessage(alumnus)}
                      >
                        <Mail size={16} />
                        Message
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-gray-600">
                You haven't connected with any alumni yet. Discover and connect with alumni in the Discover tab.
              </div>
            )}
          </div>
        )}
        
        {activeTab === "pending" && (
          <div>
            {pendingRequests.length > 0 ? (
              <div className="space-y-4">
                {pendingRequests.map((alumnus) => (
                  <div 
                    key={alumnus.id}
                    className="border rounded-xl p-4 flex flex-col sm:flex-row gap-4 hover:shadow-sm transition-shadow"
                  >
                    <div className="h-16 w-16 rounded-full overflow-hidden">
                      <img src={alumnus.image} alt={alumnus.name} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-lg">{alumnus.name}</h3>
                      <p className="text-gray-600">
                        {alumnus.position} at {alumnus.company}
                      </p>
                      <div className="mt-1 flex flex-wrap gap-2 text-sm">
                        <span className="text-gray-600">{alumnus.field}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-600">Class of {alumnus.graduation}</span>
                      </div>
                      <p className="text-xs text-[#C3A1FF] mt-2">Request Pending</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-gray-600">
                You don't have any pending connection requests.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AlumniConnector;