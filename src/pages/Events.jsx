
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const Events = () => {
  // Mock events data
  const events = [
    {
      id: 1,
      title: "Annual Alumni Networking Mixer",
      date: "June 15, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Grand Hotel, New York",
      image: "https://images.unsplash.com/photo-1511795409834-432f578949b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      attendees: 120,
      description: "Join us for an evening of networking, drinks, and appetizers with fellow alumni from all graduation years."
    },
    {
      id: 2,
      title: "Tech Industry Career Panel",
      date: "July 8, 2024",
      time: "5:30 PM - 7:30 PM",
      location: "Virtual Event",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      attendees: 85,
      description: "Hear from alumni leaders in the tech industry about career opportunities, trends, and advice for success."
    },
    {
      id: 3,
      title: "Homecoming Weekend",
      date: "October 12-14, 2024",
      time: "Various Times",
      location: "University Campus",
      image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      attendees: 350,
      description: "Return to campus for a weekend of class reunions, sporting events, and reconnecting with friends and faculty."
    },
    {
      id: 4,
      title: "Entrepreneurship Workshop",
      date: "August 22, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "Innovation Center, San Francisco",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      attendees: 60,
      description: "A hands-on workshop led by successful alumni entrepreneurs. Learn how to launch and grow your business idea."
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20 md:py-28">
      <AnimatedSection className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Alumni Events</h1>
        <p className="text-lg text-muted-[#0A0A0D] max-w-2xl mx-auto">
          Stay connected with your alma mater and fellow alumni through our exciting events.
          From networking mixers to educational workshops and reunions.
        </p>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {events.map((event, index) => (
          <AnimatedSection 
            key={event.id} 
            className="bg-card rounded-xl overflow-hidden border border-border/60 shadow-sm hover-lift"
            delay={index * 100}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{event.title}</h3>
              <p className="text-muted-[#0A0A0D] mb-4">{event.description}</p>
              
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#C3A1FF]" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#C3A1FF]" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#C3A1FF]" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-[#C3A1FF]" />
                  <span className="text-sm">{event.attendees} Attending</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-[#C3A1FF] text-white rounded-full font-medium text-sm hover:bg-[#C3A1FF]/90 transition-colors">
                  Register Now
                </button>
                <button className="px-4 py-2 border border-primary/30 text-[#C3A1FF] rounded-full font-medium text-sm hover:bg-[#C3A1FF]/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default Events;
