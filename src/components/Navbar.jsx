import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Assuming this context is defined elsewhere

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth(); // Using the context to access the current user and logout function
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Directory", path: "/directory" },
    { name: "Mentorship", path: "/mentorship" },
    { name: "Jobs", path: "/jobs" },
    { name: "Events", path: "/events" },
    {name: "Forums", path: "/forums"}
  ];
  
  const handleLogout = () => {
    logout();
    navigate('/signin');
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2 glass" : "py-4 bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-bold text-[#C3A1FF]">Alumni</span>
            <span className="text-xl font-medium">Portal</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all 
                  ${location.pathname === link.path 
                    ? "bg-[#C3A1FF] text-[#FFFFFF]"  // Active state: White text
                    : "text-[#0A0A0D] hover:bg-[#F4F4F7]"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            {currentUser ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full font-medium text-sm bg-[#C3A1FF] text-white hover:bg-[#C3A1FF]-400/90 transition-all"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="px-4 py-2 rounded-full font-medium text-sm border-2 border-[#C3A1FF]/80 text-[#C3A1FF] hover:bg-[#C3A1FF]/10 transition-all"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 rounded-full font-medium text-sm bg-[#C3A1FF] text-white hover:bg-[#C3A1FF]-400/90 transition-all"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <span>X</span> : <span>Menu</span>}
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass backdrop-blur-lg animate-fade-in">
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    location.pathname === link.path
                      ? "text-[#C3A1FF]-[#0A0A0D] bg-[#C3A1FF]"
                      : "text-[#0A0A0D] hover:bg-[#F4F4F7]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="flex flex-col gap-2 mt-4">
                {currentUser ? (
                  <button
                    onClick={handleLogout}
                    className="px-4 py-3 rounded-lg font-medium bg-[#C3A1FF] text-white hover:bg-[#C3A1FF]/90 transition-all text-center"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <Link
                      to="/signin"
                      className="px-4 py-3 rounded-lg font-medium border border-primary/80 text-[#C3A1FF] hover:bg-[#C3A1FF]/10 transition-all text-center"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="px-4 py-3 rounded-lg font-medium bg-[#C3A1FF] text-white hover:bg-[#C3A1FF]/90 transition-all text-center"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
