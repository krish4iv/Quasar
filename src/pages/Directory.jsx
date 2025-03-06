import { useState } from "react";
import { Search } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const Directory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock alumni data
  const alumni = [
    { id: 1, name: "Emma Johnson", graduation: "2019", field: "Computer Science", location: "San Francisco", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" },
    { id: 2, name: "James Miller", graduation: "2020", field: "Business Administration", location: "New York", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" },
    { id: 3, name: "Olivia Wang", graduation: "2018", field: "Marketing", location: "Chicago", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" },
    { id: 4, name: "Michael Smith", graduation: "2021", field: "Engineering", location: "Boston", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" },
    { id: 5, name: "Sophia Martinez", graduation: "2020", field: "Psychology", location: "Los Angeles", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" },
    { id: 6, name: "David Kim", graduation: "2019", field: "Finance", location: "Seattle", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" },
  ];
  
  const filteredAlumni = alumni.filter(person => 
    person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.field.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-20 md:py-28">
      <AnimatedSection className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Alumni Directory</h1>
        <p className="text-lg text-muted-[#0A0A0D] max-w-2xl mx-auto">
          Connect with fellow alumni from around the world. Browse profiles, filter by graduation year, 
          field of study, or location.
        </p>
      </AnimatedSection>
      
      <AnimatedSection delay={100} className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-[#0A0A0D]" />
          <input
            className="pl-10 py-6 rounded-full"
            placeholder="Search by name, field of study, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={200} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAlumni.map((person) => (
          <div 
            key={person.id}
            className="bg-card rounded-xl p-6 hover-lift shadow-sm border border-border/60"
          >
            <div className="flex items-center space-x-4">
              <img 
                src={person.image} 
                alt={person.name} 
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{person.name}</h3>
                <p className="text-muted-[#0A0A0D]">Class of {person.graduation}</p>
              </div>
            </div>
            <div className="mt-4">
              <p><span className="font-medium">Field:</span> {person.field}</p>
              <p><span className="font-medium">Location:</span> {person.location}</p>
              <button className="mt-3 text-[#C3A1FF] hover:text-[#C3A1FF]/80 text-sm font-medium">
                View Full Profile
              </button>
            </div>
          </div>
        ))}
      </AnimatedSection>
    </div>
  );
};

export default Directory;
