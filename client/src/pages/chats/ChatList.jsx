// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./ChatList.css";

// const ChatList = () => {
//   const [chats, setChats] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Mock data - replace with actual API call in production
//     setTimeout(() => {
//       setChats([
//         {
//           id: 1,
//           name: "Alex Johnson",
//           photo: "/assets/profiles/alex.jpg",
//           lastMessage:
//             "Hey! I really liked your profile and think we might be a good match.",
//           timestamp: "10:30 AM",
//           unread: true,
//           compatibility: "92%",
//         },
//         {
//           id: 2,
//           name: "Jordan Smith",
//           photo: "/assets/profiles/jordan.jpg",
//           lastMessage: "When would you want to move in?",
//           timestamp: "Yesterday",
//           unread: false,
//           compatibility: "87%",
//         },
//         {
//           id: 3,
//           name: "Taylor Wilson",
//           photo: "/assets/profiles/taylor.jpg",
//           lastMessage: "I have a cat, hope that's not an issue!",
//           timestamp: "Monday",
//           unread: false,
//           compatibility: "85%",
//         },
//         {
//           id: 4,
//           name: "Morgan Lee",
//           photo: "/assets/profiles/morgan.jpg",
//           lastMessage: "Do you mind if I have friends over on weekends?",
//           timestamp: "Jun 25",
//           unread: true,
//           compatibility: "81%",
//         },
//         {
//           id: 5,
//           name: "Casey Rivera",
//           photo: "/assets/profiles/casey.jpg",
//           lastMessage: "I'm a night owl, I hope that's okay with you.",
//           timestamp: "Jun 22",
//           unread: false,
//           compatibility: "79%",
//         },
//       ]);
//       setLoading(false);
//     }, 1000);
//   }, []);

//   return (
//     <div className="chat-list-container">
//       <h2 className="chat-list-title">Conversations</h2>

//       {loading ? (
//         <div className="loading-indicator">
//           <div className="spinner"></div>
//           <p>Loading your chats...</p>
//         </div>
//       ) : chats.length > 0 ? (
//         <div className="chats-wrapper">
//           {chats.map((chat) => (
//             <Link to={`/chat/${chat.id}`} key={chat.id} className="chat-item">
//               <div className="chat-photo-container">
//                 <img src={chat.photo} alt={chat.name} className="chat-photo" />
//                 {chat.unread && <span className="unread-badge"></span>}
//               </div>
//               <div className="chat-details">
//                 <div className="chat-header">
//                   <h3 className="chat-name">{chat.name}</h3>
//                   <span className="chat-time">{chat.timestamp}</span>
//                 </div>
//                 <p className="chat-message">{chat.lastMessage}</p>
//                 <span className="chat-compatibility">
//                   {chat.compatibility} match
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       ) : (
//         <div className="no-chats">
//           <div className="no-chats-icon">💬</div>
//           <h3>No Conversations Yet</h3>
//           <p>Start matching with potential roommates to begin chatting!</p>
//           <Link to="/discover" className="discover-button">
//             Find Roommates
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatList;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./ChatList.css";
// import { jwtDecode } from "jwt-decode";

// const ChatList = () => {
//   const [matches, setMatches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch matches from the API

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

//   useEffect(() => {
//     const fetchMatches = async () => {
//       try {
//         // Get auth token from localStorage or context
//         const token = localStorage.getItem("token");
//         console.log(token);

//         // Set headers with authentication token
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         // Fetch matches from the API
//         const response = await axios.get(
//           "http://localhost:5001/api/match",
//           config
//         );
//         console.log(response);
//         console.log(response.data.matches);

//         if (response.data && response.data.matches) {
//           setMatches(response.data.matches);
//         }
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching matches:", err);
//         setError("Failed to load your conversations");
//         setLoading(false);
//       }
//     };

//     fetchMatches();
//   }, []);

//   // Function to format timestamp into readable format
//   //const formatTimestamp = (timestamp) => {
//   // const date = new Date(timestamp);
//   // const now = new Date();

//   // // Check if the timestamp is from today
//   // if (date.toDateString() === now.toDateString()) {
//   //   return date.toLocaleTimeString([], {
//   //     hour: "2-digit",
//   //     minute: "2-digit",
//   //   });
//   // }

//   // // Check if the timestamp is from yesterday
//   // const yesterday = new Date(now);
//   // yesterday.setDate(now.getDate() - 1);
//   // if (date.toDateString() === yesterday.toDateString()) {
//   //   return "Yesterday";
//   // }

//   // // Check if the timestamp is from this week
//   // const oneWeekAgo = new Date(now);
//   // oneWeekAgo.setDate(now.getDate() - 7);
//   // if (date > oneWeekAgo) {
//   //   return date.toLocaleDateString([], { weekday: "long" });
//   // }

//   // // Otherwise return the date
//   // return date.toLocaleDateString([], { month: "short", day: "numeric" });

//   //};

//   // Function to format timestamp into readable format
//   const formatTimestamp = (timestamp) => {
//     if (!timestamp) return ""; // Handle undefined/null timestamps

//     const date = new Date(timestamp);
//     if (isNaN(date.getTime())) return ""; // Handle invalid dates

//     const now = new Date();

//     // Check if the timestamp is from today
//     if (date.toDateString() === now.toDateString()) {
//       return date.toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       });
//     }

//     // Check if the timestamp is from yesterday
//     const yesterday = new Date(now);
//     yesterday.setDate(now.getDate() - 1);
//     if (date.toDateString() === yesterday.toDateString()) {
//       return "Yesterday";
//     }

//     // Check if the timestamp is from this week
//     const oneWeekAgo = new Date(now);
//     oneWeekAgo.setDate(now.getDate() - 7);
//     if (date > oneWeekAgo) {
//       return date.toLocaleDateString([], { weekday: "long" });
//     }

//     // Otherwise return the date
//     return date.toLocaleDateString([], { month: "short", day: "numeric" });
//   };

//   // // Determine if the current user is user1 or user2 and get the other user's info
//   // const getMatchedUser = (match) => {
//   //   const currentUserId = localStorage.getItem("user.i"); // Get current user's ID
//   //   console.log(currentUserId);
//   //   return match.user1._id === currentUserId ? match.user2 : match.user1;
//   // };

//   const currentUserId = getCurrentUserId();
//   console.log(currentUserId);

//   const getMatchedUser = (match) => {
//     return match.user1._id === currentUserId ? match.user2 : match.user1;
//   };

//   return (
//     <div className="chat-list-container">
//       <h2 className="chat-list-title">Conversations</h2>

//       {loading ? (
//         <div className="loading-indicator">
//           <div className="spinner"></div>
//           <p>Loading your chats...</p>
//         </div>
//       ) : error ? (
//         <div className="error-message">
//           <p>{error}</p>
//           <button onClick={() => window.location.reload()}>Try Again</button>
//         </div>
//       ) : matches.length > 0 ? (
//         <div className="chats-wrapper">
//           {matches.map((match) => {
//             const matchedUser = getMatchedUser(match);
//             const chat = match.chatId;
//             const lastMessage =
//               chat.messages && chat.messages.length > 0
//                 ? chat.messages[chat.messages.length - 1].content
//                 : "Start a conversation!";

//             // Use the first photo from the user's photos array
//             const photoUrl =
//               matchedUser.photos && matchedUser.photos.length > 0
//                 ? matchedUser.photos[0].startsWith("/")
//                   ? `http://localhost:5001${matchedUser.photos[0]}`
//                   : matchedUser.photos[0]
//                 : "/assets/profiles/default-avatar.jpg";

//             return (
//               <Link
//                 to={`/chat/${match.chatId._id}`}
//                 key={match._id}
//                 className="chat-item"
//               >
//                 <div className="chat-photo-container">
//                   <img
//                     src={photoUrl}
//                     alt={matchedUser.name}
//                     className="chat-photo"
//                   />
//                   {/* Add unread badge logic here if you have that feature */}
//                 </div>
//                 <div className="chat-details">
//                   <div className="chat-header">
//                     <h3 className="chat-name">{matchedUser.name}</h3>
//                     <span className="chat-time">
//                       {match.chatId.messages && match.chatId.messages.length > 0
//                         ? formatTimestamp(
//                             match.chatId.messages[
//                               match.chatId.messages.length - 1
//                             ]?.createdAt
//                           )
//                         : formatTimestamp(match.matchedAt)}
//                     </span>
//                   </div>
//                   <p className="chat-message">{lastMessage}</p>
//                   <span className="chat-location">
//                     {matchedUser.city}
//                     {matchedUser.area ? `, ${matchedUser.area}` : ""}
//                   </span>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       ) : (
//         <div className="no-chats">
//           <div className="no-chats-icon">💬</div>
//           <h3>No Conversations Yet</h3>
//           <p>Start matching with potential roommates to begin chatting!</p>
//           <Link to="/discover" className="discover-button">
//             Find Roommates
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatList;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./ChatList.css";
// import { jwtDecode } from "jwt-decode";

// const ChatList = () => {
//   const [matches, setMatches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch matches from the API

//   const getCurrentUserId = () => {
//     const token = localStorage.getItem("token");
//     if (!token) return null;

//     try {
//       const decoded = jwtDecode(token);
//       // Try both 'id' and '_id' fields to be safe
//       return (
//         decoded.user?.id ||
//         decoded.user?._id ||
//         decoded.id ||
//         decoded._id ||
//         null
//       );
//     } catch (err) {
//       console.error("Failed to decode token:", err);
//       return null;
//     }
//   };

//   useEffect(() => {
//     const fetchMatches = async () => {
//       try {
//         // Get auth token from localStorage or context
//         const token = localStorage.getItem("token");
//         console.log(token);

//         // Set headers with authentication token
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         // Fetch matches from the API
//         const response = await axios.get(
//           "http://localhost:5001/api/match",
//           config
//         );
//         console.log(response);
//         console.log(response.data.matches);

//         if (response.data && response.data.matches) {
//           setMatches(response.data.matches);
//         }
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching matches:", err);
//         setError("Failed to load your conversations");
//         setLoading(false);
//       }
//     };

//     fetchMatches();
//   }, []);

//   // Function to format timestamp into readable format
//   const formatTimestamp = (timestamp) => {
//     if (!timestamp) return ""; // Handle undefined/null timestamps

//     const date = new Date(timestamp);
//     if (isNaN(date.getTime())) return ""; // Handle invalid dates

//     const now = new Date();

//     // Check if the timestamp is from today
//     if (date.toDateString() === now.toDateString()) {
//       return date.toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       });
//     }

//     // Check if the timestamp is from yesterday
//     const yesterday = new Date(now);
//     yesterday.setDate(now.getDate() - 1);
//     if (date.toDateString() === yesterday.toDateString()) {
//       return "Yesterday";
//     }

//     // Check if the timestamp is from this week
//     const oneWeekAgo = new Date(now);
//     oneWeekAgo.setDate(now.getDate() - 7);
//     if (date > oneWeekAgo) {
//       return date.toLocaleDateString([], { weekday: "long" });
//     }

//     // Otherwise return the date
//     return date.toLocaleDateString([], { month: "short", day: "numeric" });
//   };

//   const currentUserId = getCurrentUserId();
//   console.log("Current User ID:", currentUserId);

//   const getMatchedUser = (match) => {
//     console.log("Match object:", match);
//     console.log("User1 ID:", match.user1._id);
//     console.log("User2 ID:", match.user2._id);
//     console.log("Current User ID:", currentUserId);

//     // Convert both IDs to strings for comparison to avoid type issues
//     const user1Id = match.user1._id.toString();
//     const user2Id = match.user2._id.toString();
//     const currentId = currentUserId ? currentUserId.toString() : null;

//     if (user1Id === currentId) {
//       console.log("Returning user2:", match.user2);
//       return match.user2;
//     } else {
//       console.log("Returning user1:", match.user1);
//       return match.user1;
//     }
//   };

//   return (
//     <div className="chat-list-container">
//       <h2 className="chat-list-title">Conversations</h2>

//       {loading ? (
//         <div className="loading-indicator">
//           <div className="spinner"></div>
//           <p>Loading your chats...</p>
//         </div>
//       ) : error ? (
//         <div className="error-message">
//           <p>{error}</p>
//           <button onClick={() => window.location.reload()}>Try Again</button>
//         </div>
//       ) : matches.length > 0 ? (
//         <div className="chats-wrapper">
//           {matches.map((match) => {
//             const matchedUser = getMatchedUser(match);
//             const chat = match.chatId;
//             const lastMessage =
//               chat.messages && chat.messages.length > 0
//                 ? chat.messages[chat.messages.length - 1].content
//                 : "Start a conversation!";

//             // Use the first photo from the user's photos array
//             const photoUrl =
//               matchedUser.photos && matchedUser.photos.length > 0
//                 ? matchedUser.photos[0].startsWith("/")
//                   ? `http://localhost:5001${matchedUser.photos[0]}`
//                   : matchedUser.photos[0]
//                 : "/assets/profiles/default-avatar.jpg";

//             return (
//               <Link
//                 to={`/chat/${match.chatId._id}`}
//                 key={match._id}
//                 className="chat-item"
//               >
//                 <div className="chat-photo-container">
//                   <img
//                     src={photoUrl}
//                     alt={matchedUser.name}
//                     className="chat-photo"
//                     onError={(e) => {
//                       e.target.src = "/assets/profiles/default-avatar.jpg";
//                     }}
//                   />
//                   {/* Add unread badge logic here if you have that feature */}
//                 </div>
//                 <div className="chat-details">
//                   <div className="chat-header">
//                     <h3 className="chat-name">{matchedUser.name}</h3>
//                     <span className="chat-time">
//                       {match.chatId.messages && match.chatId.messages.length > 0
//                         ? formatTimestamp(
//                             match.chatId.messages[
//                               match.chatId.messages.length - 1
//                             ]?.createdAt
//                           )
//                         : formatTimestamp(match.matchedAt)}
//                     </span>
//                   </div>
//                   <p className="chat-message">{lastMessage}</p>
//                   <span className="chat-location">
//                     {matchedUser.city}
//                     {matchedUser.area ? `, ${matchedUser.area}` : ""}
//                   </span>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       ) : (
//         <div className="no-chats">
//           <div className="no-chats-icon">💬</div>
//           <h3>No Conversations Yet</h3>
//           <p>Start matching with potential roommates to begin chatting!</p>
//           <Link to="/discover" className="discover-button">
//             Find Roommates
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatList;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./ChatList.css";
// import { jwtDecode } from "jwt-decode";

// const ChatList = () => {
//   const [matches, setMatches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch matches from the API

//   const getCurrentUserId = () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       console.log("No token found");
//       return null;
//     }

//     try {
//       const decoded = jwtDecode(token);
//       console.log("Decoded JWT token:", decoded);
//       // Try both 'id' and '_id' fields to be safe
//       const userId =
//         decoded.user?.id ||
//         decoded.user?._id ||
//         decoded.id ||
//         decoded._id ||
//         null;
//       console.log("Extracted user ID:", userId);
//       return userId;
//     } catch (err) {
//       console.error("Failed to decode token:", err);
//       return null;
//     }
//   };

//   useEffect(() => {
//     const fetchMatches = async () => {
//       try {
//         // Get auth token from localStorage or context
//         const token = localStorage.getItem("token");
//         console.log("Token:", token);

//         if (!token) {
//           throw new Error("No authentication token found");
//         }

//         // Set headers with authentication token
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         console.log("Making API call to fetch matches...");
//         // Fetch matches from the API
//         const response = await axios.get(
//           "http://localhost:5001/api/match",
//           config
//         );
//         console.log("Full API response:", response);
//         console.log("Response data:", response.data);
//         console.log("Matches array:", response.data.matches);

//         if (response.data && response.data.matches) {
//           console.log("Setting matches:", response.data.matches);
//           setMatches(response.data.matches);
//         } else {
//           console.log("No matches in response");
//           setMatches([]);
//         }
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching matches:", err);
//         console.error("Error details:", err.response?.data);
//         console.error("Error status:", err.response?.status);
//         setError(`Failed to load your conversations: ${err.message}`);
//         setLoading(false);
//       }
//     };

//     fetchMatches();
//   }, []);

//   // Function to format timestamp into readable format
//   const formatTimestamp = (timestamp) => {
//     if (!timestamp) return ""; // Handle undefined/null timestamps

//     const date = new Date(timestamp);
//     if (isNaN(date.getTime())) return ""; // Handle invalid dates

//     const now = new Date();

//     // Check if the timestamp is from today
//     if (date.toDateString() === now.toDateString()) {
//       return date.toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       });
//     }

//     // Check if the timestamp is from yesterday
//     const yesterday = new Date(now);
//     yesterday.setDate(now.getDate() - 1);
//     if (date.toDateString() === yesterday.toDateString()) {
//       return "Yesterday";
//     }

//     // Check if the timestamp is from this week
//     const oneWeekAgo = new Date(now);
//     oneWeekAgo.setDate(now.getDate() - 7);
//     if (date > oneWeekAgo) {
//       return date.toLocaleDateString([], { weekday: "long" });
//     }

//     // Otherwise return the date
//     return date.toLocaleDateString([], { month: "short", day: "numeric" });
//   };

//   const currentUserId = getCurrentUserId();
//   console.log("Current User ID:", currentUserId);

//   const getMatchedUser = (match) => {
//     console.log("Match object:", match);
//     console.log("User1 ID:", match.user1._id);
//     console.log("User2 ID:", match.user2._id);
//     console.log("Current User ID:", currentUserId);

//     // Convert both IDs to strings for comparison to avoid type issues
//     const user1Id = match.user1._id.toString();
//     const user2Id = match.user2._id.toString();
//     const currentId = currentUserId ? currentUserId.toString() : null;

//     if (user1Id === currentId) {
//       console.log("Returning user2:", match.user2);
//       return match.user2;
//     } else {
//       console.log("Returning user1:", match.user1);
//       return match.user1;
//     }
//   };

//   return (
//     <div className="chat-list-container">
//       <h2 className="chat-list-title">Conversations</h2>

//       {loading ? (
//         <div className="loading-indicator">
//           <div className="spinner"></div>
//           <p>Loading your chats...</p>
//         </div>
//       ) : error ? (
//         <div className="error-message">
//           <p>{error}</p>
//           <button onClick={() => window.location.reload()}>Try Again</button>
//         </div>
//       ) : matches.length > 0 ? (
//         <div className="chats-wrapper">
//           {matches.map((match) => {
//             const matchedUser = getMatchedUser(match);
//             const chat = match.chatId;
//             const lastMessage =
//               chat.messages && chat.messages.length > 0
//                 ? chat.messages[chat.messages.length - 1].content
//                 : "Start a conversation!";

//             // Use the first photo from the user's photos array
//             const photoUrl =
//               matchedUser.photos && matchedUser.photos.length > 0
//                 ? matchedUser.photos[0].startsWith("/")
//                   ? `http://localhost:5001${matchedUser.photos[0]}`
//                   : matchedUser.photos[0]
//                 : "/assets/profiles/default-avatar.jpg";

//             return (
//               <Link
//                 to={`/chat/${match.chatId._id}`}
//                 key={match._id}
//                 className="chat-item"
//               >
//                 <div className="chat-photo-container">
//                   <img
//                     src={photoUrl}
//                     alt={matchedUser.name}
//                     className="chat-photo"
//                     onError={(e) => {
//                       e.target.src = "/assets/profiles/default-avatar.jpg";
//                     }}
//                   />
//                   {/* Add unread badge logic here if you have that feature */}
//                 </div>
//                 <div className="chat-details">
//                   <div className="chat-header">
//                     <h3 className="chat-name">{matchedUser.name}</h3>
//                     <span className="chat-time">
//                       {match.chatId.messages && match.chatId.messages.length > 0
//                         ? formatTimestamp(
//                             match.chatId.messages[
//                               match.chatId.messages.length - 1
//                             ]?.createdAt
//                           )
//                         : formatTimestamp(match.matchedAt)}
//                     </span>
//                   </div>
//                   <p className="chat-message">{lastMessage}</p>
//                   <span className="chat-location">
//                     {matchedUser.city}
//                     {matchedUser.area ? `, ${matchedUser.area}` : ""}
//                   </span>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       ) : (
//         <div className="no-chats">
//           <div className="no-chats-icon">💬</div>
//           <h3>No Conversations Yet</h3>
//           <p>Start matching with potential roommates to begin chatting!</p>
//           <Link to="/discover" className="discover-button">
//             Find Roommates
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatList;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./ChatList.css";
// import { jwtDecode } from "jwt-decode";

// const ChatList = () => {
//   const [matches, setMatches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Get current user ID from JWT token
//   const getCurrentUserId = () => {
//     const token = localStorage.getItem("token");
//     if (!token) return null;

//     try {
//       const decoded = jwtDecode(token);
//       // Try both 'id' and '_id' fields to be safe
//       return (
//         decoded.user?.id ||
//         decoded.user?._id ||
//         decoded.id ||
//         decoded._id ||
//         null
//       );
//     } catch (err) {
//       console.error("Failed to decode token:", err);
//       return null;
//     }
//   };

//   useEffect(() => {
//     const fetchMatches = async () => {
//       try {
//         // Get auth token from localStorage or context
//         const token = localStorage.getItem("token");
//         console.log("Token:", token);

//         // Set headers with authentication token
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         // Fetch matches from the API
//         const response = await axios.get(
//           "http://localhost:5001/api/match",
//           config
//         );
//         console.log("API Response:", response);
//         console.log("Matches data:", response.data.matches);

//         if (response.data && response.data.matches) {
//           setMatches(response.data.matches);
//         }
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching matches:", err);
//         setError("Failed to load your conversations");
//         setLoading(false);
//       }
//     };

//     fetchMatches();
//   }, []);

//   // Function to format timestamp into readable format
//   const formatTimestamp = (timestamp) => {
//     if (!timestamp) return ""; // Handle undefined/null timestamps

//     const date = new Date(timestamp);
//     if (isNaN(date.getTime())) return ""; // Handle invalid dates

//     const now = new Date();

//     // Check if the timestamp is from today
//     if (date.toDateString() === now.toDateString()) {
//       return date.toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       });
//     }

//     // Check if the timestamp is from yesterday
//     const yesterday = new Date(now);
//     yesterday.setDate(now.getDate() - 1);
//     if (date.toDateString() === yesterday.toDateString()) {
//       return "Yesterday";
//     }

//     // Check if the timestamp is from this week
//     const oneWeekAgo = new Date(now);
//     oneWeekAgo.setDate(now.getDate() - 7);
//     if (date > oneWeekAgo) {
//       return date.toLocaleDateString([], { weekday: "long" });
//     }

//     // Otherwise return the date
//     return date.toLocaleDateString([], { month: "short", day: "numeric" });
//   };

//   // Fixed function to get the matched user (the other user, not current user)
//   const getMatchedUser = (match) => {
//     const currentUserId = getCurrentUserId();

//     console.log("=== getMatchedUser Debug ===");
//     console.log("Match object:", match);
//     console.log("Current User ID from token:", currentUserId);

//     if (!match.user1 || !match.user2) {
//       console.error("Missing user1 or user2 in match:", match);
//       return null;
//     }

//     console.log("User1 ID:", match.user1._id);
//     console.log("User2 ID:", match.user2._id);

//     // Normalize IDs to strings for comparison
//     const user1Id = String(match.user1._id || match.user1.id || "");
//     const user2Id = String(match.user2._id || match.user2.id || "");
//     const currentId = String(currentUserId || "");

//     console.log("Normalized - User1 ID:", user1Id);
//     console.log("Normalized - User2 ID:", user2Id);
//     console.log("Normalized - Current ID:", currentId);

//     // Return the user who is NOT the current user
//     if (user1Id === currentId) {
//       console.log("Current user is user1, returning user2:", match.user2);
//       return match.user2;
//     } else if (user2Id === currentId) {
//       console.log("Current user is user2, returning user1:", match.user1);
//       return match.user1;
//     } else {
//       // Fallback: if neither matches exactly, return user2 as default
//       console.warn("No exact match found, returning user2 as fallback");
//       return match.user2;
//     }
//   };

//   const currentUserId = getCurrentUserId();
//   console.log("Current User ID:", currentUserId);

//   return (
//     <div className="chat-list-container">
//       <h2 className="chat-list-title">Conversations</h2>

//       {loading ? (
//         <div className="loading-indicator">
//           <div className="spinner"></div>
//           <p>Loading your chats...</p>
//         </div>
//       ) : error ? (
//         <div className="error-message">
//           <p>{error}</p>
//           <button onClick={() => window.location.reload()}>Try Again</button>
//         </div>
//       ) : matches.length > 0 ? (
//         <div className="chats-wrapper">
//           {matches.map((match) => {
//             const matchedUser = getMatchedUser(match);

//             // Skip rendering if we couldn't determine the matched user
//             if (!matchedUser) {
//               console.error(
//                 "Could not determine matched user for match:",
//                 match
//               );
//               return null;
//             }

//             const chat = match.chatId;
//             const lastMessage =
//               chat.messages && chat.messages.length > 0
//                 ? chat.messages[chat.messages.length - 1].content
//                 : "Start a conversation!";

//             // Use the first photo from the user's photos array
//             const photoUrl =
//               matchedUser.photos && matchedUser.photos.length > 0
//                 ? matchedUser.photos[0].startsWith("/")
//                   ? `http://localhost:5001${matchedUser.photos[0]}`
//                   : matchedUser.photos[0]
//                 : "/assets/profiles/default-avatar.jpg";

//             return (
//               <Link
//                 to={`/chat/${match.chatId._id}`}
//                 key={match._id}
//                 className="chat-item"
//               >
//                 <div className="chat-photo-container">
//                   <img
//                     src={photoUrl}
//                     alt={matchedUser.name}
//                     className="chat-photo"
//                     onError={(e) => {
//                       e.target.src = "/assets/profiles/default-avatar.jpg";
//                     }}
//                   />
//                   {/* Add unread badge logic here if you have that feature */}
//                 </div>
//                 <div className="chat-details">
//                   <div className="chat-header">
//                     <h3 className="chat-name">{matchedUser.name}</h3>
//                     <span className="chat-time">
//                       {match.chatId.messages && match.chatId.messages.length > 0
//                         ? formatTimestamp(
//                             match.chatId.messages[
//                               match.chatId.messages.length - 1
//                             ]?.createdAt
//                           )
//                         : formatTimestamp(match.matchedAt)}
//                     </span>
//                   </div>
//                   <p className="chat-message">{lastMessage}</p>
//                   <span className="chat-location">
//                     {matchedUser.city}
//                     {matchedUser.area ? `, ${matchedUser.area}` : ""}
//                   </span>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       ) : (
//         <div className="no-chats">
//           <div className="no-chats-icon">💬</div>
//           <h3>No Conversations Yet</h3>
//           <p>Start matching with potential roommates to begin chatting!</p>
//           <Link to="/discover" className="discover-button">
//             Find Roommates
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatList;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./ChatList.css";
// import { jwtDecode } from "jwt-decode";

// const ChatList = () => {
//   const [matches, setMatches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentUserId, setCurrentUserId] = useState(null);

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

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // First get the current user ID
//         const userId = await getCurrentUserId();
//         if (!userId) {
//           setError("Failed to get user information");
//           setLoading(false);
//           return;
//         }

//         setCurrentUserId(userId);
//         console.log("Current User ID set to:", userId);

//         // Then fetch matches
//         const token = localStorage.getItem("token");
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         const response = await axios.get(
//           "http://localhost:5001/api/match",
//           config
//         );
//         console.log("API Response:", response);
//         console.log("Matches data:", response.data.matches);

//         if (response.data && response.data.matches) {
//           setMatches(response.data.matches);
//         }
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//         setError("Failed to load your conversations");
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Function to format timestamp into readable format
//   const formatTimestamp = (timestamp) => {
//     if (!timestamp) return ""; // Handle undefined/null timestamps

//     const date = new Date(timestamp);
//     if (isNaN(date.getTime())) return ""; // Handle invalid dates

//     const now = new Date();

//     // Check if the timestamp is from today
//     if (date.toDateString() === now.toDateString()) {
//       return date.toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       });
//     }

//     // Check if the timestamp is from yesterday
//     const yesterday = new Date(now);
//     yesterday.setDate(now.getDate() - 1);
//     if (date.toDateString() === yesterday.toDateString()) {
//       return "Yesterday";
//     }

//     // Check if the timestamp is from this week
//     const oneWeekAgo = new Date(now);
//     oneWeekAgo.setDate(now.getDate() - 7);
//     if (date > oneWeekAgo) {
//       return date.toLocaleDateString([], { weekday: "long" });
//     }

//     // Otherwise return the date
//     return date.toLocaleDateString([], { month: "short", day: "numeric" });
//   };

//   // Fixed function to get the matched user (the other user, not current user)
//   const getMatchedUser = (match) => {
//     if (!currentUserId) {
//       console.error("No current user ID available");
//       return null;
//     }

//     console.log("=== getMatchedUser Debug ===");
//     console.log("Match object:", match);
//     console.log("Current User ID:", currentUserId);

//     if (!match.user1 || !match.user2) {
//       console.error("Missing user1 or user2 in match:", match);
//       return null;
//     }

//     console.log("User1 ID:", match.user1._id);
//     console.log("User2 ID:", match.user2._id);

//     // Convert IDs to strings for comparison
//     const user1Id = String(match.user1._id || match.user1.id || "");
//     const user2Id = String(match.user2._id || match.user2.id || "");
//     const currentId = String(currentUserId || "");

//     console.log("Normalized - User1 ID:", user1Id);
//     console.log("Normalized - User2 ID:", user2Id);
//     console.log("Normalized - Current User ID:", currentId);

//     // Return the user who is NOT the current user
//     if (user1Id === currentId) {
//       console.log("Current user is user1, returning user2:", match.user2);
//       return match.user2;
//     } else if (user2Id === currentId) {
//       console.log("Current user is user2, returning user1:", match.user1);
//       return match.user1;
//     } else {
//       console.warn(
//         "No exact match found for current user ID. This might indicate a data inconsistency."
//       );
//       console.warn(
//         `Current user ID: ${currentId}, User1 ID: ${user1Id}, User2 ID: ${user2Id}`
//       );
//       return match.user2;
//     }
//   };

//   return (
//     <div className="chat-list-container">
//       <h2 className="chat-list-title">Conversations</h2>

//       {loading ? (
//         <div className="loading-indicator">
//           <div className="spinner"></div>
//           <p>Loading your chats...</p>
//         </div>
//       ) : error ? (
//         <div className="error-message">
//           <p>{error}</p>
//           <button onClick={() => window.location.reload()}>Try Again</button>
//         </div>
//       ) : matches.length > 0 ? (
//         <div className="chats-wrapper">
//           {matches.map((match) => {
//             const matchedUser = getMatchedUser(match);

//             // Skip rendering if we couldn't determine the matched user
//             if (!matchedUser) {
//               console.error(
//                 "Could not determine matched user for match:",
//                 match
//               );
//               return null;
//             }

//             const chat = match.chatId;
//             const lastMessage =
//               chat.messages && chat.messages.length > 0
//                 ? chat.messages[chat.messages.length - 1].content
//                 : "Start a conversation!";

//             // Use the first photo from the user's photos array
//             const photoUrl =
//               matchedUser.photos && matchedUser.photos.length > 0
//                 ? matchedUser.photos[0].startsWith("/")
//                   ? `http://localhost:5001${matchedUser.photos[0]}`
//                   : matchedUser.photos[0]
//                 : "/assets/profiles/default-avatar.jpg";

//             return (
//               <Link
//                 to={`/chat/${match.chatId._id}`}
//                 key={match._id}
//                 className="chat-item"
//               >
//                 <div className="chat-photo-container">
//                   <img
//                     src={photoUrl}
//                     alt={matchedUser.name}
//                     className="chat-photo"
//                     onError={(e) => {
//                       e.target.src = "/assets/profiles/default-avatar.jpg";
//                     }}
//                   />
//                   {/* Add unread badge logic here if you have that feature */}
//                 </div>
//                 <div className="chat-details">
//                   <div className="chat-header">
//                     <h3 className="chat-name">{matchedUser.name}</h3>
//                     <span className="chat-time">
//                       {match.chatId.messages && match.chatId.messages.length > 0
//                         ? formatTimestamp(
//                             match.chatId.messages[
//                               match.chatId.messages.length - 1
//                             ]?.createdAt
//                           )
//                         : formatTimestamp(match.matchedAt)}
//                     </span>
//                   </div>
//                   <p className="chat-message">{lastMessage}</p>
//                   <span className="chat-location">
//                     {matchedUser.city}
//                     {matchedUser.area ? `, ${matchedUser.area}` : ""}
//                   </span>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       ) : (
//         <div className="no-chats">
//           <div className="no-chats-icon">💬</div>
//           <h3>No Conversations Yet</h3>
//           <p>Start matching with potential roommates to begin chatting!</p>
//           <Link to="/discover" className="discover-button">
//             Find Roommates
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatList;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./ChatList.css";
// import { jwtDecode } from "jwt-decode";

// const ChatList = () => {
//   const [matches, setMatches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentUserId, setCurrentUserId] = useState(null);

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

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // First get the current user ID
//         const userId = await getCurrentUserId();
//         if (!userId) {
//           setError("Failed to get user information");
//           setLoading(false);
//           return;
//         }

//         setCurrentUserId(userId);
//         console.log("Current User ID set to:", userId);

//         // Then fetch matches
//         const token = localStorage.getItem("token");
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         const response = await axios.get(
//           "http://localhost:5001/api/match",
//           config
//         );
//         console.log("API Response:", response);
//         console.log("Matches data:", response.data.matches);

//         if (response.data && response.data.matches) {
//           setMatches(response.data.matches);
//         }
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//         setError("Failed to load your conversations");
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Function to format timestamp into readable format
//   const formatTimestamp = (timestamp) => {
//     if (!timestamp) return ""; // Handle undefined/null timestamps

//     const date = new Date(timestamp);
//     if (isNaN(date.getTime())) return ""; // Handle invalid dates

//     const now = new Date();

//     // Check if the timestamp is from today
//     if (date.toDateString() === now.toDateString()) {
//       return date.toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       });
//     }

//     // Check if the timestamp is from yesterday
//     const yesterday = new Date(now);
//     yesterday.setDate(now.getDate() - 1);
//     if (date.toDateString() === yesterday.toDateString()) {
//       return "Yesterday";
//     }

//     // Check if the timestamp is from this week
//     const oneWeekAgo = new Date(now);
//     oneWeekAgo.setDate(now.getDate() - 7);
//     if (date > oneWeekAgo) {
//       return date.toLocaleDateString([], { weekday: "long" });
//     }

//     // Otherwise return the date
//     return date.toLocaleDateString([], { month: "short", day: "numeric" });
//   };

//   // Fixed function to get the matched user (the other user, not current user)
//   const getMatchedUser = (match) => {
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

//   return (
//     <div className="chat-list-container">
//       <h2 className="chat-list-title">Conversations</h2>

//       {loading ? (
//         <div className="loading-indicator">
//           <div className="spinner"></div>
//           <p>Loading your chats...</p>
//         </div>
//       ) : error ? (
//         <div className="error-message">
//           <p>{error}</p>
//           <button onClick={() => window.location.reload()}>Try Again</button>
//         </div>
//       ) : matches.length > 0 ? (
//         <div className="chats-wrapper">
//           {matches.map((match) => {
//             const matchedUser = getMatchedUser(match);

//             // Skip rendering if we couldn't determine the matched user
//             if (!matchedUser) {
//               console.error(
//                 "Could not determine matched user for match:",
//                 match
//               );
//               return null;
//             }

//             const chat = match.chatId;
//             const lastMessage =
//               chat.messages && chat.messages.length > 0
//                 ? chat.messages[chat.messages.length - 1].content
//                 : "Start a conversation!";

//             // Use the first photo from the user's photos array
//             const photoUrl =
//               matchedUser.photos && matchedUser.photos.length > 0
//                 ? matchedUser.photos[0].startsWith("/")
//                   ? `http://localhost:5001${matchedUser.photos[0]}`
//                   : matchedUser.photos[0]
//                 : "/assets/profiles/default-avatar.jpg";

//             return (
//               <Link
//                 to={`/chat/${match.chatId._id}`}
//                 key={match._id}
//                 className="chat-item"
//               >
//                 <div className="chat-photo-container">
//                   <img
//                     src={photoUrl}
//                     alt={matchedUser.name}
//                     className="chat-photo"
//                     onError={(e) => {
//                       e.target.src = "/assets/profiles/default-avatar.jpg";
//                     }}
//                   />
//                   {/* Add unread badge logic here if you have that feature */}
//                 </div>
//                 <div className="chat-details">
//                   <div className="chat-header">
//                     <h3 className="chat-name">{matchedUser.name}</h3>
//                     <span className="chat-time">
//                       {match.chatId.messages && match.chatId.messages.length > 0
//                         ? formatTimestamp(
//                             match.chatId.messages[
//                               match.chatId.messages.length - 1
//                             ]?.createdAt
//                           )
//                         : formatTimestamp(match.matchedAt)}
//                     </span>
//                   </div>
//                   <p className="chat-message">{lastMessage}</p>
//                   <span className="chat-location">
//                     {matchedUser.city}
//                     {matchedUser.area ? `, ${matchedUser.area}` : ""}
//                   </span>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       ) : (
//         <div className="no-chats">
//           <div className="no-chats-icon">💬</div>
//           <h3>No Conversations Yet</h3>
//           <p>Start matching with potential roommates to begin chatting!</p>
//           <Link to="/discover" className="discover-button">
//             Find Roommates
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatList;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./ChatList.css";
// import { jwtDecode } from "jwt-decode";

// const ChatList = () => {
//   const [matches, setMatches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // FIXED: Simplified getCurrentUserId function
//   const getCurrentUserId = () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       console.log("No token found");
//       return null;
//     }
//     if (token) {
//       try {
//         const decoded = jwtDecode(token);
//         console.log("=== FULL TOKEN STRUCTURE ===");
//         console.log(JSON.stringify(decoded, null, 2));
//         console.log("=== POSSIBLE USER IDs ===");
//         console.log("decoded.id:", decoded.id);
//         console.log("decoded._id:", decoded._id);
//         console.log("decoded.user:", decoded.user);
//         console.log("decoded.user?.id:", decoded.user?.id);
//         console.log("decoded.user?._id:", decoded.user?._id);
//         console.log("decoded.userId:", decoded.userId);
//         console.log("decoded.sub:", decoded.sub);
//       } catch (err) {
//         console.error("Token decode error:", err);
//       }
//     }

//     try {
//       const decoded = jwtDecode(token);
//       console.log("Decoded JWT token:", decoded);

//       // FIXED: Correct extraction of user ID
//       const userId =
//         decoded.id || decoded._id || decoded.user?.id || decoded.user?._id;
//       console.log("Extracted user ID:", userId);
//       return userId;
//     } catch (err) {
//       console.error("Failed to decode token:", err);
//       return null;
//     }
//   };

//   useEffect(() => {
//     const fetchMatches = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         console.log("Token:", token);

//         if (!token) {
//           throw new Error("No authentication token found");
//         }

//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         console.log("Making API call to fetch matches...");
//         const response = await axios.get(
//           "http://localhost:5001/api/match",
//           config
//         );
//         console.log("Full API response:", response);
//         console.log("Response data:", response.data);
//         console.log("Matches array:", response.data.matches);

//         if (response.data && response.data.matches) {
//           console.log("Setting matches:", response.data.matches);
//           setMatches(response.data.matches);
//         } else {
//           console.log("No matches in response");
//           setMatches([]);
//         }
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching matches:", err);
//         console.error("Error details:", err.response?.data);
//         console.error("Error status:", err.response?.status);
//         setError(`Failed to load your conversations: ${err.message}`);
//         setLoading(false);
//       }
//     };

//     fetchMatches();
//   }, []);

//   const formatTimestamp = (timestamp) => {
//     if (!timestamp) return "";

//     const date = new Date(timestamp);
//     if (isNaN(date.getTime())) return "";

//     const now = new Date();

//     if (date.toDateString() === now.toDateString()) {
//       return date.toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       });
//     }

//     const yesterday = new Date(now);
//     yesterday.setDate(now.getDate() - 1);
//     if (date.toDateString() === yesterday.toDateString()) {
//       return "Yesterday";
//     }

//     const oneWeekAgo = new Date(now);
//     oneWeekAgo.setDate(now.getDate() - 7);
//     if (date > oneWeekAgo) {
//       return date.toLocaleDateString([], { weekday: "long" });
//     }

//     return date.toLocaleDateString([], { month: "short", day: "numeric" });
//   };

//   // FIXED: Get current user ID once and use it consistently
//   const currentUserId = getCurrentUserId();
//   console.log("Current User ID:", currentUserId);

//   const getMatchedUser = (match) => {
//     console.log("Match object:", match);
//     console.log("User1 ID:", match.user1._id);
//     console.log("User2 ID:", match.user2._id);
//     console.log("Current User ID:", currentUserId);

//     if (!currentUserId) {
//       console.error("No current user ID available");
//       return match.user1; // fallback
//     }

//     // FIXED: More reliable string comparison
//     const user1Id = String(match.user1._id);
//     const user2Id = String(match.user2._id);
//     const currentId = String(currentUserId);

//     if (user1Id === currentId) {
//       console.log("Returning user2:", match.user2);
//       return match.user2;
//     } else if (user2Id === currentId) {
//       console.log("Returning user1:", match.user1);
//       return match.user1;
//     } else {
//       console.error("Current user not found in match participants");
//       // Return the user that's not the current user (fallback)
//       return match.user1;
//     }
//   };

//   return (
//     <div className="chat-list-container">
//       <h2 className="chat-list-title">Conversations</h2>

//       {loading ? (
//         <div className="loading-indicator">
//           <div className="spinner"></div>
//           <p>Loading your chats...</p>
//         </div>
//       ) : error ? (
//         <div className="error-message">
//           <p>{error}</p>
//           <button onClick={() => window.location.reload()}>Try Again</button>
//         </div>
//       ) : matches.length > 0 ? (
//         <div className="chats-wrapper">
//           {matches.map((match) => {
//             const matchedUser = getMatchedUser(match);
//             const chat = match.chatId;
//             const lastMessage =
//               chat.messages && chat.messages.length > 0
//                 ? chat.messages[chat.messages.length - 1].content
//                 : "Start a conversation!";

//             const photoUrl =
//               matchedUser.photos && matchedUser.photos.length > 0
//                 ? matchedUser.photos[0].startsWith("/")
//                   ? `http://localhost:5001${matchedUser.photos[0]}`
//                   : matchedUser.photos[0]
//                 : "/assets/profiles/default-avatar.jpg";

//             return (
//               <Link
//                 to={`/chat/${match.chatId._id}`}
//                 key={match._id}
//                 className="chat-item"
//               >
//                 <div className="chat-photo-container">
//                   <img
//                     src={photoUrl}
//                     alt={matchedUser.name}
//                     className="chat-photo"
//                     onError={(e) => {
//                       e.target.src = "/assets/profiles/default-avatar.jpg";
//                     }}
//                   />
//                 </div>
//                 <div className="chat-details">
//                   <div className="chat-header">
//                     <h3 className="chat-name">{matchedUser.name}</h3>
//                     <span className="chat-time">
//                       {match.chatId.messages && match.chatId.messages.length > 0
//                         ? formatTimestamp(
//                             match.chatId.messages[
//                               match.chatId.messages.length - 1
//                             ]?.createdAt
//                           )
//                         : formatTimestamp(match.matchedAt)}
//                     </span>
//                   </div>
//                   <p className="chat-message">{lastMessage}</p>
//                   <span className="chat-location">
//                     {matchedUser.city}
//                     {matchedUser.area ? `, ${matchedUser.area}` : ""}
//                   </span>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       ) : (
//         <div className="no-chats">
//           <div className="no-chats-icon">💬</div>
//           <h3>No Conversations Yet</h3>
//           <p>Start matching with potential roommates to begin chatting!</p>
//           <Link to="/discover" className="discover-button">
//             Find Roommates
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatList;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./ChatList.css";
// import { jwtDecode } from "jwt-decode";

// const ChatList = () => {
//   const [matches, setMatches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // FIXED: Get user ID directly from JWT token
//   const getCurrentUserId = () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       console.log("No token found");
//       return null;
//     }

//     try {
//       const decoded = jwtDecode(token);
//       console.log("Decoded JWT token:", decoded);

//       // Based on your token structure: user.id is the correct field
//       const userId = decoded.user?.id;
//       console.log("Extracted user ID:", userId);
//       return userId;
//     } catch (err) {
//       console.error("Failed to decode token:", err);
//       return null;
//     }
//   };

//   useEffect(() => {
//     const fetchMatches = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         console.log("Token:", token);

//         if (!token) {
//           throw new Error("No authentication token found");
//         }

//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         console.log("Making API call to fetch matches...");
//         const response = await axios.get(
//           "http://localhost:5001/api/match",
//           config
//         );
//         console.log("Full API response:", response);
//         console.log("Response data:", response.data);
//         console.log("Matches array:", response.data.matches);

//         if (response.data && response.data.matches) {
//           console.log("Setting matches:", response.data.matches);
//           setMatches(response.data.matches);
//         } else {
//           console.log("No matches in response");
//           setMatches([]);
//         }
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching matches:", err);
//         console.error("Error details:", err.response?.data);
//         console.error("Error status:", err.response?.status);
//         setError(`Failed to load your conversations: ${err.message}`);
//         setLoading(false);
//       }
//     };

//     fetchMatches();
//   }, []);

//   const formatTimestamp = (timestamp) => {
//     if (!timestamp) return "";

//     const date = new Date(timestamp);
//     if (isNaN(date.getTime())) return "";

//     const now = new Date();

//     if (date.toDateString() === now.toDateString()) {
//       return date.toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       });
//     }

//     const yesterday = new Date(now);
//     yesterday.setDate(now.getDate() - 1);
//     if (date.toDateString() === yesterday.toDateString()) {
//       return "Yesterday";
//     }

//     const oneWeekAgo = new Date(now);
//     oneWeekAgo.setDate(now.getDate() - 7);
//     if (date > oneWeekAgo) {
//       return date.toLocaleDateString([], { weekday: "long" });
//     }

//     return date.toLocaleDateString([], { month: "short", day: "numeric" });
//   };

//   // FIXED: Get current user ID once and use it consistently
//   const currentUserId = getCurrentUserId();
//   console.log("Current User ID:", currentUserId);

//   const getMatchedUser = (match) => {
//     console.log("Match object:", match);
//     console.log("User1 ID:", match.user1._id);
//     console.log("User2 ID:", match.user2._id);
//     console.log("Current User ID:", currentUserId);

//     if (!currentUserId) {
//       console.error("No current user ID available");
//       return match.user1; // fallback
//     }

//     // FIXED: More reliable string comparison
//     const user1Id = String(match.user1._id);
//     const user2Id = String(match.user2._id);
//     const currentId = String(currentUserId);

//     if (user1Id === currentId) {
//       console.log("Returning user2:", match.user2);
//       return match.user2;
//     } else if (user2Id === currentId) {
//       console.log("Returning user1:", match.user1);
//       return match.user1;
//     } else {
//       console.error("Current user not found in match participants");
//       // Return the user that's not the current user (fallback)
//       return match.user1;
//     }
//   };

//   return (
//     <div className="chat-list-container">
//       <h2 className="chat-list-title">Conversations</h2>

//       {loading ? (
//         <div className="loading-indicator">
//           <div className="spinner"></div>
//           <p>Loading your chats...</p>
//         </div>
//       ) : error ? (
//         <div className="error-message">
//           <p>{error}</p>
//           <button onClick={() => window.location.reload()}>Try Again</button>
//         </div>
//       ) : matches.length > 0 ? (
//         <div className="chats-wrapper">
//           {matches.map((match) => {
//             const matchedUser = getMatchedUser(match);
//             const chat = match.chatId;
//             const lastMessage =
//               chat.messages && chat.messages.length > 0
//                 ? chat.messages[chat.messages.length - 1].content
//                 : "Start a conversation!";

//             const photoUrl =
//               matchedUser.photos && matchedUser.photos.length > 0
//                 ? matchedUser.photos[0].startsWith("/")
//                   ? `http://localhost:5001${matchedUser.photos[0]}`
//                   : matchedUser.photos[0]
//                 : "/assets/profiles/default-avatar.jpg";

//             return (
//               <Link
//                 to={`/chat/${match.chatId._id}`}
//                 key={match._id}
//                 className="chat-item"
//               >
//                 <div className="chat-photo-container">
//                   <img
//                     src={photoUrl}
//                     alt={matchedUser.name}
//                     className="chat-photo"
//                     onError={(e) => {
//                       e.target.src = "/assets/profiles/default-avatar.jpg";
//                     }}
//                   />
//                 </div>
//                 <div className="chat-details">
//                   <div className="chat-header">
//                     <h3 className="chat-name">{matchedUser.name}</h3>
//                     <span className="chat-time">
//                       {match.chatId.messages && match.chatId.messages.length > 0
//                         ? formatTimestamp(
//                             match.chatId.messages[
//                               match.chatId.messages.length - 1
//                             ]?.createdAt
//                           )
//                         : formatTimestamp(match.matchedAt)}
//                     </span>
//                   </div>
//                   <p className="chat-message">{lastMessage}</p>
//                   <span className="chat-location">
//                     {matchedUser.city}
//                     {matchedUser.area ? `, ${matchedUser.area}` : ""}
//                   </span>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       ) : (
//         <div className="no-chats">
//           <div className="no-chats-icon">💬</div>
//           <h3>No Conversations Yet</h3>
//           <p>Start matching with potential roommates to begin chatting!</p>
//           <Link to="/discover" className="discover-button">
//             Find Roommates
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatList;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ChatList.css";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../../AuthContext";

const ChatList = () => {
  const { isAuthenticated, user: authUser, loading: authLoading } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [matches, setMatches] = useState([]);
  //const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch current user's full profile
  // useEffect(() => {
  //   const fetchCurrentUser = async () => {
  //     const token = localStorage.getItem("token");

  //     if (!token) {
  //       console.error("No token found");
  //       return;
  //     }

  //     try {
  //       const decoded = jwtDecode(token);
  //       const userId = decoded.user?.id;

  //       if (!userId) {
  //         throw new Error("Invalid token: User ID not found");
  //       }

  //       const response = await axios.get(
  //         `http://localhost:5001/api/profile/user/${userId}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       console.log("Fetched current user profile:", response.data);
  //       setCurrentUser(response.data.profile || response.data);
  //     } catch (err) {
  //       console.error("Failed to fetch current user profile:", err);
  //     }
  //   };

  //   fetchCurrentUser();
  // }, []);
  useEffect(() => {
    const fetchProfileData = async () => {
      if (!isAuthenticated) {
        setLoading(false);
        return;
      }

      try {
        // Get token from local storage
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("No authentication token found");
        }

        console.log("Token found, attempting API call");

        // Corrected the URL interpolation for the API call
        const response = await axios.get(
          `http://localhost:5001/api/profile/user/${authUser.id}`, // Use backticks for string interpolation
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Profile data received:", response.data);
        setProfileData(response.data.profile || response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile data:", err);

        // Fallback to using the authUser data if API call fails
        if (authUser) {
          console.log("Using auth user as fallback:", authUser);
          setProfileData(authUser);
        }

        setError(`Failed to load complete profile data: ${err.message}`);
        setLoading(false);
      }
    };

    if (!authLoading) {
      fetchProfileData();
    }
  }, [isAuthenticated, authUser, authLoading]);

  // Fetch all matches
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("No authentication token found");
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        console.log("Making API call to fetch matches...");
        const response = await axios.get(
          "http://localhost:5001/api/match",
          config
        );

        if (response.data && response.data.matches) {
          setMatches(response.data.matches);
        } else {
          setMatches([]);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching matches:", err);
        setError(`Failed to load your conversations: ${err.message}`);
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return "";

    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return "";

    const now = new Date();

    if (date.toDateString() === now.toDateString()) {
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    }

    const oneWeekAgo = new Date(now);
    oneWeekAgo.setDate(now.getDate() - 7);
    if (date > oneWeekAgo) {
      return date.toLocaleDateString([], { weekday: "long" });
    }

    return date.toLocaleDateString([], { month: "short", day: "numeric" });
  };

  const currentUser = profileData || authUser;

  const getMatchedUser = (match) => {
    console.log(currentUser);
    if (!currentUser || !currentUser._id) {
      console.warn("Current user not ready, falling back to user1");
      return match.user1;
    }

    const currentId = String(currentUser._id);
    const user1Id = String(match.user1._id);
    const user2Id = String(match.user2._id);

    if (user1Id === currentId) {
      return match.user2;
    } else if (user2Id === currentId) {
      return match.user1;
    } else {
      console.warn("Current user not found in match, returning user1");
      return match.user1;
    }
  };

  if (loading || !currentUser) {
    return (
      <div className="loading-indicator">
        <div className="spinner"></div>
        <p>Loading your chats...</p>
      </div>
    );
  }

  return (
    <div className="chat-list-container">
      <h2 className="chat-list-title">Conversations</h2>

      {error ? (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      ) : matches.length > 0 ? (
        <div className="chats-wrapper">
          {matches.map((match) => {
            const matchedUser = getMatchedUser(match);
            console.log(matchedUser);
            const chat = match.chatId;
            const lastMessage =
              chat.messages && chat.messages.length > 0
                ? chat.messages[chat.messages.length - 1].content
                : "Start a conversation!";

            const photoUrl =
              matchedUser.photos && matchedUser.photos.length > 0
                ? matchedUser.photos[0].startsWith("/")
                  ? `http://localhost:5001${matchedUser.photos[0]}`
                  : matchedUser.photos[0]
                : "/assets/profiles/default-avatar.jpg";

            return (
              <Link
                to={`/chat/${match.chatId._id}`}
                key={match._id}
                className="chat-item"
              >
                <div className="chat-photo-container">
                  <img
                    src={photoUrl}
                    alt={matchedUser.name}
                    className="chat-photo"
                    onError={(e) => {
                      e.target.src = "/assets/profiles/default-avatar.jpg";
                    }}
                  />
                </div>
                <div className="chat-details">
                  <div className="chat-header">
                    <h3 className="chat-name">{matchedUser.name}</h3>
                    <span className="chat-time">
                      {chat.messages && chat.messages.length > 0
                        ? formatTimestamp(
                            chat.messages[chat.messages.length - 1]?.createdAt
                          )
                        : formatTimestamp(match.matchedAt)}
                    </span>
                  </div>
                  <p className="chat-message">{lastMessage}</p>
                  <span className="chat-location">
                    {matchedUser.city}
                    {matchedUser.area ? `, ${matchedUser.area}` : ""}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="no-chats">
          <div className="no-chats-icon">💬</div>
          <h3>No Conversations Yet</h3>
          <p>Start matching with potential roommates to begin chatting!</p>
          <Link to="/discover" className="discover-button">
            Find Roommates
          </Link>
        </div>
      )}
    </div>
  );
};

export default ChatList;
