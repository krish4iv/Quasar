import { useState } from "react";
import { Calendar, Clock, MapPin, Users, PlusCircle, Trash2 } from "lucide-react";

const EventCreationForm = ({ onClose, onSave, editEvent = null }) => {
  const [event, setEvent] = useState(editEvent || {
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    image: "https://images.unsplash.com/photo-1511795409834-432f578949b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    attendees: 0
  });

  const [snackbar, setSnackbar] = useState({
    show: false,
    message: "",
    type: "success"
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, show: false });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!event.title || !event.date || !event.time || !event.location || !event.description) {
      setSnackbar({
        show: true,
        message: "Please fill in all required fields",
        type: "error"
      });
      return;
    }
    
    // Pass the event data back to parent component
    onSave(event);
    setSnackbar({
      show: true,
      message: editEvent ? "Event updated successfully" : "Event created successfully",
      type: "success"
    });
    onClose();
  };

  return (
    <div className="bg-white rounded-xl shadow-lg max-w-2xl mx-auto w-full">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">
          {editEvent ? "Edit Event" : "Create New Event"}
        </h2>
      </div>
      
      <div className="p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Event Title*</label>
            <input
              type="text"
              name="title"
              value={event.title}
              onChange={handleChange}
              placeholder="Enter event title"
              required
              className="w-full px-3 py-2 border rounded-xl"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Date*</label>
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  value={event.date}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-xl"
                />
                <Calendar className="absolute right-3 top-2.5 text-gray-500 h-4 w-4" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Time*</label>
              <div className="relative">
                <input
                  type="text"
                  name="time"
                  value={event.time}
                  onChange={handleChange}
                  placeholder="e.g., 6:00 PM - 9:00 PM"
                  required
                  className="w-full px-3 py-2 border rounded-xl"
                />
                <Clock className="absolute right-3 top-2.5 text-gray-500 h-4 w-4" />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Location*</label>
            <div className="relative">
              <input
                type="text"
                name="location"
                value={event.location}
                onChange={handleChange}
                placeholder="Enter event location or 'Virtual'"
                required
                className="w-full px-3 py-2 border rounded-xl"
              />
              <MapPin className="absolute right-3 top-2.5 text-gray-500 h-4 w-4" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Description*</label>
            <textarea
              name="description"
              value={event.description}
              onChange={handleChange}
              placeholder="Describe your event..."
              required
              rows={4}
              className="w-full px-3 py-2 border rounded-xl"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Event Image URL</label>
            <input
              type="text"
              name="image"
              value={event.image}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full px-3 py-2 border rounded-xl"
            />
            {event.image && (
              <div className="mt-2 relative h-40 rounded-xl overflow-hidden">
                <img 
                  src={event.image} 
                  alt="Event preview" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1511795409834-432f578949b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80";
                  }}
                />
              </div>
            )}
          </div>
          
          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-xl hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
            >
              {editEvent ? "Update Event" : "Create Event"}
            </button>
          </div>
        </form>
      </div>

      {snackbar.show && (
        <div className={`fixed top-4 right-4 p-4 rounded-xl shadow-lg ${
          snackbar.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          <div className="flex items-center justify-between">
            <p>{snackbar.message}</p>
            <button 
              onClick={handleCloseSnackbar}
              className="ml-4 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCreationForm;