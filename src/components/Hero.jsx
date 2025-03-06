import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#C3A1FF]/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#C3A1FF]/10 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
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
            
            <div className="flex flex-wrap gap-4">
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
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl shadow-primary/10 hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                alt="Alumni networking" 
                className="w-full h-auto object-cover rounded-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4 shadow-lg animate-float z-20">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#C3A1FF]/20 flex items-center justify-center">
                  <span className="text-[#C3A1FF] text-lg font-bold">10K+</span>
                </div>
                <div>
                  <h3 className="font-medium">Alumni Network</h3>
                  <p className="text-sm text-muted-[#0A0A0D]">Worldwide connections</p>
                </div>
              </div>
            </div>
            
            {/* Floating mentors card */}
            <div className="absolute -top-4 -right-4 glass rounded-xl p-4 shadow-lg animate-float z-20" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#C3A1FF]/20 flex items-center justify-center">
                  <span className="text-[#C3A1FF] text-lg font-bold">500+</span>
                </div>
                <div>
                  <h3 className="font-medium">Mentors</h3>
                  <p className="text-sm text-muted-[#0A0A0D]">Ready to guide you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
