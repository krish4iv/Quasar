import { useState } from "react";
import { Calendar, Clock, MapPin, Users, Edit, Trash2, Plus } from "lucide-react";
import EventCreationForm from "./EventCreationForm";

const EventManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [activeTab, setActiveTab] = useState("upcoming");
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbar, setSnackbar] = useState({
    message: "",
    type: "success"
  });
  
  // Mock events data
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tech Industry Networking",
      date: "2024-07-15",
      time: "6:00 PM - 9:00 PM", 
      location: "Tech Hub, San Francisco",
      image: "https://images.unsplash.com/photo-1511795409834-432f578949b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      attendees: 35,
      description: "Join fellow alumni working in tech for an evening of networking and industry discussions.",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Resume Workshop for CS Students",
      date: "2024-08-22",
      time: "4:00 PM - 6:00 PM",
      location: "Virtual Event",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      attendees: 18,
      description: "Help current CS students with resume building and job application strategies.",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Alumni Coffee Meetup",
      date: "2024-05-10",
      time: "10:00 AM - 12:00 PM",
      location: "City Cafe, New York",
      image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      attendees: 12,
      description: "Casual coffee meetup for alumni living in the New York area.",
      status: "past",
    }
  ]);

  const handleEdit = (event) => {
    setEditingEvent(event);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setEvents(events.filter(event => event.id !== id));
    setSnackbar({
      message: "Event successfully deleted",
      type: "success"
    });
    setSnackbarVisible(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarVisible(false);
  };

  const handleSaveEvent = (eventData) => {
    if (editingEvent) {
      // Update existing event
      setEvents(events.map(event =>
        event.id === editingEvent.id ? { ...eventData, id: event.id, status: event.status } : event
      ));
    } else {
      // Add new event
      const newId = Math.max(...events.map(e => e.id), 0) + 1;
      setEvents([...events, {
        ...eventData,
        id: newId,
        attendees: 0,
        status: "upcoming"
      }]);
    }
  };

  const upcomingEvents = events.filter(e => e.status === "upcoming");
  const pastEvents = events.filter(e => e.status === "past");

  return (
    <>
      {showForm ? (
        <EventCreationForm
          onClose={() => {
            setShowForm(false);
            setEditingEvent(null);
          }}
          onSave={handleSaveEvent}
          editEvent={editingEvent}
        />
      ) : (
        <div className="bg-white rounded-xl shadow">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-semibold">Your Events</h2>
            <button
              className="px-4 py-2 bg-[#C3A1FF] text-white rounded-md flex items-center gap-2 hover:bg-purple-600"
              onClick={() => {
                setEditingEvent(null);
                setShowForm(true);
              }}
            >
              <Plus size={16} />
              Create Event
            </button>
          </div>
          
          <div className="p-4">
            <div className="border-b mb-4">
              <div className="flex gap-4">
                <button 
                  className={`px-4 py-2 ${activeTab === "upcoming" ? "border-b-2 border-blue-600" : ""}`}
                  onClick={() => setActiveTab("upcoming")}
                >
                  Upcoming
                </button>
                <button 
                  className={`px-4 py-2 ${activeTab === "past" ? "border-b-2 border-blue-600" : ""}`}
                  onClick={() => setActiveTab("past")}
                >
                  Past Events
                </button>
              </div>
            </div>

            <div className={activeTab === "upcoming" ? "" : "hidden"}>
              <div className="space-y-6">
                {upcomingEvents.length > 0 ? (
                  upcomingEvents.map((event) => (
                    <div key={event.id} className="border rounded-xl overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 h-48 md:h-auto relative">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 w-full md:w-2/3">
                          <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                            <div className="flex gap-2">
                              <button onClick={() => handleEdit(event)} className="p-1 hover:bg-gray-100 rounded">
                                <Edit size={16} />
                              </button>
                              <button onClick={() => handleDelete(event.id)} className="p-1 hover:bg-gray-100 rounded">
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">{event.description}</p>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="text-blue-600" size={16} />
                              <span className="text-sm">
                                {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="text-blue-600" size={16} />
                              <span className="text-sm">{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="text-blue-600" size={16} />
                              <span className="text-sm">{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="text-blue-600" size={16} />
                              <span className="text-sm">{event.attendees} RSVPs</span>
                            </div>
                          </div>

                          <div className="flex justify-end">
                            <button className="px-4 py-2 bg-[#C3A1FF] text-white rounded hover:bg-purple-600 text-sm">
                              View RSVPs
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-600 py-6">
                    No upcoming events. Create a new event to get started!
                  </p>
                )}
              </div>
            </div>

            <div className={activeTab === "past" ? "" : "hidden"}>
              <div className="space-y-6">
                {pastEvents.length > 0 ? (
                  pastEvents.map((event) => (
                    <div key={event.id} className="border rounded-xl overflow-hidden opacity-75">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 h-48 md:h-auto relative">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute top-2 right-2 bg-gray-200 px-2 py-1 rounded text-sm">
                            Past Event
                          </span>
                        </div>
                        <div className="p-4 w-full md:w-2/3">
                          <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                            <button onClick={() => handleDelete(event.id)} className="p-1 hover:bg-gray-100 rounded">
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="text-gray-600 mb-4">{event.description}</p>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="text-blue-600" size={16} />
                              <span className="text-sm">
                                {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="text-blue-600" size={16} />
                              <span className="text-sm">{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="text-blue-600" size={16} />
                              <span className="text-sm">{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="text-blue-600" size={16} />
                              <span className="text-sm">{event.attendees} Attended</span>
                            </div>
                          </div>

                          <div className="flex justify-end">
                            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 text-sm">
                              View Event Report
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-600 py-6">
                    No past events to display.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {snackbarVisible && (
        <div className={`fixed bottom-4 right-4 px-4 py-2 rounded-md ${snackbar.type === "success" ? "bg-green-600" : "bg-red-600"} text-white`}>
          {snackbar.message}
          <button 
            onClick={handleCloseSnackbar}
            className="ml-2 hover:text-gray-200"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};

export default EventManagement;