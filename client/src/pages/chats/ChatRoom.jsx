// import React, { useState, useEffect, useRef } from "react";
// import { useParams, Link } from "react-router-dom";
// import "./ChatRoom.css";

// const ChatRoom = () => {
//   const { chatId } = useParams();
//   const [chat, setChat] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [loading, setLoading] = useState(true);
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     // Mock data fetch - replace with actual API call
//     setTimeout(() => {
//       // Mock user profile data
//       const chatData = {
//         id: chatId,
//         name: "Alex Johnson",
//         photo: "/assets/profiles/alex.jpg",
//         compatibility: "92%",
//         lastActive: "Active 20 minutes ago",
//       };

//       // Mock message history
//       const messageHistory = [
//         {
//           id: 1,
//           sender: "them",
//           text: "Hey there! I really like your profile and think we might be a good match as roommates.",
//           timestamp: "10:15 AM",
//         },
//         {
//           id: 2,
//           sender: "you",
//           text: "Hi Alex! Thanks for reaching out. I noticed we have similar preferences for cleanliness and quiet hours.",
//           timestamp: "10:18 AM",
//         },
//         {
//           id: 3,
//           sender: "them",
//           text: "Exactly! I'm pretty tidy and prefer a quiet environment for studying/working. How about you?",
//           timestamp: "10:20 AM",
//         },
//         {
//           id: 4,
//           sender: "you",
//           text: "Same here! I work from home a few days a week, so I appreciate a quiet space. Do you have any questions about the apartment?",
//           timestamp: "10:22 AM",
//         },
//         {
//           id: 5,
//           sender: "them",
//           text: "Yeah, actually! What's the parking situation like? And how's the WiFi speed?",
//           timestamp: "10:25 AM",
//         },
//         {
//           id: 6,
//           sender: "you",
//           text: "There's dedicated parking for residents, and the WiFi is pretty good! I get about 200 Mbps consistently, which has been great for video calls and streaming.",
//           timestamp: "10:28 AM",
//         },
//         {
//           id: 7,
//           sender: "them",
//           text: "That sounds perfect! I have a lot of Zoom meetings for work, so good internet is a must. Would you be open to scheduling a video call to chat more about it?",
//           timestamp: "10:30 AM",
//         },
//       ];

//       setChat(chatData);
//       setMessages(messageHistory);
//       setLoading(false);
//     }, 1000);
//   }, [chatId]);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleSend = (e) => {
//     e.preventDefault();
//     if (!newMessage.trim()) return;

//     const newMsg = {
//       id: messages.length + 1,
//       sender: "you",
//       text: newMessage,
//       timestamp: new Date().toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       }),
//     };

//     setMessages([...messages, newMsg]);
//     setNewMessage("");

//     // Mock response - in a real app, you wouldn't have this
//     setTimeout(() => {
//       const responseMsg = {
//         id: messages.length + 2,
//         sender: "them",
//         text: "That's great to hear! I'd love to know more about the neighborhood. Are there any good coffee shops or grocery stores nearby?",
//         timestamp: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       };
//       setMessages((prevMessages) => [...prevMessages, responseMsg]);
//     }, 2000);
//   };

//   if (loading) {
//     return (
//       <div className="chat-room-loading">
//         <div className="spinner"></div>
//         <p>Loading conversation...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="chat-room-container">
//       <div className="chat-room-header">
//         <Link to="/chatlist" className="back-button">
//           <span className="back-arrow">←</span>
//         </Link>
//         <div className="chat-profile-info">
//           <img
//             src={chat.photo}
//             alt={chat.name}
//             className="chat-profile-photo"
//           />
//           <div>
//             <h2 className="chat-profile-name">{chat.name}</h2>
// <div className="chat-profile-meta">
//   <span className="chat-compatibility">
//     {chat.compatibility} match
//   </span>
//               <span className="last-active">{chat.lastActive}</span>
//             </div>
//           </div>
//         </div>
//         <Link to={`/profile/${chat.id}`} className="view-profile-button">
//           Profile
//         </Link>
//       </div>

//       <div className="messages-container">
//         <div className="messages-list">
//           {messages.map((message) => (
//             <div
//               key={message.id}
//               className={`message-bubble ${
//                 message.sender === "you" ? "sent" : "received"
//               }`}
//             >
//               <p className="message-text">{message.text}</p>
//               <span className="message-time">{message.timestamp}</span>
//             </div>
//           ))}
//           <div ref={messagesEndRef} />
//         </div>
//       </div>

//       <form className="message-input-form" onSubmit={handleSend}>
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           className="message-input"
//         />
//         <button
//           type="submit"
//           className="send-button"
//           disabled={!newMessage.trim()}
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ChatRoom;

// import React, { useState, useEffect, useRef } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import "./ChatRoom.css";
// import { jwtDecode } from "jwt-decode";

// const ChatRoom = () => {
//   const { chatId } = useParams();
//   const [chat, setChat] = useState(null);
//   const [matchedUser, setMatchedUser] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [loading, setLoading] = useState(true);
//   const messagesEndRef = useRef(null);

//   // Get current user ID from token
//   const getCurrentUserId = () => {
//     const token = localStorage.getItem("token");
//     if (!token) return null;

//     try {
//       const decoded = jwtDecode(token);
//       return decoded.user?.id || null;
//     } catch (err) {
//       console.error("Failed to decode token:", err);
//       return null;
//     }
//   };

//   // Fetch chat data and messages
//   useEffect(() => {
//     const fetchChatData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         // First, get the match data to find out who we're chatting with
//         const matchResponse = await axios.get(
//           `http://localhost:5001/api/match/by-chat/${chatId}`,
//           config
//         );

//         if (matchResponse.data && matchResponse.data.match) {
//           const match = matchResponse.data.match;
//           const currentUserId = getCurrentUserId();

//           // Determine which user is the other person in the chat
//           const otherUser =
//             match.user1._id === currentUserId ? match.user2 : match.user1;
//           setMatchedUser(otherUser);

//           // Now get the chat messages
//           const messagesResponse = await axios.get(
//             `http://localhost:5001/api/messages/${chatId}`,
//             config
//           );

//           if (messagesResponse.data && messagesResponse.data.messages) {
//             setMessages(messagesResponse.data.messages);
//           }

//           setChat(match.chatId);
//           setLoading(false);
//         }
//       } catch (err) {
//         console.error("Error fetching chat data:", err);
//         setLoading(false);
//       }
//     };

//     fetchChatData();
//   }, [chatId]);

//   // Auto scroll to bottom when new messages arrive
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Handle sending a new message
//   const handleSend = async (e) => {
//     e.preventDefault();
//     if (!newMessage.trim()) return;

//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       // Send the message to the API
//       const response = await axios.post(
//         `http://localhost:5001/api/messages/${chatId}`,
//         { text: newMessage.trim() },
//         config
//       );

//       if (response.data && response.data.newMessage) {
//         // Fetch the complete list of messages to ensure we have the most up-to-date view
//         const messagesResponse = await axios.get(
//           `http://localhost:5001/api/messages/${chatId}`,
//           config
//         );

//         if (messagesResponse.data && messagesResponse.data.messages) {
//           setMessages(messagesResponse.data.messages);
//         }
//       }

//       setNewMessage("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//       alert("Failed to send message. Please try again.");
//     }
//   };

//   // Format timestamp to readable format
//   const formatTimestamp = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   if (loading) {
//     return (
//       <div className="chat-room-loading">
//         <div className="spinner"></div>
//         <p>Loading conversation...</p>
//       </div>
//     );
//   }

//   // Get user photo URL
//   const getPhotoUrl = (user) => {
//     if (!user || !user.photos || user.photos.length === 0) {
//       return "/assets/profiles/default-avatar.jpg";
//     }
//     return user.photos[0].startsWith("/")
//       ? `http://localhost:5001${user.photos[0]}`
//       : user.photos[0];
//   };

//   // // Get activity status
//   // const getActivityStatus = () => {
//   //   return matchedUser?.lastActive
//   //     ? `Last active ${formatTimestamp(matchedUser.lastActive)}`
//   //     : "Active recently";
//   // };

//   const currentUserId = getCurrentUserId();

//   return (
//     <div className="chat-room-container">
//       <div className="chat-room-header">
//         <Link to="/chatlist" className="back-button">
//           <span className="back-arrow">←</span>
//         </Link>
//         {matchedUser && (
//           <div className="chat-profile-info">
//             <img
//               src={getPhotoUrl(matchedUser)}
//               alt={matchedUser.name}
//               className="chat-profile-photo"
//             />
//             <div>
//               <h2 className="chat-profile-name">{matchedUser.name}</h2>
//               <div className="chat-profile-meta"></div>
//             </div>
//           </div>
//         )}
//         {/* {matchedUser && (
//           <Link
//             to={`/profile/${matchedUser._id}`}
//             className="view-profile-button"
//           >
//             Profile
//           </Link>
//         )} */}
//         <a
//           href="https://rent-agreement.netlify.app/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <button className="sign-contract-button">Sign Contract</button>
//         </a>
//       </div>

//       <div className="messages-container">
//         <div className="messages-list">
//           {messages.length > 0 ? (
//             messages.map((message) => (
//               <div
//                 key={message._id}
//                 className={`message-bubble ${
//                   message.sender._id === currentUserId ? "sent" : "received"
//                 }`}
//               >
//                 <p className="message-text">{message.content}</p>
//                 <span className="message-time">
//                   {formatTimestamp(message.createdAt)}
//                 </span>
//               </div>
//             ))
//           ) : (
//             <div className="no-messages">
//               <p>No messages yet. Start the conversation!</p>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>
//       </div>

//       <form className="message-input-form" onSubmit={handleSend}>
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           className="message-input"
//         />
//         <button
//           type="submit"
//           className="send-button"
//           disabled={!newMessage.trim()}
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ChatRoom;

// import React, { useState, useEffect, useRef } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import "./ChatRoom.css";
// import { jwtDecode } from "jwt-decode";

// const ChatRoom = () => {
//   const { chatId } = useParams();
//   const [chat, setChat] = useState(null);
//   const [matchedUser, setMatchedUser] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [currentUserId, setCurrentUserId] = useState(null);
//   const messagesEndRef = useRef(null);

//   // Get current user ID using your working method
//   const getCurrentUserId = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       console.log("Token found, attempting API call");

//       // Use your exact API call pattern
//       const decoded = jwtDecode(token);
//       const userId = decoded.user?.id || decoded.id;

//       const response = await axios.get(
//         `http://localhost:5001/api/profile/user/${userId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("Profile data received:", response.data);
//       const profileData = response.data.profile || response.data;
//       return profileData._id || profileData.id || userId;
//     } catch (err) {
//       console.error("Error getting current user ID:", err);
//       return null;
//     }
//   };

//   // Fetch chat data and messages
//   useEffect(() => {
//     const fetchChatData = async () => {
//       try {
//         // First get the current user ID
//         const userId = await getCurrentUserId();
//         if (!userId) {
//           console.error("Failed to get current user ID");
//           setLoading(false);
//           return;
//         }

//         setCurrentUserId(userId);
//         console.log("Current User ID set to:", userId);

//         const token = localStorage.getItem("token");
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         // First, get the match data to find out who we're chatting with
//         const matchResponse = await axios.get(
//           `http://localhost:5001/api/match/by-chat/${chatId}`,
//           config
//         );

//         if (matchResponse.data && matchResponse.data.match) {
//           const match = matchResponse.data.match;

//           console.log("Match data:", match);
//           console.log("User1 ID:", match.user1._id);
//           console.log("User2 ID:", match.user2._id);
//           console.log("Current User ID:", userId);

//           // Determine which user is the other person in the chat
//           const user1Id = String(match.user1._id || "");
//           const user2Id = String(match.user2._id || "");
//           const currentId = String(userId || "");

//           const otherUser = user1Id === currentId ? match.user2 : match.user1;
//           console.log("Other user selected:", otherUser);
//           setMatchedUser(otherUser);

//           // Now get the chat messages
//           const messagesResponse = await axios.get(
//             `http://localhost:5001/api/messages/${chatId}`,
//             config
//           );

//           if (messagesResponse.data && messagesResponse.data.messages) {
//             setMessages(messagesResponse.data.messages);
//           }

//           setChat(match.chatId);
//           setLoading(false);
//         }
//       } catch (err) {
//         console.error("Error fetching chat data:", err);
//         setLoading(false);
//       }
//     };

//     fetchChatData();
//   }, [chatId]);

//   // Auto scroll to bottom when new messages arrive
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Handle sending a new message
//   const handleSend = async (e) => {
//     e.preventDefault();
//     if (!newMessage.trim()) return;

//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       // Send the message to the API
//       const response = await axios.post(
//         `http://localhost:5001/api/messages/${chatId}`,
//         { text: newMessage.trim() },
//         config
//       );

//       if (response.data && response.data.newMessage) {
//         // Fetch the complete list of messages to ensure we have the most up-to-date view
//         const messagesResponse = await axios.get(
//           `http://localhost:5001/api/messages/${chatId}`,
//           config
//         );

//         if (messagesResponse.data && messagesResponse.data.messages) {
//           setMessages(messagesResponse.data.messages);
//         }
//       }

//       setNewMessage("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//       alert("Failed to send message. Please try again.");
//     }
//   };

//   // Format timestamp to readable format
//   const formatTimestamp = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   if (loading) {
//     return (
//       <div className="chat-room-loading">
//         <div className="spinner"></div>
//         <p>Loading conversation...</p>
//       </div>
//     );
//   }

//   // Get user photo URL
//   const getPhotoUrl = (user) => {
//     if (!user || !user.photos || user.photos.length === 0) {
//       return "/assets/profiles/default-avatar.jpg";
//     }
//     return user.photos[0].startsWith("/")
//       ? `http://localhost:5001${user.photos[0]}`
//       : user.photos[0];
//   };

//   return (
//     <div className="chat-room-container">
//       <div className="chat-room-header">
//         <Link to="/chatlist" className="back-button">
//           <span className="back-arrow">←</span>
//         </Link>
//         {matchedUser && (
//           <div className="chat-profile-info">
//             <img
//               src={getPhotoUrl(matchedUser)}
//               alt={matchedUser.name}
//               className="chat-profile-photo"
//             />
//             <div>
//               <h2 className="chat-profile-name">{matchedUser.name}</h2>
//               <div className="chat-profile-meta"></div>
//             </div>
//           </div>
//         )}
//         <a
//           href="https://rent-agreement.netlify.app/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <button className="sign-contract-button">Sign Contract</button>
//         </a>
//       </div>

//       <div className="messages-container">
//         <div className="messages-list">
//           {messages.length > 0 ? (
//             messages.map((message) => (
//               <div
//                 key={message._id}
//                 className={`message-bubble ${
//                   message.sender._id === currentUserId ? "sent" : "received"
//                 }`}
//               >
//                 <p className="message-text">{message.content}</p>
//                 <span className="message-time">
//                   {formatTimestamp(message.createdAt)}
//                 </span>
//               </div>
//             ))
//           ) : (
//             <div className="no-messages">
//               <p>No messages yet. Start the conversation!</p>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>
//       </div>

//       <form className="message-input-form" onSubmit={handleSend}>
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           className="message-input"
//         />
//         <button
//           type="submit"
//           className="send-button"
//           disabled={!newMessage.trim()}
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ChatRoom;

// import React, { useState, useEffect, useRef } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import "./ChatRoom.css";
// import { jwtDecode } from "jwt-decode";

// const ChatRoom = () => {
//   const { chatId } = useParams();
//   const [chat, setChat] = useState(null);
//   const [matchedUser, setMatchedUser] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [currentUserId, setCurrentUserId] = useState(null);
//   const messagesEndRef = useRef(null);

//   // Get current user ID using your working method
//   const getCurrentUserId = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       console.log("Token found, attempting API call");

//       // Use your exact API call pattern
//       const decoded = jwtDecode(token);
//       const userId = decoded.user?.id || decoded.id;

//       const response = await axios.get(
//         `http://localhost:5001/api/profile/user/${userId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("Profile data received:", response.data);
//       const profileData = response.data.profile || response.data;
//       return profileData._id || profileData.id || userId;
//     } catch (err) {
//       console.error("Error getting current user ID:", err);
//       return null;
//     }
//   };

//   // Function to get the matched user (the other user, not current user) - copied from ChatList
//   const getMatchedUser = (match, currentUserId) => {
//     if (!currentUserId) {
//       console.error("No current user ID available");
//       return null;
//     }

//     console.log("=== getMatchedUser Debug for Match ID:", match._id, "===");
//     console.log("Full Match object:", JSON.stringify(match, null, 2));
//     console.log("Current User ID:", currentUserId);

//     if (!match.user1 || !match.user2) {
//       console.error("Missing user1 or user2 in match:", match);
//       return null;
//     }

//     console.log("User1 Name:", match.user1.name);
//     console.log("User1 ID:", match.user1._id);
//     console.log("User2 Name:", match.user2.name);
//     console.log("User2 ID:", match.user2._id);

//     // Convert IDs to strings for comparison
//     const user1Id = String(match.user1._id || match.user1.id || "");
//     const user2Id = String(match.user2._id || match.user2.id || "");
//     const currentId = String(currentUserId || "");

//     console.log("Normalized - User1 ID:", user1Id);
//     console.log("Normalized - User2 ID:", user2Id);
//     console.log("Normalized - Current User ID:", currentId);

//     // Check if user1 and user2 are the same (this might be your issue)
//     if (user1Id === user2Id) {
//       console.error(
//         "WARNING: user1 and user2 have the same ID! This is a data problem."
//       );
//       console.error("User1:", match.user1.name, "ID:", user1Id);
//       console.error("User2:", match.user2.name, "ID:", user2Id);
//     }

//     // Return the user who is NOT the current user
//     if (user1Id === currentId) {
//       console.log(
//         "✅ Current user matches user1, returning user2:",
//         match.user2.name
//       );
//       return match.user2;
//     } else if (user2Id === currentId) {
//       console.log(
//         "✅ Current user matches user2, returning user1:",
//         match.user1.name
//       );
//       return match.user1;
//     } else {
//       console.warn("❌ Current user ID doesn't match either user1 or user2!");
//       console.warn(`Current user ID: ${currentId}`);
//       console.warn(`User1 ID: ${user1Id} (${match.user1.name})`);
//       console.warn(`User2 ID: ${user2Id} (${match.user2.name})`);
//       console.warn("Returning user2 as fallback");
//       return match.user2;
//     }
//   };

//   // Fetch chat data and messages
//   useEffect(() => {
//     const fetchChatData = async () => {
//       try {
//         // First get the current user ID
//         const userId = await getCurrentUserId();
//         if (!userId) {
//           console.error("Failed to get current user ID");
//           setLoading(false);
//           return;
//         }

//         setCurrentUserId(userId);
//         console.log("Current User ID set to:", userId);

//         const token = localStorage.getItem("token");
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         // First, get the match data to find out who we're chatting with
//         const matchResponse = await axios.get(
//           `http://localhost:5001/api/match/by-chat/${chatId}`,
//           config
//         );

//         if (matchResponse.data && matchResponse.data.match) {
//           const match = matchResponse.data.match;

//           console.log("Match data:", match);

//           // Use the same logic as ChatList to determine the matched user
//           const otherUser = getMatchedUser(match, userId);

//           if (!otherUser) {
//             console.error("Could not determine matched user for match:", match);
//             setLoading(false);
//             return;
//           }

//           console.log("Other user selected:", otherUser);
//           setMatchedUser(otherUser);

//           // Now get the chat messages
//           const messagesResponse = await axios.get(
//             `http://localhost:5001/api/messages/${chatId}`,
//             config
//           );

//           if (messagesResponse.data && messagesResponse.data.messages) {
//             setMessages(messagesResponse.data.messages);
//           }

//           setChat(match.chatId);
//           setLoading(false);
//         }
//       } catch (err) {
//         console.error("Error fetching chat data:", err);
//         setLoading(false);
//       }
//     };

//     fetchChatData();
//   }, [chatId]);

//   // Auto scroll to bottom when new messages arrive
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Handle sending a new message
//   const handleSend = async (e) => {
//     e.preventDefault();
//     if (!newMessage.trim()) return;

//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       // Send the message to the API
//       const response = await axios.post(
//         `http://localhost:5001/api/messages/${chatId}`,
//         { text: newMessage.trim() },
//         config
//       );

//       if (response.data && response.data.newMessage) {
//         // Fetch the complete list of messages to ensure we have the most up-to-date view
//         const messagesResponse = await axios.get(
//           `http://localhost:5001/api/messages/${chatId}`,
//           config
//         );

//         if (messagesResponse.data && messagesResponse.data.messages) {
//           setMessages(messagesResponse.data.messages);
//         }
//       }

//       setNewMessage("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//       alert("Failed to send message. Please try again.");
//     }
//   };

//   // Format timestamp to readable format
//   const formatTimestamp = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   if (loading) {
//     return (
//       <div className="chat-room-loading">
//         <div className="spinner"></div>
//         <p>Loading conversation...</p>
//       </div>
//     );
//   }

//   // Get user photo URL - using the same logic as ChatList
//   const getPhotoUrl = (user) => {
//     if (!user || !user.photos || user.photos.length === 0) {
//       return "/assets/profiles/default-avatar.jpg";
//     }
//     return user.photos[0].startsWith("/")
//       ? `http://localhost:5001${user.photos[0]}`
//       : user.photos[0];
//   };

//   return (
//     <div className="chat-room-container">
//       <div className="chat-room-header">
//         <Link to="/chatlist" className="back-button">
//           <span className="back-arrow">←</span>
//         </Link>
//         {matchedUser && (
//           <div className="chat-profile-info">
//             <img
//               src={getPhotoUrl(matchedUser)}
//               alt={matchedUser.name}
//               className="chat-profile-photo"
//               onError={(e) => {
//                 e.target.src = "/assets/profiles/default-avatar.jpg";
//               }}
//             />
//             <div>
//               <h2 className="chat-profile-name">{matchedUser.name}</h2>
//               <div className="chat-profile-meta">
//                 <span className="chat-location">
//                   {matchedUser.city}
//                   {matchedUser.area ? `, ${matchedUser.area}` : ""}
//                 </span>
//               </div>
//             </div>
//           </div>
//         )}
//         <a
//           href="https://rent-agreement.netlify.app/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <button className="sign-contract-button">Sign Contract</button>
//         </a>
//       </div>

//       <div className="messages-container">
//         <div className="messages-list">
//           {messages.length > 0 ? (
//             messages.map((message) => (
//               <div
//                 key={message._id}
//                 className={`message-bubble ${
//                   message.sender._id === currentUserId ? "sent" : "received"
//                 }`}
//               >
//                 <p className="message-text">{message.content}</p>
//                 <span className="message-time">
//                   {formatTimestamp(message.createdAt)}
//                 </span>
//               </div>
//             ))
//           ) : (
//             <div className="no-messages">
//               <p>No messages yet. Start the conversation!</p>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>
//       </div>

//       <form className="message-input-form" onSubmit={handleSend}>
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           className="message-input"
//         />
//         <button
//           type="submit"
//           className="send-button"
//           disabled={!newMessage.trim()}
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ChatRoom;

// import React, { useState, useEffect, useRef } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import "./ChatRoom.css";
// import { jwtDecode } from "jwt-decode";

// const ChatRoom = () => {
//   const { chatId } = useParams();
//   const [chat, setChat] = useState(null);
//   const [matchedUser, setMatchedUser] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [currentUserId, setCurrentUserId] = useState(null);
//   const messagesEndRef = useRef(null);

//   // FIXED: Simplified getCurrentUserId function
//   const getCurrentUserId = () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("No authentication token found");
//       }
//       if (token) {
//         try {
//           const decoded = jwtDecode(token);
//           console.log("=== FULL TOKEN STRUCTURE ===");
//           console.log(JSON.stringify(decoded, null, 2));
//           console.log("=== POSSIBLE USER IDs ===");
//           console.log("decoded.id:", decoded.id);
//           console.log("decoded._id:", decoded._id);
//           console.log("decoded.user:", decoded.user);
//           console.log("decoded.user?.id:", decoded.user?.id);
//           console.log("decoded.user?._id:", decoded.user?._id);
//           console.log("decoded.userId:", decoded.userId);
//           console.log("decoded.sub:", decoded.sub);
//         } catch (err) {
//           console.error("Token decode error:", err);
//         }
//       }

//       console.log("Token found, decoding...");
//       const decoded = jwtDecode(token);
//       console.log("Decoded token:", decoded);

//       // FIXED: Correct extraction of user ID
//       const userId =
//         decoded.id || decoded._id || decoded.user?.id || decoded.user?._id;
//       console.log("Extracted user ID:", userId);

//       return userId;
//     } catch (err) {
//       console.error("Error getting current user ID:", err);
//       return null;
//     }
//   };

//   // Fetch chat data and messages
//   useEffect(() => {
//     const fetchChatData = async () => {
//       try {
//         // FIXED: Get the current user ID directly from token
//         const userId = getCurrentUserId();
//         if (!userId) {
//           console.error("Failed to get current user ID");
//           setLoading(false);
//           return;
//         }

//         setCurrentUserId(userId);
//         console.log("Current User ID set to:", userId);

//         const token = localStorage.getItem("token");
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         // Get the match data to find out who we're chatting with
//         const matchResponse = await axios.get(
//           `http://localhost:5001/api/match/by-chat/${chatId}`,
//           config
//         );

//         if (matchResponse.data && matchResponse.data.match) {
//           const match = matchResponse.data.match;

//           console.log("Match data:", match);
//           console.log("User1 ID:", match.user1._id);
//           console.log("User2 ID:", match.user2._id);
//           console.log("Current User ID:", userId);

//           // FIXED: More reliable user comparison
//           const user1Id = String(match.user1._id);
//           const user2Id = String(match.user2._id);
//           const currentId = String(userId);

//           let otherUser;
//           if (user1Id === currentId) {
//             otherUser = match.user2;
//           } else if (user2Id === currentId) {
//             otherUser = match.user1;
//           } else {
//             console.error("Current user not found in match participants");
//             otherUser = match.user1; // fallback
//           }

//           console.log("Other user selected:", otherUser);
//           setMatchedUser(otherUser);

//           // Get the chat messages
//           const messagesResponse = await axios.get(
//             `http://localhost:5001/api/messages/${chatId}`,
//             config
//           );

//           if (messagesResponse.data && messagesResponse.data.messages) {
//             setMessages(messagesResponse.data.messages);
//           }

//           setChat(match.chatId);
//           setLoading(false);
//         }
//       } catch (err) {
//         console.error("Error fetching chat data:", err);
//         setLoading(false);
//       }
//     };

//     fetchChatData();
//   }, [chatId]);

//   // Auto scroll to bottom when new messages arrive
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Handle sending a new message
//   const handleSend = async (e) => {
//     e.preventDefault();
//     if (!newMessage.trim()) return;

//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       // Send the message to the API
//       const response = await axios.post(
//         `http://localhost:5001/api/messages/${chatId}`,
//         { text: newMessage.trim() },
//         config
//       );

//       if (response.data && response.data.newMessage) {
//         // Fetch the complete list of messages to ensure we have the most up-to-date view
//         const messagesResponse = await axios.get(
//           `http://localhost:5001/api/messages/${chatId}`,
//           config
//         );

//         if (messagesResponse.data && messagesResponse.data.messages) {
//           setMessages(messagesResponse.data.messages);
//         }
//       }

//       setNewMessage("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//       alert("Failed to send message. Please try again.");
//     }
//   };

//   // Format timestamp to readable format
//   const formatTimestamp = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   if (loading) {
//     return (
//       <div className="chat-room-loading">
//         <div className="spinner"></div>
//         <p>Loading conversation...</p>
//       </div>
//     );
//   }

//   // Get user photo URL
//   const getPhotoUrl = (user) => {
//     if (!user || !user.photos || user.photos.length === 0) {
//       return "/assets/profiles/default-avatar.jpg";
//     }
//     return user.photos[0].startsWith("/")
//       ? `http://localhost:5001${user.photos[0]}`
//       : user.photos[0];
//   };

//   return (
//     <div className="chat-room-container">
//       <div className="chat-room-header">
//         <Link to="/chatlist" className="back-button">
//           <span className="back-arrow">←</span>
//         </Link>
//         {matchedUser && (
//           <div className="chat-profile-info">
//             <img
//               src={getPhotoUrl(matchedUser)}
//               alt={matchedUser.name}
//               className="chat-profile-photo"
//             />
//             <div>
//               <h2 className="chat-profile-name">{matchedUser.name}</h2>
//               <div className="chat-profile-meta"></div>
//             </div>
//           </div>
//         )}
//         <a
//           href="https://rent-agreement.netlify.app/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <button className="sign-contract-button">Sign Contract</button>
//         </a>
//       </div>

//       <div className="messages-container">
//         <div className="messages-list">
//           {messages.length > 0 ? (
//             messages.map((message) => (
//               <div
//                 key={message._id}
//                 className={`message-bubble ${
//                   String(message.sender._id) === String(currentUserId)
//                     ? "sent"
//                     : "received"
//                 }`}
//               >
//                 <p className="message-text">{message.content}</p>
//                 <span className="message-time">
//                   {formatTimestamp(message.createdAt)}
//                 </span>
//               </div>
//             ))
//           ) : (
//             <div className="no-messages">
//               <p>No messages yet. Start the conversation!</p>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>
//       </div>

//       <form className="message-input-form" onSubmit={handleSend}>
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           className="message-input"
//         />
//         <button
//           type="submit"
//           className="send-button"
//           disabled={!newMessage.trim()}
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ChatRoom;

// import React, { useState, useEffect, useRef } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import "./ChatRoom.css";
// import { jwtDecode } from "jwt-decode";
// import { useAuth } from "../../AuthContext";

// const ChatRoom = () => {
//   const { chatId } = useParams();
//   const [chat, setChat] = useState(null);
//   const [matchedUser, setMatchedUser] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [loading, setLoading] = useState(true);
//   //const [currentUserId, setCurrentUserId] = useState(null);
//   const messagesEndRef = useRef(null);
//   const { isAuthenticated, user: authUser, loading: authLoading } = useAuth();
//   const [profileData, setProfileData] = useState(null);

//   // FIXED: Get user ID directly from JWT token
//   // const getCurrentUserId = () => {
//   //   try {
//   //     const token = localStorage.getItem("token");
//   //     if (!token) {
//   //       throw new Error("No authentication token found");
//   //     }

//   //     console.log("Token found, decoding...");
//   //     const decoded = jwtDecode(token);
//   //     console.log("Decoded token:", decoded);

//   //     // Based on your token structure: user.id is the correct field
//   //     const userId = decoded.user?.id;
//   //     console.log("Extracted user ID:", userId);

//   //     return userId;
//   //   } catch (err) {
//   //     console.error("Error getting current user ID:", err);
//   //     return null;
//   //   }
//   // };

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       if (!isAuthenticated) {
//         setLoading(false);
//         return;
//       }

//       try {
//         // Get token from local storage
//         const token = localStorage.getItem("token");

//         if (!token) {
//           throw new Error("No authentication token found");
//         }

//         console.log("Token found, attempting API call");

//         // Corrected the URL interpolation for the API call
//         const response = await axios.get(
//           `http://localhost:5001/api/profile/user/${authUser.id}`, // Use backticks for string interpolation
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         console.log("Profile data received:", response.data);
//         setProfileData(response.data.profile || response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching profile data:", err);

//         // Fallback to using the authUser data if API call fails
//         if (authUser) {
//           console.log("Using auth user as fallback:", authUser);
//           setProfileData(authUser);
//         }

//         setError(`Failed to load complete profile data: ${err.message}`);
//         setLoading(false);
//       }
//     };

//     if (!authLoading) {
//       fetchProfileData();
//     }
//   }, [isAuthenticated, authUser, authLoading]);
//   const userId = profileData || authUser;
//   const currentUserId = profileData || authUser;

//   // Fetch chat data and messages
//   useEffect(() => {
//     const fetchChatData = async () => {
//       try {
//         // FIXED: Get the current user ID directly from token
//         //const userId = profileData || authUser;
//         if (!userId) {
//           console.error("Failed to get current user ID");
//           setLoading(false);
//           return;
//         }

//         setCurrentUserId(userId);
//         console.log("Current User ID set to:", userId);

//         const token = localStorage.getItem("token");
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         // Get the match data to find out who we're chatting with
//         const matchResponse = await axios.get(
//           `http://localhost:5001/api/match/by-chat/${chatId}`,
//           config
//         );

//         if (matchResponse.data && matchResponse.data.match) {
//           const match = matchResponse.data.match;

//           console.log("Match data:", match);
//           console.log("User1 ID:", match.user1._id);
//           console.log("User2 ID:", match.user2._id);
//           console.log("Current User ID:", userId);

//           // FIXED: More reliable user comparison
//           const user1Id = String(match.user1._id);
//           const user2Id = String(match.user2._id);
//           const currentId = String(userId);

//           let otherUser;
//           if (user1Id === currentId) {
//             otherUser = match.user2;
//           } else if (user2Id === currentId) {
//             otherUser = match.user1;
//           } else {
//             console.error("Current user not found in match participants");
//             otherUser = match.user1; // fallback
//           }

//           console.log("Other user selected:", otherUser);
//           setMatchedUser(otherUser);

//           // Get the chat messages
//           const messagesResponse = await axios.get(
//             `http://localhost:5001/api/messages/${chatId}`,
//             config
//           );

//           if (messagesResponse.data && messagesResponse.data.messages) {
//             setMessages(messagesResponse.data.messages);
//           }

//           setChat(match.chatId);
//           setLoading(false);
//         }
//       } catch (err) {
//         console.error("Error fetching chat data:", err);
//         setLoading(false);
//       }
//     };

//     fetchChatData();
//   }, [chatId]);

//   // Auto scroll to bottom when new messages arrive
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Handle sending a new message
//   const handleSend = async (e) => {
//     e.preventDefault();
//     if (!newMessage.trim()) return;

//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       // Send the message to the API
//       const response = await axios.post(
//         `http://localhost:5001/api/messages/${chatId}`,
//         { text: newMessage.trim() },
//         config
//       );

//       if (response.data && response.data.newMessage) {
//         // Fetch the complete list of messages to ensure we have the most up-to-date view
//         const messagesResponse = await axios.get(
//           `http://localhost:5001/api/messages/${chatId}`,
//           config
//         );

//         if (messagesResponse.data && messagesResponse.data.messages) {
//           setMessages(messagesResponse.data.messages);
//         }
//       }

//       setNewMessage("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//       alert("Failed to send message. Please try again.");
//     }
//   };

//   // Format timestamp to readable format
//   const formatTimestamp = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   if (loading) {
//     return (
//       <div className="chat-room-loading">
//         <div className="spinner"></div>
//         <p>Loading conversation...</p>
//       </div>
//     );
//   }

//   // Get user photo URL
//   const getPhotoUrl = (user) => {
//     if (!user || !user.photos || user.photos.length === 0) {
//       return "/assets/profiles/default-avatar.jpg";
//     }
//     return user.photos[0].startsWith("/")
//       ? `http://localhost:5001${user.photos[0]}`
//       : user.photos[0];
//   };

//   return (
//     <div className="chat-room-container">
//       <div className="chat-room-header">
//         <Link to="/chatlist" className="back-button">
//           <span className="back-arrow">←</span>
//         </Link>
//         {matchedUser && (
//           <div className="chat-profile-info">
//             <img
//               src={getPhotoUrl(matchedUser)}
//               alt={matchedUser.name}
//               className="chat-profile-photo"
//             />
//             <div>
//               <h2 className="chat-profile-name">{matchedUser.name}</h2>
//               <div className="chat-profile-meta"></div>
//             </div>
//           </div>
//         )}
//         <a
//           href="https://rent-agreement.netlify.app/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <button className="sign-contract-button">Sign Contract</button>
//         </a>
//       </div>

//       <div className="messages-container">
//         <div className="messages-list">
//           {messages.length > 0 ? (
//             messages.map((message) => (
//               <div
//                 key={message._id}
//                 className={`message-bubble ${
//                   String(message.sender._id) === String(currentUserId)
//                     ? "sent"
//                     : "received"
//                 }`}
//               >
//                 <p className="message-text">{message.content}</p>
//                 <span className="message-time">
//                   {formatTimestamp(message.createdAt)}
//                 </span>
//               </div>
//             ))
//           ) : (
//             <div className="no-messages">
//               <p>No messages yet. Start the conversation!</p>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>
//       </div>

//       <form className="message-input-form" onSubmit={handleSend}>
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           className="message-input"
//         />
//         <button
//           type="submit"
//           className="send-button"
//           disabled={!newMessage.trim()}
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ChatRoom;

// import React, { useState, useEffect, useRef } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import "./ChatRoom.css";
// import { jwtDecode } from "jwt-decode";

// const ChatRoom = () => {
//   const { chatId } = useParams();
//   const [chat, setChat] = useState(null);
//   const [matchedUser, setMatchedUser] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [currentUserId, setCurrentUserId] = useState(null);
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     const fetchChatData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           console.error("No authentication token found");
//           setLoading(false);
//           return;
//         }

//         const decoded = jwtDecode(token);
//         const userId = decoded?.user?.id;
//         if (!userId) {
//           console.error("Could not extract user ID from token");
//           setLoading(false);
//           return;
//         }

//         setCurrentUserId(userId);
//         console.log("Current logged-in user ID:", userId);

//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         const matchResponse = await axios.get(
//           `http://localhost:5001/api/match/by-chat/${chatId}`,
//           config
//         );

//         if (matchResponse.data?.match) {
//           const match = matchResponse.data.match;
//           const user1Id = String(match.user1._id);
//           const user2Id = String(match.user2._id);
//           const currentId = String(userId);

//           let otherUser;
//           if (user1Id === currentId) {
//             otherUser = match.user2;
//           } else if (user2Id === currentId) {
//             otherUser = match.user1;
//           } else {
//             console.warn(
//               "Current user not found in match participants. Defaulting..."
//             );
//             otherUser = match.user1;
//           }

//           setMatchedUser(otherUser);
//           setChat(match.chatId);

//           const messagesResponse = await axios.get(
//             `http://localhost:5001/api/messages/${chatId}`,
//             config
//           );

//           if (messagesResponse.data?.messages) {
//             setMessages(messagesResponse.data.messages);
//           }
//         }

//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching chat data:", err);
//         setLoading(false);
//       }
//     };

//     fetchChatData();
//   }, [chatId]);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleSend = async (e) => {
//     e.preventDefault();
//     if (!newMessage.trim()) return;

//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       const response = await axios.post(
//         `http://localhost:5001/api/messages/${chatId}`,
//         { text: newMessage.trim() },
//         config
//       );

//       if (response.data?.newMessage) {
//         const messagesResponse = await axios.get(
//           `http://localhost:5001/api/messages/${chatId}`,
//           config
//         );

//         if (messagesResponse.data?.messages) {
//           setMessages(messagesResponse.data.messages);
//         }
//       }

//       setNewMessage("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//       alert("Failed to send message. Please try again.");
//     }
//   };

//   const formatTimestamp = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   const getPhotoUrl = (user) => {
//     if (!user || !user.photos || user.photos.length === 0) {
//       return "/assets/profiles/default-avatar.jpg";
//     }
//     return user.photos[0].startsWith("/")
//       ? `http://localhost:5001${user.photos[0]}`
//       : user.photos[0];
//   };

//   if (loading) {
//     return (
//       <div className="chat-room-loading">
//         <div className="spinner"></div>
//         <p>Loading conversation...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="chat-room-container">
//       <div className="chat-room-header">
//         <Link to="/chatlist" className="back-button">
//           <span className="back-arrow">←</span>
//         </Link>
//         {matchedUser && (
//           <div className="chat-profile-info">
//             <img
//               src={getPhotoUrl(matchedUser)}
//               alt={matchedUser.name}
//               className="chat-profile-photo"
//             />
//             <div>
//               <h2 className="chat-profile-name">{matchedUser.name}</h2>
//             </div>
//           </div>
//         )}
//         <a
//           href="https://rent-agreement.netlify.app/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <button className="sign-contract-button">Sign Contract</button>
//         </a>
//       </div>

//       <div className="messages-container">
//         <div className="messages-list">
//           {messages.length > 0 ? (
//             messages.map((message) => (
//               <div
//                 key={message._id}
//                 className={`message-bubble ${
//                   String(message.sender._id) === String(currentUserId)
//                     ? "sent"
//                     : "received"
//                 }`}
//               >
//                 <p className="message-text">{message.content}</p>
//                 <span className="message-time">
//                   {formatTimestamp(message.createdAt)}
//                 </span>
//               </div>
//             ))
//           ) : (
//             <div className="no-messages">
//               <p>No messages yet. Start the conversation!</p>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>
//       </div>

//       <form className="message-input-form" onSubmit={handleSend}>
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           className="message-input"
//         />
//         <button
//           type="submit"
//           className="send-button"
//           disabled={!newMessage.trim()}
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ChatRoom;

// import React, { useState, useEffect, useRef } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import "./ChatRoom.css";
// import { jwtDecode } from "jwt-decode";
// import { useAuth } from "../../AuthContext";

// const ChatRoom = () => {
//   const { chatId } = useParams();
//   const [chat, setChat] = useState(null);
//   const [matchedUser, setMatchedUser] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const messagesEndRef = useRef(null);
//   const { isAuthenticated, user: authUser, loading: authLoading } = useAuth();
//   const [profileData, setProfileData] = useState(null);

//   // Fetch profile data (same as ChatList)
//   useEffect(() => {
//     const fetchProfileData = async () => {
//       if (!isAuthenticated) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const token = localStorage.getItem("token");

//         if (!token) {
//           throw new Error("No authentication token found");
//         }

//         console.log("Token found, attempting API call");

//         const response = await axios.get(
//           `http://localhost:5001/api/profile/user/${authUser.id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         console.log("Profile data received:", response.data);
//         setProfileData(response.data.profile || response.data);
//       } catch (err) {
//         console.error("Error fetching profile data:", err);

//         // Fallback to using the authUser data if API call fails
//         if (authUser) {
//           console.log("Using auth user as fallback:", authUser);
//           setProfileData(authUser);
//         }

//         setError(`Failed to load complete profile data: ${err.message}`);
//       }
//     };

//     if (!authLoading) {
//       fetchProfileData();
//     }
//   }, [isAuthenticated, authUser, authLoading]);

//   // Get current user (same logic as ChatList)
//   const currentUser = profileData || authUser;

//   // Fetch chat data and messages
//   useEffect(() => {
//     const fetchChatData = async () => {
//       if (!currentUser || !currentUser._id) {
//         console.log("Current user not ready yet");
//         return;
//       }

//       try {
//         const token = localStorage.getItem("token");
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         console.log("Fetching chat data for user:", currentUser._id);

//         // Get the match data to find out who we're chatting with
//         const matchResponse = await axios.get(
//           `http://localhost:5001/api/match/by-chat/${chatId}`,
//           config
//         );

//         if (matchResponse.data && matchResponse.data.match) {
//           const match = matchResponse.data.match;

//           console.log("Match data:", match);
//           console.log("User1 ID:", match.user1._id);
//           console.log("User2 ID:", match.user2._id);
//           console.log("Current User ID:", currentUser._id);

//           // Use the same logic as ChatList to get the matched user
//           const currentId = String(currentUser._id);
//           const user1Id = String(match.user1._id);
//           const user2Id = String(match.user2._id);

//           let otherUser;
//           if (user1Id === currentId) {
//             otherUser = match.user2;
//           } else if (user2Id === currentId) {
//             otherUser = match.user1;
//           } else {
//             console.warn(
//               "Current user not found in match, falling back to user1"
//             );
//             otherUser = match.user1;
//           }

//           console.log("Other user selected:", otherUser);
//           setMatchedUser(otherUser);

//           // Get the chat messages
//           const messagesResponse = await axios.get(
//             `http://localhost:5001/api/messages/${chatId}`,
//             config
//           );

//           if (messagesResponse.data && messagesResponse.data.messages) {
//             setMessages(messagesResponse.data.messages);
//           }

//           setChat(match.chatId);
//           setLoading(false);
//         }
//       } catch (err) {
//         console.error("Error fetching chat data:", err);
//         setError(`Failed to load chat data: ${err.message}`);
//         setLoading(false);
//       }
//     };

//     fetchChatData();
//   }, [chatId, currentUser]);

//   // Auto scroll to bottom when new messages arrive
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Handle sending a new message
//   const handleSend = async (e) => {
//     e.preventDefault();
//     if (!newMessage.trim()) return;

//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       // Send the message to the API
//       const response = await axios.post(
//         `http://localhost:5001/api/messages/${chatId}`,
//         { text: newMessage.trim() },
//         config
//       );

//       if (response.data && response.data.newMessage) {
//         // Fetch the complete list of messages to ensure we have the most up-to-date view
//         const messagesResponse = await axios.get(
//           `http://localhost:5001/api/messages/${chatId}`,
//           config
//         );

//         if (messagesResponse.data && messagesResponse.data.messages) {
//           setMessages(messagesResponse.data.messages);
//         }
//       }

//       setNewMessage("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//       alert("Failed to send message. Please try again.");
//     }
//   };

//   // Format timestamp to readable format
//   const formatTimestamp = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   if (loading || !currentUser) {
//     return (
//       <div className="chat-room-loading">
//         <div className="spinner"></div>
//         <p>Loading conversation...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="error-message">
//         <p>{error}</p>
//         <button onClick={() => window.location.reload()}>Try Again</button>
//       </div>
//     );
//   }

//   // Get user photo URL
//   const getPhotoUrl = (user) => {
//     if (!user || !user.photos || user.photos.length === 0) {
//       return "/assets/profiles/default-avatar.jpg";
//     }
//     return user.photos[0].startsWith("/")
//       ? `http://localhost:5001${user.photos[0]}`
//       : user.photos[0];
//   };

//   return (
//     <div className="chat-room-container">
//       <div className="chat-room-header">
//         <Link to="/chatlist" className="back-button">
//           <span className="back-arrow">←</span>
//         </Link>
//         {matchedUser && (
//           <div className="chat-profile-info">
//             <img
//               src={getPhotoUrl(matchedUser)}
//               alt={matchedUser.name}
//               className="chat-profile-photo"
//               onError={(e) => {
//                 e.target.src = "/assets/profiles/default-avatar.jpg";
//               }}
//             />
//             <div>
//               <h2 className="chat-profile-name">{matchedUser.name}</h2>
//               <div className="chat-profile-meta">
//                 {matchedUser.city}
//                 {matchedUser.area ? `, ${matchedUser.area}` : ""}
//               </div>
//             </div>
//           </div>
//         )}
//         <a
//           href="https://rent-agreement.netlify.app/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <button className="sign-contract-button">Sign Contract</button>
//         </a>
//       </div>

//       <div className="messages-container">
//         <div className="messages-list">
//           {messages.length > 0 ? (
//             messages.map((message) => (
//               <div
//                 key={message._id}
//                 className={`message-bubble ${
//                   String(message.sender._id) === String(currentUser._id)
//                     ? "sent"
//                     : "received"
//                 }`}
//               >
//                 <p className="message-text">{message.content}</p>
//                 <span className="message-time">
//                   {formatTimestamp(message.createdAt)}
//                 </span>
//               </div>
//             ))
//           ) : (
//             <div className="no-messages">
//               <p>No messages yet. Start the conversation!</p>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>
//       </div>

//       <form className="message-input-form" onSubmit={handleSend}>
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           className="message-input"
//         />
//         <button
//           type="submit"
//           className="send-button"
//           disabled={!newMessage.trim()}
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ChatRoom;

// import React, { useState, useEffect, useRef } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import "./ChatRoom.css";
// import { jwtDecode } from "jwt-decode";
// import { useAuth } from "../../AuthContext";

// const ChatRoom = () => {
//   const { chatId } = useParams();
//   const [chat, setChat] = useState(null);
//   const [matchedUser, setMatchedUser] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const messagesEndRef = useRef(null);
//   const { isAuthenticated, user: authUser, loading: authLoading } = useAuth();
//   const [profileData, setProfileData] = useState(null);

//   // Fetch profile data (same as ChatList)
//   // useEffect(() => {
//   //   const fetchProfileData = async () => {
//   //     if (!isAuthenticated) {
//   //       setLoading(false);
//   //       return;
//   //     }

//   //     try {
//   //       const token = localStorage.getItem("token");

//   //       if (!token) {
//   //         throw new Error("No authentication token found");
//   //       }

//   //       console.log("Token found, attempting API call");

//   //       const response = await axios.get(
//   //         `http://localhost:5001/api/profile/user/${authUser.id}`,
//   //         {
//   //           headers: {
//   //             Authorization: `Bearer ${token}`,
//   //           },
//   //         }
//   //       );

//   //       console.log("Profile data received:", response.data);
//   //       setProfileData(response.data.profile || response.data);
//   //     } catch (err) {
//   //       console.error("Error fetching profile data:", err);

//   //       // Fallback to using the authUser data if API call fails
//   //       if (authUser) {
//   //         console.log("Using auth user as fallback:", authUser);
//   //         setProfileData(authUser);
//   //       }

//   //       setError(`Failed to load complete profile data: ${err.message}`);
//   //     }
//   //   };

//   //   if (!authLoading) {
//   //     fetchProfileData();
//   //   }
//   // }, [isAuthenticated, authUser, authLoading]);

//   // // Get current user (same logic as ChatList)
//   // const currentUser = profileData || authUser;

//   // // Fetch chat data and messages
//   // useEffect(() => {
//   //   const fetchChatData = async () => {
//   //     if (!currentUser || !currentUser._id) {
//   //       console.log("Current user not ready yet");
//   //       return;
//   //     }

//   //     try {
//   //       const token = localStorage.getItem("token");
//   //       const config = {
//   //         headers: {
//   //           Authorization: `Bearer ${token}`,
//   //         },
//   //       };

//   //       console.log("Fetching chat data for user:", currentUser._id);

//   //       // Get the match data to find out who we're chatting with
//   //       const matchResponse = await axios.get(
//   //         `http://localhost:5001/api/match/by-chat/${chatId}`,
//   //         config
//   //       );

//   //       if (matchResponse.data && matchResponse.data.match) {
//   //         const match = matchResponse.data.match;

//   //         console.log("Match data:", match);
//   //         console.log("User1 ID:", match.user1._id);
//   //         console.log("User2 ID:", match.user2._id);
//   //         console.log("Current User ID:", currentUser._id);

//   //         // Use the same logic as ChatList to get the matched user
//   //         const currentId = String(currentUser._id);
//   //         const user1Id = String(match.user1._id);
//   //         const user2Id = String(match.user2._id);

//   //         let otherUser;
//   //         if (user1Id === currentId) {
//   //           otherUser = match.user2;
//   //         } else if (user2Id === currentId) {
//   //           otherUser = match.user1;
//   //         } else {
//   //           console.warn(
//   //             "Current user not found in match, falling back to user1"
//   //           );
//   //           otherUser = match.user1;
//   //         }

//   //         console.log("Other user selected:", otherUser);
//   //         setMatchedUser(otherUser);

//   //         // Get the chat messages
//   //         const messagesResponse = await axios.get(
//   //           `http://localhost:5001/api/messages/${chatId}`,
//   //           config
//   //         );

//   //         if (messagesResponse.data && messagesResponse.data.messages) {
//   //           setMessages(messagesResponse.data.messages);
//   //         }

//   //         setChat(match.chatId);
//   //         setLoading(false);
//   //       }
//   //     } catch (err) {
//   //       console.error("Error fetching chat data:", err);
//   //       setError(`Failed to load chat data: ${err.message}`);
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchChatData();
//   // }, [chatId, currentUser]);

//   // // Auto scroll to bottom when new messages arrive
//   // useEffect(() => {
//   //   scrollToBottom();
//   // }, [messages]);

//   // // Replace both your existing useEffects with this single one:
//   // useEffect(() => {
//   //   const fetchAllData = async () => {
//   //     if (authLoading) {
//   //       console.log("Auth still loading, waiting...");
//   //       return;
//   //     }

//   //     if (!isAuthenticated) {
//   //       setLoading(false);
//   //       return;
//   //     }

//   //     try {
//   //       const token = localStorage.getItem("token");
//   //       if (!token) {
//   //         throw new Error("No authentication token found");
//   //       }

//   //       let currentUserData = authUser; // Start with authUser as fallback

//   //       // First, try to fetch the complete profile data
//   //       try {
//   //         console.log("Fetching profile data for user:", authUser.id);
//   //         const profileResponse = await axios.get(
//   //           `http://localhost:5001/api/profile/user/${authUser.id}`,
//   //           {
//   //             headers: { Authorization: `Bearer ${token}` },
//   //           }
//   //         );

//   //         console.log("Profile data received:", profileResponse.data);
//   //         const fetchedProfile =
//   //           profileResponse.data.profile || profileResponse.data;
//   //         setProfileData(fetchedProfile);
//   //         currentUserData = fetchedProfile; // Use the complete profile data
//   //       } catch (profileErr) {
//   //         console.error("Error fetching profile data:", profileErr);
//   //         console.log("Using auth user as fallback:", authUser);
//   //         setProfileData(authUser);
//   //         // currentUserData remains as authUser
//   //       }

//   //       // Now fetch chat data using the resolved user data
//   //       if (!currentUserData || !currentUserData._id) {
//   //         console.error("No valid user data available");
//   //         setError("User data not available");
//   //         setLoading(false);
//   //         return;
//   //       }

//   //       console.log("Fetching chat data with user:", currentUserData._id);

//   //       const config = {
//   //         headers: { Authorization: `Bearer ${token}` },
//   //       };

//   //       // Get the match data
//   //       const matchResponse = await axios.get(
//   //         `http://localhost:5001/api/match/by-chat/${chatId}`,
//   //         config
//   //       );

//   //       if (matchResponse.data && matchResponse.data.match) {
//   //         const match = matchResponse.data.match;
//   //         console.log("Match data:", match);

//   //         // Determine the other user
//   //         const currentId = String(currentUserData._id);
//   //         const user1Id = String(match.user1._id);
//   //         const user2Id = String(match.user2._id);

//   //         let otherUser;
//   //         if (user1Id === currentId) {
//   //           otherUser = match.user2;
//   //         } else if (user2Id === currentId) {
//   //           otherUser = match.user1;
//   //         } else {
//   //           console.warn(
//   //             "Current user not found in match, falling back to user1"
//   //           );
//   //           otherUser = match.user1;
//   //         }

//   //         console.log("Other user selected:", otherUser);
//   //         setMatchedUser(otherUser);

//   //         // Get the chat messages
//   //         const messagesResponse = await axios.get(
//   //           `http://localhost:5001/api/messages/${chatId}`,
//   //           config
//   //         );

//   //         if (messagesResponse.data && messagesResponse.data.messages) {
//   //           setMessages(messagesResponse.data.messages);
//   //         }

//   //         setChat(match.chatId);
//   //       }

//   //       setLoading(false);
//   //     } catch (err) {
//   //       console.error("Error in fetchAllData:", err);
//   //       setError(`Failed to load data: ${err.message}`);
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchAllData();
//   // }, [isAuthenticated, authUser, authLoading, chatId]); // Dependencies

//   // // Also update your currentUser to be more explicit:
//   // const currentUser = profileData || authUser;

//   // Replace BOTH of your existing useEffects with this single one:
//   useEffect(() => {
//     const fetchAllData = async () => {
//       console.log("=== Starting fetchAllData ===");
//       console.log("authLoading:", authLoading);
//       console.log("isAuthenticated:", isAuthenticated);
//       console.log("authUser:", authUser);

//       // Wait for auth to be ready
//       if (authLoading) {
//         console.log("Auth still loading, waiting...");
//         return;
//       }

//       if (!isAuthenticated || !authUser) {
//         console.log("Not authenticated or no auth user");
//         setLoading(false);
//         return;
//       }

//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           throw new Error("No authentication token found");
//         }

//         let resolvedUser = authUser; // Start with authUser as fallback

//         // STEP 1: Fetch complete profile data
//         console.log("=== STEP 1: Fetching Profile Data ===");
//         try {
//           const profileResponse = await axios.get(
//             `http://localhost:5001/api/profile/user/${authUser.id}`,
//             {
//               headers: { Authorization: `Bearer ${token}` },
//             }
//           );

//           const fetchedProfile =
//             profileResponse.data.profile || profileResponse.data;
//           console.log("Profile data fetched successfully:", fetchedProfile);

//           setProfileData(fetchedProfile);
//           resolvedUser = fetchedProfile; // Use the complete profile
//         } catch (profileErr) {
//           console.error("Profile fetch failed, using authUser:", profileErr);
//           setProfileData(authUser);
//           resolvedUser = authUser; // Keep using authUser
//         }

//         // STEP 2: Validate we have proper user data
//         if (!resolvedUser || !resolvedUser._id) {
//           console.error("No valid user ID found:", resolvedUser);
//           throw new Error("Invalid user data");
//         }

//         console.log("=== STEP 2: Resolved User ===");
//         console.log("Final resolved user:", resolvedUser);
//         console.log("User ID to use:", resolvedUser._id);

//         // STEP 3: Fetch chat/match data
//         console.log("=== STEP 3: Fetching Chat Data ===");
//         const config = {
//           headers: { Authorization: `Bearer ${token}` },
//         };

//         const matchResponse = await axios.get(
//           `http://localhost:5001/api/match/by-chat/${chatId}`,
//           config
//         );

//         if (!matchResponse.data || !matchResponse.data.match) {
//           throw new Error("No match data found");
//         }

//         const match = matchResponse.data.match;
//         console.log("Match data:", match);

//         // STEP 4: Determine the other user
//         const currentId = String(resolvedUser._id);
//         const user1Id = String(match.user1._id);
//         const user2Id = String(match.user2._id);

//         console.log("=== STEP 4: User Matching ===");
//         console.log("Current user ID:", currentId);
//         console.log("Match user1 ID:", user1Id);
//         console.log("Match user2 ID:", user2Id);

//         let otherUser;
//         if (user1Id === currentId) {
//           otherUser = match.user2;
//           console.log("Current user is user1, other user is user2:", otherUser);
//         } else if (user2Id === currentId) {
//           otherUser = match.user1;
//           console.log("Current user is user2, other user is user1:", otherUser);
//         } else {
//           console.warn("Current user not found in match participants!");
//           console.warn("Falling back to user1 as other user");
//           otherUser = match.user1;
//         }

//         setMatchedUser(otherUser);

//         // STEP 5: Fetch messages
//         console.log("=== STEP 5: Fetching Messages ===");
//         const messagesResponse = await axios.get(
//           `http://localhost:5001/api/messages/${chatId}`,
//           config
//         );

//         if (messagesResponse.data && messagesResponse.data.messages) {
//           console.log(
//             "Messages fetched:",
//             messagesResponse.data.messages.length
//           );
//           setMessages(messagesResponse.data.messages);
//         }

//         setChat(match.chatId);
//         setLoading(false);

//         console.log("=== All data loaded successfully ===");
//       } catch (err) {
//         console.error("Error in fetchAllData:", err);
//         setError(`Failed to load data: ${err.message}`);
//         setLoading(false);
//       }
//     };

//     // Only run when we have the essential dependencies
//     if (!authLoading) {
//       fetchAllData();
//     }
//   }, [isAuthenticated, authUser, authLoading, chatId]);

//   // Update your currentUser definition to be more explicit:
//   const currentUser = profileData || authUser;

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Handle sending a new message
//   const handleSend = async (e) => {
//     e.preventDefault();
//     if (!newMessage.trim()) return;

//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       console.log("Sending message from user:", currentUser._id);
//       console.log("Message content:", newMessage.trim());

//       // Send the message to the API
//       const response = await axios.post(
//         `http://localhost:5001/api/messages/${chatId}`,
//         { text: newMessage.trim() },
//         config
//       );

//       console.log("Message sent response:", response.data);

//       if (response.data && response.data.newMessage) {
//         // Fetch the complete list of messages to ensure we have the most up-to-date view
//         const messagesResponse = await axios.get(
//           `http://localhost:5001/api/messages/${chatId}`,
//           config
//         );

//         console.log("Updated messages:", messagesResponse.data);

//         if (messagesResponse.data && messagesResponse.data.messages) {
//           setMessages(messagesResponse.data.messages);
//         }
//       }

//       setNewMessage("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//       alert("Failed to send message. Please try again.");
//     }
//   };

//   // Format timestamp to readable format
//   const formatTimestamp = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   if (loading || !currentUser) {
//     return (
//       <div className="chat-room-loading">
//         <div className="spinner"></div>
//         <p>Loading conversation...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="error-message">
//         <p>{error}</p>
//         <button onClick={() => window.location.reload()}>Try Again</button>
//       </div>
//     );
//   }

//   // Get user photo URL
//   const getPhotoUrl = (user) => {
//     if (!user || !user.photos || user.photos.length === 0) {
//       return "/assets/profiles/default-avatar.jpg";
//     }
//     return user.photos[0].startsWith("/")
//       ? `http://localhost:5001${user.photos[0]}`
//       : user.photos[0];
//   };

//   return (
//     <div className="chat-room-container">
//       <div className="chat-room-header">
//         <Link to="/chatlist" className="back-button">
//           <span className="back-arrow">←</span>
//         </Link>
//         {matchedUser && (
//           <div className="chat-profile-info">
//             <img
//               src={getPhotoUrl(matchedUser)}
//               alt={matchedUser.name}
//               className="chat-profile-photo"
//               onError={(e) => {
//                 e.target.src = "/assets/profiles/default-avatar.jpg";
//               }}
//             />
//             <div>
//               <h2 className="chat-profile-name">{matchedUser.name}</h2>
//               <div className="chat-profile-meta">
//                 {matchedUser.city}
//                 {matchedUser.area ? `, ${matchedUser.area}` : ""}
//               </div>
//             </div>
//           </div>
//         )}
//         <a
//           href="https://rent-agreement.netlify.app/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <button className="sign-contract-button">Sign Contract</button>
//         </a>
//       </div>

//       <div className="messages-container">
//         <div className="messages-list">
//           {messages.length > 0 ? (
//             messages.map((message) => {
//               const isCurrentUserMessage =
//                 String(message.sender._id) === String(currentUser._id);
//               console.log("Message sender ID:", message.sender._id);
//               console.log("Current user ID:", currentUser._id);
//               console.log("Is current user message:", isCurrentUserMessage);

//               return (
//                 <div
//                   key={message._id}
//                   className={`message-bubble ${
//                     isCurrentUserMessage ? "sent" : "received"
//                   }`}
//                 >
//                   <p className="message-text">{message.content}</p>
//                   <span className="message-time">
//                     {formatTimestamp(message.createdAt)}
//                   </span>
//                 </div>
//               );
//             })
//           ) : (
//             <div className="no-messages">
//               <p>No messages yet. Start the conversation!</p>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>
//       </div>

//       <form className="message-input-form" onSubmit={handleSend}>
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           className="message-input"
//         />
//         <button
//           type="submit"
//           className="send-button"
//           disabled={!newMessage.trim()}
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ChatRoom;

import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./ChatRoom.css";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../../AuthContext";

const ChatRoom = () => {
  const { chatId } = useParams();
  const [chat, setChat] = useState(null);
  const [matchedUser, setMatchedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const { isAuthenticated, user: authUser, loading: authLoading } = useAuth();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      console.log("=== Starting fetchAllData ===");
      console.log("authLoading:", authLoading);
      console.log("isAuthenticated:", isAuthenticated);
      console.log("authUser:", authUser);

      // Wait for auth to be ready
      if (authLoading) {
        console.log("Auth still loading, waiting...");
        return;
      }

      if (!isAuthenticated || !authUser) {
        console.log("Not authenticated or no auth user");
        setLoading(false);
        return;
      }

      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No authentication token found");
        }

        let resolvedUser = authUser; // Start with authUser as fallback

        // STEP 1: Fetch complete profile data
        console.log("=== STEP 1: Fetching Profile Data ===");
        try {
          const profileResponse = await axios.get(
            `http://localhost:5001/api/profile/user/${authUser.id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          const fetchedProfile =
            profileResponse.data.profile || profileResponse.data;
          console.log("Profile data fetched successfully:", fetchedProfile);

          setProfileData(fetchedProfile);
          resolvedUser = fetchedProfile; // Use the complete profile
        } catch (profileErr) {
          console.error("Profile fetch failed, using authUser:", profileErr);
          setProfileData(authUser);
          resolvedUser = authUser; // Keep using authUser
        }

        // STEP 2: Validate we have proper user data
        if (!resolvedUser || !resolvedUser._id) {
          console.error("No valid user ID found:", resolvedUser);
          throw new Error("Invalid user data");
        }

        console.log("=== STEP 2: Resolved User ===");
        console.log("Final resolved user:", resolvedUser);
        console.log("User ID to use:", resolvedUser._id);

        // STEP 3: Fetch chat/match data
        console.log("=== STEP 3: Fetching Chat Data ===");
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        const matchResponse = await axios.get(
          `http://localhost:5001/api/match/by-chat/${chatId}`,
          config
        );

        if (!matchResponse.data || !matchResponse.data.match) {
          throw new Error("No match data found");
        }

        const match = matchResponse.data.match;
        console.log("Match data:", match);

        // STEP 4: Determine the other user
        const currentId = String(resolvedUser._id);
        const user1Id = String(match.user1._id);
        const user2Id = String(match.user2._id);

        console.log("=== STEP 4: User Matching ===");
        console.log("Current user ID:", currentId);
        console.log("Match user1 ID:", user1Id);
        console.log("Match user2 ID:", user2Id);

        let otherUser;
        if (user1Id === currentId) {
          otherUser = match.user2;
          console.log("Current user is user1, other user is user2:", otherUser);
        } else if (user2Id === currentId) {
          otherUser = match.user1;
          console.log("Current user is user2, other user is user1:", otherUser);
        } else {
          console.warn("Current user not found in match participants!");
          console.warn("Falling back to user1 as other user");
          otherUser = match.user1;
        }

        setMatchedUser(otherUser);

        // STEP 5: Fetch messages
        console.log("=== STEP 5: Fetching Messages ===");
        const messagesResponse = await axios.get(
          `http://localhost:5001/api/messages/${chatId}`,
          config
        );

        if (messagesResponse.data && messagesResponse.data.messages) {
          console.log(
            "Messages fetched:",
            messagesResponse.data.messages.length
          );
          setMessages(messagesResponse.data.messages);
        }

        setChat(match.chatId);
        setLoading(false);

        console.log("=== All data loaded successfully ===");
      } catch (err) {
        console.error("Error in fetchAllData:", err);
        setError(`Failed to load data: ${err.message}`);
        setLoading(false);
      }
    };

    // Only run when we have the essential dependencies
    if (!authLoading) {
      fetchAllData();
    }
  }, [isAuthenticated, authUser, authLoading, chatId]);

  const currentUser = profileData || authUser;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      console.log("Sending message from user:", currentUser._id);
      console.log("Message content:", newMessage.trim());

      // Send the message to the API
      const response = await axios.post(
        `http://localhost:5001/api/messages/${chatId}`,
        { text: newMessage.trim() },
        config
      );

      console.log("Message sent response:", response.data);

      if (response.data && response.data.newMessage) {
        // Update messages state with the new message
        setMessages((prevMessages) => [
          ...prevMessages,
          response.data.newMessage,
        ]);
      }

      setNewMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
      alert("Failed to send message. Please try again.");
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading || !currentUser) {
    return (
      <div className="chat-room-loading">
        <div className="spinner"></div>
        <p>Loading conversation...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  const getPhotoUrl = (user) => {
    if (!user || !user.photos || user.photos.length === 0) {
      return "/assets/profiles/default-avatar.jpg";
    }
    return user.photos[0].startsWith("/")
      ? `http://localhost:5001${user.photos[0]}`
      : user.photos[0];
  };

  return (
    <div className="chat-room-container">
      <div className="chat-room-header">
        <Link to="/chatlist" className="back-button">
          <span className="back-arrow">←</span>
        </Link>
        {matchedUser && (
          <div className="chat-profile-info">
            <img
              src={getPhotoUrl(matchedUser)}
              alt={matchedUser.name}
              className="chat-profile-photo"
              onError={(e) => {
                e.target.src = "/assets/profiles/default-avatar.jpg";
              }}
            />
            <div>
              <h2 className="chat-profile-name">{matchedUser.name}</h2>
              <div className="chat-profile-meta">
                {matchedUser.city}
                {matchedUser.area ? `, ${matchedUser.area}` : ""}
              </div>
            </div>
          </div>
        )}
        <a
          href="https://rent-agreement.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="sign-contract-button">Sign Contract</button>
        </a>
      </div>

      <div className="messages-container">
        <div className="messages-list">
          {messages.length > 0 ? (
            // messages.map((message) => {
            //   // Ensure we're comparing string representations of the IDs
            //   const isCurrentUserMessage =
            //     String(message.sender._id) === String(currentUser._id);

            //   return (
            //     <div
            //       key={message._id}
            //       className={`message-bubble ${
            //         isCurrentUserMessage ? "sent" : "received"
            //       }`}
            //     >
            //       <p className="message-text">{message.content}</p>
            //       <span className="message-time">
            //         {formatTimestamp(message.createdAt)}
            //       </span>
            //     </div>
            //   );
            // })
            messages.map((message) => {
              // Convert both IDs to strings for reliable comparison
              const senderId = message.sender?._id?.toString();
              const currentUserId = currentUser?._id?.toString();

              console.log("Message comparison:", {
                messageId: message._id,
                sender: message.sender?._id,
                currentUser: currentUser?._id,
                content: message.content,
                isCurrentUser: senderId === currentUserId,
              });

              return (
                <div
                  key={message._id}
                  className={`message-bubble ${
                    senderId === currentUserId ? "sent" : "received"
                  }`}
                >
                  <p className="message-text">{message.content}</p>
                  <span className="message-time">
                    {formatTimestamp(message.createdAt)}
                  </span>
                </div>
              );
            })
          ) : (
            <div className="no-messages">
              <p>No messages yet. Start the conversation!</p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <form className="message-input-form" onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="message-input"
        />
        <button
          type="submit"
          className="send-button"
          disabled={!newMessage.trim()}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatRoom;
