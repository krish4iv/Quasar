import { useState } from "react";
import { Search, Briefcase, MapPin, Clock, Building, DollarSign } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock jobs data
  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechInnovate",
      location: "San Francisco, CA (Remote)",
      type: "Full-time",
      salary: "$130,000 - $160,000",
      posted: "2 days ago",
      logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      description: "We're seeking an experienced software engineer to join our growing team. You'll work on cutting-edge technologies and help scale our platform to millions of users."
    },
    {
      id: 2,
      title: "Marketing Manager",
      company: "Global Brands Inc.",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90,000 - $110,000",
      posted: "1 week ago",
      logo: "https://images.unsplash.com/photo-1595683213102-6eda51ada67f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      description: "Lead our marketing initiatives across digital and traditional channels. Develop strategies to increase brand awareness and drive customer acquisition."
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "AnalyticsAI",
      location: "Remote",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      posted: "3 days ago",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      description: "Join our data science team to build machine learning models that power our product recommendations and predictive analytics features."
    },
    {
      id: 4,
      title: "UX/UI Designer",
      company: "DesignForward",
      location: "Chicago, IL (Hybrid)",
      type: "Full-time",
      salary: "$85,000 - $115,000",
      posted: "5 days ago",
      logo: "https://images.unsplash.com/photo-1601784551127-291407e1313e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      description: "Create beautiful and intuitive user experiences for our flagship product. Work closely with product managers and engineers to bring designs to life."
    },
    {
      id: 5,
      title: "Financial Analyst",
      company: "Capital Investments",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$75,000 - $95,000",
      posted: "1 week ago",
      logo: "https://images.unsplash.com/photo-1586034679970-cb7b5fc4928a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      description: "Analyze financial data, create reports, and make recommendations to improve financial performance. Support senior managers with financial modeling and forecasting."
    },
    {
      id: 6,
      title: "Product Manager",
      company: "ProductVision",
      location: "Seattle, WA (Remote)",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      posted: "2 days ago",
      logo: "https://images.unsplash.com/photo-1616877562292-0ceafc8311c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      description: "Lead the development of new features for our B2B SaaS platform. Work with engineering, design, and sales teams to deliver exceptional product experiences."
    },
  ];
  
  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-20 md:py-28">
      <AnimatedSection className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Alumni Job Board</h1>
        <p className="text-lg text-muted-[#0A0A0D] max-w-2xl mx-auto">
          Discover career opportunities shared by fellow alumni and partners.
          From entry-level positions to executive roles across various industries.
        </p>
      </AnimatedSection>
      
      <AnimatedSection delay={100} className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-[#0A0A0D]" />
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={200} className="grid grid-cols-1 gap-6">
        {filteredJobs.map((job) => (
          <div 
            key={job.id}
            className="bg-card rounded-xl p-6 hover-lift shadow-sm border border-border/60 flex flex-col md:flex-row gap-6"
          >
            <div className="md:w-1/6 flex items-center justify-center">
              <div className="h-20 w-20 bg-[#F4F4F7] rounded-lg flex items-center justify-center p-1">
                <img 
                  src={job.logo} 
                  alt={job.company}
                  className="max-h-full max-w-full object-contain rounded"
                />
              </div>
            </div>
            <div className="md:w-4/6">
              <h3 className="font-bold text-xl mb-2">{job.title}</h3>
              <div className="flex flex-wrap gap-y-2 gap-x-4 mb-3">
                <div className="flex items-center gap-1 text-muted-[#0A0A0D]">
                  <Building className="h-4 w-4" />
                  <span className="text-sm">{job.company}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-[#0A0A0D]">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{job.location}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-[#0A0A0D]">
                  <Briefcase className="h-4 w-4" />
                  <span className="text-sm">{job.type}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-[#0A0A0D]">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-sm">{job.salary}</span>
                </div>
              </div>
              <p className="text-sm text-muted-[#0A0A0D] mb-4">{job.description}</p>
              <div className="flex items-center gap-1 text-[#C3A1FF] text-sm">
                <Clock className="h-4 w-4" />
                <span>Posted {job.posted}</span>
              </div>
            </div>
            <div className="md:w-1/6 flex md:flex-col items-center justify-center gap-3">
              <button className="px-4 py-2 bg-[#C3A1FF] text-white rounded-full text-sm font-medium hover:bg-[#C3A1FF]/90 transition-colors w-full">
                Apply Now
              </button>
              <button className="px-4 py-2 border border-primary/30 text-[#C3A1FF] rounded-full text-sm font-medium hover:bg-[#C3A1FF]/10 transition-colors w-full">
                Save Job
              </button>
            </div>
          </div>
        ))}
      </AnimatedSection>
    </div>
  );
};

export default Jobs;
