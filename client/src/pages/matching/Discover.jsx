// import React, { useState } from "react";
// import "./Discover.css";

// const Discover = () => {
//   // Sample data for roommate cards
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [swipedUsers, setSwipedUsers] = useState([]);
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

//   const roommateProfiles = [
//     {
//       id: 1,
//       name: "Priya Sharma",
//       age: 24,
//       occupation: "Marketing Specialist",
//       location: "Indiranagar, Bangalore",
//       livingPreference: "Women",
//       lookingFor: "Long-term Stay",
//       promptAnswers: [
//         {
//           question: "My ideal home vibe is",
//           answer:
//             "Clean, organized, with plenty of plants and natural light. I love a peaceful space where we can occasionally host small gatherings.",
//         },
//         {
//           question: "On weekends, you'll find me",
//           answer:
//             "Exploring nearby cafes, reading at parks, or catching up on Netflix. I'm pretty low-key but enjoy occasional outings.",
//         },
//         {
//           question: "I usually sleep at",
//           answer:
//             "Around 11pm on weekdays, though I might stay up a bit later on weekends.",
//         },
//       ],
//       photos: ["/api/placeholder/400/500", "/api/placeholder/400/500"],
//       compatibility: 89,
//     },
//     {
//       id: 2,
//       name: "Rahul Patel",
//       age: 26,
//       occupation: "Software Engineer",
//       location: "HSR Layout, Bangalore",
//       livingPreference: "Everyone",
//       lookingFor: "Medium-term Stay",
//       promptAnswers: [
//         {
//           question: "My ideal home vibe is",
//           answer:
//             "Tech-friendly, modern, and clean. I like a chill atmosphere where everyone respects each other's space.",
//         },
//         {
//           question: "I'm known for always",
//           answer:
//             "Fixing things around the house and having the best food delivery recommendations.",
//         },
//         {
//           question: "Guests at home: yay or nay?",
//           answer:
//             "Occasional guests are fine, but I prefer advance notice. Not a fan of frequent parties.",
//         },
//       ],
//       photos: ["/api/placeholder/400/500", "/api/placeholder/400/500"],
//       compatibility: 76,
//     },
//     {
//       id: 3,
//       name: "Ananya Krishnan",
//       age: 23,
//       occupation: "Graphic Designer",
//       location: "Koramangala, Bangalore",
//       livingPreference: "Women",
//       lookingFor: "Long-term Stay",
//       promptAnswers: [
//         {
//           question: "My guilty pleasure is",
//           answer:
//             "Reality TV shows and collecting way too many art supplies that I barely use.",
//         },
//         {
//           question: "I unwind by",
//           answer:
//             "Sketching, taking long walks, or making elaborate meals while listening to podcasts.",
//         },
//         {
//           question: "A green flag in a roommate is",
//           answer:
//             "Someone who communicates openly about issues and respects shared spaces.",
//         },
//       ],
//       photos: ["/api/placeholder/400/500", "/api/placeholder/400/500"],
//       compatibility: 94,
//     },
//   ];

//   const handleSwipe = (direction, profileId) => {
//     // Add profile to swiped users
//     setSwipedUsers([...swipedUsers, { id: profileId, direction }]);

//     // Reset current photo index for next profile
//     setCurrentPhotoIndex(0);

//     // Move to next profile
//     if (currentIndex < roommateProfiles.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       // Reset or show "no more profiles" message
//       console.log("No more profiles to show");
//     }
//   };

//   const handleDecline = () => {
//     if (currentIndex < roommateProfiles.length) {
//       handleSwipe("left", roommateProfiles[currentIndex].id);
//     }
//   };

//   const handleLike = () => {
//     if (currentIndex < roommateProfiles.length) {
//       handleSwipe("right", roommateProfiles[currentIndex].id);
//     }
//   };

//   const changePhoto = (direction) => {
//     if (currentIndex >= roommateProfiles.length) return;

//     const currentProfile = roommateProfiles[currentIndex];
//     const photoCount = currentProfile.photos.length;

//     if (direction === "next") {
//       setCurrentPhotoIndex((currentPhotoIndex + 1) % photoCount);
//     } else {
//       setCurrentPhotoIndex((currentPhotoIndex - 1 + photoCount) % photoCount);
//     }
//   };

//   const currentProfile =
//     currentIndex < roommateProfiles.length
//       ? roommateProfiles[currentIndex]
//       : null;

//   return (
//     <div className="discover-container">
//       <h2 className="discover-title">Find Your Roommate</h2>

//       {currentProfile ? (
//         <div className="card-container">
//           <div className="roommate-card">
//             <div className="photo-carousel">
//               <img
//                 src={currentProfile.photos[currentPhotoIndex]}
//                 alt={`${currentProfile.name}`}
//                 className="profile-photo"
//               />
//               <div className="photo-nav">
//                 {currentProfile.photos.map((_, index) => (
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
//                 {currentProfile.compatibility}% Match
//               </div>
//             </div>

//             <div className="profile-info">
//               <div className="profile-header">
//                 <div className="nam">
//                   {currentProfile.name} , {currentProfile.age}
//                 </div>
//                 <div className="lococcp">
//                   <br></br>
//                   {currentProfile.location}
//                   <br></br>
//                   {currentProfile.occupation}
//                 </div>
//               </div>

//               <div className="preference-tags">
//                 <span className="preference-tag">
//                   Living with: {currentProfile.livingPreference}
//                 </span>
//                 <span className="preference-tag">
//                   {currentProfile.lookingFor}
//                 </span>
//               </div>

//               <div className="prompt-answers">
//                 {currentProfile.promptAnswers.map((prompt, index) => (
//                   <div key={index} className="prompt-item">
//                     <h4>{prompt.question}</h4>
//                     <p>{prompt.answer}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="action-buttons">
//               <button className="decline-button" onClick={handleDecline}>
//                 ✕
//               </button>
//               <button className="like-button" onClick={handleLike}>
//                 ♥
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="no-more-profiles">
//           <h3>No more profiles to show</h3>
//           <p>We're finding more potential roommates for you!</p>
//           <button className="refresh-button">Refresh Discover</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Discover;

// import React, { useState, useEffect } from "react";
// import "./Discover.css";
// import axios from "axios";

// const Discover = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [swipedUsers, setSwipedUsers] = useState([]);
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//   const [roommateProfiles, setRoommateProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch profiles from the API
//   useEffect(() => {
//     const fetchProfiles = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("/api/profile/discover");

//         // If the API returns a single user, wrap it in an array
//         const profiles = Array.isArray(response.data.profiles)
//           ? response.data.profiles
//           : [];
//         console.log("Full response:", response?.data);
//         console.log("Profiles:", response?.data?.profiles);

//         setRoommateProfiles(profiles);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching profiles:", err);
//         setError("Failed to load profiles. Please try again later.");
//         setLoading(false);
//       }
//     };

//     fetchProfiles();
//   }, [response]);

//   const handleSwipe = (direction, profileId) => {
//     // Add profile to swiped users
//     setSwipedUsers([...swipedUsers, { id: profileId, direction }]);

//     // Reset current photo index for next profile
//     setCurrentPhotoIndex(0);

//     // Move to next profile
//     if (currentIndex < roommateProfiles.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       // Reset or show "no more profiles" message
//       console.log("No more profiles to show");
//     }

//     // When all profiles are exhausted, fetch new ones
//     if (currentIndex >= roommateProfiles.length - 1) {
//       fetchMoreProfiles();
//     }
//   };

//   const fetchMoreProfiles = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get("/api/profile/discover");

//       // If the API returns a single user, wrap it in an array
//       const profiles = Array.isArray(response.data.profiles)
//         ? response.data.profiles
//         : [];

//       // Make sure we don't add profiles we've already swiped on
//       const swipedIds = swipedUsers.map((user) => user.id);
//       const filteredNewProfiles = newProfile.filter(
//         (profile) => !swipedIds.includes(profile._id)
//       );

//       if (filteredNewProfiles.length > 0) {
//         setRoommateProfiles(filteredNewProfiles);
//         setCurrentIndex(0);
//       }
//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching more profiles:", err);
//       setError("Failed to load more profiles. Please try again later.");
//       setLoading(false);
//     }
//   };

//   const handleDecline = () => {
//     if (currentIndex < roommateProfiles.length) {
//       handleSwipe("left", roommateProfiles[currentIndex]._id);
//     }
//   };

//   const handleLike = () => {
//     if (currentIndex < roommateProfiles.length) {
//       handleSwipe("right", roommateProfiles[currentIndex]._id);
//     }
//   };

//   const changePhoto = (direction) => {
//     if (currentIndex >= roommateProfiles.length) return;

//     const currentProfile = roommateProfiles[currentIndex];
//     // Handle if photos is undefined or not an array
//     const photos = currentProfile.photos || [];
//     const photoCount = photos.length;

//     if (photoCount === 0) return;

//     if (direction === "next") {
//       setCurrentPhotoIndex((currentPhotoIndex + 1) % photoCount);
//     } else {
//       setCurrentPhotoIndex((currentPhotoIndex - 1 + photoCount) % photoCount);
//     }
//   };

//   // Calculate compatibility score (placeholder implementation)
//   const calculateCompatibility = (profile) => {
//     // Implement your compatibility logic here
//     // For now, returning a random score between 70-95
//     return Math.floor(Math.random() * 26) + 70;
//   };

//   // Current profile with fallback
//   const currentProfile =
//     currentIndex < roommateProfiles.length
//       ? roommateProfiles[currentIndex]
//       : null;

//   if (loading && roommateProfiles.length === 0) {
//     return (
//       <div className="discover-container">
//         <h2 className="discover-title">Find Your Roommate</h2>
//         <div className="loading">Loading profiles...</div>
//       </div>
//     );
//   }

//   if (error && roommateProfiles.length === 0) {
//     return (
//       <div className="discover-container">
//         <h2 className="discover-title">Find Your Roommate</h2>
//         <div className="error">{error}</div>
//         <button
//           className="refresh-button"
//           onClick={() => window.location.reload()}
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="discover-container">
//       <h2 className="discover-title">Find Your Roommate</h2>

//       {currentProfile ? (
//         <div className="card-container">
//           <div className="roommate-card">
//             <div className="photo-carousel">
//               {currentProfile.photos && currentProfile.photos.length > 0 ? (
//                 <img
//                   src={
//                     currentProfile.photos[currentPhotoIndex] ||
//                     "/api/placeholder/400/500"
//                   }
//                   alt={`${currentProfile.name}`}
//                   className="profile-photo"
//                 />
//               ) : (
//                 <img
//                   src="/api/placeholder/400/500"
//                   alt="Profile placeholder"
//                   className="profile-photo"
//                 />
//               )}
//               {currentProfile.photos && currentProfile.photos.length > 1 && (
//                 <>
//                   <div className="photo-nav">
//                     {currentProfile.photos.map((_, index) => (
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
//                 {calculateCompatibility(currentProfile)}% Match
//               </div>
//             </div>

//             <div className="profile-info">
//               <div className="profile-header">
//                 <div className="name">
//                   {currentProfile.name}, {currentProfile.age || "N/A"}
//                 </div>
//                 <div className="lococcp">
//                   <br />
//                   {currentProfile.location || "Location not specified"}
//                   <br />
//                   {currentProfile.occupation || "Occupation not specified"}
//                 </div>
//               </div>

//               <div className="preference-tags">
//                 <span className="preference-tag">
//                   Living with: {currentProfile.livingPreference || "Everyone"}
//                 </span>
//                 <span className="preference-tag">
//                   {currentProfile.lookingFor || "Roommate"}
//                 </span>
//               </div>

//               <div className="prompt-answers">
//                 {currentProfile.promptAnswers &&
//                   currentProfile.promptAnswers.map((prompt, index) => (
//                     <div key={index} className="prompt-item">
//                       <h4>{prompt.question}</h4>
//                       <p>{prompt.answer}</p>
//                     </div>
//                   ))}
//                 {(!currentProfile.promptAnswers ||
//                   currentProfile.promptAnswers.length === 0) && (
//                   <div className="prompt-item">
//                     <p>No additional information provided.</p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="action-buttons">
//               <button className="decline-button" onClick={handleDecline}>
//                 ✕
//               </button>
//               <button className="like-button" onClick={handleLike}>
//                 ♥
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="no-more-profiles">
//           <h3>No more profiles to show</h3>
//           <p>We're finding more potential roommates for you!</p>
//           <button className="refresh-button" onClick={fetchMoreProfiles}>
//             Refresh Discover
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Discover;

// import React, { useState, useEffect } from "react";
// import "./Discover.css";
// import axios from "axios";

// const Discover = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [swipedUsers, setSwipedUsers] = useState([]);
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//   const [roommateProfiles, setRoommateProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch profiles from the API
//   useEffect(() => {
//     const fetchProfiles = async () => {
//       try {
//         setLoading(true);

//         // Get the auth token from localStorage if you're using token-based auth
//         const token = localStorage.getItem("token");

//         // Set up proper authorization headers
//         const config = {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token ? `Bearer ${token}` : "",
//           },
//         };

//         // Make sure to use the full URL if needed
//         const response = await axios.get("/api/profile/discover", config);

//         console.log("API Response:", response.data); // For debugging

//         // Handle the response structure with "profiles" array
//         if (response.data.profiles && Array.isArray(response.data.profiles)) {
//           setRoommateProfiles(response.data.profiles);
//         } else if (Array.isArray(response.data)) {
//           setRoommateProfiles(response.data);
//         } else if (response.data && typeof response.data === "object") {
//           // If a single profile is returned
//           setRoommateProfiles([response.data]);
//         } else {
//           setError("Unexpected data format from API");
//         }

//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching profiles:", err);
//         setError(`Failed to load profiles: ${err.message || "Unknown error"}`);
//         setLoading(false);
//       }
//     };

//     fetchProfiles();
//   }, []);

//   const handleSwipe = (direction, profileId) => {
//     // Add profile to swiped users
//     setSwipedUsers([...swipedUsers, { id: profileId, direction }]);

//     // Reset current photo index for next profile
//     setCurrentPhotoIndex(0);

//     // Move to next profile
//     if (currentIndex < roommateProfiles.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       // Reset or show "no more profiles" message
//       console.log("No more profiles to show");
//     }

//     // When all profiles are exhausted, fetch new ones
//     if (currentIndex >= roommateProfiles.length - 1) {
//       fetchMoreProfiles();
//     }
//   };

//   const fetchMoreProfiles = async () => {
//     try {
//       setLoading(true);

//       // Get the auth token from localStorage
//       const token = localStorage.getItem("token");

//       // Set up proper authorization headers
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: token ? `Bearer ${token}` : "",
//         },
//       };

//       const response = await axios.get("/api/profile/discover", config);

//       let newProfiles = [];
//       // Handle the response structure with "profiles" array
//       if (response.data.profiles && Array.isArray(response.data.profiles)) {
//         newProfiles = response.data.profiles;
//       } else if (Array.isArray(response.data)) {
//         newProfiles = response.data;
//       } else if (response.data && typeof response.data === "object") {
//         // If a single profile is returned
//         newProfiles = [response.data];
//       }

//       // Make sure we don't add profiles we've already swiped on
//       const swipedIds = swipedUsers.map((user) => user.id);
//       const filteredNewProfiles = newProfiles.filter(
//         (profile) => !swipedIds.includes(profile._id)
//       );

//       if (filteredNewProfiles.length > 0) {
//         setRoommateProfiles(filteredNewProfiles);
//         setCurrentIndex(0);
//       }
//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching more profiles:", err);
//       setError(
//         `Failed to load more profiles: ${err.message || "Unknown error"}`
//       );
//       setLoading(false);
//     }
//   };

//   // For debugging purposes
//   const checkAPIEndpoint = async () => {
//     try {
//       // Get the auth token from localStorage
//       const token = localStorage.getItem("token");

//       // Set headers
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: token ? `Bearer ${token}` : "",
//         },
//       };

//       // Try a simple API endpoint to check auth is working
//       const response = await axios.get("/api/users/me", config);
//       console.log("Auth check response:", response.data);

//       setError(null);
//       fetchMoreProfiles();
//     } catch (err) {
//       console.error("Auth check error:", err);
//       setError(
//         `Authentication error: ${err.message}. Please try logging in again.`
//       );
//     }
//   };

//   const handleDecline = () => {
//     if (currentIndex < roommateProfiles.length) {
//       handleSwipe("left", roommateProfiles[currentIndex]._id);
//     }
//   };

//   const handleLike = () => {
//     if (currentIndex < roommateProfiles.length) {
//       handleSwipe("right", roommateProfiles[currentIndex]._id);
//     }
//   };

//   const changePhoto = (direction) => {
//     if (currentIndex >= roommateProfiles.length) return;

//     const currentProfile = roommateProfiles[currentIndex];
//     // Handle if photos is undefined or not an array
//     const photos = currentProfile.photos || [];
//     const photoCount = photos.length;

//     if (photoCount === 0) return;

//     if (direction === "next") {
//       setCurrentPhotoIndex((currentPhotoIndex + 1) % photoCount);
//     } else {
//       setCurrentPhotoIndex((currentPhotoIndex - 1 + photoCount) % photoCount);
//     }
//   };

//   // Calculate compatibility score (placeholder implementation)
//   const calculateCompatibility = (profile) => {
//     // Implement your compatibility logic here
//     // For now, returning a random score between 70-95
//     return Math.floor(Math.random() * 26) + 70;
//   };

//   // Current profile with fallback
//   const currentProfile =
//     currentIndex < roommateProfiles.length
//       ? roommateProfiles[currentIndex]
//       : null;

//   if (loading && roommateProfiles.length === 0) {
//     return (
//       <div className="discover-container">
//         <h2 className="discover-title">Find Your Roommate</h2>
//         <div className="loading">Loading profiles...</div>
//       </div>
//     );
//   }

//   if (error && roommateProfiles.length === 0) {
//     return (
//       <div className="discover-container">
//         <h2 className="discover-title">Find Your Roommate</h2>
//         <div className="error">{error}</div>
//         <button className="refresh-button" onClick={checkAPIEndpoint}>
//           Check Authentication & Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="discover-container">
//       <h2 className="discover-title">Find Your Roommate</h2>

//       {currentProfile ? (
//         <div className="card-container">
//           <div className="roommate-card">
//             <div className="photo-carousel">
//               {currentProfile.photos && currentProfile.photos.length > 0 ? (
//                 <img
//                   src={
//                     currentProfile.photos[currentPhotoIndex] ||
//                     "/api/placeholder/400/500"
//                   }
//                   alt={`${currentProfile.name}`}
//                   className="profile-photo"
//                 />
//               ) : (
//                 <img
//                   src="/api/placeholder/400/500"
//                   alt="Profile placeholder"
//                   className="profile-photo"
//                 />
//               )}
//               {currentProfile.photos && currentProfile.photos.length > 1 && (
//                 <>
//                   <div className="photo-nav">
//                     {currentProfile.photos.map((_, index) => (
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
//                 {calculateCompatibility(currentProfile)}% Match
//               </div>
//             </div>

//             <div className="profile-info">
//               <div className="profile-header">
//                 <div className="name">
//                   {currentProfile.name}, {currentProfile.age || "N/A"}
//                 </div>
//                 <div className="lococcp">
//                   <br />
//                   {currentProfile.area
//                     ? `${currentProfile.area}, ${currentProfile.city}`
//                     : currentProfile.city || "Location not specified"}
//                   <br />
//                   {currentProfile.occupation || "Occupation not specified"}
//                 </div>
//               </div>

//               <div className="preference-tags">
//                 <span className="preference-tag">
//                   Living with:{" "}
//                   {currentProfile.livingWith
//                     ? currentProfile.livingWith.join(", ")
//                     : "Everyone"}
//                 </span>
//                 <span className="preference-tag">
//                   {currentProfile.lookingFor || "Roommate"}
//                 </span>
//               </div>

//               <div className="prompt-answers">
//                 {currentProfile.promptAnswers &&
//                   typeof currentProfile.promptAnswers === "object" &&
//                   Object.entries(currentProfile.promptAnswers).map(
//                     ([promptId, answer], index) => (
//                       <div key={index} className="prompt-item">
//                         <h4>Prompt {promptId}</h4>
//                         <p>{answer}</p>
//                       </div>
//                     )
//                   )}
//                 {(!currentProfile.promptAnswers ||
//                   (typeof currentProfile.promptAnswers === "object" &&
//                     Object.keys(currentProfile.promptAnswers).length ===
//                       0)) && (
//                   <div className="prompt-item">
//                     <p>No additional information provided.</p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="action-buttons">
//               <button className="decline-button" onClick={handleDecline}>
//                 ✕
//               </button>
//               <button className="like-button" onClick={handleLike}>
//                 ♥
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="no-more-profiles">
//           <h3>No more profiles to show</h3>
//           <p>We're finding more potential roommates for you!</p>
//           <button className="refresh-button" onClick={fetchMoreProfiles}>
//             Refresh Discover
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Discover;

// import React, { useState, useEffect } from "react";
// import "./Discover.css";
// import axios from "axios";

// const Discover = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [swipedUsers, setSwipedUsers] = useState([]);
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//   const [roommateProfiles, setRoommateProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [debugInfo, setDebugInfo] = useState("");

//   // Check which API URL format we should use
//   // Create a debugging function to check API URLs
//   const testAPI = async () => {
//     try {
//       // Get the token (if any)
//       const token =
//         localStorage.getItem("token") || localStorage.getItem("authToken");
//       setDebugInfo(`Token exists: ${!!token}`);

//       // Try the direct /api path
//       try {
//         const response = await axios.get(
//           `${window.location.origin}/api/profile/discover`,
//           {
//             headers: {
//               Authorization: token ? `Bearer ${token}` : "",
//               Accept: "application/json",
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         setDebugInfo((prev) => `${prev}\nDirect API call succeeded`);

//         if (response.data) {
//           setDebugInfo(
//             (prev) =>
//               `${prev}\nData: ${JSON.stringify(response.data).substring(
//                 0,
//                 100
//               )}...`
//           );
//           if (response.data.profiles && Array.isArray(response.data.profiles)) {
//             setRoommateProfiles(response.data.profiles);
//             setError(null);
//             setLoading(false);
//             return;
//           }
//         }
//       } catch (directErr) {
//         setDebugInfo(
//           (prev) => `${prev}\nDirect API error: ${directErr.message}`
//         );
//       }

//       // Try the server URL if available
//       const serverUrl =
//         process.env.REACT_APP_API_URL || "http://localhost:5000";
//       try {
//         const response = await axios.get(`${serverUrl}/api/profile/discover`, {
//           headers: {
//             Authorization: token ? `Bearer ${token}` : "",
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//         });
//         setDebugInfo((prev) => `${prev}\nServer URL API call succeeded`);

//         if (response.data) {
//           setDebugInfo(
//             (prev) =>
//               `${prev}\nData: ${JSON.stringify(response.data).substring(
//                 0,
//                 100
//               )}...`
//           );
//           if (response.data.profiles && Array.isArray(response.data.profiles)) {
//             setRoommateProfiles(response.data.profiles);
//             setError(null);
//             setLoading(false);
//             return;
//           }
//         }
//       } catch (serverErr) {
//         setDebugInfo(
//           (prev) => `${prev}\nServer URL error: ${serverErr.message}`
//         );
//       }

//       // If we got here, all attempts failed
//       setError("Could not connect to API. Check console for details.");
//       setLoading(false);
//     } catch (err) {
//       setDebugInfo((prev) => `${prev}\nGeneral error: ${err.message}`);
//       setError(`API testing failed: ${err.message}`);
//     }
//   };

//   // Determine which API URL to use
//   const getApiUrl = () => {
//     // Check if there's a configured API URL in environment variables
//     const apiBaseUrl = process.env.REACT_APP_API_URL || "";
//     if (apiBaseUrl) {
//       // Use the configured URL
//       return `${apiBaseUrl}/api/profile/discover`;
//     } else {
//       // Use the current origin (for development with proxying)
//       return `/api/profile/discover`;
//     }
//   };

//   // Fetch profiles from the API
//   useEffect(() => {
//     const fetchProfiles = async () => {
//       try {
//         setLoading(true);

//         // Get the auth token from localStorage or sessionStorage
//         const token =
//           localStorage.getItem("token") ||
//           localStorage.getItem("authToken") ||
//           sessionStorage.getItem("token") ||
//           sessionStorage.getItem("authToken");

//         // Make sure we have a token
//         if (!token) {
//           console.warn("No authentication token found");
//         }

//         // Set up proper authorization headers
//         const config = {
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//             Authorization: token ? `Bearer ${token}` : "",
//           },
//         };

//         // Use the API URL based on our environment
//         const apiUrl = getApiUrl();
//         console.log("Using API URL:", apiUrl);

//         // Make the request
//         const response = await axios.get(apiUrl, config);

//         console.log("API Response:", response.data); // For debugging

//         // Handle the response structure with "profiles" array
//         if (response.data.profiles && Array.isArray(response.data.profiles)) {
//           setRoommateProfiles(response.data.profiles);
//         } else if (Array.isArray(response.data)) {
//           setRoommateProfiles(response.data);
//         } else if (response.data && typeof response.data === "object") {
//           // If a single profile is returned
//           setRoommateProfiles([response.data]);
//         } else {
//           setError("Unexpected data format from API");
//         }

//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching profiles:", err);
//         setError(`Failed to load profiles: ${err.message || "Unknown error"}`);
//         setLoading(false);
//       }
//     };

//     fetchProfiles();
//   }, []);

//   const handleSwipe = (direction, profileId) => {
//     // Add profile to swiped users
//     setSwipedUsers([...swipedUsers, { id: profileId, direction }]);

//     // Reset current photo index for next profile
//     setCurrentPhotoIndex(0);

//     // Move to next profile
//     if (currentIndex < roommateProfiles.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       // Reset or show "no more profiles" message
//       console.log("No more profiles to show");
//     }

//     // When all profiles are exhausted, fetch new ones
//     if (currentIndex >= roommateProfiles.length - 1) {
//       fetchMoreProfiles();
//     }
//   };

//   const fetchMoreProfiles = async () => {
//     try {
//       setLoading(true);

//       // Get the auth token from localStorage or sessionStorage
//       const token =
//         localStorage.getItem("token") ||
//         localStorage.getItem("authToken") ||
//         sessionStorage.getItem("token") ||
//         sessionStorage.getItem("authToken");

//       // Set up proper authorization headers
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           Authorization: token ? `Bearer ${token}` : "",
//         },
//       };

//       // Use the API URL based on our environment
//       const apiUrl = getApiUrl();
//       const response = await axios.get(apiUrl, config);

//       let newProfiles = [];
//       // Handle the response structure with "profiles" array
//       if (response.data.profiles && Array.isArray(response.data.profiles)) {
//         newProfiles = response.data.profiles;
//       } else if (Array.isArray(response.data)) {
//         newProfiles = response.data;
//       } else if (response.data && typeof response.data === "object") {
//         // If a single profile is returned
//         newProfiles = [response.data];
//       }

//       // Make sure we don't add profiles we've already swiped on
//       const swipedIds = swipedUsers.map((user) => user.id);
//       const filteredNewProfiles = newProfiles.filter(
//         (profile) => !swipedIds.includes(profile._id)
//       );

//       if (filteredNewProfiles.length > 0) {
//         setRoommateProfiles(filteredNewProfiles);
//         setCurrentIndex(0);
//       }
//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching more profiles:", err);
//       setError(
//         `Failed to load more profiles: ${err.message || "Unknown error"}`
//       );
//       setLoading(false);
//     }
//   };

//   const handleDecline = () => {
//     if (currentIndex < roommateProfiles.length) {
//       handleSwipe("left", roommateProfiles[currentIndex]._id);
//     }
//   };

//   const handleLike = () => {
//     if (currentIndex < roommateProfiles.length) {
//       handleSwipe("right", roommateProfiles[currentIndex]._id);
//     }
//   };

//   const changePhoto = (direction) => {
//     if (currentIndex >= roommateProfiles.length) return;

//     const currentProfile = roommateProfiles[currentIndex];
//     // Handle if photos is undefined or not an array
//     const photos = currentProfile.photos || [];
//     const photoCount = photos.length;

//     if (photoCount === 0) return;

//     if (direction === "next") {
//       setCurrentPhotoIndex((currentPhotoIndex + 1) % photoCount);
//     } else {
//       setCurrentPhotoIndex((currentPhotoIndex - 1 + photoCount) % photoCount);
//     }
//   };

//   // Calculate compatibility score (placeholder implementation)
//   const calculateCompatibility = (profile) => {
//     // Implement your compatibility logic here
//     // For now, returning a random score between 70-95
//     return Math.floor(Math.random() * 26) + 70;
//   };

//   // Current profile with fallback
//   const currentProfile =
//     currentIndex < roommateProfiles.length
//       ? roommateProfiles[currentIndex]
//       : null;

//   if (loading && roommateProfiles.length === 0) {
//     return (
//       <div className="discover-container">
//         <h2 className="discover-title">Find Your Roommate</h2>
//         <div className="loading">Loading profiles...</div>
//       </div>
//     );
//   }

//   if (error && roommateProfiles.length === 0) {
//     return (
//       <div className="discover-container">
//         <h2 className="discover-title">Find Your Roommate</h2>
//         <div className="error">{error}</div>
//         <button className="refresh-button" onClick={testAPI}>
//           Test API Connection
//         </button>
//         {debugInfo && (
//           <div className="debug-info">
//             <h4>Debug Information:</h4>
//             <pre>{debugInfo}</pre>
//           </div>
//         )}
//       </div>
//     );
//   }

//   // Use hardcoded data if API fails
//   const useHardcodedData = () => {
//     const hardcodedProfiles = [
//       {
//         _id: "1",
//         name: "Priya Sharma",
//         age: 24,
//         occupation: "Marketing Specialist",
//         city: "Bangalore",
//         area: "Indiranagar",
//         livingWith: ["Women"],
//         lookingFor: "Long-term Stay",
//         promptAnswers: {
//           prompt1: "Clean, organized, with plenty of plants and natural light.",
//           prompt2:
//             "Exploring nearby cafes, reading at parks, or catching up on Netflix.",
//           prompt3:
//             "Around 11pm on weekdays, though I might stay up a bit later on weekends.",
//         },
//         photos: ["/api/placeholder/400/500", "/api/placeholder/400/500"],
//       },
//       {
//         _id: "2",
//         name: "Rahul Patel",
//         age: 26,
//         occupation: "Software Engineer",
//         city: "Bangalore",
//         area: "HSR Layout",
//         livingWith: ["Everyone"],
//         lookingFor: "Medium-term Stay",
//         promptAnswers: {
//           prompt1: "Tech-friendly, modern, and clean.",
//           prompt2:
//             "Fixing things around the house and having the best food delivery recommendations.",
//           prompt3: "Occasional guests are fine, but I prefer advance notice.",
//         },
//         photos: ["/api/placeholder/400/500", "/api/placeholder/400/500"],
//       },
//     ];

//     setRoommateProfiles(hardcodedProfiles);
//     setCurrentIndex(0);
//     setError(null);
//     setLoading(false);
//   };

//   return (
//     <div className="discover-container">
//       <h2 className="discover-title">Find Your Roommate</h2>

//       {error && roommateProfiles.length === 0 && (
//         <button onClick={useHardcodedData} className="backup-button">
//           Use Sample Data Instead
//         </button>
//       )}

//       {currentProfile ? (
//         <div className="card-container">
//           <div className="roommate-card">
//             <div className="photo-carousel">
//               {currentProfile.photos && currentProfile.photos.length > 0 ? (
//                 <img
//                   src={
//                     currentProfile.photos[currentPhotoIndex] ||
//                     "/api/placeholder/400/500"
//                   }
//                   alt={`${currentProfile.name}`}
//                   className="profile-photo"
//                 />
//               ) : (
//                 <img
//                   src="/api/placeholder/400/500"
//                   alt="Profile placeholder"
//                   className="profile-photo"
//                 />
//               )}
//               {currentProfile.photos && currentProfile.photos.length > 1 && (
//                 <>
//                   <div className="photo-nav">
//                     {currentProfile.photos.map((_, index) => (
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
//                 {calculateCompatibility(currentProfile)}% Match
//               </div>
//             </div>

//             <div className="profile-info">
//               <div className="profile-header">
//                 <div className="name">
//                   {currentProfile.name}, {currentProfile.age || "N/A"}
//                 </div>
//                 <div className="lococcp">
//                   <br />
//                   {currentProfile.area
//                     ? `${currentProfile.area}, ${currentProfile.city}`
//                     : currentProfile.city || "Location not specified"}
//                   <br />
//                   {currentProfile.occupation || "Occupation not specified"}
//                 </div>
//               </div>

//               <div className="preference-tags">
//                 <span className="preference-tag">
//                   Living with:{" "}
//                   {currentProfile.livingWith
//                     ? currentProfile.livingWith.join(", ")
//                     : "Everyone"}
//                 </span>
//                 <span className="preference-tag">
//                   {currentProfile.lookingFor || "Roommate"}
//                 </span>
//               </div>

//               <div className="prompt-answers">
//                 {currentProfile.promptAnswers &&
//                   typeof currentProfile.promptAnswers === "object" &&
//                   Object.entries(currentProfile.promptAnswers).map(
//                     ([promptId, answer], index) => (
//                       <div key={index} className="prompt-item">
//                         <h4>Prompt {promptId}</h4>
//                         <p>{answer}</p>
//                       </div>
//                     )
//                   )}
//                 {(!currentProfile.promptAnswers ||
//                   (typeof currentProfile.promptAnswers === "object" &&
//                     Object.keys(currentProfile.promptAnswers).length ===
//                       0)) && (
//                   <div className="prompt-item">
//                     <p>No additional information provided.</p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="action-buttons">
//               <button className="decline-button" onClick={handleDecline}>
//                 ✕
//               </button>
//               <button className="like-button" onClick={handleLike}>
//                 ♥
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="no-more-profiles">
//           <h3>No more profiles to show</h3>
//           <p>We're finding more potential roommates for you!</p>
//           <button className="refresh-button" onClick={fetchMoreProfiles}>
//             Refresh Discover
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Discover;

// import React, { useState, useEffect } from "react";
// import "./Discover.css";
// import axios from "axios";

// const Discover = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [swipedUsers, setSwipedUsers] = useState([]);
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//   const [roommateProfiles, setRoommateProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch profiles from the API
//   const fetchProfiles = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get("/api/profile/discover");
//       const profiles = Array.isArray(response.data.profiles)
//         ? response.data.profiles
//         : [];

//       console.log("Full response:", response?.data);
//       console.log("Profiles:", response?.data?.profiles);

//       setRoommateProfiles(profiles);
//       setCurrentIndex(0);
//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching profiles:", err);
//       setError("Failed to load profiles. Please try again later.");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProfiles();
//   }, []);

//   const handleSwipe = (direction, profileId) => {
//     setSwipedUsers((prev) => [...prev, { id: profileId, direction }]);
//     setCurrentPhotoIndex(0);

//     if (currentIndex < roommateProfiles.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       console.log("No more profiles to show");
//       fetchMoreProfiles();
//     }
//   };

//   const fetchMoreProfiles = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get("/api/profile/discover");
//       const newProfiles = Array.isArray(response.data.profiles)
//         ? response.data.profiles
//         : [];

//       const swipedIds = swipedUsers.map((user) => user.id);
//       const filteredNewProfiles = newProfiles.filter(
//         (profile) => !swipedIds.includes(profile._id)
//       );

//       if (filteredNewProfiles.length > 0) {
//         setRoommateProfiles(filteredNewProfiles);
//         setCurrentIndex(0);
//       }
//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching more profiles:", err);
//       setError("Failed to load more profiles. Please try again later.");
//       setLoading(false);
//     }
//   };

//   const handleDecline = () => {
//     if (currentIndex < roommateProfiles.length) {
//       handleSwipe("left", roommateProfiles[currentIndex]._id);
//     }
//   };

//   const handleLike = () => {
//     if (currentIndex < roommateProfiles.length) {
//       handleSwipe("right", roommateProfiles[currentIndex]._id);
//     }
//   };

//   const changePhoto = (direction) => {
//     if (currentIndex >= roommateProfiles.length) return;

//     const currentProfile = roommateProfiles[currentIndex];
//     const photos = currentProfile.photos || [];
//     const photoCount = photos.length;

//     if (photoCount === 0) return;

//     if (direction === "next") {
//       setCurrentPhotoIndex((currentPhotoIndex + 1) % photoCount);
//     } else {
//       setCurrentPhotoIndex((currentPhotoIndex - 1 + photoCount) % photoCount);
//     }
//   };

//   const calculateCompatibility = (profile) => {
//     return Math.floor(Math.random() * 26) + 70;
//   };

//   const currentProfile =
//     currentIndex < roommateProfiles.length
//       ? roommateProfiles[currentIndex]
//       : null;

//   if (loading && roommateProfiles.length === 0) {
//     return (
//       <div className="discover-container">
//         <h2 className="discover-title">Find Your Roommate</h2>
//         <div className="loading">Loading profiles...</div>
//       </div>
//     );
//   }

//   if (error && roommateProfiles.length === 0) {
//     return (
//       <div className="discover-container">
//         <h2 className="discover-title">Find Your Roommate</h2>
//         <div className="error">{error}</div>
//         <button
//           className="refresh-button"
//           onClick={() => window.location.reload()}
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="discover-container">
//       <h2 className="discover-title">Find Your Roommate</h2>

//       {currentProfile ? (
//         <div className="card-container">
//           <div className="roommate-card">
//             <div className="photo-carousel">
//               {currentProfile.photos?.length > 0 ? (
//                 <img
//                   src={
//                     currentProfile.photos[currentPhotoIndex] ||
//                     "/api/placeholder/400/500"
//                   }
//                   alt={`${currentProfile.name}`}
//                   className="profile-photo"
//                 />
//               ) : (
//                 <img
//                   src="/api/placeholder/400/500"
//                   alt="Profile placeholder"
//                   className="profile-photo"
//                 />
//               )}
//               {currentProfile.photos?.length > 1 && (
//                 <>
//                   <div className="photo-nav">
//                     {currentProfile.photos.map((_, index) => (
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
//                 {calculateCompatibility(currentProfile)}% Match
//               </div>
//             </div>

//             <div className="profile-info">
//               <div className="profile-header">
//                 <div className="name">
//                   {currentProfile.name}, {currentProfile.age || "N/A"}
//                 </div>
//                 <div className="lococcp">
//                   <br />
//                   {currentProfile.location || "Location not specified"}
//                   <br />
//                   {currentProfile.occupation || "Occupation not specified"}
//                 </div>
//               </div>

//               <div className="preference-tags">
//                 <span className="preference-tag">
//                   Living with: {currentProfile.livingPreference || "Everyone"}
//                 </span>
//                 <span className="preference-tag">
//                   {currentProfile.lookingFor || "Roommate"}
//                 </span>
//               </div>

//               <div className="prompt-answers">
//                 {currentProfile.promptAnswers?.length > 0 ? (
//                   currentProfile.promptAnswers.map((prompt, index) => (
//                     <div key={index} className="prompt-item">
//                       <h4>{prompt.question}</h4>
//                       <p>{prompt.answer}</p>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="prompt-item">
//                     <p>No additional information provided.</p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="action-buttons">
//               <button className="decline-button" onClick={handleDecline}>
//                 ✕
//               </button>
//               <button className="like-button" onClick={handleLike}>
//                 ♥
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="no-more-profiles">
//           <h3>No more profiles to show</h3>
//           <p>We're finding more potential roommates for you!</p>
//           <button className="refresh-button" onClick={fetchMoreProfiles}>
//             Refresh Discover
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Discover;

// import React, { useState, useEffect } from "react";
// import "./Discover.css";
// import axios from "axios";

// const Discover = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [swipedUsers, setSwipedUsers] = useState([]);
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//   const [roommateProfiles, setRoommateProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchProfiles = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       if (!token) {
//         throw new Error("No authentication token found");
//       }
//       const response = await axios.get(
//         "http://localhost:5001/api/profile/discover",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("Full response:", response?.data);

//       const profiles = Array.isArray(response.data?.profiles)
//         ? response.data.profiles
//         : [];

//       console.log("Full response:", response?.data);
//       console.log("Profiles:", profiles);

//       setRoommateProfiles(profiles);
//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching profiles:", err);
//       setError("Failed to load profiles. Please try again later.");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProfiles();
//   }, []);

//   const handleSwipe = (direction, profileId) => {
//     setSwipedUsers([...swipedUsers, { id: profileId, direction }]);
//     setCurrentPhotoIndex(0);

//     if (currentIndex < roommateProfiles.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       console.log("No more profiles to show");
//       fetchMoreProfiles();
//     }
//   };

//   const fetchMoreProfiles = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get("/api/profile/discover");

//       const profiles = Array.isArray(response.data?.profiles)
//         ? response.data.profiles
//         : [];

//       const swipedIds = swipedUsers.map((user) => user.id);
//       const filteredNewProfiles = profiles.filter(
//         (profile) => !swipedIds.includes(profile._id)
//       );

//       if (filteredNewProfiles.length > 0) {
//         setRoommateProfiles(filteredNewProfiles);
//         setCurrentIndex(0);
//       }

//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching more profiles:", err);
//       setError("Failed to load more profiles. Please try again later.");
//       setLoading(false);
//     }
//   };
//   const getPromptQuestion = (promptKey) => {
//     const promptsList = [
//       {
//         id: "0",
//         name: "About Me",
//         questions: [
//           { id: "0", question: "My guilty pleasure is" },
//           { id: "1", question: "On weekends, you'll find me" },
//           { id: "2", question: "A fun fact about me" },
//           { id: "3", question: "I'm known for always" },
//           { id: "4", question: "One thing I can't live without" },
//           { id: "5", question: "My 3 core values are" },
//           { id: "6", question: "Biggest red flag I avoid" },
//         ],
//       },
//       {
//         id: "1",
//         name: "Living Style",
//         questions: [
//           { id: "0", question: "My ideal home vibe is" },
//           { id: "1", question: "I like to keep my space" },
//           { id: "2", question: "I usually sleep at" },
//           { id: "3", question: "Guests at home: yay or nay?" },
//           { id: "4", question: "Noise level I'm comfortable with" },
//           { id: "5", question: "I share food if..." },
//           { id: "6", question: "My go-to comfort item at home" },
//         ],
//       },
//       {
//         id: "2",
//         name: "Self Care",
//         questions: [
//           { id: "0", question: "I unwind by" },
//           { id: "1", question: "My boundaries include" },
//           { id: "2", question: "I feel supported when" },
//           { id: "3", question: "To me, self-care means" },
//           { id: "4", question: "I handle stress by" },
//           { id: "5", question: "Mental health check-ins are" },
//         ],
//       },
//       {
//         id: "3",
//         name: "Roommate Vibes",
//         questions: [
//           { id: "0", question: "A green flag in a roommate is" },
//           { id: "1", question: "A dealbreaker for me is" },
//           { id: "2", question: "I'd love it if my roommate and I..." },
//           { id: "3", question: "I prefer roommates who are" },
//           { id: "4", question: "My communication style is" },
//           { id: "5", question: "Conflict resolution: my go-to move is" },
//         ],
//       },
//       {
//         id: "4",
//         name: "Dream Home",
//         questions: [
//           { id: "0", question: "My dream corner in our home would have" },
//           { id: "1", question: "A must-have in our apartment is" },
//           { id: "2", question: "The vibe I'm manifesting for our place" },
//           { id: "3", question: "A home tradition I'd love to start" },
//           { id: "4", question: "If I could design one wall, it'd have" },
//         ],
//       },
//     ];

//     if (!promptKey) return null;
//     const [promptId, questionId] = promptKey.split("-");
//     const promptCategory = promptsList.find((p) => p.id === promptId);
//     if (!promptCategory) return null;
//     const question = promptCategory.questions.find((q) => q.id === questionId);
//     return question ? question.question : null;
//   };

//   const handleDecline = () => {
//     if (currentIndex < roommateProfiles.length) {
//       handleSwipe("left", roommateProfiles[currentIndex]._id);
//     }
//   };

//   const handleLike = () => {
//     if (currentIndex < roommateProfiles.length) {
//       handleSwipe("right", roommateProfiles[currentIndex]._id);
//     }
//   };

//   const changePhoto = (direction) => {
//     if (currentIndex >= roommateProfiles.length) return;

//     const currentProfile = roommateProfiles[currentIndex];
//     const photos = currentProfile.photos || [];
//     const photoCount = photos.length;

//     if (photoCount === 0) return;

//     if (direction === "next") {
//       setCurrentPhotoIndex((currentPhotoIndex + 1) % photoCount);
//     } else {
//       setCurrentPhotoIndex((currentPhotoIndex - 1 + photoCount) % photoCount);
//     }
//   };

//   const calculateCompatibility = (profile) => {
//     return Math.floor(Math.random() * 26) + 70;
//   };

//   const currentProfile =
//     currentIndex < roommateProfiles.length
//       ? roommateProfiles[currentIndex]
//       : null;

//   if (loading && roommateProfiles.length === 0) {
//     return (
//       <div className="discover-container">
//         <h2 className="discover-title">Find Your Roommate</h2>
//         <div className="loading">Loading profiles...</div>
//       </div>
//     );
//   }

//   if (error && roommateProfiles.length === 0) {
//     return (
//       <div className="discover-container">
//         <h2 className="discover-title">Find Your Roommate</h2>
//         <div className="error">{error}</div>
//         <button
//           className="refresh-button"
//           onClick={() => window.location.reload()}
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="discover-container">
//       <h2 className="discover-title">Find Your Roommate</h2>

//       {currentProfile ? (
//         <div className="card-container">
//           <div className="roommate-card">
//             <div className="photo-carousel">
//               {currentProfile.photos && currentProfile.photos.length > 0 ? (
//                 <img
//                   src={
//                     currentProfile.photos[currentPhotoIndex] ||
//                     "/api/placeholder/400/500"
//                   }
//                   alt={`${currentProfile.name}`}
//                   className="profile-photo"
//                 />
//               ) : (
//                 <img
//                   src="/api/placeholder/400/500"
//                   alt="Profile placeholder"
//                   className="profile-photo"
//                 />
//               )}
//               {currentProfile.photos && currentProfile.photos.length > 1 && (
//                 <>
//                   <div className="photo-nav">
//                     {currentProfile.photos.map((_, index) => (
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
//                 {calculateCompatibility(currentProfile)}% Match
//               </div>
//             </div>

//             <div className="profile-info">
//               <div className="profile-header">
//                 <div className="nam">
//                   {currentProfile.name}, {currentProfile.age || "N/A"}
//                 </div>
//                 <div className="lococcp">
//                   <br />
//                   {currentProfile.city}, {currentProfile.area}
//                   <br />
//                   {currentProfile.occupation || "Occupation not specified"}
//                 </div>
//               </div>

//               <div className="preference-tags">
//                 <span className="preference-tag">
//                   Living with: {currentProfile.livingPreference || "Everyone"}
//                 </span>
//                 <span className="preference-tag">
//                   Looking For:{currentProfile.lookingFor || "Roommate"}
//                 </span>
//               </div>

//               {/* <div className="prompt-answers">
//                 {currentProfile.promptAnswers &&
//                   currentProfile.promptAnswers.map((prompt, index) => (
//                     <div key={index} className="prompt-item">
//                       <h4>{prompt.question}</h4>
//                       <p>{prompt.answer}</p>
//                     </div>
//                   ))}
//                 {(!currentProfile.promptAnswers ||
//                   currentProfile.promptAnswers.length === 0) && (
//                   <div className="prompt-item">
//                     <p>No additional information provided.</p>
//                   </div>
//                 )}
//               </div> */}
//               {currentProfile.promptAnswers &&
//                 Object.keys(currentProfile.promptAnswers).length > 0 && (
//                   <>
//                     <h2 className="section-title">About Me</h2>
//                     <div className="prompt-answers">
//                       {Object.entries(currentProfile.promptAnswers).map(
//                         ([promptKey, answer]) => {
//                           const question = getPromptQuestion(promptKey);
//                           return (
//                             <div key={promptKey} className="prompt-answer-card">
//                               <h3 className="prompt-question">{question}</h3>
//                               <p className="prompt-answer">{answer}</p>
//                             </div>
//                           );
//                         }
//                       )}
//                     </div>
//                   </>
//                 )}
//             </div>

//             <div className="action-buttons">
//               <button className="decline-button" onClick={handleDecline}>
//                 ✕
//               </button>
//               <button className="like-button" onClick={handleLike}>
//                 ♥
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="no-more-profiles">
//           <h3>No more profiles to show</h3>
//           <p>We're finding more potential roommates for you!</p>
//           <button className="refresh-button" onClick={fetchMoreProfiles}>
//             Refresh Discover
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Discover;

// import React, { useState, useEffect } from "react";
// import "./Discover.css";
// import axios from "axios";

// const Discover = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [swipedUsers, setSwipedUsers] = useState([]);
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//   const [roommateProfiles, setRoommateProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchProfiles = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       if (!token) {
//         throw new Error("No authentication token found");
//       }
//       const response = await axios.get(
//         "http://localhost:5001/api/profile/discover",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("Full response:", response?.data);

//       const profiles = Array.isArray(response.data?.profiles)
//         ? response.data.profiles
//         : [];

//       console.log("Full response:", response?.data);
//       console.log("Profiles:", profiles);

//       setRoommateProfiles(profiles);
//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching profiles:", err);
//       setError("Failed to load profiles. Please try again later.");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProfiles();
//   }, []);

//   const handleSwipe = (direction, profileId) => {
//     setSwipedUsers([...swipedUsers, { id: profileId, direction }]);
//     setCurrentPhotoIndex(0);

//     if (currentIndex < roommateProfiles.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       console.log("No more profiles to show");
//       fetchMoreProfiles();
//     }
//   };

//   const fetchMoreProfiles = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get("/api/profile/discover");

//       const profiles = Array.isArray(response.data?.profiles)
//         ? response.data.profiles
//         : [];

//       const swipedIds = swipedUsers.map((user) => user.id);
//       const filteredNewProfiles = profiles.filter(
//         (profile) => !swipedIds.includes(profile._id)
//       );

//       if (filteredNewProfiles.length > 0) {
//         setRoommateProfiles(filteredNewProfiles);
//         setCurrentIndex(0);
//       }

//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching more profiles:", err);
//       setError("Failed to load more profiles. Please try again later.");
//       setLoading(false);
//     }
//   };
//   const getPromptQuestion = (promptKey) => {
//     const promptsList = [
//       {
//         id: "0",
//         name: "About Me",
//         questions: [
//           { id: "0", question: "My guilty pleasure is" },
//           { id: "1", question: "On weekends, you'll find me" },
//           { id: "2", question: "A fun fact about me" },
//           { id: "3", question: "I'm known for always" },
//           { id: "4", question: "One thing I can't live without" },
//           { id: "5", question: "My 3 core values are" },
//           { id: "6", question: "Biggest red flag I avoid" },
//         ],
//       },
//       {
//         id: "1",
//         name: "Living Style",
//         questions: [
//           { id: "0", question: "My ideal home vibe is" },
//           { id: "1", question: "I like to keep my space" },
//           { id: "2", question: "I usually sleep at" },
//           { id: "3", question: "Guests at home: yay or nay?" },
//           { id: "4", question: "Noise level I'm comfortable with" },
//           { id: "5", question: "I share food if..." },
//           { id: "6", question: "My go-to comfort item at home" },
//         ],
//       },
//       {
//         id: "2",
//         name: "Self Care",
//         questions: [
//           { id: "0", question: "I unwind by" },
//           { id: "1", question: "My boundaries include" },
//           { id: "2", question: "I feel supported when" },
//           { id: "3", question: "To me, self-care means" },
//           { id: "4", question: "I handle stress by" },
//           { id: "5", question: "Mental health check-ins are" },
//         ],
//       },
//       {
//         id: "3",
//         name: "Roommate Vibes",
//         questions: [
//           { id: "0", question: "A green flag in a roommate is" },
//           { id: "1", question: "A dealbreaker for me is" },
//           { id: "2", question: "I'd love it if my roommate and I..." },
//           { id: "3", question: "I prefer roommates who are" },
//           { id: "4", question: "My communication style is" },
//           { id: "5", question: "Conflict resolution: my go-to move is" },
//         ],
//       },
//       {
//         id: "4",
//         name: "Dream Home",
//         questions: [
//           { id: "0", question: "My dream corner in our home would have" },
//           { id: "1", question: "A must-have in our apartment is" },
//           { id: "2", question: "The vibe I'm manifesting for our place" },
//           { id: "3", question: "A home tradition I'd love to start" },
//           { id: "4", question: "If I could design one wall, it'd have" },
//         ],
//       },
//     ];

//     if (!promptKey) return null;
//     const [promptId, questionId] = promptKey.split("-");
//     const promptCategory = promptsList.find((p) => p.id === promptId);
//     if (!promptCategory) return null;
//     const question = promptCategory.questions.find((q) => q.id === questionId);
//     return question ? question.question : null;
//   };

//   const handleDecline = () => {
//     if (currentIndex < roommateProfiles.length) {
//       handleSwipe("left", roommateProfiles[currentIndex]._id);
//     }
//   };

//   const handleLike = () => {
//     if (currentIndex < roommateProfiles.length) {
//       handleSwipe("right", roommateProfiles[currentIndex]._id);
//     }
//   };

//   const changePhoto = (direction) => {
//     if (currentIndex >= roommateProfiles.length) return;

//     const currentProfile = roommateProfiles[currentIndex];
//     const photos = currentProfile.photos || [];
//     const photoCount = photos.length;

//     if (photoCount === 0) return;

//     if (direction === "next") {
//       setCurrentPhotoIndex((currentPhotoIndex + 1) % photoCount);
//     } else {
//       setCurrentPhotoIndex((currentPhotoIndex - 1 + photoCount) % photoCount);
//     }
//   };

//   const calculateCompatibility = (profile) => {
//     return Math.floor(Math.random() * 26) + 70;
//   };

//   const currentProfile =
//     currentIndex < roommateProfiles.length
//       ? roommateProfiles[currentIndex]
//       : null;

//   if (loading && roommateProfiles.length === 0) {
//     return (
//       <div className="discover-container">
//         <h2 className="discover-title">Find Your Roommate</h2>
//         <div className="loading">Loading profiles...</div>
//       </div>
//     );
//   }

//   if (error && roommateProfiles.length === 0) {
//     return (
//       <div className="discover-container">
//         <h2 className="discover-title">Find Your Roommate</h2>
//         <div className="error">{error}</div>
//         <button
//           className="refresh-button"
//           onClick={() => window.location.reload()}
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="discover-container">
//       <h2 className="discover-title">Find Your Roommate</h2>

//       {currentProfile ? (
//         <div className="card-container">
//           <div className="roommate-card">
//             <div className="photo-carousel">
//               {currentProfile.photos && currentProfile.photos.length > 0 ? (
//                 <img
//                   src={
//                     currentProfile.photos[currentPhotoIndex] ||
//                     "/api/placeholder/400/500"
//                   }
//                   alt={`${currentProfile.name}`}
//                   className="profile-photo"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = "/api/placeholder/400/500";
//                   }}
//                 />
//               ) : (
//                 <img
//                   src="/api/placeholder/400/500"
//                   alt="Profile placeholder"
//                   className="profile-photo"
//                 />
//               )}
//               {currentProfile.photos && currentProfile.photos.length > 1 && (
//                 <>
//                   <div className="photo-nav">
//                     {currentProfile.photos.map((_, index) => (
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
//                 {calculateCompatibility(currentProfile)}% Match
//               </div>
//             </div>

//             <div className="profile-info">
//               <div className="profile-header">
//                 <div className="nam">
//                   {currentProfile.name}, {currentProfile.age || "N/A"}
//                 </div>
//                 <div className="lococcp">
//                   <br />
//                   {currentProfile.city}, {currentProfile.area}
//                   <br />
//                   {currentProfile.occupation || "Occupation not specified"}
//                 </div>
//               </div>

//               <div className="preference-section">
//                 <h3 className="preference-header">Living Preferences</h3>
//                 <div className="preference-tags">
//                   <span className="preference-tag">
//                     {currentProfile.livingPreference || "Everyone"}
//                   </span>
//                 </div>
//               </div>

//               <div className="preference-section">
//                 <h3 className="preference-header">Looking For</h3>
//                 <div className="preference-tags">
//                   <span className="preference-tag">
//                     {currentProfile.lookingFor || "Roommate"}
//                   </span>
//                 </div>
//               </div>

//               {currentProfile.promptAnswers &&
//                 Object.keys(currentProfile.promptAnswers).length > 0 && (
//                   <>
//                     <h3 className="section-title">About Me</h3>
//                     <div className="prompt-answers">
//                       {Object.entries(currentProfile.promptAnswers).map(
//                         ([promptKey, answer]) => {
//                           const question = getPromptQuestion(promptKey);
//                           return (
//                             <div key={promptKey} className="prompt-answer-card">
//                               <h4 className="prompt-question">{question}</h4>
//                               <p className="prompt-answer">{answer}</p>
//                             </div>
//                           );
//                         }
//                       )}
//                     </div>
//                   </>
//                 )}
//             </div>

//             <div className="action-buttons">
//               <button className="decline-button" onClick={handleDecline}>
//                 ✕
//               </button>
//               <button className="like-button" onClick={handleLike}>
//                 ♥
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="no-more-profiles">
//           <h3>No more profiles to show</h3>
//           <p>We're finding more potential roommates for you!</p>
//           <button className="refresh-button" onClick={fetchMoreProfiles}>
//             Refresh Discover
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Discover;

// import React, { useState, useEffect } from "react";
// import "./Discover.css";
// import axios from "axios";

// const Discover = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [swipedUsers, setSwipedUsers] = useState([]);
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//   const [roommateProfiles, setRoommateProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchProfiles = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       if (!token) {
//         throw new Error("No authentication token found");
//       }
//       const response = await axios.get(
//         "http://localhost:5001/api/profile/discover",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("Full response:", response?.data);

//       const profiles = Array.isArray(response.data?.profiles)
//         ? response.data.profiles
//         : [];

//       console.log("Full response:", response?.data);
//       console.log("Profiles:", profiles);

//       setRoommateProfiles(profiles);
//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching profiles:", err);
//       setError("Failed to load profiles. Please try again later.");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProfiles();
//   }, []);

//   const handleSwipe = (direction, profileId) => {
//     setSwipedUsers([...swipedUsers, { id: profileId, direction }]);
//     setCurrentPhotoIndex(0);

//     if (currentIndex < roommateProfiles.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       console.log("No more profiles to show");
//       fetchMoreProfiles();
//     }
//   };

//   const fetchMoreProfiles = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get("/api/profile/discover");

//       const profiles = Array.isArray(response.data?.profiles)
//         ? response.data.profiles
//         : [];

//       const swipedIds = swipedUsers.map((user) => user.id);
//       const filteredNewProfiles = profiles.filter(
//         (profile) => !swipedIds.includes(profile._id)
//       );

//       if (filteredNewProfiles.length > 0) {
//         setRoommateProfiles(filteredNewProfiles);
//         setCurrentIndex(0);
//       }

//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching more profiles:", err);
//       setError("Failed to load more profiles. Please try again later.");
//       setLoading(false);
//     }
//   };
//   const getPromptQuestion = (promptKey) => {
//     const promptsList = [
//       {
//         id: "0",
//         name: "About Me",
//         questions: [
//           { id: "0", question: "My guilty pleasure is" },
//           { id: "1", question: "On weekends, you'll find me" },
//           { id: "2", question: "A fun fact about me" },
//           { id: "3", question: "I'm known for always" },
//           { id: "4", question: "One thing I can't live without" },
//           { id: "5", question: "My 3 core values are" },
//           { id: "6", question: "Biggest red flag I avoid" },
//         ],
//       },
//       {
//         id: "1",
//         name: "Living Style",
//         questions: [
//           { id: "0", question: "My ideal home vibe is" },
//           { id: "1", question: "I like to keep my space" },
//           { id: "2", question: "I usually sleep at" },
//           { id: "3", question: "Guests at home: yay or nay?" },
//           { id: "4", question: "Noise level I'm comfortable with" },
//           { id: "5", question: "I share food if..." },
//           { id: "6", question: "My go-to comfort item at home" },
//         ],
//       },
//       {
//         id: "2",
//         name: "Self Care",
//         questions: [
//           { id: "0", question: "I unwind by" },
//           { id: "1", question: "My boundaries include" },
//           { id: "2", question: "I feel supported when" },
//           { id: "3", question: "To me, self-care means" },
//           { id: "4", question: "I handle stress by" },
//           { id: "5", question: "Mental health check-ins are" },
//         ],
//       },
//       {
//         id: "3",
//         name: "Roommate Vibes",
//         questions: [
//           { id: "0", question: "A green flag in a roommate is" },
//           { id: "1", question: "A dealbreaker for me is" },
//           { id: "2", question: "I'd love it if my roommate and I..." },
//           { id: "3", question: "I prefer roommates who are" },
//           { id: "4", question: "My communication style is" },
//           { id: "5", question: "Conflict resolution: my go-to move is" },
//         ],
//       },
//       {
//         id: "4",
//         name: "Dream Home",
//         questions: [
//           { id: "0", question: "My dream corner in our home would have" },
//           { id: "1", question: "A must-have in our apartment is" },
//           { id: "2", question: "The vibe I'm manifesting for our place" },
//           { id: "3", question: "A home tradition I'd love to start" },
//           { id: "4", question: "If I could design one wall, it'd have" },
//         ],
//       },
//     ];

//     if (!promptKey) return null;
//     const [promptId, questionId] = promptKey.split("-");
//     const promptCategory = promptsList.find((p) => p.id === promptId);
//     if (!promptCategory) return null;
//     const question = promptCategory.questions.find((q) => q.id === questionId);
//     return question ? question.question : null;
//   };

//   const handleDecline = () => {
//     if (currentIndex < roommateProfiles.length) {
//       handleSwipe("left", roommateProfiles[currentIndex]._id);
//     }
//   };

//   const handleLike = () => {
//     if (currentIndex < roommateProfiles.length) {
//       handleSwipe("right", roommateProfiles[currentIndex]._id);
//     }
//   };

//   const changePhoto = (direction) => {
//     if (currentIndex >= roommateProfiles.length) return;

//     const currentProfile = roommateProfiles[currentIndex];
//     const photos = currentProfile.photos || [];
//     const photoCount = photos.length;

//     if (photoCount === 0) return;

//     if (direction === "next") {
//       setCurrentPhotoIndex((currentPhotoIndex + 1) % photoCount);
//     } else {
//       setCurrentPhotoIndex((currentPhotoIndex - 1 + photoCount) % photoCount);
//     }
//   };

//   const calculateCompatibility = (profile) => {
//     return Math.floor(Math.random() * 26) + 70;
//   };

//   const currentProfile =
//     currentIndex < roommateProfiles.length
//       ? roommateProfiles[currentIndex]
//       : null;

//   if (loading && roommateProfiles.length === 0) {
//     return (
//       <div className="discover-container">
//         <h2 className="discover-title">Find Your Roommate</h2>
//         <div className="loading">Loading profiles...</div>
//       </div>
//     );
//   }

//   if (error && roommateProfiles.length === 0) {
//     return (
//       <div className="discover-container">
//         <h2 className="discover-title">Find Your Roommate</h2>
//         <div className="error">{error}</div>
//         <button
//           className="refresh-button"
//           onClick={() => window.location.reload()}
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="discover-container">
//       <h2 className="discover-title">Find Your Roommate</h2>

//       {currentProfile ? (
//         <div className="card-container">
//           <div className="roommate-card">
//             <div className="photo-carousel">
//               {currentProfile.photos && currentProfile.photos.length > 0 ? (
//                 <img
//                   src={
//                     currentProfile.photos[currentPhotoIndex] ||
//                     "/api/placeholder/400/500"
//                   }
//                   alt={`${currentProfile.name}`}
//                   className="profile-photo"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = "/api/placeholder/400/500";
//                   }}
//                 />
//               ) : (
//                 <img
//                   src="/api/placeholder/400/500"
//                   alt="Profile placeholder"
//                   className="profile-photo"
//                 />
//               )}
//               {currentProfile.photos && currentProfile.photos.length > 1 && (
//                 <>
//                   <div className="photo-nav">
//                     {currentProfile.photos.map((_, index) => (
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
//                 {calculateCompatibility(currentProfile)}% Match
//               </div>
//             </div>

//             <div className="profile-info">
//               <div className="profile-header">
//                 <div className="nam">
//                   {currentProfile.name}, {currentProfile.age || "N/A"}
//                 </div>
//                 <div className="lococcp">
//                   <br />
//                   {currentProfile.city}, {currentProfile.area}
//                   <br />
//                   {currentProfile.occupation || "Occupation not specified"}
//                 </div>
//               </div>

//               <div className="preferences-row">
//                 <div className="preference-section">
//                   <h3 className="preference-header">Living Preferences</h3>
//                   <div className="preference-tags">
//                     <span className="preference-tag">
//                       {currentProfile.livingPreference || "Everyone"}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="preference-section">
//                   <h3 className="preference-header">Looking For</h3>
//                   <div className="preference-tags">
//                     <span className="preference-tag">
//                       {currentProfile.lookingFor || "Roommate"}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {currentProfile.promptAnswers &&
//                 Object.keys(currentProfile.promptAnswers).length > 0 && (
//                   <>
//                     <h3 className="section-title">About Me</h3>
//                     <div className="prompt-answers">
//                       {Object.entries(currentProfile.promptAnswers).map(
//                         ([promptKey, answer]) => {
//                           const question = getPromptQuestion(promptKey);
//                           return (
//                             <div key={promptKey} className="prompt-answer-card">
//                               <h4 className="prompt-question">{question}</h4>
//                               <p className="prompt-answer">{answer}</p>
//                             </div>
//                           );
//                         }
//                       )}
//                     </div>
//                   </>
//                 )}
//             </div>

//             <div className="action-buttons">
//               <button className="decline-button" onClick={handleDecline}>
//                 ✕
//               </button>
//               <button className="like-button" onClick={handleLike}>
//                 ♥
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="no-more-profiles">
//           <h3>No more profiles to show</h3>
//           <p>We're finding more potential roommates for you!</p>
//           <button className="refresh-button" onClick={fetchMoreProfiles}>
//             Refresh Discover
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Discover;

// import React, { useState, useEffect } from "react";
// import "./Discover.css";
// import axios from "axios";

// const Discover = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [swipedUsers, setSwipedUsers] = useState([]);
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//   const [roommateProfiles, setRoommateProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [noMoreProfiles, setNoMoreProfiles] = useState(false);

//   const fetchProfiles = async () => {
//     try {
//       setLoading(true);
//       setNoMoreProfiles(false);
//       const token = localStorage.getItem("token");

//       if (!token) {
//         throw new Error("No authentication token found");
//       }
//       const response = await axios.get(
//         "http://localhost:5001/api/profile/discover",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("Full response:", response?.data);

//       const profiles = Array.isArray(response.data?.profiles)
//         ? response.data.profiles
//         : [];

//       console.log("Profiles:", profiles);

//       // Fix photo URLs to ensure they work correctly
//       const profilesWithFixedPhotos = profiles.map((profile) => {
//         if (profile.photos && Array.isArray(profile.photos)) {
//           const fixedPhotos = profile.photos.map((photo) => {
//             // If it's a relative path, make it absolute
//             if (photo && photo.startsWith("/")) {
//               return `http://localhost:5001${photo}`;
//             }
//             return photo;
//           });
//           return { ...profile, photos: fixedPhotos };
//         }
//         return profile;
//       });

//       setRoommateProfiles(profilesWithFixedPhotos);

//       // Set noMoreProfiles state if there are no profiles
//       if (profilesWithFixedPhotos.length === 0) {
//         setNoMoreProfiles(true);
//       }

//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching profiles:", err);
//       setError("Failed to load profiles. Please try again later.");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProfiles();
//   }, []);

//   const handleSwipe = (direction, profileId) => {
//     setSwipedUsers([...swipedUsers, { id: profileId, direction }]);
//     setCurrentPhotoIndex(0);

//     if (currentIndex < roommateProfiles.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       console.log("No more profiles to show");
//       setNoMoreProfiles(true);
//     }
//   };

//   const fetchMoreProfiles = async () => {
//     try {
//       setLoading(true);
//       setNoMoreProfiles(false);
//       const token = localStorage.getItem("token");

//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       const response = await axios.get(
//         "http://localhost:5001/api/profile/discover",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const profiles = Array.isArray(response.data?.profiles)
//         ? response.data.profiles
//         : [];

//       const swipedIds = swipedUsers.map((user) => user.id);
//       const filteredNewProfiles = profiles.filter(
//         (profile) => !swipedIds.includes(profile._id)
//       );

//       // Fix photo URLs to ensure they work correctly
//       const profilesWithFixedPhotos = filteredNewProfiles.map((profile) => {
//         if (profile.photos && Array.isArray(profile.photos)) {
//           const fixedPhotos = profile.photos.map((photo) => {
//             // If it's a relative path, make it absolute
//             if (photo && photo.startsWith("/")) {
//               return `http://localhost:5001${photo}`;
//             }
//             return photo;
//           });
//           return { ...profile, photos: fixedPhotos };
//         }
//         return profile;
//       });

//       if (profilesWithFixedPhotos.length > 0) {
//         setRoommateProfiles(profilesWithFixedPhotos);
//         setCurrentIndex(0);
//         setNoMoreProfiles(false);
//       } else {
//         setNoMoreProfiles(true);
//       }

//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching more profiles:", err);
//       setError("Failed to load more profiles. Please try again later.");
//       setLoading(false);
//     }
//   };

//   const getPromptQuestion = (promptKey) => {
//     const promptsList = [
//       {
//         id: "0",
//         name: "About Me",
//         questions: [
//           { id: "0", question: "My guilty pleasure is" },
//           { id: "1", question: "On weekends, you'll find me" },
//           { id: "2", question: "A fun fact about me" },
//           { id: "3", question: "I'm known for always" },
//           { id: "4", question: "One thing I can't live without" },
//           { id: "5", question: "My 3 core values are" },
//           { id: "6", question: "Biggest red flag I avoid" },
//         ],
//       },
//       {
//         id: "1",
//         name: "Living Style",
//         questions: [
//           { id: "0", question: "My ideal home vibe is" },
//           { id: "1", question: "I like to keep my space" },
//           { id: "2", question: "I usually sleep at" },
//           { id: "3", question: "Guests at home: yay or nay?" },
//           { id: "4", question: "Noise level I'm comfortable with" },
//           { id: "5", question: "I share food if..." },
//           { id: "6", question: "My go-to comfort item at home" },
//         ],
//       },
//       {
//         id: "2",
//         name: "Self Care",
//         questions: [
//           { id: "0", question: "I unwind by" },
//           { id: "1", question: "My boundaries include" },
//           { id: "2", question: "I feel supported when" },
//           { id: "3", question: "To me, self-care means" },
//           { id: "4", question: "I handle stress by" },
//           { id: "5", question: "Mental health check-ins are" },
//         ],
//       },
//       {
//         id: "3",
//         name: "Roommate Vibes",
//         questions: [
//           { id: "0", question: "A green flag in a roommate is" },
//           { id: "1", question: "A dealbreaker for me is" },
//           { id: "2", question: "I'd love it if my roommate and I..." },
//           { id: "3", question: "I prefer roommates who are" },
//           { id: "4", question: "My communication style is" },
//           { id: "5", question: "Conflict resolution: my go-to move is" },
//         ],
//       },
//       {
//         id: "4",
//         name: "Dream Home",
//         questions: [
//           { id: "0", question: "My dream corner in our home would have" },
//           { id: "1", question: "A must-have in our apartment is" },
//           { id: "2", question: "The vibe I'm manifesting for our place" },
//           { id: "3", question: "A home tradition I'd love to start" },
//           { id: "4", question: "If I could design one wall, it'd have" },
//         ],
//       },
//     ];

//     if (!promptKey) return null;
//     const [promptId, questionId] = promptKey.split("-");
//     const promptCategory = promptsList.find((p) => p.id === promptId);
//     if (!promptCategory) return null;
//     const question = promptCategory.questions.find((q) => q.id === questionId);
//     return question ? question.question : null;
//   };

//   const handleDecline = () => {
//     if (currentIndex < roommateProfiles.length) {
//       handleSwipe("left", roommateProfiles[currentIndex]._id);
//     }
//   };

//   const handleLike = () => {
//     if (currentIndex < roommateProfiles.length) {
//       handleSwipe("right", roommateProfiles[currentIndex]._id);
//     }
//   };

//   const changePhoto = (direction) => {
//     if (currentIndex >= roommateProfiles.length) return;

//     const currentProfile = roommateProfiles[currentIndex];
//     const photos = currentProfile.photos || [];
//     const photoCount = photos.length;

//     if (photoCount === 0) return;

//     if (direction === "next") {
//       setCurrentPhotoIndex((currentPhotoIndex + 1) % photoCount);
//     } else {
//       setCurrentPhotoIndex((currentPhotoIndex - 1 + photoCount) % photoCount);
//     }
//   };

//   const calculateCompatibility = (profile) => {
//     return Math.floor(Math.random() * 26) + 70;
//   };

//   const currentProfile =
//     !noMoreProfiles && currentIndex < roommateProfiles.length
//       ? roommateProfiles[currentIndex]
//       : null;

//   if (loading && roommateProfiles.length === 0) {
//     return (
//       <div className="discover-container">
//         <h2 className="discover-title">Find Your Roommate</h2>
//         <div className="loading">Loading profiles...</div>
//       </div>
//     );
//   }

//   if (error && roommateProfiles.length === 0) {
//     return (
//       <div className="discover-container">
//         <h2 className="discover-title">Find Your Roommate</h2>
//         <div className="error">{error}</div>
//         <button
//           className="refresh-button"
//           onClick={() => window.location.reload()}
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="discover-container">
//       <h2 className="discover-title">Find Your Roommate</h2>

//       {currentProfile ? (
//         <div className="card-container">
//           <div className="roommate-card">
//             <div className="photo-carousel">
//               {currentProfile.photos && currentProfile.photos.length > 0 ? (
//                 <img
//                   src={
//                     currentProfile.photos[currentPhotoIndex] ||
//                     "/api/placeholder/400/500"
//                   }
//                   alt={`${currentProfile.name}`}
//                   className="profile-photo"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = "/api/placeholder/400/500";
//                   }}
//                 />
//               ) : (
//                 <img
//                   src="/api/placeholder/400/500"
//                   alt="Profile placeholder"
//                   className="profile-photo"
//                 />
//               )}
//               {currentProfile.photos && currentProfile.photos.length > 1 && (
//                 <>
//                   <div className="photo-nav">
//                     {currentProfile.photos.map((_, index) => (
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
//                 {calculateCompatibility(currentProfile)}% Match
//               </div>
//             </div>

//             <div className="profile-info">
//               <div className="profile-header">
//                 <div className="nam">
//                   {currentProfile.name}, {currentProfile.age || "N/A"}
//                 </div>
//                 <div className="lococcp">
//                   <br />
//                   {currentProfile.city}, {currentProfile.area}
//                   <br />
//                   {currentProfile.occupation || "Occupation not specified"}
//                 </div>
//               </div>

//               <div className="preferences-row">
//                 <div className="preference-section">
//                   <h3 className="preference-header">Living Preferences</h3>
//                   <div className="preference-tags">
//                     <span className="preference-tag">
//                       {currentProfile.livingPreference || "Everyone"}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="preference-section">
//                   <h3 className="preference-header">Looking For</h3>
//                   <div className="preference-tags">
//                     <span className="preference-tag">
//                       {currentProfile.lookingFor || "Roommate"}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {currentProfile.promptAnswers &&
//                 Object.keys(currentProfile.promptAnswers).length > 0 && (
//                   <>
//                     <h3 className="section-title">About Me</h3>
//                     <div className="prompt-answers">
//                       {Object.entries(currentProfile.promptAnswers).map(
//                         ([promptKey, answer]) => {
//                           const question = getPromptQuestion(promptKey);
//                           return (
//                             <div key={promptKey} className="prompt-answer-card">
//                               <h4 className="prompt-question">{question}</h4>
//                               <p className="prompt-answer">{answer}</p>
//                             </div>
//                           );
//                         }
//                       )}
//                     </div>
//                   </>
//                 )}
//             </div>

//             <div className="action-buttons">
//               <button className="decline-button" onClick={handleDecline}>
//                 ✕
//               </button>
//               <button className="like-button" onClick={handleLike}>
//                 ♥
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="no-more-profiles">
//           <h3>No more profiles to show</h3>
//           <p>We're finding more potential roommates for you!</p>
//           <button className="refresh-button" onClick={fetchMoreProfiles}>
//             Refresh Discover
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Discover;

import React, { useState, useEffect } from "react";
import "./Discover.css";
import axios from "axios";
import { toast } from "react-toastify";

const Discover = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipedUsers, setSwipedUsers] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [roommateProfiles, setRoommateProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [noMoreProfiles, setNoMoreProfiles] = useState(false);

  const fetchProfiles = async () => {
    try {
      setLoading(true);
      setNoMoreProfiles(false);
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No authentication token found");
      }
      const response = await axios.get(
        "http://localhost:5001/api/profile/discover",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Full response:", response?.data);

      const profiles = Array.isArray(response.data?.profiles)
        ? response.data.profiles
        : [];

      console.log("Profiles:", profiles);

      // Fix photo URLs to ensure they work correctly
      const profilesWithFixedPhotos = profiles.map((profile) => {
        if (profile.photos && Array.isArray(profile.photos)) {
          const fixedPhotos = profile.photos.map((photo) => {
            // If it's a relative path, make it absolute
            if (photo && photo.startsWith("/")) {
              return `http://localhost:5001${photo}`;
            }
            return photo;
          });
          return { ...profile, photos: fixedPhotos };
        }
        return profile;
      });

      setRoommateProfiles(profilesWithFixedPhotos);

      // Set noMoreProfiles state if there are no profiles
      if (profilesWithFixedPhotos.length === 0) {
        setNoMoreProfiles(true);
      }

      setLoading(false);
    } catch (err) {
      console.error("Error fetching profiles:", err);
      setError("Failed to load profiles. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const handleSwipe = (direction, profileId) => {
    setSwipedUsers([...swipedUsers, { id: profileId, direction }]);
    setCurrentPhotoIndex(0);

    if (currentIndex < roommateProfiles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log("No more profiles to show");
      setNoMoreProfiles(true);
    }
  };

  const fetchMoreProfiles = async () => {
    // Reset swiped users when refreshing profiles
    setSwipedUsers([]);
    setCurrentIndex(0);
    setCurrentPhotoIndex(0);

    try {
      setLoading(true);
      setNoMoreProfiles(false);
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await axios.get(
        "http://localhost:5001/api/profile/discover",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const profiles = Array.isArray(response.data?.profiles)
        ? response.data.profiles
        : [];

      // Fix photo URLs to ensure they work correctly
      const profilesWithFixedPhotos = profiles.map((profile) => {
        if (profile.photos && Array.isArray(profile.photos)) {
          const fixedPhotos = profile.photos.map((photo) => {
            // If it's a relative path, make it absolute
            if (photo && photo.startsWith("/")) {
              return `http://localhost:5001${photo}`;
            }
            return photo;
          });
          return { ...profile, photos: fixedPhotos };
        }
        return profile;
      });

      if (profilesWithFixedPhotos.length > 0) {
        setRoommateProfiles(profilesWithFixedPhotos);
        setNoMoreProfiles(false);
      } else {
        setNoMoreProfiles(true);
      }

      setLoading(false);
    } catch (err) {
      console.error("Error fetching more profiles:", err);
      setError("Failed to load more profiles. Please try again later.");
      setLoading(false);
    }
  };

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

  const handleDecline = () => {
    if (currentIndex < roommateProfiles.length) {
      handleSwipe("left", roommateProfiles[currentIndex]._id);
    }
  };

  // const handleLike = () => {
  //   if (currentIndex < roommateProfiles.length) {
  //     handleSwipe("right", roommateProfiles[currentIndex]._id);
  //   }
  // };
  // const handleLike = async () => {
  //   if (currentIndex < roommateProfiles.length) {
  //     try {
  //       const profileId = roommateProfiles[currentIndex]._id;

  //       // Call API to accept the like or create a match
  //       const response = await fetch("/api/match", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`, // Make sure you pass the auth token
  //         },
  //         body: JSON.stringify({
  //           likedUserId: profileId,
  //         }),
  //       });

  //       if (response.ok) {
  //         // Handle match success, maybe show a notification or update UI
  //         console.log("Match created successfully");
  //         // Proceed to next profile after liking
  //         setCurrentIndex(currentIndex + 1);
  //       } else {
  //         // Handle errors if the match creation fails
  //         console.error("Failed to create match");
  //       }
  //     } catch (error) {
  //       console.error("Error creating match:", error);
  //     }
  //   }
  // };
  // const handleLike = async () => {
  //   if (currentIndex < roommateProfiles.length) {
  //     try {
  //       const profileId = roommateProfiles[currentIndex]._id;
  //       console.log(profileId);

  //       const token = localStorage.getItem("token"); // Add this line

  //       // Check if token exists
  //       if (!token) {
  //         console.error("Authentication token not found");
  //         return;
  //       }

  //       // Call API to like the profile
  //       const response = await axios.post(
  //         "http://localhost:5001/api/match/like",
  //         { likedUserId: profileId },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       if (response.status === 200) {
  //         // Check if it's a match
  //         if (response.data.message === "It's a match!") {
  //           // Show match notification
  //           alert("It's a match! 🎉 You can now chat with this person.");
  //         }

  //         // Proceed to next profile after liking
  //         setCurrentIndex((prevIndex) => prevIndex + 1);
  //       } else {
  //         console.error("Failed to like profile");
  //       }
  //     } catch (error) {
  //       console.error("Error liking profile:", error);
  //     }
  //   }
  // };
  const handleLike = async () => {
    if (currentIndex < roommateProfiles.length) {
      try {
        const profileId = roommateProfiles[currentIndex]._id;
        console.log(profileId);

        const token = localStorage.getItem("token");

        if (!token) {
          console.error("Authentication token not found");
          return;
        }

        const response = await axios.post(
          "http://localhost:5001/api/match/like",
          { likedUserId: profileId },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          // if (response.data.message === "It's a match!") {
          //   alert("It's a match! 🎉 You can now chat with this person.");
          // }
          console.log("Response:", response.data);
          if (response.data.message === "It's a match!") {
            toast.success(
              "🎉 It's a match! You can now start a conversation with your potential roommate.",
              {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
          }

          // Optionally track that this profile was liked
          setSwipedUsers([
            ...swipedUsers,
            { id: profileId, direction: "right" },
          ]);

          // DON'T advance the index here — keep the same profile on screen
          console.log("Profile liked, staying on screen");
          setCurrentIndex((prev) => prev + 1);
        } else {
          console.error("Failed to like profile");
        }
      } catch (error) {
        console.error("Error liking profile:", error);
      }
    }
  };

  const changePhoto = (direction) => {
    if (currentIndex >= roommateProfiles.length) return;

    const currentProfile = roommateProfiles[currentIndex];
    const photos = currentProfile.photos || [];
    const photoCount = photos.length;

    if (photoCount === 0) return;

    if (direction === "next") {
      setCurrentPhotoIndex((currentPhotoIndex + 1) % photoCount);
    } else {
      setCurrentPhotoIndex((currentPhotoIndex - 1 + photoCount) % photoCount);
    }
  };

  const calculateCompatibility = (profile) => {
    return Math.floor(Math.random() * 26) + 70;
  };

  const currentProfile =
    !noMoreProfiles && currentIndex < roommateProfiles.length
      ? roommateProfiles[currentIndex]
      : null;

  if (loading && roommateProfiles.length === 0) {
    return (
      <div className="discover-container">
        <h2 className="discover-title">Find Your Roommate</h2>
        <div className="loading">Loading profiles...</div>
      </div>
    );
  }

  if (error && roommateProfiles.length === 0) {
    return (
      <div className="discover-container">
        <h2 className="discover-title">Find Your Roommate</h2>
        <div className="error">{error}</div>
        <button
          className="refresh-button"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="discover-container">
      <h2 className="discover-title">Find Your Roommate</h2>

      {currentProfile ? (
        <div className="card-container">
          <div className="roommate-card">
            <div className="photo-carousel">
              {currentProfile.photos && currentProfile.photos.length > 0 ? (
                <img
                  src={
                    currentProfile.photos[currentPhotoIndex] ||
                    "/api/placeholder/400/500"
                  }
                  alt={`${currentProfile.name}`}
                  className="profile-photo"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/api/placeholder/400/500";
                  }}
                />
              ) : (
                <img
                  src="/api/placeholder/400/500"
                  alt="Profile placeholder"
                  className="profile-photo"
                />
              )}
              {currentProfile.photos && currentProfile.photos.length > 1 && (
                <>
                  <div className="photo-nav">
                    {currentProfile.photos.map((_, index) => (
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
                  {currentProfile.name}, {currentProfile.age || "N/A"}
                </div>
                <div className="lococcp">
                  <br />
                  {currentProfile.city}, {currentProfile.area}
                  <br />
                  {currentProfile.occupation || "Occupation not specified"}
                </div>
              </div>

              <div className="preferences-row">
                <div className="preference-section">
                  <h3 className="preference-header">Living Preferences</h3>
                  <div className="preference-tags">
                    <span className="preference-tag">
                      {currentProfile.livingPreference || "Everyone"}
                    </span>
                  </div>
                </div>

                <div className="preference-section">
                  <h3 className="preference-header">Looking For</h3>
                  <div className="preference-tags">
                    <span className="preference-tag">
                      {currentProfile.lookingFor || "Roommate"}
                    </span>
                  </div>
                </div>
              </div>

              {currentProfile.promptAnswers &&
                Object.keys(currentProfile.promptAnswers).length > 0 && (
                  <>
                    <h3 className="section-title">About Me</h3>
                    <div className="prompt-answers">
                      {Object.entries(currentProfile.promptAnswers).map(
                        ([promptKey, answer]) => {
                          const question = getPromptQuestion(promptKey);
                          return (
                            <div key={promptKey} className="prompt-answer-card">
                              <h4 className="prompt-question">{question}</h4>
                              <p className="prompt-answer">{answer}</p>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </>
                )}
            </div>

            <div className="action-buttons">
              <button className="decline-button" onClick={handleDecline}>
                ✕
              </button>
              <button className="like-button" onClick={handleLike}>
                ♥
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="no-more-profiles">
          <h3>No more profiles to show</h3>
          <p>We're finding more potential roommates for you!</p>
          <button className="refresh-button" onClick={fetchMoreProfiles}>
            Refresh Discover
          </button>
        </div>
      )}
    </div>
  );
};

export default Discover;

// import React, { useState, useEffect } from "react";
// import "./Discover.css";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { jwtDecode } from "jwt-decode";

// const Discover = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [swipedUsers, setSwipedUsers] = useState([]);
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//   const [roommateProfiles, setRoommateProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [noMoreProfiles, setNoMoreProfiles] = useState(false);

//   // Debug function to get current user info
//   const getCurrentUserInfo = () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       console.log("No token found");
//       return null;
//     }

//     try {
//       const decoded = jwtDecode(token);
//       console.log("Decoded JWT token:", decoded);
//       const userId =
//         decoded.user?.id ||
//         decoded.user?._id ||
//         decoded.id ||
//         decoded._id ||
//         null;
//       console.log("Current user ID:", userId);
//       return { userId, fullToken: decoded };
//     } catch (err) {
//       console.error("Failed to decode token:", err);
//       return null;
//     }
//   };

//   const fetchProfiles = async () => {
//     try {
//       setLoading(true);
//       setNoMoreProfiles(false);
//       const token = localStorage.getItem("token");

//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       // Debug current user
//       const currentUser = getCurrentUserInfo();
//       console.log("Current user info:", currentUser);

//       console.log("Fetching profiles from /api/profile/discover...");
//       const response = await axios.get(
//         "http://localhost:5001/api/profile/discover",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("Full discover response:", response?.data);

//       const profiles = Array.isArray(response.data?.profiles)
//         ? response.data.profiles
//         : [];

//       console.log("Profiles received:", profiles);
//       console.log("Number of profiles:", profiles.length);

//       // Check if current user appears in profiles
//       if (currentUser?.userId) {
//         const currentUserInProfiles = profiles.find(
//           (p) =>
//             p._id?.toString() === currentUser.userId.toString() ||
//             p.id?.toString() === currentUser.userId.toString()
//         );
//         if (currentUserInProfiles) {
//           console.error("🚨 ISSUE: Current user found in discover profiles!");
//           console.error(
//             "Current user profile in results:",
//             currentUserInProfiles
//           );
//         } else {
//           console.log("✅ Good: Current user not found in discover profiles");
//         }
//       }

//       // Fix photo URLs to ensure they work correctly
//       const profilesWithFixedPhotos = profiles.map((profile) => {
//         if (profile.photos && Array.isArray(profile.photos)) {
//           const fixedPhotos = profile.photos.map((photo) => {
//             // If it's a relative path, make it absolute
//             if (photo && photo.startsWith("/")) {
//               return `http://localhost:5001${photo}`;
//             }
//             return photo;
//           });
//           return { ...profile, photos: fixedPhotos };
//         }
//         return profile;
//       });

//       setRoommateProfiles(profilesWithFixedPhotos);

//       // Set noMoreProfiles state if there are no profiles
//       if (profilesWithFixedPhotos.length === 0) {
//         setNoMoreProfiles(true);
//       }

//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching profiles:", err);
//       console.error("Error response:", err.response?.data);
//       console.error("Error status:", err.response?.status);
//       setError("Failed to load profiles. Please try again later.");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProfiles();
//   }, []);

//   const handleLike = async () => {
//     if (currentIndex < roommateProfiles.length) {
//       try {
//         const profileId = roommateProfiles[currentIndex]._id;
//         console.log("Attempting to like profile ID:", profileId);

//         const token = localStorage.getItem("token");
//         const currentUser = getCurrentUserInfo();

//         if (!token) {
//           console.error("Authentication token not found");
//           return;
//         }

//         console.log("Current user info for like:", currentUser);
//         console.log("Profile being liked:", roommateProfiles[currentIndex]);

//         // Check if trying to like themselves
//         if (
//           currentUser?.userId &&
//           profileId?.toString() === currentUser.userId.toString()
//         ) {
//           console.error("🚨 ISSUE: Trying to like own profile!");
//           alert("You cannot like your own profile!");
//           return;
//         }

//         console.log("Making like API call...");
//         const response = await axios.post(
//           "http://localhost:5001/api/match/like",
//           { likedUserId: profileId },
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         console.log("Like response:", response.data);
//         console.log("Response status:", response.status);

//         if (response.status === 200) {
//           if (response.data.message === "It's a match!") {
//             toast.success(
//               "🎉 It's a match! You can now start a conversation with your potential roommate.",
//               {
//                 position: "top-right",
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//               }
//             );
//           }

//           // Track that this profile was liked
//           setSwipedUsers([
//             ...swipedUsers,
//             { id: profileId, direction: "right" },
//           ]);

//           console.log("Profile liked successfully, advancing to next");
//           setCurrentIndex((prev) => prev + 1);
//         } else {
//           console.error(
//             "Failed to like profile - unexpected status:",
//             response.status
//           );
//         }
//       } catch (error) {
//         console.error("Error liking profile:", error);
//         console.error("Error response data:", error.response?.data);
//         console.error("Error response status:", error.response?.status);

//         // Show specific error message
//         const errorMessage =
//           error.response?.data?.message || error.message || "Unknown error";
//         alert(`Failed to like profile: ${errorMessage}`);
//       }
//     }
//   };

//   const handleSwipe = (direction, profileId) => {
//     setSwipedUsers([...swipedUsers, { id: profileId, direction }]);
//     setCurrentPhotoIndex(0);

//     if (currentIndex < roommateProfiles.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       console.log("No more profiles to show");
//       setNoMoreProfiles(true);
//     }
//   };

//   const handleDecline = () => {
//     if (currentIndex < roommateProfiles.length) {
//       handleSwipe("left", roommateProfiles[currentIndex]._id);
//     }
//   };

//   const fetchMoreProfiles = async () => {
//     // Reset swiped users when refreshing profiles
//     setSwipedUsers([]);
//     setCurrentIndex(0);
//     setCurrentPhotoIndex(0);
//     await fetchProfiles();
//   };

//   const getPromptQuestion = (promptKey) => {
//     const promptsList = [
//       {
//         id: "0",
//         name: "About Me",
//         questions: [
//           { id: "0", question: "My guilty pleasure is" },
//           { id: "1", question: "On weekends, you'll find me" },
//           { id: "2", question: "A fun fact about me" },
//           { id: "3", question: "I'm known for always" },
//           { id: "4", question: "One thing I can't live without" },
//           { id: "5", question: "My 3 core values are" },
//           { id: "6", question: "Biggest red flag I avoid" },
//         ],
//       },
//       {
//         id: "1",
//         name: "Living Style",
//         questions: [
//           { id: "0", question: "My ideal home vibe is" },
//           { id: "1", question: "I like to keep my space" },
//           { id: "2", question: "I usually sleep at" },
//           { id: "3", question: "Guests at home: yay or nay?" },
//           { id: "4", question: "Noise level I'm comfortable with" },
//           { id: "5", question: "I share food if..." },
//           { id: "6", question: "My go-to comfort item at home" },
//         ],
//       },
//       {
//         id: "2",
//         name: "Self Care",
//         questions: [
//           { id: "0", question: "I unwind by" },
//           { id: "1", question: "My boundaries include" },
//           { id: "2", question: "I feel supported when" },
//           { id: "3", question: "To me, self-care means" },
//           { id: "4", question: "I handle stress by" },
//           { id: "5", question: "Mental health check-ins are" },
//         ],
//       },
//       {
//         id: "3",
//         name: "Roommate Vibes",
//         questions: [
//           { id: "0", question: "A green flag in a roommate is" },
//           { id: "1", question: "A dealbreaker for me is" },
//           { id: "2", question: "I'd love it if my roommate and I..." },
//           { id: "3", question: "I prefer roommates who are" },
//           { id: "4", question: "My communication style is" },
//           { id: "5", question: "Conflict resolution: my go-to move is" },
//         ],
//       },
//       {
//         id: "4",
//         name: "Dream Home",
//         questions: [
//           { id: "0", question: "My dream corner in our home would have" },
//           { id: "1", question: "A must-have in our apartment is" },
//           { id: "2", question: "The vibe I'm manifesting for our place" },
//           { id: "3", question: "A home tradition I'd love to start" },
//           { id: "4", question: "If I could design one wall, it'd have" },
//         ],
//       },
//     ];

//     if (!promptKey) return null;
//     const [promptId, questionId] = promptKey.split("-");
//     const promptCategory = promptsList.find((p) => p.id === promptId);
//     if (!promptCategory) return null;
//     const question = promptCategory.questions.find((q) => q.id === questionId);
//     return question ? question.question : null;
//   };

//   const changePhoto = (direction) => {
//     if (currentIndex >= roommateProfiles.length) return;

//     const currentProfile = roommateProfiles[currentIndex];
//     const photos = currentProfile.photos || [];
//     const photoCount = photos.length;

//     if (photoCount === 0) return;

//     if (direction === "next") {
//       setCurrentPhotoIndex((currentPhotoIndex + 1) % photoCount);
//     } else {
//       setCurrentPhotoIndex((currentPhotoIndex - 1 + photoCount) % photoCount);
//     }
//   };

//   const calculateCompatibility = (profile) => {
//     return Math.floor(Math.random() * 26) + 70;
//   };

//   const currentProfile =
//     !noMoreProfiles && currentIndex < roommateProfiles.length
//       ? roommateProfiles[currentIndex]
//       : null;

//   if (loading && roommateProfiles.length === 0) {
//     return (
//       <div className="discover-container">
//         <h2 className="discover-title">Find Your Roommate</h2>
//         <div className="loading">Loading profiles...</div>
//       </div>
//     );
//   }

//   if (error && roommateProfiles.length === 0) {
//     return (
//       <div className="discover-container">
//         <h2 className="discover-title">Find Your Roommate</h2>
//         <div className="error">{error}</div>
//         <button
//           className="refresh-button"
//           onClick={() => window.location.reload()}
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="discover-container">
//       <h2 className="discover-title">Find Your Roommate</h2>

//       {currentProfile ? (
//         <div className="card-container">
//           <div className="roommate-card">
//             <div className="photo-carousel">
//               {currentProfile.photos && currentProfile.photos.length > 0 ? (
//                 <img
//                   src={
//                     currentProfile.photos[currentPhotoIndex] ||
//                     "/api/placeholder/400/500"
//                   }
//                   alt={`${currentProfile.name}`}
//                   className="profile-photo"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = "/api/placeholder/400/500";
//                   }}
//                 />
//               ) : (
//                 <img
//                   src="/api/placeholder/400/500"
//                   alt="Profile placeholder"
//                   className="profile-photo"
//                 />
//               )}
//               {currentProfile.photos && currentProfile.photos.length > 1 && (
//                 <>
//                   <div className="photo-nav">
//                     {currentProfile.photos.map((_, index) => (
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
//             </div>

//             <div className="profile-info">
//               <div className="profile-header">
//                 <div className="nam">
//                   {currentProfile.name}, {currentProfile.age || "N/A"}
//                 </div>
//                 <div className="lococcp">
//                   <br />
//                   {currentProfile.city}, {currentProfile.area}
//                   <br />
//                   {currentProfile.occupation || "Occupation not specified"}
//                 </div>
//               </div>

//               <div className="preferences-row">
//                 <div className="preference-section">
//                   <h3 className="preference-header">Living Preferences</h3>
//                   <div className="preference-tags">
//                     <span className="preference-tag">
//                       {currentProfile.livingPreference || "Everyone"}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="preference-section">
//                   <h3 className="preference-header">Looking For</h3>
//                   <div className="preference-tags">
//                     <span className="preference-tag">
//                       {currentProfile.lookingFor || "Roommate"}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {currentProfile.promptAnswers &&
//                 Object.keys(currentProfile.promptAnswers).length > 0 && (
//                   <>
//                     <h3 className="section-title">About Me</h3>
//                     <div className="prompt-answers">
//                       {Object.entries(currentProfile.promptAnswers).map(
//                         ([promptKey, answer]) => {
//                           const question = getPromptQuestion(promptKey);
//                           return (
//                             <div key={promptKey} className="prompt-answer-card">
//                               <h4 className="prompt-question">{question}</h4>
//                               <p className="prompt-answer">{answer}</p>
//                             </div>
//                           );
//                         }
//                       )}
//                     </div>
//                   </>
//                 )}
//             </div>

//             <div className="action-buttons">
//               <button className="decline-button" onClick={handleDecline}>
//                 ✕
//               </button>
//               <button className="like-button" onClick={handleLike}>
//                 ♥
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="no-more-profiles">
//           <h3>No more profiles to show</h3>
//           <p>We're finding more potential roommates for you!</p>
//           <button className="refresh-button" onClick={fetchMoreProfiles}>
//             Refresh Discover
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Discover;
