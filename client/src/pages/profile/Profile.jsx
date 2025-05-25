// import React from "react";
// import { Link } from "react-router-dom";
// import "./Profile.css";

// const Profile = () => {
//   // This would come from your app state or API in a real app
//   const profileData = {
//     name: "Sarah Johnson",
//     age: 28,
//     gender: "Female",
//     occupation: "UX Designer",
//     city: "Delhi",
//     area: "Hauz Khas",
//     livingWith: ["Everyone"],
//     lookingFor: "Long-term Stay",
//     photos: [
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
//     ],
//     placePhotos: [
//       "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
//       "https://images.unsplash.com/photo-1502005097973-6a7082348e28",
//       "https://images.unsplash.com/photo-1554995207-c18c203602cb",
//       "https://images.unsplash.com/photo-1484154218962-a197022b5858",
//     ],
//     houseOwner: true,
//     promptAnswers: {
//       "0-2":
//         "I can speak three languages fluently: English, Hindi, and French!",
//       "1-0":
//         "My ideal home vibe is cozy minimalist with lots of plants and natural light.",
//       "3-0":
//         "A green flag in a roommate is someone who communicates openly about issues instead of letting them build up.",
//     },
//   };

//   // Helper function to get prompt questions based on promptId-questionId
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

//   return (
//     <div className="profile-container">
//       <div className="profile-wrapper">
//         <div className="profile-header">
//           <div className="profile-photo-container">
//             {profileData.photos.length > 0 && (
//               <img
//                 src={profileData.photos[0]}
//                 alt={profileData.name}
//                 className="profile-main-photo"
//               />
//             )}
//           </div>
//           <div className="profile-header-info">
//             <h1 className="profile-name">{profileData.name}</h1>
//             <div className="profile-basic-info">
//               <p>
//                 {profileData.age} • {profileData.gender} •{" "}
//                 {profileData.occupation}
//               </p>
//               <p>
//                 {profileData.area}, {profileData.city}
//               </p>
//               {profileData.houseOwner && (
//                 <p className="profile-badge">Has a place to share</p>
//               )}
//             </div>
//             <Link to="/editprofile" className="edit-profile-button">
//               Edit Profile
//             </Link>
//           </div>
//         </div>

//         <div className="profile-section">
//           <h2 className="section-title">Housing Preferences</h2>
//           <div className="preference-tags">
//             <div className="preference-item">
//               <h3>Looking For</h3>
//               <span className="preference-tag">{profileData.lookingFor}</span>
//             </div>
//             <div className="preference-item">
//               <h3>Comfortable Living With</h3>
//               <div className="tag-container">
//                 {profileData.livingWith.map((option, index) => (
//                   <span key={index} className="preference-tag">
//                     {option}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="profile-section">
//           <h2 className="section-title">My Photos</h2>
//           <div className="place-photos">
//             {profileData.photos.map((photo, index) => (
//               <div key={index} className="place-photo-card">
//                 <img src={photo} alt={`My photo ${index + 1}`} />
//               </div>
//             ))}
//           </div>
//         </div>

//         {profileData.houseOwner &&
//           profileData.placePhotos &&
//           profileData.placePhotos.length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">My Place</h2>
//               <div className="place-photos">
//                 {profileData.placePhotos.map((photo, index) => (
//                   <div key={index} className="place-photo-card">
//                     <img src={photo} alt={`Place ${index + 1}`} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//         <div className="profile-section">
//           <h2 className="section-title">About Me</h2>
//           <div className="prompt-answers">
//             {Object.entries(profileData.promptAnswers).map(
//               ([promptKey, answer]) => (
//                 <div key={promptKey} className="prompt-answer-card">
//                   <h3 className="prompt-question">
//                     {getPromptQuestion(promptKey)}
//                   </h3>
//                   <p className="prompt-answer">{answer}</p>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// // import { useAuth } from "../../AuthContext.jsx";
// import { useAuth } from "../../AuthContext";
// import "./Profile.css";

// const Profile = () => {
//   const { isLoggedIn } = useAuth();
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       if (!isLoggedIn) {
//         return;
//       }

//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("http://localhost:5001/api/profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setProfileData(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching profile:", err);
//         setError("Failed to load profile data");
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [isLoggedIn]);

//   // Helper function to get prompt questions based on promptId-questionId
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

//   if (loading) {
//     return (
//       <div className="profile-loading">
//         <p>Loading profile...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="profile-error">
//         <p>{error}</p>
//         <Link to="/login">Please login again</Link>
//       </div>
//     );
//   }

//   if (!profileData) {
//     return (
//       <div className="profile-not-found">
//         <p>Profile not found. Please complete your profile.</p>
//         <Link to="/editprofile" className="edit-profile-button">
//           Complete Profile
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="profile-container">
//       <div className="profile-wrapper">
//         <div className="profile-header">
//           <div className="profile-photo-container">
//             {profileData.photos && profileData.photos.length > 0 ? (
//               <img
//                 src={profileData.photos[0]}
//                 alt={profileData.name}
//                 className="profile-main-photo"
//               />
//             ) : (
//               <div className="profile-photo-placeholder">No Photo</div>
//             )}
//           </div>
//           <div className="profile-header-info">
//             <h1 className="profile-name">{profileData.name || "User"}</h1>
//             <div className="profile-basic-info">
//               <p>
//                 {profileData.age ? `${profileData.age} • ` : ""}
//                 {profileData.gender ? `${profileData.gender} • ` : ""}
//                 {profileData.occupation || ""}
//               </p>
//               <p>
//                 {profileData.area ? `${profileData.area}, ` : ""}
//                 {profileData.city || ""}
//               </p>
//               {profileData.houseOwner && (
//                 <p className="profile-badge">Has a place to share</p>
//               )}
//             </div>
//             <Link to="/editprofile" className="edit-profile-button">
//               Edit Profile
//             </Link>
//           </div>
//         </div>

//         <div className="profile-section">
//           <h2 className="section-title">Housing Preferences</h2>
//           <div className="preference-tags">
//             <div className="preference-item">
//               <h3>Looking For</h3>
//               <span className="preference-tag">
//                 {profileData.lookingFor || "Not specified"}
//               </span>
//             </div>
//             <div className="preference-item">
//               <h3>Comfortable Living With</h3>
//               <div className="tag-container">
//                 {profileData.livingWith && profileData.livingWith.length > 0 ? (
//                   profileData.livingWith.map((option, index) => (
//                     <span key={index} className="preference-tag">
//                       {option}
//                     </span>
//                   ))
//                 ) : (
//                   <span className="preference-tag">Not specified</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {profileData.photos && profileData.photos.length > 0 && (
//           <div className="profile-section">
//             <h2 className="section-title">My Photos</h2>
//             <div className="place-photos">
//               {profileData.photos.map((photo, index) => (
//                 <div key={index} className="place-photo-card">
//                   <img src={photo} alt={`My photo ${index + 1}`} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {profileData.houseOwner &&
//           profileData.placePhotos &&
//           profileData.placePhotos.length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">My Place</h2>
//               <div className="place-photos">
//                 {profileData.placePhotos.map((photo, index) => (
//                   <div key={index} className="place-photo-card">
//                     <img src={photo} alt={`Place ${index + 1}`} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//         {profileData.promptAnswers &&
//           Object.keys(profileData.promptAnswers).length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">About Me</h2>
//               <div className="prompt-answers">
//                 {Object.entries(profileData.promptAnswers).map(
//                   ([promptKey, answer]) => (
//                     <div key={promptKey} className="prompt-answer-card">
//                       <h3 className="prompt-question">
//                         {getPromptQuestion(promptKey)}
//                       </h3>
//                       <p className="prompt-answer">{answer}</p>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../../AuthContext";
// import "./Profile.css";

// const Profile = () => {
//   const { isLoggedIn } = useAuth();
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       if (!isLoggedIn) {
//         return;
//       }

//       try {
//         const token = localStorage.getItem("token");
//         // Updated port from 5001 to 8080 to match the server configuration
//         const response = await axios.get("http://localhost:5001/api/profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setProfileData(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching profile:", err);
//         setError("Failed to load profile data");
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [isLoggedIn]);

//   // Helper function to get prompt questions based on promptId-questionId
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

//   if (loading) {
//     return (
//       <div className="profile-loading">
//         <p>Loading profile...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="profile-error">
//         <p>{error}</p>
//         <Link to="/login">Please login again</Link>
//       </div>
//     );
//   }

//   if (!profileData) {
//     return (
//       <div className="profile-not-found">
//         <p>Profile not found. Please complete your profile.</p>
//         <Link to="/editprofile" className="edit-profile-button">
//           Complete Profile
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="profile-container">
//       <div className="profile-wrapper">
//         <div className="profile-header">
//           <div className="profile-photo-container">
//             {profileData.photos && profileData.photos.length > 0 ? (
//               <img
//                 src={profileData.photos[0]}
//                 alt={profileData.name}
//                 className="profile-main-photo"
//               />
//             ) : (
//               <div className="profile-photo-placeholder">No Photo</div>
//             )}
//           </div>
//           <div className="profile-header-info">
//             <h1 className="profile-name">{profileData.name || "User"}</h1>
//             <div className="profile-basic-info">
//               <p>
//                 {profileData.age ? `${profileData.age} • ` : ""}
//                 {profileData.gender ? `${profileData.gender} • ` : ""}
//                 {profileData.occupation || ""}
//               </p>
//               <p>
//                 {profileData.area ? `${profileData.area}, ` : ""}
//                 {profileData.city || ""}
//               </p>
//               {profileData.houseOwner && (
//                 <p className="profile-badge">Has a place to share</p>
//               )}
//             </div>
//             <Link to="/editprofile" className="edit-profile-button">
//               Edit Profile
//             </Link>
//           </div>
//         </div>

//         <div className="profile-section">
//           <h2 className="section-title">Housing Preferences</h2>
//           <div className="preference-tags">
//             <div className="preference-item">
//               <h3>Looking For</h3>
//               <span className="preference-tag">
//                 {profileData.lookingFor || "Not specified"}
//               </span>
//             </div>
//             <div className="preference-item">
//               <h3>Comfortable Living With</h3>
//               <div className="tag-container">
//                 {profileData.livingWith && profileData.livingWith.length > 0 ? (
//                   profileData.livingWith.map((option, index) => (
//                     <span key={index} className="preference-tag">
//                       {option}
//                     </span>
//                   ))
//                 ) : (
//                   <span className="preference-tag">Not specified</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {profileData.photos && profileData.photos.length > 0 && (
//           <div className="profile-section">
//             <h2 className="section-title">My Photos</h2>
//             <div className="place-photos">
//               {profileData.photos.map((photo, index) => (
//                 <div key={index} className="place-photo-card">
//                   <img src={photo} alt={`My photo ${index + 1}`} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {profileData.houseOwner &&
//           profileData.placePhotos &&
//           profileData.placePhotos.length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">My Place</h2>
//               <div className="place-photos">
//                 {profileData.placePhotos.map((photo, index) => (
//                   <div key={index} className="place-photo-card">
//                     <img src={photo} alt={`Place ${index + 1}`} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//         {profileData.promptAnswers &&
//           Object.keys(profileData.promptAnswers).length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">About Me</h2>
//               <div className="prompt-answers">
//                 {Object.entries(profileData.promptAnswers).map(
//                   ([promptKey, answer]) => (
//                     <div key={promptKey} className="prompt-answer-card">
//                       <h3 className="prompt-question">
//                         {getPromptQuestion(promptKey)}
//                       </h3>
//                       <p className="prompt-answer">{answer}</p>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../../AuthContext";
// import "./Profile.css";

// const Profile = () => {
//   const { isLoggedIn } = useAuth();
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       if (!isLoggedIn) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const token = localStorage.getItem("token");
//         // Keep port as 5001 as confirmed by you
//         const response = await axios.get("http://localhost:5001/api/profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         console.log("Profile data received:", response.data);
//         setProfileData(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching profile:", err);
//         setError(`Failed to load profile data: ${err.message}`);
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [isLoggedIn]);

//   // Helper function to get prompt questions based on promptId-questionId
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

//   if (loading) {
//     return (
//       <div className="profile-loading">
//         <p>Loading profile...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="profile-error">
//         <p>{error}</p>
//         <Link to="/login">Please login again</Link>
//       </div>
//     );
//   }

//   if (!profileData) {
//     return (
//       <div className="profile-not-found">
//         <p>Profile not found. Please complete your profile.</p>
//         <Link to="/editprofile" className="edit-profile-button">
//           Complete Profile
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="profile-container">
//       <div className="profile-wrapper">
//         <div className="profile-header">
//           <div className="profile-photo-container">
//             {profileData.photos && profileData.photos.length > 0 ? (
//               <img
//                 src={profileData.photos[0]}
//                 alt={profileData.name}
//                 className="profile-main-photo"
//               />
//             ) : (
//               <div className="profile-photo-placeholder">No Photo</div>
//             )}
//           </div>
//           <div className="profile-header-info">
//             <h1 className="profile-name">{profileData.name || "User"}</h1>
//             <div className="profile-basic-info">
//               <p>
//                 {profileData.age ? `${profileData.age} • ` : ""}
//                 {profileData.gender ? `${profileData.gender} • ` : ""}
//                 {profileData.occupation || ""}
//               </p>
//               <p>
//                 {profileData.area ? `${profileData.area}, ` : ""}
//                 {profileData.city || ""}
//               </p>
//               {profileData.houseOwner && (
//                 <p className="profile-badge">Has a place to share</p>
//               )}
//             </div>
//             <Link to="/editprofile" className="edit-profile-button">
//               Edit Profile
//             </Link>
//           </div>
//         </div>

//         <div className="profile-section">
//           <h2 className="section-title">Housing Preferences</h2>
//           <div className="preference-tags">
//             <div className="preference-item">
//               <h3>Looking For</h3>
//               <span className="preference-tag">
//                 {profileData.lookingFor || "Not specified"}
//               </span>
//             </div>
//             <div className="preference-item">
//               <h3>Comfortable Living With</h3>
//               <div className="tag-container">
//                 {profileData.livingWith && profileData.livingWith.length > 0 ? (
//                   profileData.livingWith.map((option, index) => (
//                     <span key={index} className="preference-tag">
//                       {option}
//                     </span>
//                   ))
//                 ) : (
//                   <span className="preference-tag">Not specified</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {profileData.photos && profileData.photos.length > 0 && (
// //           <div className="profile-section">
// //             <h2 className="section-title">My Photos</h2>
// //             <div className="place-photos">
// //               {profileData.photos.map((photo, index) => (
// //                 <div key={index} className="place-photo-card">
// //                   <img src={photo} alt={`My photo ${index + 1}`} />
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {profileData.houseOwner &&
// //           profileData.placePhotos &&
// //           profileData.placePhotos.length > 0 && (
// //             <div className="profile-section">
// //               <h2 className="section-title">My Place</h2>
// //               <div className="place-photos">
// //                 {profileData.placePhotos.map((photo, index) => (
// //                   <div key={index} className="place-photo-card">
// //                     <img src={photo} alt={`Place ${index + 1}`} />
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //         {profileData.promptAnswers &&
// //           Object.keys(profileData.promptAnswers).length > 0 && (
// //             <div className="profile-section">
// //               <h2 className="section-title">About Me</h2>
// //               <div className="prompt-answers">
// //                 {Object.entries(profileData.promptAnswers).map(
// //                   ([promptKey, answer]) => (
// //                     <div key={promptKey} className="prompt-answer-card">
// //                       <h3 className="prompt-question">
// //                         {getPromptQuestion(promptKey)}
// //                       </h3>
// //                       <p className="prompt-answer">{answer}</p>
// //                     </div>
// //                   )
// //                 )}
// //               </div>
// //             </div>
// //           )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../../AuthContext";
// import "./Profile.css";

// const Profile = () => {
//   const { isLoggedIn } = useAuth();
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       if (!isLoggedIn) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get(
//           "http://localhost:5001/api/profile/user",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         console.log("Profile response:", response.data);

//         // Access the profile data correctly from the response
//         // The backend sends the profile inside a 'profile' property
//         setProfileData(response.data.profile);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching profile:", err);
//         // Show more details about the error for debugging
//         if (err.response) {
//           console.error("Response data:", err.response.data);
//           console.error("Response status:", err.response.status);
//           setError(
//             `Failed to load profile data: ${
//               err.response.data.message || err.message
//             }`
//           );
//         } else {
//           setError(`Failed to load profile data: ${err.message}`);
//         }
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [isLoggedIn]);

//   // Helper function to get prompt questions based on promptId-questionId
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

//   if (loading) {
//     return (
//       <div className="profile-loading">
//         <p>Loading profile...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="profile-error">
//         <p>{error}</p>
//         <Link to="/login">Please login again</Link>
//       </div>
//     );
//   }

//   if (!profileData) {
//     return (
//       <div className="profile-not-found">
//         <p>Profile not found. Please complete your profile.</p>
//         <Link to="/editprofile" className="edit-profile-button">
//           Complete Profile
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="profile-container">
//       <div className="profile-wrapper">
//         <div className="profile-header">
//           <div className="profile-photo-container">
//             {profileData.photos && profileData.photos.length > 0 ? (
//               <img
//                 src={profileData.photos[0]}
//                 alt={profileData.name}
//                 className="profile-main-photo"
//               />
//             ) : (
//               <div className="profile-photo-placeholder">No Photo</div>
//             )}
//           </div>
//           <div className="profile-header-info">
//             <h1 className="profile-name">{profileData.name || "User"}</h1>
//             <div className="profile-basic-info">
//               <p>
//                 {profileData.age ? `${profileData.age} • ` : ""}
//                 {profileData.gender ? `${profileData.gender} • ` : ""}
//                 {profileData.occupation || ""}
//               </p>
//               <p>
//                 {profileData.area ? `${profileData.area}, ` : ""}
//                 {profileData.city || ""}
//               </p>
//               {profileData.houseOwner && (
//                 <p className="profile-badge">Has a place to share</p>
//               )}
//             </div>
//             <Link to="/editprofile" className="edit-profile-button">
//               Edit Profile
//             </Link>
//           </div>
//         </div>

//         <div className="profile-section">
//           <h2 className="section-title">Housing Preferences</h2>
//           <div className="preference-tags">
//             <div className="preference-item">
//               <h3>Looking For</h3>
//               <span className="preference-tag">
//                 {profileData.lookingFor || "Not specified"}
//               </span>
//             </div>
//             <div className="preference-item">
//               <h3>Comfortable Living With</h3>
//               <div className="tag-container">
//                 {profileData.livingWith && profileData.livingWith.length > 0 ? (
//                   profileData.livingWith.map((option, index) => (
//                     <span key={index} className="preference-tag">
//                       {option}
//                     </span>
//                   ))
//                 ) : (
//                   <span className="preference-tag">Not specified</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {profileData.photos && profileData.photos.length > 0 && (
//           <div className="profile-section">
//             <h2 className="section-title">My Photos</h2>
//             <div className="place-photos">
//               {profileData.photos.map((photo, index) => (
//                 <div key={index} className="place-photo-card">
//                   <img src={photo} alt={`My photo ${index + 1}`} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {profileData.houseOwner &&
//           profileData.placePhotos &&
//           profileData.placePhotos.length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">My Place</h2>
//               <div className="place-photos">
//                 {profileData.placePhotos.map((photo, index) => (
//                   <div key={index} className="place-photo-card">
//                     <img src={photo} alt={`Place ${index + 1}`} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//         {profileData.promptAnswers &&
//           Object.keys(profileData.promptAnswers).length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">About Me</h2>
//               <div className="prompt-answers">
//                 {Object.entries(profileData.promptAnswers).map(
//                   ([promptKey, answer]) => (
//                     <div key={promptKey} className="prompt-answer-card">
//                       <h3 className="prompt-question">
//                         {getPromptQuestion(promptKey)}
//                       </h3>
//                       <p className="prompt-answer">{answer}</p>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../../AuthContext";
// import "./Profile.css";

// const Profile = () => {
//   const { isLoggedIn } = useAuth();
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       if (!isLoggedIn) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get(
//           "http://localhost:5001/api/profile/user",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         console.log("Profile response:", response.data);

//         setProfileData(response.data.profile);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching profile:", err);
//         if (err.response) {
//           console.error("Response data:", err.response.data);
//           console.error("Response status:", err.response.status);
//           setError(
//             `Failed to load profile data: ${
//               err.response.data.message || err.message
//             }`
//           );
//         } else {
//           setError(`Failed to load profile data: ${err.message}`);
//         }
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [isLoggedIn]);

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

//   const getCloudinaryUrl = (publicId) => {
//     return `https://res.cloudinary.com/dktggsuv9/image/upload/${publicId}.jpg`;
//   };

//   if (loading) {
//     return (
//       <div className="profile-loading">
//         <p>Loading profile...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="profile-error">
//         <p>{error}</p>
//         <Link to="/login">Please login again</Link>
//       </div>
//     );
//   }

//   if (!profileData) {
//     return (
//       <div className="profile-not-found">
//         <p>Profile not found. Please complete your profile.</p>
//         <Link to="/editprofile" className="edit-profile-button">
//           Complete Profile
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="profile-container">
//       <div className="profile-wrapper">
//         <div className="profile-header">
//           <div className="profile-photo-container">
//             {profileData.photos && profileData.photos.length > 0 ? (
//               <img
//                 src={getCloudinaryUrl(profileData.photos[0])}
//                 alt={profileData.name}
//                 className="profile-main-photo"
//               />
//             ) : (
//               <div className="profile-photo-placeholder">No Photo</div>
//             )}
//           </div>
//           <div className="profile-header-info">
//             <h1 className="profile-name">{profileData.name || "User"}</h1>
//             <div className="profile-basic-info">
//               <p>
//                 {profileData.age ? `${profileData.age} • ` : ""}
//                 {profileData.gender ? `${profileData.gender} • ` : ""}
//                 {profileData.occupation || ""}
//               </p>
//               <p>
//                 {profileData.area ? `${profileData.area}, ` : ""}
//                 {profileData.city || ""}
//               </p>
//               {profileData.houseOwner && (
//                 <p className="profile-badge">Has a place to share</p>
//               )}
//             </div>
//             <Link to="/editprofile" className="edit-profile-button">
//               Edit Profile
//             </Link>
//           </div>
//         </div>

//         <div className="profile-section">
//           <h2 className="section-title">Housing Preferences</h2>
//           <div className="preference-tags">
//             <div className="preference-item">
//               <h3>Looking For</h3>
//               <span className="preference-tag">
//                 {profileData.lookingFor || "Not specified"}
//               </span>
//             </div>
//             <div className="preference-item">
//               <h3>Comfortable Living With</h3>
//               <div className="tag-container">
//                 {profileData.livingWith && profileData.livingWith.length > 0 ? (
//                   profileData.livingWith.map((option, index) => (
//                     <span key={index} className="preference-tag">
//                       {option}
//                     </span>
//                   ))
//                 ) : (
//                   <span className="preference-tag">Not specified</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {profileData.photos && profileData.photos.length > 0 && (
//           <div className="profile-section">
//             <h2 className="section-title">My Photos</h2>
//             <div className="place-photos">
//               {profileData.photos.map((publicId, index) => (
//                 <div key={index} className="place-photo-card">
//                   <img
//                     src={getCloudinaryUrl(publicId)}
//                     alt={`My photo ${index + 1}`}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {profileData.houseOwner &&
//           profileData.placePhotos &&
//           profileData.placePhotos.length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">My Place</h2>
//               <div className="place-photos">
//                 {profileData.placePhotos.map((publicId, index) => (
//                   <div key={index} className="place-photo-card">
//                     <img
//                       src={getCloudinaryUrl(publicId)}
//                       alt={`Place ${index + 1}`}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//         {profileData.promptAnswers &&
//           Object.keys(profileData.promptAnswers).length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">About Me</h2>
//               <div className="prompt-answers">
//                 {Object.entries(profileData.promptAnswers).map(
//                   ([promptKey, answer]) => (
//                     <div key={promptKey} className="prompt-answer-card">
//                       <h3 className="prompt-question">
//                         {getPromptQuestion(promptKey)}
//                       </h3>
//                       <p className="prompt-answer">{answer}</p>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../../AuthContext";
// import "./Profile.css";

// const Profile = () => {
//   const { isLoggedIn } = useAuth();
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       if (!isLoggedIn) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get(
//           "http://localhost:5001/api/profile/user",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         console.log("Profile response:", response.data);

//         setProfileData(response.data.profile);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching profile:", err);
//         if (err.response) {
//           console.error("Response data:", err.response.data);
//           console.error("Response status:", err.response.status);
//           setError(
//             `Failed to load profile data: ${
//               err.response.data.message || err.message
//             }`
//           );
//         } else {
//           setError(`Failed to load profile data: ${err.message}`);
//         }
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [isLoggedIn]);

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

//   const getMulterUrl = (filename) => {
//     // Assuming your server serves the uploaded files from the "uploads" directory
//     return `http://localhost:5001/uploads/${filename}`;
//   };

//   if (loading) {
//     return (
//       <div className="profile-loading">
//         <p>Loading profile...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="profile-error">
//         <p>{error}</p>
//         <Link to="/login">Please login again</Link>
//       </div>
//     );
//   }

//   if (!profileData) {
//     return (
//       <div className="profile-not-found">
//         <p>Profile not found. Please complete your profile.</p>
//         <Link to="/editprofile" className="edit-profile-button">
//           Complete Profile
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="profile-container">
//       <div className="profile-wrapper">
//         <div className="profile-header">
//           <div className="profile-photo-container">
//             {profileData.photos && profileData.photos.length > 0 ? (
//               <img
//                 src={getMulterUrl(profileData.photos[0])}
//                 alt={profileData.name}
//                 className="profile-main-photo"
//               />
//             ) : (
//               <div className="profile-photo-placeholder">No Photo</div>
//             )}
//           </div>
//           <div className="profile-header-info">
//             <h1 className="profile-name">{profileData.name || "User"}</h1>
//             <div className="profile-basic-info">
//               <p>
//                 {profileData.age ? `${profileData.age} • ` : ""}
//                 {profileData.gender ? `${profileData.gender} • ` : ""}
//                 {profileData.occupation || ""}
//               </p>
//               <p>
//                 {profileData.area ? `${profileData.area}, ` : ""}
//                 {profileData.city || ""}
//               </p>
//               {profileData.houseOwner && (
//                 <p className="profile-badge">Has a place to share</p>
//               )}
//             </div>
//             <Link to="/editprofile" className="edit-profile-button">
//               Edit Profile
//             </Link>
//           </div>
//         </div>

//         <div className="profile-section">
//           <h2 className="section-title">Housing Preferences</h2>
//           <div className="preference-tags">
//             <div className="preference-item">
//               <h3>Looking For</h3>
//               <span className="preference-tag">
//                 {profileData.lookingFor || "Not specified"}
//               </span>
//             </div>
//             <div className="preference-item">
//               <h3>Comfortable Living With</h3>
//               <div className="tag-container">
//                 {profileData.livingWith && profileData.livingWith.length > 0 ? (
//                   profileData.livingWith.map((option, index) => (
//                     <span key={index} className="preference-tag">
//                       {option}
//                     </span>
//                   ))
//                 ) : (
//                   <span className="preference-tag">Not specified</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {profileData.photos && profileData.photos.length > 0 && (
//           <div className="profile-section">
//             <h2 className="section-title">My Photos</h2>
//             <div className="place-photos">
//               {profileData.photos.map((filename, index) => (
//                 <div key={index} className="place-photo-card">
//                   <img
//                     src={getMulterUrl(filename)}
//                     alt={`My photo ${index + 1}`}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {profileData.houseOwner &&
//           profileData.placePhotos &&
//           profileData.placePhotos.length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">My Place</h2>
//               <div className="place-photos">
//                 {profileData.placePhotos.map((filename, index) => (
//                   <div key={index} className="place-photo-card">
//                     <img
//                       src={getMulterUrl(filename)}
//                       alt={`Place ${index + 1}`}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//         {profileData.promptAnswers &&
//           Object.keys(profileData.promptAnswers).length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">About Me</h2>
//               <div className="prompt-answers">
//                 {Object.entries(profileData.promptAnswers).map(
//                   ([promptKey, answer]) => (
//                     <div key={promptKey} className="prompt-answer-card">
//                       <h3 className="prompt-question">
//                         {getPromptQuestion(promptKey)}
//                       </h3>
//                       <p className="prompt-answer">{answer}</p>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./Profile.css";

// const Profile = () => {
//   // Dummy profile data instead of fetching from API
//   const profileData = {
//     name: "Alex Johnson",
//     age: 28,
//     gender: "Non-binary",
//     occupation: "UX Designer",
//     area: "Downtown",
//     city: "San Francisco",
//     houseOwner: true,
//     lookingFor: "Room in shared apartment",
//     livingWith: ["Students", "Young professionals", "Couples"],
//     photos: ["profile1.jpg", "profile2.jpg", "profile3.jpg"],
//     placePhotos: [
//       "apartment1.jpg",
//       "apartment2.jpg",
//       "apartment3.jpg",
//       "apartment4.jpg",
//     ],
//     promptAnswers: {
//       "0-0": "Korean dramas and ice cream at midnight",
//       "0-2": "I once competed in a national chess tournament",
//       "0-5": "Authenticity, Growth, and Compassion",
//       "1-0": "Cozy but minimalist with lots of plants",
//       "1-3": "Love having guests over for dinner parties!",
//       "2-0": "Going for long hikes or reading with a cup of tea",
//       "3-1": "Leaving dirty dishes in the sink for days",
//       "3-4": "Direct but kind - I prefer talking things out early",
//       "4-0": "A reading nook with floor-to-ceiling bookshelves",
//     },
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

//   // Dummy function to simulate getting image URLs
//   const getImageUrl = (filename) => {
//     // Return placeholder images for demo purposes
//     return `https://placehold.co/600x400?text=${filename}`;
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-wrapper">
//         <div className="profile-header">
//           <div className="profile-photo-container">
//             {profileData.photos && profileData.photos.length > 0 ? (
//               <img
//                 src={getImageUrl(profileData.photos[0])}
//                 alt={profileData.name}
//                 className="profile-main-photo"
//               />
//             ) : (
//               <div className="profile-photo-placeholder">No Photo</div>
//             )}
//           </div>
//           <div className="profile-header-info">
//             <h1 className="profile-name">{profileData.name || "User"}</h1>
//             <div className="profile-basic-info">
//               <p>
//                 {profileData.age ? `${profileData.age} • ` : ""}
//                 {profileData.gender ? `${profileData.gender} • ` : ""}
//                 {profileData.occupation || ""}
//               </p>
//               <p>
//                 {profileData.area ? `${profileData.area}, ` : ""}
//                 {profileData.city || ""}
//               </p>
//               {profileData.houseOwner && (
//                 <p className="profile-badge">Has a place to share</p>
//               )}
//             </div>
//             <Link to="/editprofile" className="edit-profile-button">
//               Edit Profile
//             </Link>
//           </div>
//         </div>

//         <div className="profile-section">
//           <h2 className="section-title">Housing Preferences</h2>
//           <div className="preference-tags">
//             <div className="preference-item">
//               <h3>Looking For</h3>
//               <span className="preference-tag">
//                 {profileData.lookingFor || "Not specified"}
//               </span>
//             </div>
//             <div className="preference-item">
//               <h3>Comfortable Living With</h3>
//               <div className="tag-container">
//                 {profileData.livingWith && profileData.livingWith.length > 0 ? (
//                   profileData.livingWith.map((option, index) => (
//                     <span key={index} className="preference-tag">
//                       {option}
//                     </span>
//                   ))
//                 ) : (
//                   <span className="preference-tag">Not specified</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {profileData.photos && profileData.photos.length > 0 && (
//           <div className="profile-section">
//             <h2 className="section-title">My Photos</h2>
//             <div className="place-photos">
//               {profileData.photos.map((filename, index) => (
//                 <div key={index} className="place-photo-card">
//                   <img
//                     src={getImageUrl(filename)}
//                     alt={`My photo ${index + 1}`}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {profileData.houseOwner &&
//           profileData.placePhotos &&
//           profileData.placePhotos.length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">My Place</h2>
//               <div className="place-photos">
//                 {profileData.placePhotos.map((filename, index) => (
//                   <div key={index} className="place-photo-card">
//                     <img
//                       src={getImageUrl(filename)}
//                       alt={`Place ${index + 1}`}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//         {profileData.promptAnswers &&
//           Object.keys(profileData.promptAnswers).length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">About Me</h2>
//               <div className="prompt-answers">
//                 {Object.entries(profileData.promptAnswers).map(
//                   ([promptKey, answer]) => (
//                     <div key={promptKey} className="prompt-answer-card">
//                       <h3 className="prompt-question">
//                         {getPromptQuestion(promptKey)}
//                       </h3>
//                       <p className="prompt-answer">{answer}</p>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../AuthContext";
// import "./Profile.css";

// const Profile = () => {
//   const { isAuthenticated, user, loading } = useAuth();
//   const [error, setError] = useState(null);

//   // Helper function to get prompt questions based on promptId-questionId
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

//   if (loading) {
//     return (
//       <div className="profile-loading">
//         <p>Loading profile...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="profile-error">
//         <p>{error}</p>
//         <Link to="/login">Please login again</Link>
//       </div>
//     );
//   }

//   if (!isAuthenticated || !user) {
//     return (
//       <div className="profile-not-found">
//         <p>You must be logged in to view your profile.</p>
//         <Link to="/login" className="edit-profile-button">
//           Log In
//         </Link>
//       </div>
//     );
//   }

//   if (!user.name) {
//     return (
//       <div className="profile-not-found">
//         <p>Profile not found. Please complete your profile.</p>
//         <Link to="/editprofile" className="edit-profile-button">
//           Complete Profile
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="profile-container">
//       <div className="profile-wrapper">
//         <div className="profile-header">
//           <div className="profile-photo-container">
//             {user.photos && user.photos.length > 0 ? (
//               <img
//                 src={user.photos[0]}
//                 alt={user.name}
//                 className="profile-main-photo"
//               />
//             ) : (
//               <div className="profile-photo-placeholder">No Photo</div>
//             )}
//           </div>
//           <div className="profile-header-info">
//             <h1 className="profile-name">{user.name || "User"}</h1>
//             <div className="profile-basic-info">
//               <p>
//                 {user.age ? `${user.age} • ` : ""}
//                 {user.gender ? `${user.gender} • ` : ""}
//                 {user.occupation || ""}
//               </p>
//               <p>
//                 {user.area ? `${user.area}, ` : ""}
//                 {user.city || ""}
//               </p>
//               {user.houseOwner && (
//                 <p className="profile-badge">Has a place to share</p>
//               )}
//             </div>
//             <Link to="/editprofile" className="edit-profile-button">
//               Edit Profile
//             </Link>
//           </div>
//         </div>

//         <div className="profile-section">
//           <h2 className="section-title">Housing Preferences</h2>
//           <div className="preference-tags">
//             <div className="preference-item">
//               <h3>Looking For</h3>
//               <span className="preference-tag">
//                 {user.lookingFor || "Not specified"}
//               </span>
//             </div>
//             <div className="preference-item">
//               <h3>Comfortable Living With</h3>
//               <div className="tag-container">
//                 {user.livingWith && user.livingWith.length > 0 ? (
//                   user.livingWith.map((option, index) => (
//                     <span key={index} className="preference-tag">
//                       {option}
//                     </span>
//                   ))
//                 ) : (
//                   <span className="preference-tag">Not specified</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {user.photos && user.photos.length > 0 && (
//           <div className="profile-section">
//             <h2 className="section-title">My Photos</h2>
//             <div className="place-photos">
//               {user.photos.map((photo, index) => (
//                 <div key={index} className="place-photo-card">
//                   <img src={photo} alt={`My photo ${index + 1}`} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {user.houseOwner && user.placePhotos && user.placePhotos.length > 0 && (
//           <div className="profile-section">
//             <h2 className="section-title">My Place</h2>
//             <div className="place-photos">
//               {user.placePhotos.map((photo, index) => (
//                 <div key={index} className="place-photo-card">
//                   <img src={photo} alt={`Place ${index + 1}`} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {user.promptAnswers && Object.keys(user.promptAnswers).length > 0 && (
//           <div className="profile-section">
//             <h2 className="section-title">About Me</h2>
//             <div className="prompt-answers">
//               {Object.entries(user.promptAnswers).map(([promptKey, answer]) => (
//                 <div key={promptKey} className="prompt-answer-card">
//                   <h3 className="prompt-question">
//                     {getPromptQuestion(promptKey)}
//                   </h3>
//                   <p className="prompt-answer">{answer}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../../AuthContext";
// import "./Profile.css";

// const Profile = () => {
//   const { isAuthenticated, user: authUser, loading: authLoading } = useAuth();
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       if (!isAuthenticated) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get(
//           "http://localhost:5001/api/profile/user",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         console.log("Profile data received:", response.data);
//         setProfileData(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching profile data:", err);

//         // If we have authentication user but profile fetch failed, use authUser as fallback
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

//   // Helper function to get prompt questions based on promptId-questionId
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

//   if (authLoading || loading) {
//     return (
//       <div className="profile-loading">
//         <p>Loading profile...</p>
//       </div>
//     );
//   }

//   if (error && !profileData) {
//     return (
//       <div className="profile-error">
//         <p>{error}</p>
//         <Link to="/login">Please login again</Link>
//       </div>
//     );
//   }

//   if (!isAuthenticated) {
//     return (
//       <div className="profile-not-found">
//         <p>You must be logged in to view your profile.</p>
//         <Link to="/login" className="edit-profile-button">
//           Log In
//         </Link>
//       </div>
//     );
//   }

//   // Use profileData if available, fall back to authUser
//   const userData = profileData || authUser;

//   if (!userData || !userData.name) {
//     return (
//       <div className="profile-not-found">
//         <p>Profile not found. Please complete your profile.</p>
//         <Link to="/editprofile" className="edit-profile-button">
//           Complete Profile
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="profile-container">
//       <div className="profile-wrapper">
//         <div className="profile-header">
//           <div className="profile-photo-container">
//             {userData.photos && userData.photos.length > 0 ? (
//               <img
//                 src={userData.photos[0]}
//                 alt={userData.name}
//                 className="profile-main-photo"
//               />
//             ) : (
//               <div className="profile-photo-placeholder">No Photo</div>
//             )}
//           </div>
//           <div className="profile-header-info">
//             <h1 className="profile-name">{userData.name || "User"}</h1>
//             <div className="profile-basic-info">
//               <p>
//                 {userData.age ? `${userData.age} • ` : ""}
//                 {userData.gender ? `${userData.gender} • ` : ""}
//                 {userData.occupation || ""}
//               </p>
//               <p>
//                 {userData.area ? `${userData.area}, ` : ""}
//                 {userData.city || ""}
//               </p>
//               {userData.houseOwner && (
//                 <p className="profile-badge">Has a place to share</p>
//               )}
//             </div>
//             <Link to="/editprofile" className="edit-profile-button">
//               Edit Profile
//             </Link>
//           </div>
//         </div>

//         <div className="profile-section">
//           <h2 className="section-title">Housing Preferences</h2>
//           <div className="preference-tags">
//             <div className="preference-item">
//               <h3>Looking For</h3>
//               <span className="preference-tag">
//                 {userData.lookingFor || "Not specified"}
//               </span>
//             </div>
//             <div className="preference-item">
//               <h3>Comfortable Living With</h3>
//               <div className="tag-container">
//                 {userData.livingWith && userData.livingWith.length > 0 ? (
//                   userData.livingWith.map((option, index) => (
//                     <span key={index} className="preference-tag">
//                       {option}
//                     </span>
//                   ))
//                 ) : (
//                   <span className="preference-tag">Not specified</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {userData.photos && userData.photos.length > 0 && (
//           <div className="profile-section">
//             <h2 className="section-title">My Photos</h2>
//             <div className="place-photos">
//               {userData.photos.map((photo, index) => (
//                 <div key={index} className="place-photo-card">
//                   <img src={photo} alt={`My photo ${index + 1}`} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {userData.houseOwner &&
//           userData.placePhotos &&
//           userData.placePhotos.length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">My Place</h2>
//               <div className="place-photos">
//                 {userData.placePhotos.map((photo, index) => (
//                   <div key={index} className="place-photo-card">
//                     <img src={photo} alt={`Place ${index + 1}`} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//         {userData.promptAnswers &&
//           Object.keys(userData.promptAnswers).length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">About Me</h2>
//               <div className="prompt-answers">
//                 {Object.entries(userData.promptAnswers).map(
//                   ([promptKey, answer]) => (
//                     <div key={promptKey} className="prompt-answer-card">
//                       <h3 className="prompt-question">
//                         {getPromptQuestion(promptKey)}
//                       </h3>
//                       <p className="prompt-answer">{answer}</p>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../../AuthContext";
// import "./Profile.css";

// const Profile = () => {
//   const { isAuthenticated, user: authUser, loading: authLoading } = useAuth();
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       if (!isAuthenticated) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get(
//           "http://localhost:5001/api/profile/user",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         console.log("Profile data received:", response.data);
//         setProfileData(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching profile data:", err);

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

//   if (authLoading || loading) {
//     return (
//       <div className="profile-loading">
//         <p>Loading profile...</p>
//       </div>
//     );
//   }

//   if (error && !profileData) {
//     return (
//       <div className="profile-error">
//         <p>{error}</p>
//         <Link to="/login">Please login again</Link>
//       </div>
//     );
//   }

//   if (!isAuthenticated) {
//     return (
//       <div className="profile-not-found">
//         <p>You must be logged in to view your profile.</p>
//         <Link to="/login" className="edit-profile-button">
//           Log In
//         </Link>
//       </div>
//     );
//   }

//   const userData = profileData || authUser;

//   if (!userData || !userData.name) {
//     return (
//       <div className="profile-not-found">
//         <p>Profile not found. Please complete your profile.</p>
//         <Link to="/editprofile" className="edit-profile-button">
//           Complete Profile
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="profile-container">
//       <div className="profile-wrapper">
//         <div className="profile-header">
//           <div className="profile-photo-container">
//             {userData.photos && userData.photos.length > 0 ? (
//               <img
//                 src={userData.photos[0]}
//                 alt={userData.name}
//                 className="profile-main-photo"
//               />
//             ) : (
//               <div className="profile-photo-placeholder">No Photo</div>
//             )}
//           </div>
//           <div className="profile-header-info">
//             <h1 className="profile-name">{userData.name || "User"}</h1>
//             <div className="profile-basic-info">
//               <p>
//                 {userData.age ? `${userData.age} • ` : ""}
//                 {userData.gender ? `${userData.gender} • ` : ""}
//                 {userData.occupation || ""}
//               </p>
//               <p>
//                 {userData.area ? `${userData.area}, ` : ""}
//                 {userData.city || ""}
//               </p>
//               {userData.houseOwner && (
//                 <p className="profile-badge">Has a place to share</p>
//               )}
//             </div>
//             <Link to="/editprofile" className="edit-profile-button">
//               Edit Profile
//             </Link>
//           </div>
//         </div>

//         <div className="profile-section">
//           <h2 className="section-title">Housing Preferences</h2>
//           <div className="preference-tags">
//             <div className="preference-item">
//               <h3>Looking For</h3>
//               <span className="preference-tag">
//                 {userData.lookingFor || "Not specified"}
//               </span>
//             </div>
//             <div className="preference-item">
//               <h3>Comfortable Living With</h3>
//               <div className="tag-container">
//                 {userData.livingWith && userData.livingWith.length > 0 ? (
//                   userData.livingWith.map((option, index) => (
//                     <span key={index} className="preference-tag">
//                       {option}
//                     </span>
//                   ))
//                 ) : (
//                   <span className="preference-tag">Not specified</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {userData.photos && userData.photos.length > 0 && (
//           <div className="profile-section">
//             <h2 className="section-title">My Photos</h2>
//             <div className="place-photos">
//               {userData.photos.map((photo, index) => (
//                 <div key={index} className="place-photo-card">
//                   <img src={photo} alt={`My photo ${index + 1}`} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {userData.houseOwner &&
//           userData.placePhotos &&
//           userData.placePhotos.length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">My Place</h2>
//               <div className="place-photos">
//                 {userData.placePhotos.map((photo, index) => (
//                   <div key={index} className="place-photo-card">
//                     <img src={photo} alt={`Place ${index + 1}`} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//         {userData.promptAnswers &&
//           Object.keys(userData.promptAnswers).length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">About Me</h2>
//               <div className="prompt-answers">
//                 {Object.entries(userData.promptAnswers).map(
//                   ([promptKey, answer]) => {
//                     const question = getPromptQuestion(promptKey);
//                     return (
//                       <div key={promptKey} className="prompt-answer-item">
//                         <p className="prompt-question">{question}</p>
//                         <p className="prompt-answer">{answer}</p>
//                       </div>
//                     );
//                   }
//                 )}
//               </div>
//             </div>
//           )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../../AuthContext";
// import "./Profile.css";

// const Profile = () => {
//   const { isAuthenticated, user: authUser, loading: authLoading } = useAuth();
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

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

//         const response = await axios.get(
//           "http://localhost:5001/api/profile/user",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         console.log("Profile data received:", response.data);
//         setProfileData(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching profile data:", err);

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

//   if (authLoading || loading) {
//     return (
//       <div className="profile-loading">
//         <p>Loading profile...</p>
//       </div>
//     );
//   }

//   if (!isAuthenticated) {
//     return (
//       <div className="profile-not-found">
//         <p>You must be logged in to view your profile.</p>
//         <Link to="/login" className="edit-profile-button">
//           Log In
//         </Link>
//       </div>
//     );
//   }

//   const userData = profileData || authUser;

//   if (!userData || !userData.name) {
//     return (
//       <div className="profile-not-found">
//         <p>Profile not found. Please complete your profile.</p>
//         <Link to="/editprofile" className="edit-profile-button">
//           Complete Profile
//         </Link>
//       </div>
//     );
//   }

//   // Default values for missing fields to make it look like the example
//   const userDataWithDefaults = {
//     ...userData,
//     photos: userData.photos || [],
//     placePhotos: userData.placePhotos || [],
//     promptAnswers: userData.promptAnswers || {},
//     livingWith: userData.livingWith || [],
//     lookingFor: userData.lookingFor || "Not specified",
//     houseOwner: userData.houseOwner || false,
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-wrapper">
//         <div className="profile-header">
//           <div className="profile-photo-container">
//             {userDataWithDefaults.photos.length > 0 ? (
//               <img
//                 src={userDataWithDefaults.photos[0]}
//                 alt={userDataWithDefaults.name}
//                 className="profile-main-photo"
//               />
//             ) : (
//               <div className="profile-photo-placeholder">No Photo</div>
//             )}
//           </div>
//           <div className="profile-header-info">
//             <h1 className="profile-name">{userDataWithDefaults.name}</h1>
//             <div className="profile-basic-info">
//               <p>
//                 {userDataWithDefaults.age
//                   ? `${userDataWithDefaults.age} • `
//                   : ""}
//                 {userDataWithDefaults.gender
//                   ? `${userDataWithDefaults.gender} • `
//                   : ""}
//                 {userDataWithDefaults.occupation || ""}
//               </p>
//               <p>
//                 {userDataWithDefaults.area
//                   ? `${userDataWithDefaults.area}, `
//                   : ""}
//                 {userDataWithDefaults.city || ""}
//               </p>
//               {userDataWithDefaults.houseOwner && (
//                 <p className="profile-badge">Has a place to share</p>
//               )}
//             </div>
//             <Link to="/editprofile" className="edit-profile-button">
//               Edit Profile
//             </Link>
//           </div>
//         </div>

//         <div className="profile-section">
//           <h2 className="section-title">Housing Preferences</h2>
//           <div className="preference-tags">
//             <div className="preference-item">
//               <h3>Looking For</h3>
//               <span className="preference-tag">
//                 {userDataWithDefaults.lookingFor}
//               </span>
//             </div>
//             <div className="preference-item">
//               <h3>Comfortable Living With</h3>
//               <div className="tag-container">
//                 {userDataWithDefaults.livingWith.length > 0 ? (
//                   userDataWithDefaults.livingWith.map((option, index) => (
//                     <span key={index} className="preference-tag">
//                       {option}
//                     </span>
//                   ))
//                 ) : (
//                   <span className="preference-tag">Not specified</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {userDataWithDefaults.photos &&
//           userDataWithDefaults.photos.length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">My Photos</h2>
//               <div className="place-photos">
//                 {userDataWithDefaults.photos.map((photo, index) => (
//                   <div key={index} className="place-photo-card">
//                     <img src={photo} alt={`My photo ${index + 1}`} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//         {userDataWithDefaults.houseOwner &&
//           userDataWithDefaults.placePhotos &&
//           userDataWithDefaults.placePhotos.length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">My Place</h2>
//               <div className="place-photos">
//                 {userDataWithDefaults.placePhotos.map((photo, index) => (
//                   <div key={index} className="place-photo-card">
//                     <img src={photo} alt={`Place ${index + 1}`} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//         {userDataWithDefaults.promptAnswers &&
//           Object.keys(userDataWithDefaults.promptAnswers).length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">About Me</h2>
//               <div className="prompt-answers">
//                 {Object.entries(userDataWithDefaults.promptAnswers).map(
//                   ([promptKey, answer]) => {
//                     const question = getPromptQuestion(promptKey);
//                     return (
//                       <div key={promptKey} className="prompt-answer-card">
//                         <h3 className="prompt-question">{question}</h3>
//                         <p className="prompt-answer">{answer}</p>
//                       </div>
//                     );
//                   }
//                 )}
//               </div>
//             </div>
//           )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../../AuthContext";

// const Profile = () => {
//   const { isAuthenticated, user: authUser, loading: authLoading } = useAuth();
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

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

//         const response = await axios.get(
//           "http://localhost:5001/api/profile/user/${authUser.id}",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         console.log("Profile data received:", response.data);
//         setProfileData(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching profile data:", err);

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

//   if (authLoading || loading) {
//     return (
//       <div className="profile-loading">
//         <p>Loading profile...</p>
//       </div>
//     );
//   }

//   if (error && !profileData) {
//     return (
//       <div className="profile-error">
//         <p>{error}</p>
//         <Link to="/login">Please login again</Link>
//       </div>
//     );
//   }

//   if (!isAuthenticated) {
//     return (
//       <div className="profile-not-found">
//         <p>You must be logged in to view your profile.</p>
//         <Link to="/login" className="edit-profile-button">
//           Log In
//         </Link>
//       </div>
//     );
//   }

//   const userData = profileData || authUser;

//   if (!userData || !userData.name) {
//     return (
//       <div className="profile-not-found">
//         <p>Profile not found. Please complete your profile.</p>
//         <Link to="/editprofile" className="edit-profile-button">
//           Complete Profile
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="profile-container">
//       <div className="profile-wrapper">
//         <div className="profile-header">
//           <div className="profile-photo-container">
//             {userData.photos && userData.photos.length > 0 ? (
//               <img
//                 src={userData.photos[0]}
//                 alt={userData.name}
//                 className="profile-main-photo"
//               />
//             ) : (
//               <div className="profile-photo-placeholder">No Photo</div>
//             )}
//           </div>
//           <div className="profile-header-info">
//             <h1 className="profile-name">{userData.name || "User"}</h1>
//             <div className="profile-basic-info">
//               <p>
//                 {userData.age ? `${userData.age} • ` : ""}
//                 {userData.gender ? `${userData.gender} • ` : ""}
//                 {userData.occupation || ""}
//               </p>
//               <p>
//                 {userData.area ? `${userData.area}, ` : ""}
//                 {userData.city || ""}
//               </p>
//               {userData.houseOwner && (
//                 <p className="profile-badge">Has a place to share</p>
//               )}
//             </div>
//             <Link to="/editprofile" className="edit-profile-button">
//               Edit Profile
//             </Link>
//           </div>
//         </div>

//         <div className="profile-section">
//           <h2 className="section-title">Housing Preferences</h2>
//           <div className="preference-tags">
//             <div className="preference-item">
//               <h3>Looking For</h3>
//               <span className="preference-tag">
//                 {userData.lookingFor || "Not specified"}
//               </span>
//             </div>
//             <div className="preference-item">
//               <h3>Comfortable Living With</h3>
//               <div className="tag-container">
//                 {userData.livingWith && userData.livingWith.length > 0 ? (
//                   userData.livingWith.map((option, index) => (
//                     <span key={index} className="preference-tag">
//                       {option}
//                     </span>
//                   ))
//                 ) : (
//                   <span className="preference-tag">Not specified</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {userData.photos && userData.photos.length > 0 && (
//           <div className="profile-section">
//             <h2 className="section-title">My Photos</h2>
//             <div className="place-photos">
//               {userData.photos.map((photo, index) => (
//                 <div key={index} className="place-photo-card">
//                   <img src={photo} alt={`My photo ${index + 1}`} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {userData.houseOwner &&
//           userData.placePhotos &&
//           userData.placePhotos.length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">My Place</h2>
//               <div className="place-photos">
//                 {userData.placePhotos.map((photo, index) => (
//                   <div key={index} className="place-photo-card">
//                     <img src={photo} alt={`Place ${index + 1}`} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//         {userData.promptAnswers &&
//           Object.keys(userData.promptAnswers).length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">About Me</h2>
//               <div className="prompt-answers">
//                 {Object.entries(userData.promptAnswers).map(
//                   ([promptKey, answer]) => {
//                     const question = getPromptQuestion(promptKey);
//                     return (
//                       <div key={promptKey} className="prompt-answer-card">
//                         <h3 className="prompt-question">{question}</h3>
//                         <p className="prompt-answer">{answer}</p>
//                       </div>
//                     );
//                   }
//                 )}
//               </div>
//             </div>
//           )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../../AuthContext";

// const Profile = () => {
//   const { isAuthenticated, user: authUser, loading: authLoading } = useAuth();
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

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

//   if (authLoading || loading) {
//     return (
//       <div className="profile-loading">
//         <p>Loading profile...</p>
//       </div>
//     );
//   }

//   if (error && !profileData) {
//     return (
//       <div className="profile-error">
//         <p>{error}</p>
//         <Link to="/login">Please login again</Link>
//       </div>
//     );
//   }

//   if (!isAuthenticated) {
//     return (
//       <div className="profile-not-found">
//         <p>You must be logged in to view your profile.</p>
//         <Link to="/login" className="edit-profile-button">
//           Log In
//         </Link>
//       </div>
//     );
//   }

//   // Get userData from either profileData or authUser
//   const userData = profileData || authUser;

//   // Debug to see what we have
//   console.log("User data to display:", userData);

//   // Check if we have valid profile data - fixed condition
//   const hasValidProfile = userData && (userData._id || userData.__id);

//   if (!hasValidProfile) {
//     return (
//       <div className="profile-not-found">
//         <p>Profile not found. Please complete your profile.</p>
//         <Link to="/editprofile" className="edit-profile-button">
//           Complete Profile
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="profile-container">
//       <div className="profile-wrapper">
//         <div className="profile-header">
//           <div className="profile-photo-container">
//             {userData.photos && userData.photos.length > 0 ? (
//               <img
//                 src={userData.photos[0]}
//                 alt={userData.name}
//                 className="profile-main-photo"
//               />
//             ) : (
//               <div className="profile-photo-placeholder">No Photo</div>
//             )}
//           </div>
//           <div className="profile-header-info">
//             <h1 className="profile-name">{userData.name || "User"}</h1>
//             <div className="profile-basic-info">
//               <p>
//                 {userData.age ? `${userData.age} • ` : ""}
//                 {userData.gender ? `${userData.gender} • ` : ""}
//                 {userData.occupation || ""}
//               </p>
//               <p>
//                 {userData.area ? `${userData.area}, ` : ""}
//                 {userData.city || ""}
//               </p>
//               {userData.houseOwner && (
//                 <p className="profile-badge">Has a place to share</p>
//               )}
//             </div>
//             <Link to="/editprofile" className="edit-profile-button">
//               Edit Profile
//             </Link>
//           </div>
//         </div>

//         <div className="profile-section">
//           <h2 className="section-title">Housing Preferences</h2>
//           <div className="preference-tags">
//             <div className="preference-item">
//               <h3>Looking For</h3>
//               <span className="preference-tag">
//                 {userData.lookingFor || "Not specified"}
//               </span>
//             </div>
//             <div className="preference-item">
//               <h3>Comfortable Living With</h3>
//               <div className="tag-container">
//                 {userData.livingWith && userData.livingWith.length > 0 ? (
//                   userData.livingWith.map((option, index) => (
//                     <span key={index} className="preference-tag">
//                       {option}
//                     </span>
//                   ))
//                 ) : (
//                   <span className="preference-tag">Not specified</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {userData.photos && userData.photos.length > 0 && (
//           <div className="profile-section">
//             <h2 className="section-title">My Photos</h2>
//             <div className="place-photos">
//               {userData.photos.map((photo, index) => (
//                 <div key={index} className="place-photo-card">
//                   <img src={photo} alt={`My photo ${index + 1}`} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {userData.houseOwner &&
//           userData.placePhotos &&
//           userData.placePhotos.length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">My Place</h2>
//               <div className="place-photos">
//                 {userData.placePhotos.map((photo, index) => (
//                   <div key={index} className="place-photo-card">
//                     <img src={photo} alt={`Place ${index + 1}`} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//         {userData.promptAnswers &&
//           Object.keys(userData.promptAnswers).length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">About Me</h2>
//               <div className="prompt-answers">
//                 {Object.entries(userData.promptAnswers).map(
//                   ([promptKey, answer]) => {
//                     const question = getPromptQuestion(promptKey);
//                     return (
//                       <div key={promptKey} className="prompt-answer-card">
//                         <h3 className="prompt-question">{question}</h3>
//                         <p className="prompt-answer">{answer}</p>
//                       </div>
//                     );
//                   }
//                 )}
//               </div>
//             </div>
//           )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../../AuthContext";
// import "./Profile.css";

// const Profile = () => {
//   const { isAuthenticated, user: authUser, loading: authLoading } = useAuth();
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

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

//   if (authLoading || loading) {
//     return (
//       <div className="profile-loading">
//         <p>Loading profile...</p>
//       </div>
//     );
//   }

//   if (error && !profileData) {
//     return (
//       <div className="profile-error">
//         <p>{error}</p>
//         <Link to="/login">Please login again</Link>
//       </div>
//     );
//   }

//   if (!isAuthenticated) {
//     return (
//       <div className="profile-not-found">
//         <p>You must be logged in to view your profile.</p>
//         <Link to="/login" className="edit-profile-button">
//           Log In
//         </Link>
//       </div>
//     );
//   }

//   // Get userData from either profileData or authUser
//   const userData = profileData || authUser;

//   // Debug to see what we have
//   console.log("User data to display:", userData);

//   // Check if we have valid profile data - fixed condition
//   const hasValidProfile = userData && (userData._id || userData.__id);

//   if (!hasValidProfile) {
//     return (
//       <div className="profile-not-found">
//         <p>Profile not found. Please complete your profile.</p>
//         <Link to="/editprofile" className="edit-profile-button">
//           Complete Profile
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="profile-container">
//       <div className="profile-wrapper">
//         <div className="profile-header">
//           <div className="profile-photo-container">
//             {userData.photos && userData.photos.length > 0 ? (
//               <img
//                 src={userData.photos[0]}
//                 alt={userData.name}
//                 className="profile-main-photo"
//               />
//             ) : (
//               <div className="profile-photo-placeholder">No Photo</div>
//             )}
//           </div>
//           <div className="profile-header-info">
//             <h1 className="profile-name">{userData.name || "User"}</h1>
//             <div className="profile-basic-info">
//               <p>
//                 {userData.age ? `${userData.age} • ` : ""}
//                 {userData.gender ? `${userData.gender} • ` : ""}
//                 {userData.occupation || ""}
//               </p>
//               <p>
//                 {userData.area ? `${userData.area}, ` : ""}
//                 {userData.city || ""}
//               </p>
//               {userData.houseOwner && (
//                 <p className="profile-badge">Has a place to share</p>
//               )}
//             </div>
//             <Link to="/editprofile" className="edit-profile-button">
//               Edit Profile
//             </Link>
//           </div>
//         </div>

//         <div className="profile-section">
//           <h2 className="section-title">Housing Preferences</h2>
//           <div className="preference-tags">
//             <div className="preference-item">
//               <h3>Looking For</h3>
//               <span className="preference-tag">
//                 {userData.lookingFor || "Not specified"}
//               </span>
//             </div>
//             <div className="preference-item">
//               <h3>Comfortable Living With</h3>
//               <div className="tag-container">
//                 {userData.livingWith && userData.livingWith.length > 0 ? (
//                   userData.livingWith.map((option, index) => (
//                     <span key={index} className="preference-tag">
//                       {option}
//                     </span>
//                   ))
//                 ) : (
//                   <span className="preference-tag">Not specified</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {userData.photos && userData.photos.length > 0 && (
//           <div className="profile-section">
//             <h2 className="section-title">My Photos</h2>
//             <div className="place-photos">
//               {userData.photos.map((photo, index) => (
//                 <div key={index} className="place-photo-card">
//                   <img src={photo} alt={`My photo ${index + 1}`} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {userData.houseOwner &&
//           userData.placePhotos &&
//           userData.placePhotos.length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">My Place</h2>
//               <div className="place-photos">
//                 {userData.placePhotos.map((photo, index) => (
//                   <div key={index} className="place-photo-card">
//                     <img src={photo} alt={`Place ${index + 1}`} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//         {userData.promptAnswers &&
//           Object.keys(userData.promptAnswers).length > 0 && (
//             <div className="profile-section">
//               <h2 className="section-title">About Me</h2>
//               <div className="prompt-answers">
//                 {Object.entries(userData.promptAnswers).map(
//                   ([promptKey, answer]) => {
//                     const question = getPromptQuestion(promptKey);
//                     return (
//                       <div key={promptKey} className="prompt-answer-card">
//                         <h3 className="prompt-question">{question}</h3>
//                         <p className="prompt-answer">{answer}</p>
//                       </div>
//                     );
//                   }
//                 )}
//               </div>
//             </div>
//           )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../AuthContext";
import "./Profile.css";

const Profile = () => {
  const { isAuthenticated, user: authUser, loading: authLoading } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) =>
      prev < profileData.photos.length - 1 ? prev + 1 : 0
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) =>
      prev > 0 ? prev - 1 : profileData.photos.length - 1
    );
  };

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

  if (authLoading || loading) {
    return (
      <div className="profile-loading">
        <p>Loading profile...</p>
      </div>
    );
  }

  if (error && !profileData) {
    return (
      <div className="profile-error">
        <p>{error}</p>
        <Link to="/login">Please login again</Link>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="profile-not-found">
        <p>You must be logged in to view your profile.</p>
        <Link to="/login" className="edit-profile-button">
          Log In
        </Link>
      </div>
    );
  }

  // Get userData from either profileData or authUser
  const userData = profileData || authUser;

  // Debug to see what we have
  console.log("User data to display:", userData);

  // Check if we have valid profile data - fixed condition
  const hasValidProfile = userData && (userData._id || userData.__id);

  if (!hasValidProfile) {
    return (
      <div className="profile-not-found">
        <p>Profile not found. Please complete your profile.</p>
        <Link to="/editprofile" className="edit-profile-button">
          Complete Profile
        </Link>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-wrapper">
        <div className="profile-header">
          <div className="profile-photo-container">
            {profileData.photos && profileData.photos.length > 0 ? (
              <img
                src={profileData.photos[0]}
                alt={profileData.name}
                className="profile-main-photo"
              />
            ) : (
              <div className="profile-photo-placeholder">No Photo</div>
            )}
          </div>

          {/* <div className="profile-photo-container">
            {profileData.photos && profileData.photos.length > 0 ? (
              <div className="photo-viewer">
                <button
                  className="photo-nav-button prev"
                  onClick={prevPhoto}
                  disabled={profileData.photos.length <= 1}
                >
                  &lt;
                </button>
                <img
                  src={profileData.photos[currentPhotoIndex]}
                  alt={`${profileData.name}'s photo ${currentPhotoIndex + 1}`}
                  className="profile-main-photo"
                  onError={(e) => {
                    e.target.src = "/default-profile.jpg"; // Fallback image
                  }}
                />
                <button
                  className="photo-nav-button next"
                  onClick={nextPhoto}
                  disabled={profileData.photos.length <= 1}
                >
                  &gt;
                </button>
                <div className="photo-counter">
                  {currentPhotoIndex + 1}/{profileData.photos.length}
                </div>
              </div>
            ) : (
              <div className="profile-photo-placeholder">
                <img src="/default-profile.jpg" alt="Default profile" />
              </div>
            )}
          </div> */}
          <div className="profile-header-info">
            <h1 className="profile-name">{userData.name || "User"}</h1>
            <div className="profile-basic-info">
              <p>
                {userData.age ? `${userData.age} • ` : ""}
                {userData.gender ? `${userData.gender} • ` : ""}
                {userData.occupation || ""}
              </p>
              <p>
                {userData.area ? `${userData.area}, ` : ""}
                {userData.city || ""}
              </p>
              {userData.houseOwner && (
                <p className="profile-badge">Has a place to share</p>
              )}
            </div>
            <Link to="/editprofile" className="edit-profile-button">
              Edit Profile
            </Link>
          </div>
        </div>

        <div className="profile-section">
          <h2 className="section-title">Housing Preferences</h2>
          <div className="preference-tags">
            <div className="preference-item">
              <h3>Looking For</h3>
              <span className="preference-tag">
                {userData.lookingFor || "Not specified"}
              </span>
            </div>
            <div className="preference-item">
              <h3>Comfortable Living With</h3>
              <div className="tag-container">
                {userData.livingWith && userData.livingWith.length > 0 ? (
                  userData.livingWith.map((option, index) => (
                    <span key={index} className="preference-tag">
                      {option}
                    </span>
                  ))
                ) : (
                  <span className="preference-tag">Not specified</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {userData.photos && userData.photos.length > 0 && (
          <div className="profile-section">
            <h2 className="section-title">My Photos</h2>
            <div className="place-photos">
              {/* Always show the first two photos as personal photos */}
              {userData.photos.slice(0, 2).map((photo, index) => (
                <div key={index} className="place-photo-card">
                  <img src={photo} alt={`My photo ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        )}

        {userData.houseOwner &&
          userData.photos &&
          userData.photos.length > 2 && (
            <div className="profile-section">
              <h2 className="section-title">My Place</h2>
              <div className="place-photos">
                {/* Show photos starting from index 2 as place photos */}
                {userData.photos.slice(2).map((photo, index) => (
                  <div key={index} className="place-photo-card">
                    <img src={photo} alt={`Place ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          )}

        {userData.promptAnswers &&
          Object.keys(userData.promptAnswers).length > 0 && (
            <div className="profile-section">
              <h2 className="section-title">About Me</h2>
              <div className="prompt-answers">
                {Object.entries(userData.promptAnswers).map(
                  ([promptKey, answer]) => {
                    const question = getPromptQuestion(promptKey);
                    return (
                      <div key={promptKey} className="prompt-answer-card">
                        <h3 className="prompt-question">{question}</h3>
                        <p className="prompt-answer">{answer}</p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Profile;
