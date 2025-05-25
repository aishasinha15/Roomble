// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import "./Likes.css";

// const Likes = () => {
//   const [selectedProfile, setSelectedProfile] = useState(null);
//   const navigate = useNavigate();

//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//   const [likesList, setLikesList] = useState([
//     {
//       id: 1,
//       name: "Anika Mehta",
//       age: 25,
//       occupation: "UX Designer",
//       location: "Jayanagar, Bangalore",
//       livingPreference: "Women",
//       lookingFor: "Long-term Stay",
//       promptAnswers: [
//         {
//           question: "My ideal home vibe is",
//           answer:
//             "Minimalist and creative with artsy touches. I love having plants and creating cozy reading corners.",
//         },
//         {
//           question: "I'm known for always",
//           answer:
//             "Making the perfect chai and being the unofficial apartment therapist for roommate conflicts.",
//         },
//         {
//           question: "A deal-breaker for me is",
//           answer:
//             "Disrespect for personal space and messiness in common areas. Communication is key!",
//         },
//       ],
//       photos: ["/api/placeholder/400/500", "/api/placeholder/400/500"],
//       compatibility: 92,
//       likedYou: "2 days ago",
//     },
//     {
//       id: 2,
//       name: "Vikram Malhotra",
//       age: 27,
//       occupation: "Financial Analyst",
//       location: "Whitefield, Bangalore",
//       livingPreference: "Everyone",
//       lookingFor: "Medium-term Stay",
//       promptAnswers: [
//         {
//           question: "My typical weekend looks like",
//           answer:
//             "Morning run, catching up on reading, and exploring new restaurants in the evening with friends.",
//         },
//         {
//           question: "I unwind by",
//           answer:
//             "Cooking elaborate meals while listening to podcasts or playing guitar.",
//         },
//         {
//           question: "In the kitchen, I'm",
//           answer:
//             "Pretty organized and enjoy meal prepping. Happy to share cooking duties with roommates!",
//         },
//       ],
//       photos: ["/api/placeholder/400/500", "/api/placeholder/400/500"],
//       compatibility: 84,
//       likedYou: "5 hours ago",
//     },
//     {
//       id: 3,
//       name: "Nandini Reddy",
//       age: 24,
//       occupation: "Content Writer",
//       location: "JP Nagar, Bangalore",
//       livingPreference: "Women",
//       lookingFor: "Long-term Stay",
//       promptAnswers: [
//         {
//           question: "My ideal home vibe is",
//           answer:
//             "Bookish and cozy with lots of cushions and throws. I love a place that feels lived-in but tidy.",
//         },
//         {
//           question: "My guilty pleasure is",
//           answer:
//             "Binge-watching reality TV shows and having impromptu karaoke sessions in the shower.",
//         },
//         {
//           question: "On weeknights, I'm usually",
//           answer:
//             "Working late sometimes, but I try to be home by 8 PM to unwind with a good book or show.",
//         },
//       ],
//       photos: ["/api/placeholder/400/500", "/api/placeholder/400/500"],
//       compatibility: 90,
//       likedYou: "Yesterday",
//     },
//     {
//       id: 4,
//       name: "Arjun Kapoor",
//       age: 26,
//       occupation: "Product Manager",
//       location: "Kormangala, Bangalore",
//       livingPreference: "Everyone",
//       lookingFor: "Long-term Stay",
//       promptAnswers: [
//         {
//           question: "I'm known for always",
//           answer:
//             "Finding the best deals on groceries and keeping track of all the household supplies.",
//         },
//         {
//           question: "My friends would describe me as",
//           answer:
//             "Reliable, easy-going, and the person who always has a plan B for everything.",
//         },
//         {
//           question: "Guests at home: yay or nay?",
//           answer:
//             "Occasional guests are welcome! I'm pretty social but also respect when others need quiet time.",
//         },
//       ],
//       photos: ["/api/placeholder/400/500", "/api/placeholder/400/500"],
//       compatibility: 87,
//       likedYou: "1 week ago",
//     },
//   ]);

//   const handleProfileClick = (profile) => {
//     setSelectedProfile(profile);
//     setCurrentPhotoIndex(0);
//   };

//   const handleBackClick = () => {
//     setSelectedProfile(null);
//   };

//   const handleMatch = (profileId) => {
//     // Handle the match logic here
//     console.log(`Matched with profile ${profileId}`);
//     setLikesList(likesList.filter((profile) => profile.id !== profileId));
//     setSelectedProfile(null);
//   };

//   const handleDecline = (profileId) => {
//     // Handle the decline logic here
//     console.log(`Declined profile ${profileId}`);
//     setLikesList(likesList.filter((profile) => profile.id !== profileId));
//     setSelectedProfile(null);
//   };

//   const changePhoto = (direction) => {
//     if (!selectedProfile) return;

//     const photoCount = selectedProfile.photos.length;
//     if (direction === "next") {
//       setCurrentPhotoIndex((currentPhotoIndex + 1) % photoCount);
//     } else {
//       setCurrentPhotoIndex((currentPhotoIndex - 1 + photoCount) % photoCount);
//     }
//   };

//   return (
//     <div className="likes-container">
//       {selectedProfile ? (
//         <div className="detailed-profile">
//           <button className="back-button" onClick={handleBackClick}>
//             ← Back
//           </button>

//           <div className="roommate-card">
//             <div className="photo-carousel">
//               <img
//                 src={selectedProfile.photos[currentPhotoIndex]}
//                 alt={`${selectedProfile.name}`}
//                 className="profile-photo"
//               />
//               <div className="photo-nav">
//                 {selectedProfile.photos.map((_, index) => (
//                   <span
//                     key={index}
//                     className={`photo-dot ${
//                       index === currentPhotoIndex ? "active" : ""
//                     }`}
//                     onClick={() => setCurrentPhotoIndex(index)}
//                   ></span>
//                 ))}
//               </div>
//               <button
//                 className="photo-nav-btn prev"
//                 onClick={() => changePhoto("prev")}
//                 aria-label="Previous photo"
//               >
//                 ‹
//               </button>
//               <button
//                 className="photo-nav-btn next"
//                 onClick={() => changePhoto("next")}
//                 aria-label="Next photo"
//               >
//                 ›
//               </button>
//               <div className="compatibility-badge">
//                 {selectedProfile.compatibility}% Match
//               </div>
//             </div>

//             <div className="profile-info">
//               <div className="profile-header">
//                 <h3>
//                   {selectedProfile.name}, {selectedProfile.age}
//                 </h3>
//                 <p className="occupation">{selectedProfile.occupation}</p>
//                 <p className="location">{selectedProfile.location}</p>
//                 <p className="liked-time">
//                   Liked you {selectedProfile.likedYou}
//                 </p>
//               </div>

//               <div className="preference-tags">
//                 <span className="preference-tag">
//                   Living with: {selectedProfile.livingPreference}
//                 </span>
//                 <span className="preference-tag">
//                   {selectedProfile.lookingFor}
//                 </span>
//               </div>

//               <div className="prompt-answers">
//                 {selectedProfile.promptAnswers.map((prompt, index) => (
//                   <div key={index} className="prompt-item">
//                     <h4>{prompt.question}</h4>
//                     <p>{prompt.answer}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="action-buttons">
//               <button
//                 className="decline-button"
//                 onClick={() => handleDecline(selectedProfile.id)}
//               >
//                 ✕
//               </button>
//               <button
//                 className="like-button"
//                 onClick={() => handleMatch(selectedProfile.id)}
//               >
//                 ♥
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <>
//           <h2 className="likes-title">People Who Liked You</h2>

//           {likesList.length > 0 ? (
//             <div className="likes-list">
//               {likesList.map((profile) => (
//                 <div
//                   key={profile.id}
//                   className="like-card"
//                   onClick={() => handleProfileClick(profile)}
//                 >
//                   <div className="like-card-photo">
//                     <img src={profile.photos[0]} alt={profile.name} />
//                     <div className="compatibility-badge-small">
//                       {profile.compatibility}%
//                     </div>
//                   </div>
//                   <div className="like-card-info">
//                     <h3>
//                       {profile.name}, {profile.age}
//                     </h3>
//                     <p className="occupation-small">{profile.occupation}</p>
//                     <p className="liked-time-small">
//                       Liked you {profile.likedYou}
//                     </p>
//                   </div>
//                   <div className="like-card-actions">
//                     <button
//                       className="decline-button-small"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleDecline(profile.id);
//                       }}
//                     >
//                       ✕
//                     </button>
//                     <button
//                       className="like-button-small"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleMatch(profile.id);
//                       }}
//                     >
//                       ♥
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="no-likes">
//               <h3>No new likes yet</h3>
//               <p>When someone likes your profile, they'll appear here.</p>
//               <button
//                 className="refresh-button"
//                 onClick={() => navigate("/discover")}
//               >
//                 Go to Discover
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Likes;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// import "./Likes.css";

// const Likes = () => {
//   const [selectedProfile, setSelectedProfile] = useState(null);
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//   const [likesList, setLikesList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Fetch likes when component mounts
//   useEffect(() => {
//     fetchLikes();
//   }, []);

//   const fetchLikes = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       const response = await axios.get(
//         "http://localhost:5001/api/profile/likes",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("Likes response:", response.data);

//       // Transform the response data to match our component structure
//       if (response.data && Array.isArray(response.data.likes)) {
//         // Fix photo URLs to ensure they work correctly
//         const likesWithFixedPhotos = response.data.likes.map((profile) => {
//           if (profile.photos && Array.isArray(profile.photos)) {
//             const fixedPhotos = profile.photos.map((photo) => {
//               // If it's a relative path, make it absolute
//               if (photo && photo.startsWith("/")) {
//                 return `http://localhost:5001${photo}`;
//               }
//               return photo;
//             });
//             return {
//               ...profile,
//               photos:
//                 fixedPhotos.length > 0
//                   ? fixedPhotos
//                   : ["/api/placeholder/400/500"],
//               // Calculate time since like
//               likedYou: getTimeSince(new Date(profile.createdAt || Date.now())),
//             };
//           }
//           return {
//             ...profile,
//             photos: ["/api/placeholder/400/500"],
//             likedYou: getTimeSince(new Date(profile.createdAt || Date.now())),
//           };
//         });

//         setLikesList(likesWithFixedPhotos);
//       } else {
//         setLikesList([]);
//       }

//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching likes:", err);
//       setError("Failed to load likes. Please try again later.");
//       setLoading(false);
//     }
//   };

//   // Helper function to format time since like
//   const getTimeSince = (date) => {
//     const seconds = Math.floor((new Date() - date) / 1000);

//     let interval = seconds / 31536000;
//     if (interval > 1) return Math.floor(interval) + " years ago";

//     interval = seconds / 2592000;
//     if (interval > 1) return Math.floor(interval) + " months ago";

//     interval = seconds / 86400;
//     if (interval > 1) return Math.floor(interval) + " days ago";

//     interval = seconds / 3600;
//     if (interval > 1) return Math.floor(interval) + " hours ago";

//     interval = seconds / 60;
//     if (interval > 1) return Math.floor(interval) + " minutes ago";

//     return Math.floor(seconds) + " seconds ago";
//   };

//   const handleProfileClick = (profile) => {
//     setSelectedProfile(profile);
//     setCurrentPhotoIndex(0);
//   };

//   const handleBackClick = () => {
//     setSelectedProfile(null);
//   };

//   const handleMatch = async (profileId) => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       await axios.post(
//         "http://localhost:5001/api/profile/like",
//         { likedUserId: profileId },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       // Remove the liked profile from the list
//       setLikesList(likesList.filter((profile) => profile._id !== profileId));
//       setSelectedProfile(null);

//       // Optionally navigate to matches or show a success message
//       // navigate("/matches");
//     } catch (err) {
//       console.error("Error matching profile:", err);
//       alert("Failed to match with this profile. Please try again.");
//     }
//   };

//   const handleDecline = async (profileId) => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       // You might want to add an API endpoint for rejecting likes
//       // For now, we'll just remove it from the UI
//       setLikesList(likesList.filter((profile) => profile._id !== profileId));
//       setSelectedProfile(null);
//     } catch (err) {
//       console.error("Error declining profile:", err);
//       alert("Failed to decline this profile. Please try again.");
//     }
//   };

//   const changePhoto = (direction) => {
//     if (!selectedProfile || !selectedProfile.photos) return;

//     const photoCount = selectedProfile.photos.length;
//     if (photoCount <= 1) return;

//     if (direction === "next") {
//       setCurrentPhotoIndex((currentPhotoIndex + 1) % photoCount);
//     } else {
//       setCurrentPhotoIndex((currentPhotoIndex - 1 + photoCount) % photoCount);
//     }
//   };

//   const calculateCompatibility = (profile) => {
//     // This is a placeholder for compatibility calculation
//     // You might want to implement actual compatibility logic
//     return profile.compatibility || Math.floor(Math.random() * 26) + 70;
//   };

//   if (loading) {
//     return (
//       <div className="likes-container">
//         <h2 className="likes-title">People Who Liked You</h2>
//         <div className="loading">Loading likes...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="likes-container">
//         <h2 className="likes-title">People Who Liked You</h2>
//         <div className="error">{error}</div>
//         <button className="refresh-button" onClick={() => fetchLikes()}>
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="likes-container">
//       {selectedProfile ? (
//         <div className="detailed-profile">
//           <button className="back-button" onClick={handleBackClick}>
//             ← Back
//           </button>

//           <div className="roommate-card">
//             <div className="photo-carousel">
//               <img
//                 src={
//                   selectedProfile.photos[currentPhotoIndex] ||
//                   "/api/placeholder/400/500"
//                 }
//                 alt={`${selectedProfile.name}`}
//                 className="profile-photo"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = "/api/placeholder/400/500";
//                 }}
//               />
//               {selectedProfile.photos && selectedProfile.photos.length > 1 && (
//                 <>
//                   <div className="photo-nav">
//                     {selectedProfile.photos.map((_, index) => (
//                       <span
//                         key={index}
//                         className={`photo-dot ${
//                           index === currentPhotoIndex ? "active" : ""
//                         }`}
//                         onClick={() => setCurrentPhotoIndex(index)}
//                       ></span>
//                     ))}
//                   </div>
//                   <button
//                     className="photo-nav-btn prev"
//                     onClick={() => changePhoto("prev")}
//                     aria-label="Previous photo"
//                   >
//                     ‹
//                   </button>
//                   <button
//                     className="photo-nav-btn next"
//                     onClick={() => changePhoto("next")}
//                     aria-label="Next photo"
//                   >
//                     ›
//                   </button>
//                 </>
//               )}
//               <div className="compatibility-badge">
//                 {calculateCompatibility(selectedProfile)}% Match
//               </div>
//             </div>

//             <div className="profile-info">
//               <div className="profile-header">
//                 <h3>
//                   {selectedProfile.name}, {selectedProfile.age || "N/A"}
//                 </h3>
//                 <p className="occupation">
//                   {selectedProfile.occupation || "Occupation not specified"}
//                 </p>
//                 <p className="location">
//                   {selectedProfile.city}, {selectedProfile.area}
//                 </p>
//                 <p className="liked-time">
//                   Liked you {selectedProfile.likedYou}
//                 </p>
//               </div>

//               <div className="preference-tags">
//                 <span className="preference-tag">
//                   Living with: {selectedProfile.livingPreference || "Everyone"}
//                 </span>
//                 <span className="preference-tag">
//                   {selectedProfile.lookingFor || "Roommate"}
//                 </span>
//               </div>

//               {selectedProfile.promptAnswers &&
//                 Object.keys(selectedProfile.promptAnswers).length > 0 && (
//                   <div className="prompt-answers">
//                     {Object.entries(selectedProfile.promptAnswers).map(
//                       ([promptKey, answer], index) => {
//                         // Get the question from promptKey using the getPromptQuestion function
//                         const question = getPromptQuestion(promptKey);
//                         return (
//                           <div key={index} className="prompt-item">
//                             <h4>{question}</h4>
//                             <p>{answer}</p>
//                           </div>
//                         );
//                       }
//                     )}
//                   </div>
//                 )}
//             </div>

//             <div className="action-buttons">
//               <button
//                 className="decline-button"
//                 onClick={() => handleDecline(selectedProfile._id)}
//               >
//                 ✕
//               </button>
//               <button
//                 className="like-button"
//                 onClick={() => handleMatch(selectedProfile._id)}
//               >
//                 ♥
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <>
//           <h2 className="likes-title">People Who Liked You</h2>

//           {likesList.length > 0 ? (
//             <div className="likes-list">
//               {likesList.map((profile) => (
//                 <div
//                   key={profile._id}
//                   className="like-card"
//                   onClick={() => handleProfileClick(profile)}
//                 >
//                   <div className="like-card-photo">
//                     <img
//                       src={
//                         profile.photos && profile.photos[0]
//                           ? profile.photos[0]
//                           : "/api/placeholder/400/500"
//                       }
//                       alt={profile.name}
//                       onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src = "/api/placeholder/400/500";
//                       }}
//                     />
//                     <div className="compatibility-badge-small">
//                       {calculateCompatibility(profile)}%
//                     </div>
//                   </div>
//                   <div className="like-card-info">
//                     <h3>
//                       {profile.name}, {profile.age || "N/A"}
//                     </h3>
//                     <p className="occupation-small">
//                       {profile.occupation || "Occupation not specified"}
//                     </p>
//                     <p className="liked-time-small">
//                       Liked you {profile.likedYou}
//                     </p>
//                   </div>
//                   <div className="like-card-actions">
//                     <button
//                       className="decline-button-small"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleDecline(profile._id);
//                       }}
//                     >
//                       ✕
//                     </button>
//                     <button
//                       className="like-button-small"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleMatch(profile._id);
//                       }}
//                     >
//                       ♥
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="no-likes">
//               <h3>No new likes yet</h3>
//               <p>When someone likes your profile, they'll appear here.</p>
//               <button
//                 className="refresh-button"
//                 onClick={() => navigate("/discover")}
//               >
//                 Go to Discover
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Likes.css";

// const Likes = () => {
//   const [selectedProfile, setSelectedProfile] = useState(null);
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//   const [likesList, setLikesList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Fetch likes when component mounts
//   useEffect(() => {
//     fetchLikes();
//   }, []);

//   const fetchLikes = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       const response = await axios.get(
//         "http://localhost:5001/api/match/likes",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("Likes response:", response.data);

//       if (response.data && Array.isArray(response.data.likes)) {
//         // Update profile photos and liked time
//         const likesWithFixedPhotos = response.data.likes.map((profile) => {
//           const fixedPhotos = profile.photos.map((photo) => {
//             if (photo && photo.startsWith("/")) {
//               return `http://localhost:5001${photo}`;
//             }
//             return photo;
//           });
//           return {
//             ...profile,
//             photos:
//               fixedPhotos.length > 0
//                 ? fixedPhotos
//                 : ["/api/placeholder/400/500"],
//             likedYou: getTimeSince(new Date(profile.createdAt || Date.now())),
//           };
//         });

//         setLikesList(likesWithFixedPhotos);
//       } else {
//         setLikesList([]);
//       }

//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching likes:", err);
//       setError("Failed to load likes. Please try again later.");
//       setLoading(false);
//     }
//   };

//   // Helper function to format time since like
//   const getTimeSince = (date) => {
//     const seconds = Math.floor((new Date() - date) / 1000);
//     let interval = seconds / 31536000;
//     if (interval > 1) return Math.floor(interval) + " years ago";

//     interval = seconds / 2592000;
//     if (interval > 1) return Math.floor(interval) + " months ago";

//     interval = seconds / 86400;
//     if (interval > 1) return Math.floor(interval) + " days ago";

//     interval = seconds / 3600;
//     if (interval > 1) return Math.floor(interval) + " hours ago";

//     interval = seconds / 60;
//     if (interval > 1) return Math.floor(interval) + " minutes ago";

//     return Math.floor(seconds) + " seconds ago";
//   };

//   const handleProfileClick = (profile) => {
//     setSelectedProfile(profile);
//     setCurrentPhotoIndex(0);
//   };

//   const handleBackClick = () => {
//     setSelectedProfile(null);
//   };

//   // Match the selected profile
//   const handleMatch = async (profileId) => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       // Make an API call to create the match
//       const response = await axios.post(
//         "http://localhost:5001/api/profile/match", // Changed to match endpoint
//         { likedUserId: profileId },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.data.success) {
//         // Remove the liked profile from the list after matching
//         setLikesList(likesList.filter((profile) => profile._id !== profileId));
//         setSelectedProfile(null);

//         // Optionally navigate to matches page
//         navigate("/matches");
//       } else {
//         alert("Failed to match with this profile.");
//       }
//     } catch (err) {
//       console.error("Error matching profile:", err);
//       alert("Failed to match with this profile. Please try again.");
//     }
//   };

//   const handleDecline = async (profileId) => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       // Just remove the declined profile from the list
//       setLikesList(likesList.filter((profile) => profile._id !== profileId));
//       setSelectedProfile(null);
//     } catch (err) {
//       console.error("Error declining profile:", err);
//       alert("Failed to decline this profile. Please try again.");
//     }
//   };

//   const changePhoto = (direction) => {
//     if (!selectedProfile || !selectedProfile.photos) return;

//     const photoCount = selectedProfile.photos.length;
//     if (photoCount <= 1) return;

//     if (direction === "next") {
//       setCurrentPhotoIndex((currentPhotoIndex + 1) % photoCount);
//     } else {
//       setCurrentPhotoIndex((currentPhotoIndex - 1 + photoCount) % photoCount);
//     }
//   };

//   const calculateCompatibility = (profile) => {
//     return profile.compatibility || Math.floor(Math.random() * 26) + 70; // Placeholder logic
//   };

//   if (loading) {
//     return (
//       <div className="likes-container">
//         <h2 className="likes-title">People Who Liked You</h2>
//         <div className="loading">Loading likes...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="likes-container">
//         <h2 className="likes-title">People Who Liked You</h2>
//         <div className="error">{error}</div>
//         <button className="refresh-button" onClick={() => fetchLikes()}>
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="likes-container">
//       {selectedProfile ? (
//         <div className="detailed-profile">
//           <button className="back-button" onClick={handleBackClick}>
//             ← Back
//           </button>

//           <div className="roommate-card">
//             <div className="photo-carousel">
//               <img
//                 src={
//                   selectedProfile.photos[currentPhotoIndex] ||
//                   "/api/placeholder/400/500"
//                 }
//                 alt={selectedProfile.name}
//                 className="profile-photo"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = "/api/placeholder/400/500";
//                 }}
//               />
//               {selectedProfile.photos && selectedProfile.photos.length > 1 && (
//                 <>
//                   <div className="photo-nav">
//                     {selectedProfile.photos.map((_, index) => (
//                       <span
//                         key={index}
//                         className={`photo-dot ${
//                           index === currentPhotoIndex ? "active" : ""
//                         }`}
//                         onClick={() => setCurrentPhotoIndex(index)}
//                       ></span>
//                     ))}
//                   </div>
//                   <button
//                     className="photo-nav-btn prev"
//                     onClick={() => changePhoto("prev")}
//                     aria-label="Previous photo"
//                   >
//                     ‹
//                   </button>
//                   <button
//                     className="photo-nav-btn next"
//                     onClick={() => changePhoto("next")}
//                     aria-label="Next photo"
//                   >
//                     ›
//                   </button>
//                 </>
//               )}
//               <div className="compatibility-badge">
//                 {calculateCompatibility(selectedProfile)}% Match
//               </div>
//             </div>

//             <div className="profile-info">
//               <div className="profile-header">
//                 <h3>
//                   {selectedProfile.name}, {selectedProfile.age || "N/A"}
//                 </h3>
//                 <p className="occupation">
//                   {selectedProfile.occupation || "Occupation not specified"}
//                 </p>
//                 <p className="location">
//                   {selectedProfile.city}, {selectedProfile.area}
//                 </p>
//                 <p className="liked-time">
//                   Liked you {selectedProfile.likedYou}
//                 </p>
//               </div>

//               <div className="preference-tags">
//                 <span className="preference-tag">
//                   Living with: {selectedProfile.livingPreference || "Everyone"}
//                 </span>
//                 <span className="preference-tag">
//                   {selectedProfile.lookingFor || "Roommate"}
//                 </span>
//               </div>

//               {selectedProfile.promptAnswers &&
//                 Object.keys(selectedProfile.promptAnswers).length > 0 && (
//                   <div className="prompt-answers">
//                     {Object.entries(selectedProfile.promptAnswers).map(
//                       ([promptKey, answer], index) => {
//                         const question = getPromptQuestion(promptKey);
//                         return (
//                           <div key={index} className="prompt-item">
//                             <h4>{question}</h4>
//                             <p>{answer}</p>
//                           </div>
//                         );
//                       }
//                     )}
//                   </div>
//                 )}
//             </div>

//             <div className="action-buttons">
//               <button
//                 className="decline-button"
//                 onClick={() => handleDecline(selectedProfile._id)}
//               >
//                 ✕
//               </button>
//               <button
//                 className="like-button"
//                 onClick={() => handleMatch(selectedProfile._id)}
//               >
//                 ♥
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <>
//           <h2 className="likes-title">People Who Liked You</h2>
//           <div className="likes-list">
//             {likesList.length === 0 ? (
//               <p>No one has liked you yet.</p>
//             ) : (
//               likesList.map((profile) => (
//                 <div
//                   key={profile._id}
//                   className="profile-card"
//                   onClick={() => handleProfileClick(profile)}
//                 >
//                   <div className="profile-photo-container">
//                     <img
//                       src={profile.photos[0] || "/api/placeholder/400/500"}
//                       alt={profile.name}
//                       className="profile-photo"
//                     />
//                   </div>
//                   <div className="profile-info">
//                     <h3>
//                       {profile.name}, {profile.age || "N/A"}
//                     </h3>
//                     <p>{profile.city}</p>
//                     <p>{profile.likedYou} ago</p>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// // Helper function to get prompt questions
// const getPromptQuestion = (promptKey) => {
//   const promptsList = [
//     {
//       id: "0",
//       name: "About Me",
//       questions: [
//         { id: "0", question: "My guilty pleasure is" },
//         { id: "1", question: "On weekends, you'll find me" },
//         { id: "2", question: "A fun fact about me" },
//         { id: "3", question: "I'm known for always" },
//         { id: "4", question: "One thing I can't live without" },
//         { id: "5", question: "My 3 core values are" },
//         { id: "6", question: "Biggest red flag I avoid" },
//       ],
//     },
//     {
//       id: "1",
//       name: "Living Style",
//       questions: [
//         { id: "0", question: "My ideal home vibe is" },
//         { id: "1", question: "I like to keep my space" },
//         { id: "2", question: "I usually sleep at" },
//         { id: "3", question: "Guests at home: yay or nay?" },
//         { id: "4", question: "Noise level I'm comfortable with" },
//         { id: "5", question: "I share food if..." },
//         { id: "6", question: "My go-to comfort item at home" },
//       ],
//     },
//     {
//       id: "2",
//       name: "Self Care",
//       questions: [
//         { id: "0", question: "I unwind by" },
//         { id: "1", question: "My boundaries include" },
//         { id: "2", question: "I feel supported when" },
//         { id: "3", question: "To me, self-care means" },
//         { id: "4", question: "I handle stress by" },
//         { id: "5", question: "Mental health check-ins are" },
//       ],
//     },
//     {
//       id: "3",
//       name: "Roommate Vibes",
//       questions: [
//         { id: "0", question: "A green flag in a roommate is" },
//         { id: "1", question: "A dealbreaker for me is" },
//         { id: "2", question: "I'd love it if my roommate and I..." },
//         { id: "3", question: "I prefer roommates who are" },
//         { id: "4", question: "My communication style is" },
//         { id: "5", question: "Conflict resolution: my go-to move is" },
//       ],
//     },
//     {
//       id: "4",
//       name: "Dream Home",
//       questions: [
//         { id: "0", question: "My dream corner in our home would have" },
//         { id: "1", question: "A must-have in our apartment is" },
//         { id: "2", question: "The vibe I'm manifesting for our place" },
//         { id: "3", question: "A home tradition I'd love to start" },
//         { id: "4", question: "If I could design one wall, it'd have" },
//       ],
//     },
//   ];

//   if (!promptKey) return null;
//   const [promptId, questionId] = promptKey.split("-");
//   const promptCategory = promptsList.find((p) => p.id === promptId);
//   if (!promptCategory) return null;
//   const question = promptCategory.questions.find((q) => q.id === questionId);
//   return question ? question.question : null;
// };

// export default Likes;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Likes.css";

// const Likes = () => {
//   const [selectedProfile, setSelectedProfile] = useState(null);
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//   const [likesList, setLikesList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Fetch likes when component mounts
//   useEffect(() => {
//     fetchLikes();
//   }, []);

//   const fetchLikes = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       const response = await axios.get(
//         "http://localhost:5001/api/match/likes",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("Likes response:", response.data);

//       // Check if response.data exists and if likes is an array
//       if (response.data && Array.isArray(response.data.likes)) {
//         // Update profile photos and liked time
//         const likesWithFixedPhotos = response.data.likes.map((profile) => {
//           // Fix photo URLs if they exist
//           const fixedPhotos = Array.isArray(profile.photos)
//             ? profile.photos.map((photo) => {
//                 if (
//                   photo &&
//                   typeof photo === "string" &&
//                   photo.startsWith("/")
//                 ) {
//                   return `http://localhost:5001${photo}`;
//                 }
//                 return photo;
//               })
//             : [];

//           return {
//             ...profile,
//             photos:
//               fixedPhotos.length > 0
//                 ? fixedPhotos
//                 : ["/api/placeholder/400/500"],
//             likedYou: getTimeSince(new Date(profile.createdAt || Date.now())),
//           };
//         });

//         console.log("Processed likes data:", likesWithFixedPhotos);
//         setLikesList(likesWithFixedPhotos);
//       } else {
//         console.log("No likes found or invalid format");
//         setLikesList([]);
//       }

//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching likes:", err);
//       setError("Failed to load likes. Please try again later.");
//       setLoading(false);
//     }
//   };

//   // Helper function to format time since like
//   const getTimeSince = (date) => {
//     const seconds = Math.floor((new Date() - date) / 1000);
//     let interval = seconds / 31536000;
//     if (interval > 1) return Math.floor(interval) + " years ago";

//     interval = seconds / 2592000;
//     if (interval > 1) return Math.floor(interval) + " months ago";

//     interval = seconds / 86400;
//     if (interval > 1) return Math.floor(interval) + " days ago";

//     interval = seconds / 3600;
//     if (interval > 1) return Math.floor(interval) + " hours ago";

//     interval = seconds / 60;
//     if (interval > 1) return Math.floor(interval) + " minutes ago";

//     return Math.floor(seconds) + " seconds ago";
//   };

//   const handleProfileClick = (profile) => {
//     console.log("Selected profile:", profile);
//     setSelectedProfile(profile);
//     setCurrentPhotoIndex(0);
//   };

//   const handleBackClick = () => {
//     setSelectedProfile(null);
//   };

//   // Match the selected profile
//   const handleMatch = async (profileId) => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       // Make an API call to create the match
//       const response = await axios.post(
//         "http://localhost:5001/api/match/accept",
//         { likedUserId: profileId },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("Match response:", response.data);

//       if (response.status === 200) {
//         // Remove the liked profile from the list after matching
//         setLikesList(likesList.filter((profile) => profile._id !== profileId));
//         setSelectedProfile(null);

//         // Optionally notify the user
//         alert("Match created successfully!");

//         // Optionally navigate to matches page
//         // navigate("/matches");
//       } else {
//         alert("Failed to match with this profile.");
//       }
//     } catch (err) {
//       console.error("Error matching profile:", err);
//       alert("Failed to match with this profile. Please try again.");
//     }
//   };

//   const handleDecline = async (profileId) => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       // Call the reject API
//       const response = await axios.post(
//         "http://localhost:5001/api/match/reject",
//         { likedUserId: profileId },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("Decline response:", response.data);

//       // Remove the declined profile from the list
//       setLikesList(likesList.filter((profile) => profile._id !== profileId));
//       setSelectedProfile(null);
//     } catch (err) {
//       console.error("Error declining profile:", err);
//       alert("Failed to decline this profile. Please try again.");
//     }
//   };

//   const changePhoto = (direction) => {
//     if (!selectedProfile || !selectedProfile.photos) return;

//     const photoCount = selectedProfile.photos.length;
//     if (photoCount <= 1) return;

//     if (direction === "next") {
//       setCurrentPhotoIndex((currentPhotoIndex + 1) % photoCount);
//     } else {
//       setCurrentPhotoIndex((currentPhotoIndex - 1 + photoCount) % photoCount);
//     }
//   };

//   const calculateCompatibility = (profile) => {
//     return profile.compatibility || Math.floor(Math.random() * 26) + 70; // Placeholder logic
//   };

//   if (loading) {
//     return (
//       <div className="likes-container">
//         <h2 className="likes-title">People Who Liked You</h2>
//         <div className="loading">Loading likes...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="likes-container">
//         <h2 className="likes-title">People Who Liked You</h2>
//         <div className="error">{error}</div>
//         <button className="refresh-button" onClick={() => fetchLikes()}>
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="likes-container">
//       {selectedProfile ? (
//         <div className="detailed-profile">
//           <button className="back-button" onClick={handleBackClick}>
//             ← Back
//           </button>

//           <div className="roommate-card">
//             <div className="photo-carousel">
//               <img
//                 src={
//                   selectedProfile.photos &&
//                   selectedProfile.photos[currentPhotoIndex]
//                     ? selectedProfile.photos[currentPhotoIndex]
//                     : "/api/placeholder/400/500"
//                 }
//                 alt={selectedProfile.name || "Profile"}
//                 className="profile-photo"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = "/api/placeholder/400/500";
//                 }}
//               />
//               {selectedProfile.photos && selectedProfile.photos.length > 1 && (
//                 <>
//                   <div className="photo-nav">
//                     {selectedProfile.photos.map((_, index) => (
//                       <span
//                         key={index}
//                         className={`photo-dot ${
//                           index === currentPhotoIndex ? "active" : ""
//                         }`}
//                         onClick={() => setCurrentPhotoIndex(index)}
//                       ></span>
//                     ))}
//                   </div>
//                   <button
//                     className="photo-nav-btn prev"
//                     onClick={() => changePhoto("prev")}
//                     aria-label="Previous photo"
//                   >
//                     ‹
//                   </button>
//                   <button
//                     className="photo-nav-btn next"
//                     onClick={() => changePhoto("next")}
//                     aria-label="Next photo"
//                   >
//                     ›
//                   </button>
//                 </>
//               )}
//               <div className="compatibility-badge">
//                 {calculateCompatibility(selectedProfile)}% Match
//               </div>
//             </div>

//             <div className="profile-info">
//               <div className="profile-header">
//                 <h3>
//                   {selectedProfile.name || "No Name"},{" "}
//                   {selectedProfile.age || "N/A"}
//                 </h3>
//                 <p className="occupation">
//                   {selectedProfile.occupation || "Occupation not specified"}
//                 </p>
//                 <p className="location">
//                   {selectedProfile.city || "Unknown"},{" "}
//                   {selectedProfile.area || "Unknown"}
//                 </p>
//                 <p className="liked-time">
//                   Liked you {selectedProfile.likedYou || "recently"}
//                 </p>
//               </div>

//               <div className="preference-tags">
//                 <span className="preference-tag">
//                   {selectedProfile.lookingFor || "Roommate"}
//                 </span>
//               </div>

//               {selectedProfile.promptAnswers &&
//                 Object.keys(selectedProfile.promptAnswers).length > 0 && (
//                   <div className="prompt-answers">
//                     {Object.entries(selectedProfile.promptAnswers).map(
//                       ([promptKey, answer], index) => {
//                         const question = getPromptQuestion(promptKey);
//                         return question ? (
//                           <div key={index} className="prompt-item">
//                             <h4>{question}</h4>
//                             <p>{answer}</p>
//                           </div>
//                         ) : null;
//                       }
//                     )}
//                   </div>
//                 )}
//             </div>

//             <div className="action-buttons">
//               <button
//                 className="decline-button"
//                 onClick={() => handleDecline(selectedProfile._id)}
//               >
//                 ✕
//               </button>
//               <button
//                 className="like-button"
//                 onClick={() => handleMatch(selectedProfile._id)}
//               >
//                 ♥
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <>
//           <h2 className="likes-title">People Who Liked You</h2>
//           <div className="likes-list">
//             {likesList.length === 0 ? (
//               <p>No one has liked you yet.</p>
//             ) : (
//               likesList.map((profile) => (
//                 <div
//                   key={profile._id}
//                   className="profile-card"
//                   onClick={() => handleProfileClick(profile)}
//                 >
//                   <div className="profile-photo-container">
//                     <img
//                       src={
//                         (profile.photos && profile.photos[0]) ||
//                         "/api/placeholder/400/500"
//                       }
//                       alt={profile.name || "Profile"}
//                       className="profile-photo"
//                       onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src = "/api/placeholder/400/500";
//                       }}
//                     />
//                   </div>
//                   <div className="profile-info">
//                     <h3>
//                       {profile.name || "No Name"}, {profile.age || "N/A"}
//                     </h3>
//                     <p>{profile.city || "Unknown"}</p>
//                     <p>{profile.likedYou || "Recently"}</p>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </>
//       )}
//       {/* Add debugging info in development */}
//       {process.env.NODE_ENV === "development" && (
//         <div
//           style={{
//             margin: "20px",
//             padding: "10px",
//             border: "1px solid #ccc",
//             backgroundColor: "#f5f5f5",
//           }}
//         >
//           <p>Debug Info:</p>
//           <p>Likes list length: {likesList.length}</p>
//           <p>
//             Response format: {JSON.stringify(likesList.slice(0, 1), null, 2)}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// // Helper function to get prompt questions
// const getPromptQuestion = (promptKey) => {
//   const promptsList = [
//     {
//       id: "0",
//       name: "About Me",
//       questions: [
//         { id: "0", question: "My guilty pleasure is" },
//         { id: "1", question: "On weekends, you'll find me" },
//         { id: "2", question: "A fun fact about me" },
//         { id: "3", question: "I'm known for always" },
//         { id: "4", question: "One thing I can't live without" },
//         { id: "5", question: "My 3 core values are" },
//         { id: "6", question: "Biggest red flag I avoid" },
//       ],
//     },
//     {
//       id: "1",
//       name: "Living Style",
//       questions: [
//         { id: "0", question: "My ideal home vibe is" },
//         { id: "1", question: "I like to keep my space" },
//         { id: "2", question: "I usually sleep at" },
//         { id: "3", question: "Guests at home: yay or nay?" },
//         { id: "4", question: "Noise level I'm comfortable with" },
//         { id: "5", question: "I share food if..." },
//         { id: "6", question: "My go-to comfort item at home" },
//       ],
//     },
//     {
//       id: "2",
//       name: "Self Care",
//       questions: [
//         { id: "0", question: "I unwind by" },
//         { id: "1", question: "My boundaries include" },
//         { id: "2", question: "I feel supported when" },
//         { id: "3", question: "To me, self-care means" },
//         { id: "4", question: "I handle stress by" },
//         { id: "5", question: "Mental health check-ins are" },
//       ],
//     },
//     {
//       id: "3",
//       name: "Roommate Vibes",
//       questions: [
//         { id: "0", question: "A green flag in a roommate is" },
//         { id: "1", question: "A dealbreaker for me is" },
//         { id: "2", question: "I'd love it if my roommate and I..." },
//         { id: "3", question: "I prefer roommates who are" },
//         { id: "4", question: "My communication style is" },
//         { id: "5", question: "Conflict resolution: my go-to move is" },
//       ],
//     },
//     {
//       id: "4",
//       name: "Dream Home",
//       questions: [
//         { id: "0", question: "My dream corner in our home would have" },
//         { id: "1", question: "A must-have in our apartment is" },
//         { id: "2", question: "The vibe I'm manifesting for our place" },
//         { id: "3", question: "A home tradition I'd love to start" },
//         { id: "4", question: "If I could design one wall, it'd have" },
//       ],
//     },
//   ];

//   if (!promptKey) return null;
//   const [promptId, questionId] = promptKey.split("-");
//   const promptCategory = promptsList.find((p) => p.id === promptId);
//   if (!promptCategory) return null;
//   const question = promptCategory.questions.find((q) => q.id === questionId);
//   return question ? question.question : null;
// };

// export default Likes;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Likes.css";

const Likes = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [likesList, setLikesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch likes when component mounts
  useEffect(() => {
    fetchLikes();
  }, []);

  const fetchLikes = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await axios.get(
        "http://localhost:5001/api/match/likes",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Likes response:", response.data);

      // Check if response.data exists and if likes is an array
      if (response.data && Array.isArray(response.data.likes)) {
        // Update profile photos and liked time
        const likesWithFixedPhotos = response.data.likes.map((profile) => {
          // Fix photo URLs if they exist
          const fixedPhotos = Array.isArray(profile.photos)
            ? profile.photos.map((photo) => {
                if (
                  photo &&
                  typeof photo === "string" &&
                  photo.startsWith("/")
                ) {
                  return `http://localhost:5001${photo}`;
                }
                return photo;
              })
            : [];

          return {
            ...profile,
            photos:
              fixedPhotos.length > 0
                ? fixedPhotos
                : ["/api/placeholder/400/500"],
            likedYou: getTimeSince(new Date(profile.createdAt || Date.now())),
          };
        });

        console.log("Processed likes data:", likesWithFixedPhotos);
        setLikesList(likesWithFixedPhotos);
      } else {
        console.log("No likes found or invalid format");
        setLikesList([]);
      }

      setLoading(false);
    } catch (err) {
      console.error("Error fetching likes:", err);
      setError("Failed to load likes. Please try again later.");
      setLoading(false);
    }
  };

  // Helper function to format time since like
  const getTimeSince = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " days ago";

    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " days ago";

    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";

    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";

    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";

    return Math.floor(seconds) + " seconds ago";
  };

  const handleProfileClick = (profile) => {
    console.log("Selected profile:", profile);
    setSelectedProfile(profile);
    setCurrentPhotoIndex(0);
  };

  const handleBackClick = () => {
    setSelectedProfile(null);
  };

  // Match the selected profile
  const handleMatch = async (profileId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No authentication token found");
      }

      // Make an API call to create the match
      const response = await axios.post(
        "http://localhost:5001/api/match/accept",
        { likedUserId: profileId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Match response:", response.data);

      if (response.status === 200) {
        // Remove the liked profile from the list after matching
        setLikesList(likesList.filter((profile) => profile._id !== profileId));
        setSelectedProfile(null);
      }
    } catch (err) {
      console.error("Error matching profile:", err);
      alert("Failed to match with this profile. Please try again.");
    }
  };

  const handleDecline = async (profileId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No authentication token found");
      }

      // Call the reject API
      const response = await axios.post(
        "http://localhost:5001/api/match/reject",
        { rejectedUserId: profileId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Decline response:", response.data);

      // Remove the declined profile from the list
      setLikesList(likesList.filter((profile) => profile._id !== profileId));
      setSelectedProfile(null);
    } catch (err) {
      console.error("Error declining profile:", err);
      alert("Failed to decline this profile. Please try again.");
    }
  };

  const changePhoto = (direction) => {
    if (!selectedProfile || !selectedProfile.photos) return;

    const photoCount = selectedProfile.photos.length;
    if (photoCount <= 1) return;

    if (direction === "next") {
      setCurrentPhotoIndex((currentPhotoIndex + 1) % photoCount);
    } else {
      setCurrentPhotoIndex((currentPhotoIndex - 1 + photoCount) % photoCount);
    }
  };

  const calculateCompatibility = (profile) => {
    return profile.compatibility || Math.floor(Math.random() * 26) + 70; // Placeholder logic
  };

  // Format prompt answers to display
  const getFormattedPromptAnswers = (profile) => {
    if (!profile.promptAnswers) return [];

    const result = [];
    Object.entries(profile.promptAnswers).forEach(([key, answer]) => {
      const question = getPromptQuestion(key);
      if (question) {
        result.push({
          question,
          answer,
        });
      }
    });

    return result;
  };

  if (loading) {
    return (
      <div className="likes-container">
        <h2 className="likes-title">People Who Liked You</h2>
        <div className="loading">Loading likes...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="likes-container">
        <h2 className="likes-title">People Who Liked You</h2>
        <div className="error">{error}</div>
        <button className="refresh-button" onClick={() => fetchLikes()}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="likes-container">
      {selectedProfile ? (
        <div className="detailed-profile">
          <button className="back-button" onClick={handleBackClick}>
            ← Back
          </button>

          <div className="roommate-card">
            <div className="photo-carousel">
              <img
                src={
                  selectedProfile.photos &&
                  selectedProfile.photos[currentPhotoIndex]
                    ? selectedProfile.photos[currentPhotoIndex]
                    : "/api/placeholder/400/500"
                }
                alt={selectedProfile.name || "Profile"}
                className="profile-photo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/api/placeholder/400/500";
                }}
              />
              {selectedProfile.photos && selectedProfile.photos.length > 1 && (
                <>
                  <div className="photo-nav">
                    {selectedProfile.photos.map((_, index) => (
                      <span
                        key={index}
                        className={`photo-dot ${
                          index === currentPhotoIndex ? "active" : ""
                        }`}
                        onClick={() => setCurrentPhotoIndex(index)}
                      ></span>
                    ))}
                  </div>
                  <button
                    className="photo-nav-btn prev"
                    onClick={() => changePhoto("prev")}
                    aria-label="Previous photo"
                  >
                    ‹
                  </button>
                  <button
                    className="photo-nav-btn next"
                    onClick={() => changePhoto("next")}
                    aria-label="Next photo"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            <div className="profile-info">
              <div className="profile-header">
                <div className="nam">
                  {selectedProfile.name}, {selectedProfile.age || "N/A"}
                </div>
                <div className="lococcp">
                  <br />
                  {selectedProfile.city}, {selectedProfile.area}
                  <br />
                  {selectedProfile.occupation || "Occupation not specified"}
                </div>
              </div>

              <div className="preferences-row">
                <div className="preference-section">
                  <h3 className="preference-header">Living Preferences</h3>
                  <div className="preference-tags">
                    <span className="preference-tag">
                      {selectedProfile.livingPreference || "Everyone"}
                    </span>
                  </div>
                </div>

                <div className="preference-section">
                  <h3 className="preference-header">Looking For</h3>
                  <div className="preference-tags">
                    <span className="preference-tag">
                      {selectedProfile.lookingFor || "Roommate"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="prompt-answers">
                {getFormattedPromptAnswers(selectedProfile).map(
                  (prompt, index) => (
                    <div key={index} className="prompt-item">
                      <h4>{prompt.question}</h4>
                      <p>{prompt.answer}</p>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="action-buttons">
              <button
                className="decline-button"
                onClick={() => handleDecline(selectedProfile._id)}
              >
                ✕
              </button>
              <button
                className="like-button"
                onClick={() => handleMatch(selectedProfile._id)}
              >
                ♥
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h2 className="likes-title">People Who Liked You</h2>

          {likesList.length > 0 ? (
            <div className="likes-list">
              {likesList.map((profile) => (
                <div
                  key={profile._id}
                  className="like-card"
                  onClick={() => handleProfileClick(profile)}
                >
                  <div className="like-card-photo">
                    <img
                      src={
                        (profile.photos && profile.photos[0]) ||
                        "/api/placeholder/400/500"
                      }
                      alt={profile.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/api/placeholder/400/500";
                      }}
                    />
                    <div className="compatibility-badge-small">
                      {profile.compatibility}%
                    </div>
                  </div>
                  <div className="like-card-info">
                    <h3>
                      {profile.name || "No Name"}, {profile.age || "N/A"}
                    </h3>
                    <p className="occupation-small">
                      {profile.occupation || "Not specified"}
                    </p>
                    <p className="liked-time-small">
                      Liked you {profile.likedYou}
                    </p>
                  </div>
                  <div className="like-card-actions">
                    <button
                      className="decline-button-small"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDecline(profile._id);
                      }}
                    >
                      ✕
                    </button>
                    <button
                      className="like-button-small"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMatch(profile._id);
                      }}
                    >
                      ♥
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-likes">
              <h3>No new likes yet</h3>
              <p>When someone likes your profile, they'll appear here.</p>
              <button
                className="refresh-button"
                onClick={() => navigate("/discover")}
              >
                Go to Discover
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

// Helper function to get prompt questions
const getPromptQuestion = (promptKey) => {
  const promptsList = [
    {
      id: "0",
      name: "About Me",
      questions: [
        { id: "0", question: "My guilty pleasure is" },
        { id: "1", question: "On weekends, you'll find me" },
        { id: "2", question: "A fun fact about me" },
        { id: "3", question: "I'm known for always" },
        { id: "4", question: "One thing I can't live without" },
        { id: "5", question: "My 3 core values are" },
        { id: "6", question: "Biggest red flag I avoid" },
      ],
    },
    {
      id: "1",
      name: "Living Style",
      questions: [
        { id: "0", question: "My ideal home vibe is" },
        { id: "1", question: "I like to keep my space" },
        { id: "2", question: "I usually sleep at" },
        { id: "3", question: "Guests at home: yay or nay?" },
        { id: "4", question: "Noise level I'm comfortable with" },
        { id: "5", question: "I share food if..." },
        { id: "6", question: "My go-to comfort item at home" },
      ],
    },
    {
      id: "2",
      name: "Self Care",
      questions: [
        { id: "0", question: "I unwind by" },
        { id: "1", question: "My boundaries include" },
        { id: "2", question: "I feel supported when" },
        { id: "3", question: "To me, self-care means" },
        { id: "4", question: "I handle stress by" },
        { id: "5", question: "Mental health check-ins are" },
      ],
    },
    {
      id: "3",
      name: "Roommate Vibes",
      questions: [
        { id: "0", question: "A green flag in a roommate is" },
        { id: "1", question: "A dealbreaker for me is" },
        { id: "2", question: "I'd love it if my roommate and I..." },
        { id: "3", question: "I prefer roommates who are" },
        { id: "4", question: "My communication style is" },
        { id: "5", question: "Conflict resolution: my go-to move is" },
      ],
    },
    {
      id: "4",
      name: "Dream Home",
      questions: [
        { id: "0", question: "My dream corner in our home would have" },
        { id: "1", question: "A must-have in our apartment is" },
        { id: "2", question: "The vibe I'm manifesting for our place" },
        { id: "3", question: "A home tradition I'd love to start" },
        { id: "4", question: "If I could design one wall, it'd have" },
      ],
    },
  ];

  if (!promptKey) return null;
  const [promptId, questionId] = promptKey.split("-");
  const promptCategory = promptsList.find((p) => p.id === promptId);
  if (!promptCategory) return null;
  const question = promptCategory.questions.find((q) => q.id === questionId);
  return question ? question.question : null;
};

export default Likes;
