import { useState } from "react";
import { Search, Star, Briefcase, Award, MessageSquare } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const Mentorship = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock mentors data
  const mentors = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Senior Data Scientist at TechCorp",
      experience: "12 years",
      expertise: ["Machine Learning", "Data Analysis", "AI Ethics"],
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      bio: "Specializing in applied machine learning solutions for business problems. Passionate about mentoring the next generation of data scientists."
    },
    {
      id: 2,
      name: "Marcus Johnson",
      title: "Marketing Director at GlobalBrands",
      experience: "8 years",
      expertise: ["Digital Marketing", "Brand Strategy", "Market Research"],
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      bio: "Helping brands tell compelling stories. Former startup founder with experience in building marketing teams from the ground up."
    },
    {
      id: 3,
      name: "Jennifer Silva",
      title: "Senior Software Engineer at InnoTech",
      experience: "10 years",
      expertise: ["Full-Stack Development", "Software Architecture", "Team Leadership"],
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      bio: "Tech lead with experience in building scalable applications. Passionate about clean code and mentoring junior developers."
    },
    {
      id: 4,
      name: "Robert Park",
      title: "Investment Banker at CapitalFirm",
      experience: "15 years",
      expertise: ["Financial Analysis", "Mergers & Acquisitions", "Investment Strategy"],
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      bio: "Experienced in guiding companies through IPOs and major transactions. Ready to help aspiring finance professionals navigate the industry."
    },
  ];
  
  const filteredMentors = mentors.filter(mentor => 
    mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mentor.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
    mentor.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-20 md:py-28">
      <AnimatedSection className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Find a Mentor</h1>
        <p className="text-lg text-muted-[#0A0A0D] max-w-2xl mx-auto">
          Connect with experienced alumni who are ready to guide you in your career journey.
          Our mentors offer personalized advice, industry insights, and professional support.
        </p>
      </AnimatedSection>
      
      <AnimatedSection delay={100} className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-[#0A0A0D]" />
          <input
            className="pl-10 py-6 rounded-full"
            placeholder="Search by name, expertise, or industry..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={200} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredMentors.map((mentor) => (
          <div 
            key={mentor.id}
            className="bg-card rounded-xl p-6 hover-lift shadow-sm border border-border/60 flex flex-col md:flex-row gap-6"
          >
            <div className="md:w-1/3 flex justify-center">
              <img 
                src={mentor.image} 
                alt={mentor.name} 
                className="h-32 w-32 rounded-full object-cover border-4 border-primary/20"
              />
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-xl">{mentor.name}</h3>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{mentor.rating}</span>
                </div>
              </div>
              
              <p className="text-[#C3A1FF] font-medium mb-2">{mentor.title}</p>
              
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="h-4 w-4 text-muted-[#0A0A0D]" />
                <span className="text-sm text-muted-[#0A0A0D]">{mentor.experience} experience</span>
              </div>
              
              <p className="text-sm text-muted-[#0A0A0D] mb-3">{mentor.bio}</p>
              
              <div className="mb-4">
                <p className="text-sm font-semibold mb-1">Expertise:</p>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 bg-[#C3A1FF]/10 text-[#C3A1FF] rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="flex items-center gap-1 px-4 py-2 bg-[#C3A1FF] text-white rounded-full text-sm hover:bg-[#C3A1FF]/90 transition-colors">
                  <MessageSquare className="h-4 w-4" />
                  Request Mentorship
                </button>
                <button className="px-4 py-2 border border-primary/30 text-[#C3A1FF] rounded-full text-sm hover:bg-[#C3A1FF]/10 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </AnimatedSection>
    </div>
  );
};

export default Mentorship;
