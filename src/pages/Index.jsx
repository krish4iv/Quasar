
import AnimatedSection from "../components/AnimatedSection";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      {/* Hero Section - without the image */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-[#C3A1FF]/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#C3A1FF]/10 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-[#C3A1FF]/10 border border-primary/20">
              <span className="text-sm font-medium text-[#C3A1FF]">Connect with Alumni Worldwide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Your Professional Journey
              <span className="text-gradient"> Starts Here</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-[#0A0A0D]">
              Connect with fellow alumni, find mentors, discover job opportunities, and grow your professional network on our exclusive platform.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C3A1FF] text-white font-medium hover:bg-[#C3A1FF]/90 transition-all hover-lift"
              >
                Get Started <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#F4F4F7] text-[#0A0A0D] font-medium hover:bg-[#F4F4F7]/70 transition-all"
              >
                Learn More
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-[#F4F4F7]/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-lg text-muted-[#0A0A0D] max-w-2xl mx-auto">
              Our alumni platform provides all the tools and resources you need to grow your network and advance your career.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={100} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border/60 shadow-sm hover-lift"
              >
                <div className="h-12 w-12 rounded-full bg-[#C3A1FF]/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-[#0A0A0D]">{feature.description}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#C3A1FF] mb-2">{stat.value}</div>
                <p className="text-muted-[#0A0A0D]">{stat.label}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-[#C3A1FF]/5 py-16 md:py-24 rounded-3xl mx-4 my-12">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community Today</h2>
            <p className="text-lg text-muted-[#0A0A0D] mb-8">
              Become part of a vibrant network of professionals who are changing the world. Connect, learn, and grow together.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C3A1FF] text-white font-medium hover:bg-[#C3A1FF]/90 transition-all hover-lift text-lg"
            >
              Create Your Account <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

// Sample data for the features section
const features = [
  {
    title: "Alumni Directory",
    description: "Browse and connect with alumni from around the world based on location, industry, or graduation year.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C3A1FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  },
  {
    title: "Mentorship Programs",
    description: "Find mentors or become one. Share your expertise and help others grow in their careers.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C3A1FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  },
  {
    title: "Job Board",
    description: "Exclusive job postings from alumni employers and trusted partners. Find your next career opportunity.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C3A1FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  },
  {
    title: "Events Calendar",
    description: "Stay updated on networking events, webinars, and reunions happening online and in your area.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C3A1FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  },
  {
    title: "Professional Development",
    description: "Access to exclusive resources, courses, and workshops to help advance your skills and career.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C3A1FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  },
  {
    title: "Networking Groups",
    description: "Join industry-specific or regional groups to connect with alumni who share your interests.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C3A1FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  },
];

// Sample data for the stats section
const stats = [
  { value: "10K+", label: "Alumni Members" },
  { value: "500+", label: "Mentors" },
  { value: "1,200+", label: "Jobs Posted" },
  { value: "85+", label: "Countries" },
];

export default Index;
