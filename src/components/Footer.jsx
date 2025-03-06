
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Briefcase,
  Calendar,
  Users,
  Heart,
  Mail,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-[#C3A1FF]">Alumni</span>
              <span className="text-xl font-medium">Portal</span>
            </Link>
            <p className="text-muted-[#0A0A0D] mb-4">
              Connecting graduates worldwide for mentorship, networking, and career opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-[#0A0A0D] hover:text-[#C3A1FF] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-[#0A0A0D] hover:text-[#C3A1FF] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-[#0A0A0D] hover:text-[#C3A1FF] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-[#0A0A0D] hover:text-[#C3A1FF] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-[#0A0A0D] hover:text-[#C3A1FF] transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/mentorship" className="text-muted-[#0A0A0D] hover:text-[#C3A1FF] transition-colors flex items-center gap-2">
                  <GraduationCap size={16} /> Mentorship
                </Link>
              </li>
              <li>
                <Link to="/directory" className="text-muted-[#0A0A0D] hover:text-[#C3A1FF] transition-colors flex items-center gap-2">
                  <Users size={16} /> Alumni Directory
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-muted-[#0A0A0D] hover:text-[#C3A1FF] transition-colors flex items-center gap-2">
                  <Briefcase size={16} /> Job Postings
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-[#0A0A0D] hover:text-[#C3A1FF] transition-colors flex items-center gap-2">
                  <Calendar size={16} /> Events
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-[#0A0A0D] hover:text-[#C3A1FF] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-[#0A0A0D] hover:text-[#C3A1FF] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-[#0A0A0D] hover:text-[#C3A1FF] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-[#0A0A0D] hover:text-[#C3A1FF] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-muted-[#0A0A0D] hover:text-[#C3A1FF] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-[#0A0A0D] hover:text-[#C3A1FF] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-[#0A0A0D] hover:text-[#C3A1FF] transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-muted-[#0A0A0D] hover:text-[#C3A1FF] transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-[#0A0A0D]">
            © {year} Alumni Portal. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-sm text-muted-[#0A0A0D] flex items-center">
              Made with <Heart size={14} className="mx-1 text-[#C3A1FF]" /> for alumni everywhere
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
