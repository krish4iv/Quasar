import { useState } from "react";
import { MessageCircle, Edit, Trash2, Plus } from "lucide-react";

const ForumManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingTopic, setEditingTopic] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });
  const [forumTopics, setForumTopics] = useState([
    { 
      id: 1, 
      title: "Career Advice for New Graduates", 
      category: "Career",
      content: "What advice would you give to someone who just graduated and is looking for their first job in this market?",
      date: "2 days ago",
      replies: 24,
      views: 156
    },
    { 
      id: 2, 
      title: "Tech Industry Trends 2024", 
      category: "Industry Insights",
      content: "Let's discuss the emerging trends in tech for 2024 and how they might impact career opportunities.",
      date: "1 week ago",
      replies: 18,
      views: 203
    },
  ]);
  
  const [newTopic, setNewTopic] = useState({
    title: "",
    category: "Career",
    content: "",
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingTopic) {
      setEditingTopic({ ...editingTopic, [name]: value });
    } else {
      setNewTopic({ ...newTopic, [name]: value });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingTopic) {
      // Update existing topic
      setForumTopics(forumTopics.map(topic => 
        topic.id === editingTopic.id ? editingTopic : topic
      ));
      setSnackbar({
        open: true,
        message: "Forum topic updated successfully",
        severity: "success"
      });
    } else {
      // Add new topic
      const newId = Math.max(...forumTopics.map(t => t.id), 0) + 1;
      setForumTopics([...forumTopics, {
        ...newTopic,
        id: newId,
        date: "Just now",
        replies: 0,
        views: 0
      }]);
      setSnackbar({
        open: true,
        message: "New forum topic created successfully",
        severity: "success"
      });
    }
    
    // Reset form
    setNewTopic({
      title: "",
      category: "Career",
      content: "",
    });
    setEditingTopic(null);
    setShowForm(false);
  };
  
  const handleEdit = (topic) => {
    setEditingTopic(topic);
    setShowForm(true);
  };
  
  const handleDelete = (id) => {
    setForumTopics(forumTopics.filter(topic => topic.id !== id));
    setSnackbar({
      open: true,
      message: "Forum topic deleted successfully",
      severity: "success"
    });
  };
  
  const categories = ["Career", "Education", "Networking", "Mentorship", "Industry Insights", "Research"];

  return (
    <div className="bg-white rounded-xl shadow">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Your Forum Topics</h2>
          <button
            className="flex items-center px-4 py-2 bg-[#C3A1FF] text-white rounded hover:bg-purple-600"
            onClick={() => {
              setEditingTopic(null);
              setShowForm(!showForm);
            }}
          >
            <Plus className="w-4 h-4 mr-2" />
            New Topic
          </button>
        </div>
      </div>
      
      <div className="p-4">
        {showForm ? (
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex flex-col gap-4">
              <div>
                <label className="block mb-1">Topic Title</label>
                <input
                  type="text"
                  name="title"
                  value={editingTopic ? editingTopic.title : newTopic.title}
                  onChange={handleInputChange}
                  placeholder="Enter forum topic title"
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              
              <div>
                <label className="block mb-1">Category</label>
                <select
                  name="category"
                  value={editingTopic ? editingTopic.category : newTopic.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block mb-1">Content</label>
                <textarea
                  rows={5}
                  placeholder="Write your forum topic content..."
                  name="content"
                  value={editingTopic ? editingTopic.content : newTopic.content}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 border rounded hover:bg-gray-50"
                  onClick={() => {
                    setShowForm(false);
                    setEditingTopic(null);
                  }}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-[#C3A1FF] text-white rounded hover:bg-purple-600"
                >
                  {editingTopic ? "Update Topic" : "Create Topic"}
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div>
            <div className="border-b mb-4">
              <button
                className={`px-4 py-2 ${tabValue === 0 ? 'border-b-2 border-blue-600' : ''}`}
                onClick={() => setTabValue(0)}
              >
                My Topics
              </button>
              <button
                className={`px-4 py-2 ${tabValue === 1 ? 'border-b-2 border-blue-600' : ''}`}
                onClick={() => setTabValue(1)}
              >
                Responses
              </button>
            </div>
            
            <div className={tabValue !== 0 ? 'hidden' : ''}>
              {forumTopics.length > 0 ? (
                <div className="space-y-4">
                  {forumTopics.map((topic) => (
                    <div key={topic.id} className="border rounded p-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{topic.title}</h3>
                          <p className="text-gray-600 mt-2">
                            {topic.content}
                          </p>
                          <div className="flex gap-4 mt-2 text-sm text-gray-500">
                            <span>{topic.category}</span>
                            <span>{topic.date}</span>
                            <span>{topic.replies} replies</span>
                          </div>
                        </div>
                        <div>
                          <button 
                            className="p-1 hover:bg-gray-100 rounded"
                            onClick={() => handleEdit(topic)}
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            className="p-1 hover:bg-gray-100 rounded"
                            onClick={() => handleDelete(topic.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 py-6">
                  No forum topics yet. Create your first topic!
                </p>
              )}
            </div>
            
            <div className={tabValue !== 1 ? 'hidden' : ''}>
              <p className="text-center text-gray-500 py-6">
                This tab will show responses to your forum topics
              </p>
            </div>
          </div>
        )}
      </div>

      {snackbar.open && (
        <div className={`fixed bottom-4 right-4 p-4 rounded shadow-lg ${
          snackbar.severity === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          <div className="flex items-center justify-between">
            <span>{snackbar.message}</span>
            <button 
              onClick={handleCloseSnackbar}
              className="ml-4 text-current"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForumManagement;