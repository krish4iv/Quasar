
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, link, delay = 0, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 * index + delay);
    
    return () => clearTimeout(timer);
  }, [index, delay]);
  
  return (
    <div
      className={`group rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover-lift border border-border hover:border-primary/20 relative bg-card ${
        isVisible ? "animate-scale-up" : "opacity-0"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient background on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
      
      <div className="relative z-10">
        <div className="h-14 w-14 rounded-full bg-[#C3A1FF]/10 flex items-center justify-center mb-6 text-[#C3A1FF] group-hover:bg-[#C3A1FF] group-hover:text-white transition-all duration-300">
          <Icon size={24} strokeWidth={2} />
        </div>

        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-[#0A0A0D] mb-6">{description}</p>
        
        {link && (
          <Link
            to={link}
            className="inline-flex items-center text-[#C3A1FF] font-medium group/link"
          >
            Learn more
            <ArrowRight
              size={16}
              className="ml-1 transform transition-transform duration-300 group-hover/link:translate-x-1"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
