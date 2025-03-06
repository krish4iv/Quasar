<AnimatedSection>
        <div className="bg-white rounded-xl shadow p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button 
              className={`flex items-center px-4 py-2 rounded-xl ${
                activeTab === "profile" 
                  ? "bg-[#C3A1FF] text-white" 
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("profile")}
            >
              <UsersIcon className="mr-2 h-4 w-4" />
              Profile
            </button>
            <button 
              className={`flex items-center px-4 py-2 rounded-xl ${
                activeTab === "events" 
                  ? "bg-[#C3A1FF] text-white" 
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("events")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              Events
            </button>
            <button 
              className={`flex items-center px-4 py-2 rounded-xl ${
                activeTab === "forums" 
                  ? "bg-[#C3A1FF] text-white" 
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("forums")}
            >
              <MessageCircleIcon className="mr-2 h-4 w-4" />
              Forums
            </button>
            <button 
              className={`flex items-center px-4 py-2 rounded-xl ${
                activeTab === "mentorship" 
                  ? "bg-[#C3A1FF] text-white" 
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("mentorship")}
            >
              <NetworkIcon className="mr-2 h-4 w-4" />
              Mentorship
            </button>
          </div>
        </div>
      </AnimatedSection>