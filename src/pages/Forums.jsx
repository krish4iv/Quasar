import { useState } from "react";
import { MessageCircle, Plus, Search, Filter, ArrowLeft, Send } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const Forums = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("latest");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [newComment, setNewComment] = useState("");
  
  // Mock forum data
  const forumTopics = [
    { 
      id: 1, 
      title: "Career Advice for New Graduates", 
      category: "Career",
      author: "Emma Johnson",
      authorRole: "alumni",
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      date: "2 days ago",
      replies: 24,
      views: 156,
      description: "Looking for advice on starting a career in tech after graduation. Any tips on job searching, interview preparation, or general career guidance would be greatly appreciated!",
      comments: [
        {
          author: "James Miller",
          authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
          content: "Focus on building a strong portfolio and networking with industry professionals.",
          date: "1 day ago"
        }
      ]
    },
    {
      id: 2,
      title: "Transitioning from Industry to Academia",
      category: "Education", 
      author: "Michael Chen",
      authorRole: "alumni",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      date: "3 days ago",
      replies: 15,
      views: 98,
      description: "After 10 years in industry, I'm considering a transition to teaching. Would love to hear from others who have made this switch.",
      comments: [
        {
          author: "Sarah Williams",
          authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
          content: "I made this transition 5 years ago. The key is to highlight your practical experience as a unique value proposition.",
          date: "2 days ago"
        }
      ]
    },
    {
      id: 3,
      title: "Networking Events in San Francisco",
      category: "Events",
      author: "David Park",
      authorRole: "student",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      date: "1 week ago",
      replies: 32,
      views: 245,
      description: "Looking to connect with alumni in the SF Bay Area. Are there any upcoming networking events or regular meetups?",
      comments: [
        {
          author: "Lisa Rodriguez",
          authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
          content: "We have monthly meetups at the Innovation Center. Next one is on the 15th!",
          date: "5 days ago"
        }
      ]
    },
    {
      id: 4,
      title: "Starting a Business Post-Graduation",
      category: "Entrepreneurship",
      author: "Rachel Kim",
      authorRole: "alumni",
      authorImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      date: "4 days ago",
      replies: 28,
      views: 189,
      description: "Looking for co-founders and advice on launching a startup right after graduation. Anyone else taking the entrepreneurial route?",
      comments: [
        {
          author: "Tom Wilson",
          authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
          content: "Check out the university's startup incubator program - they offer great resources and mentorship.",
          date: "3 days ago"
        }
      ]
    },
    {
      id: 5,
      title: "Graduate School Application Tips",
      category: "Education",
      author: "Alex Thompson",
      authorRole: "student",
      authorImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      date: "1 week ago",
      replies: 41,
      views: 312,
      description: "Planning to apply for graduate programs next year. Looking for advice on strengthening my application and choosing the right program.",
      comments: [
        {
          author: "Jennifer Lee",
          authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
          content: "Start building relationships with potential advisors early. Your research fit is crucial for PhD programs.",
          date: "6 days ago"
        }
      ]
    }
    // ... other forum topics remain the same ...
  ];
  
  const filteredTopics = forumTopics.filter(topic => 
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const handleBackClick = () => {
    setSelectedTopic(null);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newCommentObj = {
      author: "Current User",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      content: newComment,
      date: "Just now"
    };

    setSelectedTopic(prev => ({
      ...prev,
      comments: [...prev.comments, newCommentObj],
      replies: prev.replies + 1
    }));

    setNewComment("");
  };

  if (selectedTopic) {
    return (
      <div className="container mx-auto px-4 py-20 md:py-28">
        <AnimatedSection>
          <button 
            onClick={handleBackClick}
            
            className="flex items-center gap-2 mb-6 hover:text-[#C3A1FF] "
          >
            <ArrowLeft size={20} />
            Back to Forums
          </button>
          
          <div className="border rounded-lg p-6 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={selectedTopic.authorImage} 
                alt={selectedTopic.author} 
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold">{selectedTopic.title}</h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>{selectedTopic.author}</span>
                  <span className="text-xs bg-muted px-1.5 py-0.5 rounded">
                    {selectedTopic.authorRole}
                  </span>
                  <span>• {selectedTopic.date}</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg mb-6">{selectedTopic.description}</p>
            
            <div className="space-y-6">
              <h3 className="font-semibold text-xl">Comments ({selectedTopic.replies})</h3>
              
              {selectedTopic.comments.map((comment, index) => (
                <div key={index} className="border-t pt-4">
                  <div className="flex items-start gap-4">
                    <img 
                      src={comment.authorImage} 
                      alt={comment.author} 
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{comment.author}</span>
                        <span className="text-sm text-muted-foreground">• {comment.date}</span>
                      </div>
                      <p>{comment.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleCommentSubmit} className="mt-8">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="flex-1 border rounded-lg px-4 py-2"
                />
                <button 
                  type="submit"
                  className="bg-primary text-black rounded-lg border-2 px-6 py-2 flex items-center gap-2"
                >
                  <Send size={16} />
                  Send
                </button>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20 md:py-28">
      <AnimatedSection className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Alumni Forums</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Connect with fellow students and alumni through our community forums. Share advice, ask questions,
          and build your professional network.
        </p>
      </AnimatedSection>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-3/4">
          <AnimatedSection delay={100} className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
              <div className="relative w-full md:w-auto md:flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  className="pl-10 py-2 rounded-full w-full border"
                  placeholder="Search forums..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <button className="border rounded-md px-4 py-2 flex items-center gap-2 w-full md:w-auto">
                  <Filter size={16} />
                  Filter
                </button>
                <button className="bg-primary text-white rounded-md px-4 py-2 flex items-center gap-2 w-full md:w-auto">
                  <Plus size={16} />
                  New Topic
                </button>
              </div>
            </div>
            
            <div>
              <div className="flex gap-4 mb-6">
                <button 
                  className={`px-4 py-2 ${activeTab === "latest" ? "border-b-2 border-primary" : ""}`}
                  onClick={() => setActiveTab("latest")}
                >
                  Latest
                </button>
                <button 
                  className={`px-4 py-2 ${activeTab === "trending" ? "border-b-2 border-primary" : ""}`}
                  onClick={() => setActiveTab("trending")}
                >
                  Trending
                </button>
                <button 
                  className={`px-4 py-2 ${activeTab === "unanswered" ? "border-b-2 border-primary" : ""}`}
                  onClick={() => setActiveTab("unanswered")}
                >
                  Unanswered
                </button>
                <button 
                  className={`px-4 py-2 ${activeTab === "my-topics" ? "border-b-2 border-primary" : ""}`}
                  onClick={() => setActiveTab("my-topics")}
                >
                  My Topics
                </button>
              </div>
              
              {activeTab === "latest" && (
                <div className="space-y-4">
                  {filteredTopics.map((topic) => (
                    <div 
                      key={topic.id} 
                      className="border rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => handleTopicClick(topic)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="hidden sm:block">
                          <img 
                            src={topic.authorImage} 
                            alt={topic.author} 
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg hover:text-primary">{topic.title}</h3>
                            <span className="text-xs font-medium px-2 py-1 bg-secondary rounded-full w-fit">
                              {topic.category}
                            </span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground text-sm gap-1 sm:gap-4">
                            <div className="flex items-center gap-2">
                              <span>By {topic.author}</span>
                              <span className="text-xs bg-muted px-1.5 py-0.5 rounded">
                                {topic.authorRole}
                              </span>
                            </div>
                            <span>{topic.date}</span>
                          </div>
                        </div>
                        <div className="hidden md:flex flex-col items-center text-center">
                          <span className="font-semibold">{topic.replies}</span>
                          <span className="text-xs text-muted-foreground">Replies</span>
                        </div>
                        <div className="hidden md:flex flex-col items-center text-center">
                          <span className="font-semibold">{topic.views}</span>
                          <span className="text-xs text-muted-foreground">Views</span>
                        </div>
                        <button className="p-2 hover:bg-secondary rounded-full">
                          <MessageCircle className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === "trending" && (
                <div className="text-center p-10 text-muted-foreground">
                  Select the Trending tab to see popular discussions
                </div>
              )}
              
              {activeTab === "unanswered" && (
                <div className="text-center p-10 text-muted-foreground">
                  Select the Unanswered tab to see topics with no replies
                </div>
              )}
              
              {activeTab === "my-topics" && (
                <div className="text-center p-10 text-muted-foreground">
                  Select the My Topics tab to see your own forum posts
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
        
        <div className="w-full lg:w-1/4">
          <AnimatedSection delay={200} className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-4">Popular Categories</h3>
              <div className="space-y-2">
                {["Career", "Education", "Networking", "Mentorship", "Industry Insights", "Research"].map((category) => (
                  <div key={category} className="flex justify-between items-center">
                    <span className="hover:text-primary cursor-pointer">{category}</span>
                    <span className="text-xs bg-secondary py-1 px-2 rounded-full">
                      {Math.floor(Math.random() * 50) + 5}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-4">Forum Guidelines</h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>Be respectful to all community members</li>
                <li>Stay on topic in relevant categories</li>
                <li>No promotional content or spam</li>
                <li>Follow the university's code of conduct</li>
                <li>Protect personal information</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Forums;