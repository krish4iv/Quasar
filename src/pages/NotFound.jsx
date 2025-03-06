
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { HomeIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-[#C3A1FF]/10 mb-6">
          <span className="text-4xl font-bold text-[#C3A1FF]">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-[#0A0A0D] mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been removed, renamed, or doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C3A1FF] text-white font-medium hover:bg-[#C3A1FF]/90 transition-all"
        >
          <HomeIcon size={18} /> Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
