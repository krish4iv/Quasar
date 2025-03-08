import React, { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  ChannelList,
  LoadingIndicator,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css"; // Ensure this path is correct

const apiKey = import.meta.env.VITE_STREAM_API_KEY; // Use environment variable securely

const StreamChatComponent = ({ user }) => {
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const initChat = async () => {
      if (!apiKey || !user?.id) {
        console.error("API key or user ID is missing");
        return;
      }

      const chatClient = StreamChat.getInstance(apiKey);

      try {
        await chatClient.connectUser({ 
            id: user.id, 
            name: user.name, 
            image: user.image, 
            role: "user"  // Assign role with more permissions
          }, chatClient.devToken(user.id));

        // Create or join a channel
        const channel = chatClient.channel("messaging", "react-talk", {
          image:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          name: "Senior SoftWare Developer",
          members: [user.id],
        });

        await channel.watch();

        setClient(chatClient);
        setChannel(channel);
      } catch (error) {
        console.error("Error initializing chat:", error);
      }
    };

    initChat();

    // Cleanup function
    return () => {
      if (client) {
        client.disconnectUser();
      }
    };
  }, [apiKey, user]); // Dependency array ensures reinitialization if `user` changes

  if (!client || !channel)  return <LoadingIndicator />;

  return (
    <div className=" w-full">
        <Chat client={client} theme="messaging light">
            <ChannelList />
                <Channel channel={channel}>
                    <Window>
                        <ChannelHeader />
                        <div className="">
                        <MessageList />
                        <MessageInput />
                        </div>
                        
                    </Window>
                <Thread />
            </Channel>
        </Chat>
    </div>
    
  );
};

export default StreamChatComponent;
