import { useState } from "react";
import { Calendar, MapPin, Clock, Users, Check, X } from "lucide-react";


const StudentEvents = () => {
  // Mock events data
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Annual Alumni Networking Mixer",
      date: "June 15, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Grand Hotel, New York",
      image: "https://images.unsplash.com/photo-1511795409834-432f578949b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      attendees: 120,
      organizer: "Alumni Association",
      description: "Join us for an evening of networking, drinks, and appetizers with fellow alumni from all graduation years.",
      status: null // null = not responded, "going", "not-going"
    },
    {
      id: 2,
      title: "Tech Industry Career Panel",
      date: "July 8, 2024",
      time: "5:30 PM - 7:30 PM",
      location: "Virtual Event",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      attendees: 85,
      organizer: "Computer Science Department",
      description: "Hear from alumni leaders in the tech industry about career opportunities, trends, and advice for success.",
      status: "going"
    },
    {
      id: 3,
      title: "Homecoming Weekend",
      date: "October 12-14, 2024",
      time: "Various Times",
      location: "University Campus",
      image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      attendees: 350,
      organizer: "University Events",
      description: "Return to campus for a weekend of class reunions, sporting events, and reconnecting with friends and faculty.",
      status: null
    },
    {
      id: 4,
      title: "Entrepreneurship Workshop",
      date: "August 22, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "Innovation Center, San Francisco",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      attendees: 60,
      organizer: "Business School",
      description: "A hands-on workshop led by successful alumni entrepreneurs. Learn how to launch and grow your business idea.",
      status: "not-going"
    },
  ]);
  
  const handleRSVP = (id, status) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, status } : event
    ));
    
    const event = events.find(e => e.id === id);
        alert(`You are ${status === 'going' ? 'attending' : 'not attending'} "${event.title}"`);
  };
  
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="w-full bg-white shadow rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
      
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-xl ${
            activeTab === "all" ? "bg-[#C3A1FF] text-white" : "bg-gray-100"
          }`}
          onClick={() => setActiveTab("all")}
        >
          All Events
        </button>
        <button
          className={`px-4 py-2 rounded-xl ${
            activeTab === "going" ? "bg-[#C3A1FF] text-white" : "bg-gray-100"
          }`}
          onClick={() => setActiveTab("going")}
        >
          Attending
        </button>
        <button
          className={`px-4 py-2 rounded-xl ${
            activeTab === "not-responded" ? "bg-[#C3A1FF] text-white" : "bg-gray-100"
          }`}
          onClick={() => setActiveTab("not-responded")}
        >
          Not Responded
        </button>
      </div>
      
      {/* Tab Content */}
      {activeTab === "all" && (
        <div className="space-y-6">
          {events.map((event) => (
            <div 
              key={event.id}
              className="border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                  {event.status && (
                    <span className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm ${
                      event.status === 'going' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    }`}>
                      {event.status === 'going' ? 'Attending' : 'Not Attending'}
                    </span>
                  )}
                </div>
                <div className="p-4 md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-500 mb-4">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
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
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Organized by: {event.organizer}
                    </span>
                    <div className="flex gap-2">
                      <button
                        className={`px-4 py-2 rounded-xl flex items-center gap-1 ${
                          event.status === 'going' ? 'bg-[#C3A1FF] text-white' : 'bg-gray-100'
                        }`}
                        onClick={() => handleRSVP(event.id, 'going')}
                      >
                        <Check size={16} />
                        Attend
                      </button>
                      <button
                        className={`px-4 py-2 rounded-xl flex items-center gap-1 ${
                          event.status === 'not-going' ? 'bg-red-500 text-white' : 'bg-gray-100'
                        }`}
                        onClick={() => handleRSVP(event.id, 'not-going')}
                      >
                        <X size={16} />
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {activeTab === "going" && (
        <div className="space-y-6">
          {events.filter(e => e.status === 'going').length > 0 ? (
            events
              .filter(e => e.status === 'going')
              .map((event) => (
                <div 
                  key={event.id}
                  className="border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto relative">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 right-2 px-3 py-1 rounded-full bg-green-500 text-white text-sm">
                        Attending
                      </span>
                    </div>
                    <div className="p-4 md:w-2/3">
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-500 mb-4">{event.description}</p>
                      
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
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
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Organized by: {event.organizer}
                        </span>
                        <button
                          className="px-4 py-2 rounded-xl bg-gray-100 flex items-center gap-1"
                          onClick={() => handleRSVP(event.id, 'not-going')}
                        >
                          <X size={16} />
                          Cancel RSVP
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center py-6 text-gray-500">
              You're not attending any events yet. Browse the All Events tab to RSVP.
            </div>
          )}
        </div>
      )}
      
      {activeTab === "not-responded" && (
        <div className="space-y-6">
          {events.filter(e => e.status === null).length > 0 ? (
            events
              .filter(e => e.status === null)
              .map((event) => (
                <div 
                  key={event.id}
                  className="border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 md:w-2/3">
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-500 mb-4">{event.description}</p>
                      
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
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
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Organized by: {event.organizer}
                        </span>
                        <div className="flex gap-2">
                          <button
                            className="px-4 py-2 rounded-xl bg-[#C3A1FF] text-white flex items-center gap-1"
                            onClick={() => handleRSVP(event.id, 'going')}
                          >
                            <Check size={16} />
                            Attend
                          </button>
                          <button
                            className="px-4 py-2 rounded-xl bg-gray-100 flex items-center gap-1"
                            onClick={() => handleRSVP(event.id, 'not-going')}
                          >
                            <X size={16} />
                            Decline
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center py-6 text-gray-500">
              You've responded to all events. Check the All Events tab for more upcoming events.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StudentEvents;