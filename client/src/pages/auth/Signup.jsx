// import React, { useState } from "react";
// import "./Signup.css";

// const livingWithOptions = ["Men", "Women", "Everyone"];

// const lookingForOptions = [
//   "Short-term Stay",
//   "Long-term Stay",
//   "Medium-term Stay",
//   "Flexible / Month-to-month",
//   "I'm still figuring it out",
// ];

// const genderOptions = ["Male", "Female", "Non-binary", "Prefer not to say"];

// const promptsList = [
//   {
//     id: "0",
//     name: "About Me",
//     questions: [
//       { id: "0", question: "My guilty pleasure is" },
//       { id: "1", question: "On weekends, you'll find me" },
//       { id: "2", question: "A fun fact about me" },
//       { id: "3", question: "I'm known for always" },
//       { id: "4", question: "One thing I can't live without" },
//       { id: "5", question: "My 3 core values are" },
//       { id: "6", question: "Biggest red flag I avoid" },
//     ],
//   },
//   {
//     id: "1",
//     name: "Living Style",
//     questions: [
//       { id: "0", question: "My ideal home vibe is" },
//       { id: "1", question: "I like to keep my space" },
//       { id: "2", question: "I usually sleep at" },
//       { id: "3", question: "Guests at home: yay or nay?" },
//       { id: "4", question: "Noise level I'm comfortable with" },
//       { id: "5", question: "I share food if..." },
//       { id: "6", question: "My go-to comfort item at home" },
//     ],
//   },
//   {
//     id: "2",
//     name: "Self Care",
//     questions: [
//       { id: "0", question: "I unwind by" },
//       { id: "1", question: "My boundaries include" },
//       { id: "2", question: "I feel supported when" },
//       { id: "3", question: "To me, self-care means" },
//       { id: "4", question: "I handle stress by" },
//       { id: "5", question: "Mental health check-ins are" },
//     ],
//   },
//   {
//     id: "3",
//     name: "Roommate Vibes",
//     questions: [
//       { id: "0", question: "A green flag in a roommate is" },
//       { id: "1", question: "A dealbreaker for me is" },
//       { id: "2", question: "I'd love it if my roommate and I..." },
//       { id: "3", question: "I prefer roommates who are" },
//       { id: "4", question: "My communication style is" },
//       { id: "5", question: "Conflict resolution: my go-to move is" },
//     ],
//   },
//   {
//     id: "4",
//     name: "Dream Home",
//     questions: [
//       { id: "0", question: "My dream corner in our home would have" },
//       { id: "1", question: "A must-have in our apartment is" },
//       { id: "2", question: "The vibe I'm manifesting for our place" },
//       { id: "3", question: "A home tradition I'd love to start" },
//       { id: "4", question: "If I could design one wall, it'd have" },
//     ],
//   },
// ];

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     occupation: "",
//     mobile: "",
//     aadhar: "",
//     linkedin: "",
//     dob: "",
//     city: "Delhi",
//     area: "",
//     photos: [],
//     houseOwner: false,
//     livingWith: [],
//     lookingFor: "",
//     selectedPrompts: [],
//     promptAnswers: {},
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleMultiSelectChange = (e, category) => {
//     const { value, checked } = e.target;
//     if (category === "livingWith") {
//       setFormData((prev) => ({
//         ...prev,
//         livingWith: checked
//           ? [...prev.livingWith, value]
//           : prev.livingWith.filter((item) => item !== value),
//       }));
//     }
//   };

//   const handlePromptSelect = (promptId, questionId) => {
//     const promptKey = `${promptId}-${questionId}`;
//     const isAlreadySelected = formData.selectedPrompts.includes(promptKey);

//     // If already selected, remove it
//     if (isAlreadySelected) {
//       setFormData((prev) => ({
//         ...prev,
//         selectedPrompts: prev.selectedPrompts.filter(
//           (key) => key !== promptKey
//         ),
//         promptAnswers: {
//           ...prev.promptAnswers,
//           [promptKey]: undefined,
//         },
//       }));
//       return;
//     }

//     // If not selected but already have 3 prompts, don't add
//     if (formData.selectedPrompts.length >= 3) {
//       alert("You can only select up to 3 prompts.");
//       return;
//     }

//     // Add the new prompt
//     setFormData((prev) => ({
//       ...prev,
//       selectedPrompts: [...prev.selectedPrompts, promptKey],
//       promptAnswers: {
//         ...prev.promptAnswers,
//         [promptKey]: "",
//       },
//     }));
//   };

//   const handlePromptAnswer = (promptKey, answer) => {
//     setFormData((prev) => ({
//       ...prev,
//       promptAnswers: {
//         ...prev.promptAnswers,
//         [promptKey]: answer,
//       },
//     }));
//   };

//   const handlePhotoUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const maxPhotos = formData.houseOwner ? 6 : 2;

//     if (formData.photos.length + files.length > maxPhotos) {
//       alert(`Maximum ${maxPhotos} photos allowed.`);
//       return;
//     }

//     const newPhotos = files.map((file) => URL.createObjectURL(file));
//     setFormData((prev) => ({
//       ...prev,
//       photos: [...prev.photos, ...newPhotos],
//     }));
//   };

//   const handleURLPhoto = () => {
//     const maxPhotos = formData.houseOwner ? 6 : 2;
//     if (formData.photos.length >= maxPhotos) {
//       alert(`Maximum ${maxPhotos} photos allowed.`);
//       return;
//     }
//     const url = prompt("Enter photo URL:");
//     if (url) {
//       setFormData((prev) => ({
//         ...prev,
//         photos: [...prev.photos, url],
//       }));
//     }
//   };

//   const handleRemovePhoto = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       photos: prev.photos.filter((_, i) => i !== index),
//     }));
//   };

//   const cityOptions = [
//     "Delhi",
//     "Mumbai",
//     "Bangalore",
//     "Chennai",
//     "Hyderabad",
//     "Kolkata",
//     "Pune",
//     "Ahmedabad",
//     "Jaipur",
//     "Lucknow",
//     "Other",
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     alert("Form submitted!");
//   };

//   const getPromptQuestionByKey = (promptKey) => {
//     if (!promptKey) return null;
//     const [promptId, questionId] = promptKey.split("-");
//     const promptCategory = promptsList.find((p) => p.id === promptId);
//     if (!promptCategory) return null;
//     const question = promptCategory.questions.find((q) => q.id === questionId);
//     return question ? question.question : null;
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-wrapper">
//         <h1 className="signup-title">Signup for Roomble</h1>
//         <p className="signup-subtitle">
//           Find your perfect roommate and living space
//         </p>

//         <form onSubmit={handleSubmit} className="signup-form">
//           {/* Basic Profile Info */}
//           <section className="form-section">
//             <h2 className="section-title">Basic Profile</h2>
//             <div className="form-grid">
//               <div className="form-group">
//                 <label>Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Age</label>
//                 <input
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   min="18"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Gender</label>
//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   {genderOptions.map((option) => (
//                     <option key={option} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Occupation</label>
//                 <input
//                   type="text"
//                   name="occupation"
//                   value={formData.occupation}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Personal Info */}
//           <section className="form-section">
//             <h2 className="section-title">Contact Information</h2>
//             <div className="form-grid">
//               {["mobile", "aadhar", "linkedin", "dob"].map((field) => (
//                 <div className="form-group" key={field}>
//                   <label>
//                     {field === "dob"
//                       ? "Date of Birth"
//                       : field.charAt(0).toUpperCase() + field.slice(1)}
//                   </label>
//                   <input
//                     type={field === "dob" ? "date" : "text"}
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleChange}
//                     required={field !== "linkedin"}
//                   />
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Location */}
//           <section className="form-section">
//             <h2 className="section-title">Your Location</h2>
//             <div className="form-grid">
//               <div className="form-group">
//                 <label>City</label>
//                 <select
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                 >
//                   {cityOptions.map((city) => (
//                     <option key={city} value={city}>
//                       {city}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Area/Neighborhood</label>
//                 <input
//                   type="text"
//                   name="area"
//                   value={formData.area}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Photos */}
//           <section className="form-section">
//             <h2 className="section-title">Photos</h2>
//             <div className="toggle-container">
//               <span className="toggle-label">I have a house to share</span>
//               <label className="toggle-switch">
//                 <input
//                   type="checkbox"
//                   name="houseOwner"
//                   checked={formData.houseOwner}
//                   onChange={handleChange}
//                 />
//                 <span className="toggle-slider"></span>
//               </label>
//             </div>
//             <p className="info-text">
//               {formData.houseOwner
//                 ? "Upload up to 6 photos of your place."
//                 : "Upload up to 2 photos of yourself."}
//             </p>

//             <div className="photo-controls">
//               <input
//                 type="file"
//                 multiple
//                 accept="image/*"
//                 onChange={handlePhotoUpload}
//                 className="photo-upload"
//                 id="photo-upload"
//               />
//               <label htmlFor="photo-upload" className="photo-upload-label">
//                 Select Photos
//               </label>
//               <button
//                 type="button"
//                 className="photo-url-button"
//                 onClick={handleURLPhoto}
//               >
//                 Add Photo via URL
//               </button>
//             </div>

//             <div className="photo-preview">
//               {formData.photos.map((photo, idx) => (
//                 <div key={idx} className="photo-card">
//                   <img src={photo} alt={`Uploaded ${idx}`} />
//                   <button
//                     type="button"
//                     className="remove-photo"
//                     onClick={() => handleRemovePhoto(idx)}
//                   >
//                     ✕
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Living Preferences */}
//           <section className="form-section">
//             <h2 className="section-title">Living Preferences</h2>
//             <p className="section-subtitle">I'm comfortable living with:</p>
//             <div className="option-buttons">
//               {livingWithOptions.map((option) => (
//                 <label
//                   key={option}
//                   className={`option-button ${
//                     formData.livingWith.includes(option) ? "selected" : ""
//                   }`}
//                 >
//                   <input
//                     type="checkbox"
//                     value={option}
//                     checked={formData.livingWith.includes(option)}
//                     onChange={(e) => handleMultiSelectChange(e, "livingWith")}
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </section>

//           {/* Looking For */}
//           <section className="form-section">
//             <h2 className="section-title">What Are You Looking For?</h2>
//             <div className="option-buttons">
//               {lookingForOptions.map((option) => (
//                 <label
//                   key={option}
//                   className={`option-button ${
//                     formData.lookingFor === option ? "selected" : ""
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name="lookingFor"
//                     value={option}
//                     checked={formData.lookingFor === option}
//                     onChange={handleChange}
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </section>

//           {/* Prompts */}
//           <section className="form-section">
//             <h2 className="section-title">Select 3 Prompts</h2>
//             <p className="section-subtitle">
//               Help others get to know you better
//             </p>
//             <div className="prompt-selection">
//               {promptsList.map((category) => (
//                 <div key={category.id} className="prompt-category">
//                   <h3 className="category-name">{category.name}</h3>
//                   <div className="prompt-questions">
//                     {category.questions.map((question) => {
//                       const promptKey = `${category.id}-${question.id}`;
//                       const isSelected =
//                         formData.selectedPrompts.includes(promptKey);

//                       return (
//                         <div key={question.id} className="prompt-question-item">
//                           <div
//                             className={`prompt-question ${
//                               isSelected ? "selected" : ""
//                             }`}
//                             onClick={() =>
//                               handlePromptSelect(category.id, question.id)
//                             }
//                           >
//                             {question.question}
//                             {isSelected && (
//                               <span className="selected-mark">✓</span>
//                             )}
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {formData.selectedPrompts.length > 0 && (
//               <div className="selected-prompts">
//                 <h3>Your Selected Prompts</h3>
//                 {formData.selectedPrompts.map((promptKey) => (
//                   <div key={promptKey} className="prompt-answer">
//                     <label>{getPromptQuestionByKey(promptKey)}</label>
//                     <textarea
//                       value={formData.promptAnswers[promptKey] || ""}
//                       onChange={(e) =>
//                         handlePromptAnswer(promptKey, e.target.value)
//                       }
//                       placeholder="Your answer..."
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </section>

//           {/* Submit */}
//           <button type="submit" className="submit-button">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// import React, { useState } from "react";
// import "./Signup.css";

// const livingWithOptions = ["Men", "Women", "Everyone"];

// const lookingForOptions = [
//   "Short-term Stay",
//   "Long-term Stay",
//   "Medium-term Stay",
//   "Flexible / Month-to-month",
//   "I'm still figuring it out",
// ];

// const genderOptions = ["Male", "Female", "Non-binary", "Prefer not to say"];

// const promptsList = [
//   {
//     id: "0",
//     name: "About Me",
//     questions: [
//       { id: "0", question: "My guilty pleasure is" },
//       { id: "1", question: "On weekends, you'll find me" },
//       { id: "2", question: "A fun fact about me" },
//       { id: "3", question: "I'm known for always" },
//       { id: "4", question: "One thing I can't live without" },
//       { id: "5", question: "My 3 core values are" },
//       { id: "6", question: "Biggest red flag I avoid" },
//     ],
//   },
//   {
//     id: "1",
//     name: "Living Style",
//     questions: [
//       { id: "0", question: "My ideal home vibe is" },
//       { id: "1", question: "I like to keep my space" },
//       { id: "2", question: "I usually sleep at" },
//       { id: "3", question: "Guests at home: yay or nay?" },
//       { id: "4", question: "Noise level I'm comfortable with" },
//       { id: "5", question: "I share food if..." },
//       { id: "6", question: "My go-to comfort item at home" },
//     ],
//   },
//   {
//     id: "2",
//     name: "Self Care",
//     questions: [
//       { id: "0", question: "I unwind by" },
//       { id: "1", question: "My boundaries include" },
//       { id: "2", question: "I feel supported when" },
//       { id: "3", question: "To me, self-care means" },
//       { id: "4", question: "I handle stress by" },
//       { id: "5", question: "Mental health check-ins are" },
//     ],
//   },
//   {
//     id: "3",
//     name: "Roommate Vibes",
//     questions: [
//       { id: "0", question: "A green flag in a roommate is" },
//       { id: "1", question: "A dealbreaker for me is" },
//       { id: "2", question: "I'd love it if my roommate and I..." },
//       { id: "3", question: "I prefer roommates who are" },
//       { id: "4", question: "My communication style is" },
//       { id: "5", question: "Conflict resolution: my go-to move is" },
//     ],
//   },
//   {
//     id: "4",
//     name: "Dream Home",
//     questions: [
//       { id: "0", question: "My dream corner in our home would have" },
//       { id: "1", question: "A must-have in our apartment is" },
//       { id: "2", question: "The vibe I'm manifesting for our place" },
//       { id: "3", question: "A home tradition I'd love to start" },
//       { id: "4", question: "If I could design one wall, it'd have" },
//     ],
//   },
// ];

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     occupation: "",
//     mobile: "",
//     aadhar: "",
//     linkedin: "",
//     dob: "",
//     city: "Delhi",
//     area: "",
//     password: "",
//     retypePassword: "",
//     photos: [],
//     houseOwner: false,
//     livingWith: [],
//     lookingFor: "",
//     selectedPrompts: [],
//     promptAnswers: {},
//   });

//   const [passwordError, setPasswordError] = useState("");

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));

//     // Clear password error when either password field changes
//     if (name === "password" || name === "retypePassword") {
//       setPasswordError("");
//     }
//   };

//   const handleMultiSelectChange = (e, category) => {
//     const { value, checked } = e.target;
//     if (category === "livingWith") {
//       setFormData((prev) => ({
//         ...prev,
//         livingWith: checked
//           ? [...prev.livingWith, value]
//           : prev.livingWith.filter((item) => item !== value),
//       }));
//     }
//   };

//   const handlePromptSelect = (promptId, questionId) => {
//     const promptKey = `${promptId}-${questionId}`;
//     const isAlreadySelected = formData.selectedPrompts.includes(promptKey);

//     // If already selected, remove it
//     if (isAlreadySelected) {
//       setFormData((prev) => ({
//         ...prev,
//         selectedPrompts: prev.selectedPrompts.filter(
//           (key) => key !== promptKey
//         ),
//         promptAnswers: {
//           ...prev.promptAnswers,
//           [promptKey]: undefined,
//         },
//       }));
//       return;
//     }

//     // If not selected but already have 3 prompts, don't add
//     if (formData.selectedPrompts.length >= 3) {
//       alert("You can only select up to 3 prompts.");
//       return;
//     }

//     // Add the new prompt
//     setFormData((prev) => ({
//       ...prev,
//       selectedPrompts: [...prev.selectedPrompts, promptKey],
//       promptAnswers: {
//         ...prev.promptAnswers,
//         [promptKey]: "",
//       },
//     }));
//   };

//   const handlePromptAnswer = (promptKey, answer) => {
//     setFormData((prev) => ({
//       ...prev,
//       promptAnswers: {
//         ...prev.promptAnswers,
//         [promptKey]: answer,
//       },
//     }));
//   };

//   const handlePhotoUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const maxPhotos = formData.houseOwner ? 6 : 2;

//     if (formData.photos.length + files.length > maxPhotos) {
//       alert(`Maximum ${maxPhotos} photos allowed.`);
//       return;
//     }

//     const newPhotos = files.map((file) => URL.createObjectURL(file));
//     setFormData((prev) => ({
//       ...prev,
//       photos: [...prev.photos, ...newPhotos],
//     }));
//   };

//   const handleURLPhoto = () => {
//     const maxPhotos = formData.houseOwner ? 6 : 2;
//     if (formData.photos.length >= maxPhotos) {
//       alert(`Maximum ${maxPhotos} photos allowed.`);
//       return;
//     }
//     const url = prompt("Enter photo URL:");
//     if (url) {
//       setFormData((prev) => ({
//         ...prev,
//         photos: [...prev.photos, url],
//       }));
//     }
//   };

//   const handleRemovePhoto = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       photos: prev.photos.filter((_, i) => i !== index),
//     }));
//   };

//   const cityOptions = [
//     "Delhi",
//     "Mumbai",
//     "Bangalore",
//     "Chennai",
//     "Hyderabad",
//     "Kolkata",
//     "Pune",
//     "Ahmedabad",
//     "Jaipur",
//     "Lucknow",
//     "Other",
//   ];

//   const validatePasswords = () => {
//     if (formData.password !== formData.retypePassword) {
//       setPasswordError("Passwords do not match");
//       return false;
//     }
//     if (formData.password.length < 8) {
//       setPasswordError("Password must be at least 8 characters long");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate passwords
//     if (!validatePasswords()) {
//       return;
//     }

//     console.log(formData);
//     alert("Form submitted!");
//   };

//   const getPromptQuestionByKey = (promptKey) => {
//     if (!promptKey) return null;
//     const [promptId, questionId] = promptKey.split("-");
//     const promptCategory = promptsList.find((p) => p.id === promptId);
//     if (!promptCategory) return null;
//     const question = promptCategory.questions.find((q) => q.id === questionId);
//     return question ? question.question : null;
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-wrapper">
//         <h1 className="signup-title">Signup for Roomble</h1>
//         <p className="signup-subtitle">
//           Find your perfect roommate and living space
//         </p>

//         <form onSubmit={handleSubmit} className="signup-form">
//           {/* Basic Profile Info */}
//           <section className="form-section">
//             <h2 className="section-title">Basic Profile</h2>
//             <div className="form-grid">
//               <div className="form-group">
//                 <label>Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Age</label>
//                 <input
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   min="18"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Gender</label>
//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   {genderOptions.map((option) => (
//                     <option key={option} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Occupation</label>
//                 <input
//                   type="text"
//                   name="occupation"
//                   value={formData.occupation}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Password Section */}
//           <section className="form-section">
//             <h2 className="section-title">Create Password</h2>
//             <div className="form-grid">
//               <div className="form-group">
//                 <label>Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   minLength="8"
//                   required
//                 />
//                 <small className="input-hint">Minimum 8 characters</small>
//               </div>

//               <div className="form-group">
//                 <label>Re-type Password</label>
//                 <input
//                   type="password"
//                   name="retypePassword"
//                   value={formData.retypePassword}
//                   onChange={handleChange}
//                   required
//                 />
//                 {passwordError && (
//                   <p className="error-message">{passwordError}</p>
//                 )}
//               </div>
//             </div>
//           </section>

//           {/* Personal Info */}
//           <section className="form-section">
//             <h2 className="section-title">Contact Information</h2>
//             <div className="form-grid">
//               {["mobile", "aadhar", "linkedin", "dob"].map((field) => (
//                 <div className="form-group" key={field}>
//                   <label>
//                     {field === "dob"
//                       ? "Date of Birth"
//                       : field.charAt(0).toUpperCase() + field.slice(1)}
//                   </label>
//                   <input
//                     type={field === "dob" ? "date" : "text"}
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleChange}
//                     required={field !== "linkedin"}
//                   />
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Location */}
//           <section className="form-section">
//             <h2 className="section-title">Your Location</h2>
//             <div className="form-grid">
//               <div className="form-group">
//                 <label>City</label>
//                 <select
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                 >
//                   {cityOptions.map((city) => (
//                     <option key={city} value={city}>
//                       {city}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Area/Neighborhood</label>
//                 <input
//                   type="text"
//                   name="area"
//                   value={formData.area}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Photos */}
//           <section className="form-section">
//             <h2 className="section-title">Photos</h2>
//             <div className="toggle-container">
//               <span className="toggle-label">I have a house to share</span>
//               <label className="toggle-switch">
//                 <input
//                   type="checkbox"
//                   name="houseOwner"
//                   checked={formData.houseOwner}
//                   onChange={handleChange}
//                 />
//                 <span className="toggle-slider"></span>
//               </label>
//             </div>
//             <p className="info-text">
//               {formData.houseOwner
//                 ? "Upload up to 6 photos of your place."
//                 : "Upload up to 2 photos of yourself."}
//             </p>

//             <div className="photo-controls">
//               <input
//                 type="file"
//                 multiple
//                 accept="image/*"
//                 onChange={handlePhotoUpload}
//                 className="photo-upload"
//                 id="photo-upload"
//               />
//               <label htmlFor="photo-upload" className="photo-upload-label">
//                 Select Photos
//               </label>
//               <button
//                 type="button"
//                 className="photo-url-button"
//                 onClick={handleURLPhoto}
//               >
//                 Add Photo via URL
//               </button>
//             </div>

//             <div className="photo-preview">
//               {formData.photos.map((photo, idx) => (
//                 <div key={idx} className="photo-card">
//                   <img src={photo} alt={`Uploaded ${idx}`} />
//                   <button
//                     type="button"
//                     className="remove-photo"
//                     onClick={() => handleRemovePhoto(idx)}
//                   >
//                     ✕
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Living Preferences */}
//           <section className="form-section">
//             <h2 className="section-title">Living Preferences</h2>
//             <p className="section-subtitle">I'm comfortable living with:</p>
//             <div className="option-buttons">
//               {livingWithOptions.map((option) => (
//                 <label
//                   key={option}
//                   className={`option-button ${
//                     formData.livingWith.includes(option) ? "selected" : ""
//                   }`}
//                 >
//                   <input
//                     type="checkbox"
//                     value={option}
//                     checked={formData.livingWith.includes(option)}
//                     onChange={(e) => handleMultiSelectChange(e, "livingWith")}
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </section>

//           {/* Looking For */}
//           <section className="form-section">
//             <h2 className="section-title">What Are You Looking For?</h2>
//             <div className="option-buttons">
//               {lookingForOptions.map((option) => (
//                 <label
//                   key={option}
//                   className={`option-button ${
//                     formData.lookingFor === option ? "selected" : ""
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name="lookingFor"
//                     value={option}
//                     checked={formData.lookingFor === option}
//                     onChange={handleChange}
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </section>

//           {/* Prompts */}
//           <section className="form-section">
//             <h2 className="section-title">Select 3 Prompts</h2>
//             <p className="section-subtitle">
//               Help others get to know you better
//             </p>
//             <div className="prompt-selection">
//               {promptsList.map((category) => (
//                 <div key={category.id} className="prompt-category">
//                   <h3 className="category-name">{category.name}</h3>
//                   <div className="prompt-questions">
//                     {category.questions.map((question) => {
//                       const promptKey = `${category.id}-${question.id}`;
//                       const isSelected =
//                         formData.selectedPrompts.includes(promptKey);

//                       return (
//                         <div key={question.id} className="prompt-question-item">
//                           <div
//                             className={`prompt-question ${
//                               isSelected ? "selected" : ""
//                             }`}
//                             onClick={() =>
//                               handlePromptSelect(category.id, question.id)
//                             }
//                           >
//                             {question.question}
//                             {isSelected && (
//                               <span className="selected-mark">✓</span>
//                             )}
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {formData.selectedPrompts.length > 0 && (
//               <div className="selected-prompts">
//                 <h3>Your Selected Prompts</h3>
//                 {formData.selectedPrompts.map((promptKey) => (
//                   <div key={promptKey} className="prompt-answer">
//                     <label>{getPromptQuestionByKey(promptKey)}</label>
//                     <textarea
//                       value={formData.promptAnswers[promptKey] || ""}
//                       onChange={(e) =>
//                         handlePromptAnswer(promptKey, e.target.value)
//                       }
//                       placeholder="Your answer..."
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </section>

//           {/* Submit */}
//           <button type="submit" className="submit-button">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// import React, { useState } from "react";
// import "./Signup.css";
// import axios from "axios"; // Make sure to install axios: npm install axios

// const livingWithOptions = ["Men", "Women", "Everyone"];

// const lookingForOptions = [
//   "Short-term Stay",
//   "Long-term Stay",
//   "Medium-term Stay",
//   "Flexible / Month-to-month",
//   "I'm still figuring it out",
// ];

// const genderOptions = ["Male", "Female", "Non-binary", "Prefer not to say"];

// const promptsList = [
//   {
//     id: "0",
//     name: "About Me",
//     questions: [
//       { id: "0", question: "My guilty pleasure is" },
//       { id: "1", question: "On weekends, you'll find me" },
//       { id: "2", question: "A fun fact about me" },
//       { id: "3", question: "I'm known for always" },
//       { id: "4", question: "One thing I can't live without" },
//       { id: "5", question: "My 3 core values are" },
//       { id: "6", question: "Biggest red flag I avoid" },
//     ],
//   },
//   {
//     id: "1",
//     name: "Living Style",
//     questions: [
//       { id: "0", question: "My ideal home vibe is" },
//       { id: "1", question: "I like to keep my space" },
//       { id: "2", question: "I usually sleep at" },
//       { id: "3", question: "Guests at home: yay or nay?" },
//       { id: "4", question: "Noise level I'm comfortable with" },
//       { id: "5", question: "I share food if..." },
//       { id: "6", question: "My go-to comfort item at home" },
//     ],
//   },
//   {
//     id: "2",
//     name: "Self Care",
//     questions: [
//       { id: "0", question: "I unwind by" },
//       { id: "1", question: "My boundaries include" },
//       { id: "2", question: "I feel supported when" },
//       { id: "3", question: "To me, self-care means" },
//       { id: "4", question: "I handle stress by" },
//       { id: "5", question: "Mental health check-ins are" },
//     ],
//   },
//   {
//     id: "3",
//     name: "Roommate Vibes",
//     questions: [
//       { id: "0", question: "A green flag in a roommate is" },
//       { id: "1", question: "A dealbreaker for me is" },
//       { id: "2", question: "I'd love it if my roommate and I..." },
//       { id: "3", question: "I prefer roommates who are" },
//       { id: "4", question: "My communication style is" },
//       { id: "5", question: "Conflict resolution: my go-to move is" },
//     ],
//   },
//   {
//     id: "4",
//     name: "Dream Home",
//     questions: [
//       { id: "0", question: "My dream corner in our home would have" },
//       { id: "1", question: "A must-have in our apartment is" },
//       { id: "2", question: "The vibe I'm manifesting for our place" },
//       { id: "3", question: "A home tradition I'd love to start" },
//       { id: "4", question: "If I could design one wall, it'd have" },
//     ],
//   },
// ];

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     occupation: "",
//     mobile: "",
//     aadhar: "",
//     email: "",
//     linkedin: "",
//     dob: "",
//     city: "Delhi",
//     area: "",
//     password: "",
//     retypePassword: "",
//     photos: [],
//     houseOwner: false,
//     livingWith: [],
//     lookingFor: "",
//     selectedPrompts: [],
//     promptAnswers: {},
//   });

//   const [passwordError, setPasswordError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [submitError, setSubmitError] = useState("");
//   const [submitSuccess, setSubmitSuccess] = useState("");

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));

//     // Clear password error when either password field changes
//     if (name === "password" || name === "retypePassword") {
//       setPasswordError("");
//     }
//   };

//   const handleMultiSelectChange = (e, category) => {
//     const { value, checked } = e.target;
//     if (category === "livingWith") {
//       setFormData((prev) => ({
//         ...prev,
//         livingWith: checked
//           ? [...prev.livingWith, value]
//           : prev.livingWith.filter((item) => item !== value),
//       }));
//     }
//   };

//   const handlePromptSelect = (promptId, questionId) => {
//     const promptKey = `${promptId}-${questionId}`;
//     const isAlreadySelected = formData.selectedPrompts.includes(promptKey);

//     // If already selected, remove it
//     if (isAlreadySelected) {
//       setFormData((prev) => ({
//         ...prev,
//         selectedPrompts: prev.selectedPrompts.filter(
//           (key) => key !== promptKey
//         ),
//         promptAnswers: {
//           ...prev.promptAnswers,
//           [promptKey]: undefined,
//         },
//       }));
//       return;
//     }

//     // If not selected but already have 3 prompts, don't add
//     if (formData.selectedPrompts.length >= 3) {
//       alert("You can only select up to 3 prompts.");
//       return;
//     }

//     // Add the new prompt
//     setFormData((prev) => ({
//       ...prev,
//       selectedPrompts: [...prev.selectedPrompts, promptKey],
//       promptAnswers: {
//         ...prev.promptAnswers,
//         [promptKey]: "",
//       },
//     }));
//   };

//   const handlePromptAnswer = (promptKey, answer) => {
//     setFormData((prev) => ({
//       ...prev,
//       promptAnswers: {
//         ...prev.promptAnswers,
//         [promptKey]: answer,
//       },
//     }));
//   };

//   const handlePhotoUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const maxPhotos = formData.houseOwner ? 6 : 2;

//     if (formData.photos.length + files.length > maxPhotos) {
//       alert(`Maximum ${maxPhotos} photos allowed.`);
//       return;
//     }

//     const newPhotos = files.map((file) => URL.createObjectURL(file));
//     setFormData((prev) => ({
//       ...prev,
//       photos: [...prev.photos, ...newPhotos],
//     }));
//   };

//   const handleURLPhoto = () => {
//     const maxPhotos = formData.houseOwner ? 6 : 2;
//     if (formData.photos.length >= maxPhotos) {
//       alert(`Maximum ${maxPhotos} photos allowed.`);
//       return;
//     }
//     const url = prompt("Enter photo URL:");
//     if (url) {
//       setFormData((prev) => ({
//         ...prev,
//         photos: [...prev.photos, url],
//       }));
//     }
//   };

//   const handleRemovePhoto = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       photos: prev.photos.filter((_, i) => i !== index),
//     }));
//   };

//   const cityOptions = [
//     "Delhi",
//     "Mumbai",
//     "Bangalore",
//     "Chennai",
//     "Hyderabad",
//     "Kolkata",
//     "Pune",
//     "Ahmedabad",
//     "Jaipur",
//     "Lucknow",
//     "Other",
//   ];

//   const validatePasswords = () => {
//     if (formData.password !== formData.retypePassword) {
//       setPasswordError("Passwords do not match");
//       return false;
//     }
//     if (formData.password.length < 8) {
//       setPasswordError("Password must be at least 8 characters long");
//       return false;
//     }
//     return true;
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setSubmitError("");
//   //   setSubmitSuccess("");

//   //   // Validate passwords
//   //   if (!validatePasswords()) {
//   //     return;
//   //   }

//   //   // Prepare data for API
//   //   const userData = {
//   //     name: formData.name,
//   //     email: formData.email, // Using mobile as email since your backend expects an email
//   //     age: parseInt(formData.age),
//   //     gender: formData.gender,
//   //     occupation: formData.occupation,
//   //     mobile: formData.mobile,
//   //     aadhar: formData.aadhar,
//   //     linkedin: formData.linkedin,
//   //     dob: formData.dob,
//   //     city: formData.city,
//   //     area: formData.area,
//   //     password: formData.password,
//   //     photos: formData.photos,
//   //     houseOwner: formData.houseOwner,
//   //     livingWith: formData.livingWith,
//   //     lookingFor: formData.lookingFor,
//   //     selectedPrompts: formData.selectedPrompts,
//   //     promptAnswers: Object.fromEntries(
//   //       Object.entries(formData.promptAnswers).filter(
//   //         ([_, v]) => v !== undefined
//   //       )
//   //     ),
//   //   };

//   //   try {
//   //     setLoading(true);
//   //     // Send request to backend API
//   //     console.log("Signup payload:", userData);

//   //     const response = await axios.post(
//   //       "http://localhost:5001/api/auth/register",
//   //       userData
//   //     );

//   //     // Handle success
//   //     setSubmitSuccess("User registered successfully! Redirecting to login...");
//   //     console.log("Registration successful:", response.data);

//   //     // Redirect to login after 2 seconds
//   //     setTimeout(() => {
//   //       window.location.href = "/login"; // Adjust this to your login route
//   //     }, 2000);
//   //   } catch (error) {
//   //     // Handle error
//   //     console.error("Registration error:", error);
//   //     setSubmitError(
//   //       error.response?.data?.message ||
//   //         "Registration failed. Please try again."
//   //     );
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitError("");
//     setSubmitSuccess("");

//     // Validate passwords
//     if (!validatePasswords()) {
//       return;
//     }

//     // Check if email is provided
//     if (!formData.email || formData.email.trim() === "") {
//       setSubmitError("Email is required");
//       return;
//     }

//     // Check if required prompts are answered
//     if (formData.selectedPrompts.length < 3) {
//       setSubmitError("Please select and answer 3 prompts");
//       return;
//     }

//     // Check if all selected prompts have answers
//     const unansweredPrompts = formData.selectedPrompts.filter(
//       (promptKey) => !formData.promptAnswers[promptKey]
//     );
//     if (unansweredPrompts.length > 0) {
//       setSubmitError("Please answer all selected prompts");
//       return;
//     }

//     // Check if living preferences are selected
//     if (formData.livingWith.length === 0) {
//       setSubmitError("Please select who you're comfortable living with");
//       return;
//     }

//     // Check if looking for preference is selected
//     if (!formData.lookingFor) {
//       setSubmitError("Please select what you're looking for");
//       return;
//     }

//     // Prepare data for API
//     const userData = {
//       name: formData.name,
//       email: formData.email,
//       age: parseInt(formData.age),
//       gender: formData.gender,
//       occupation: formData.occupation,
//       mobile: formData.mobile,
//       aadhar: formData.aadhar,
//       linkedin: formData.linkedin,
//       dob: formData.dob,
//       city: formData.city,
//       area: formData.area,
//       password: formData.password,
//       photos: formData.photos,
//       houseOwner: formData.houseOwner,
//       livingWith: formData.livingWith,
//       lookingFor: formData.lookingFor,
//       selectedPrompts: formData.selectedPrompts,
//       promptAnswers: Object.fromEntries(
//         Object.entries(formData.promptAnswers).filter(
//           ([key, value]) =>
//             value !== undefined && formData.selectedPrompts.includes(key)
//         )
//       ),
//     };

//     try {
//       setLoading(true);
//       // Send request to backend API
//       console.log("Signup payload:", userData);

//       const response = await axios.post(
//         "http://localhost:5001/api/auth/register",
//         userData
//       );

//       // Handle success
//       setSubmitSuccess("User registered successfully! Redirecting to login...");
//       console.log("Registration successful:", response.data);

//       // Redirect to login after 2 seconds
//       setTimeout(() => {
//         window.location.href = "/login"; // Adjust this to your login route
//       }, 2000);
//     } catch (error) {
//       // Handle error
//       console.error("Registration error:", error);

//       // Show detailed validation errors if available
//       if (error.response?.data?.errors) {
//         const errorMessages = error.response.data.errors
//           .map((err) => err.msg)
//           .join(", ");
//         setSubmitError(errorMessages);
//       } else {
//         setSubmitError(
//           error.response?.data?.message ||
//             "Registration failed. Please try again."
//         );
//       }
//     } finally {
//       setLoading(false);
//     }
//   };
//   const getPromptQuestionByKey = (promptKey) => {
//     if (!promptKey) return null;
//     const [promptId, questionId] = promptKey.split("-");
//     const promptCategory = promptsList.find((p) => p.id === promptId);
//     if (!promptCategory) return null;
//     const question = promptCategory.questions.find((q) => q.id === questionId);
//     return question ? question.question : null;
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-wrapper">
//         <h1 className="signup-title">Signup for Roomble</h1>
//         <p className="signup-subtitle">
//           Find your perfect roommate and living space
//         </p>

//         {submitSuccess && (
//           <div className="success-message">{submitSuccess}</div>
//         )}

//         {submitError && <div className="error-message">{submitError}</div>}

//         <form onSubmit={handleSubmit} className="signup-form">
//           {/* Basic Profile Info */}
//           <section className="form-section">
//             <h2 className="section-title">Basic Profile</h2>
//             <div className="form-grid">
//               <div className="form-group">
//                 <label>Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Age</label>
//                 <input
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   min="18"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Gender</label>
//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   {genderOptions.map((option) => (
//                     <option key={option} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Occupation</label>
//                 <input
//                   type="text"
//                   name="occupation"
//                   value={formData.occupation}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Password Section */}
//           <section className="form-section">
//             <h2 className="section-title">Create Password</h2>
//             <div className="form-grid">
//               <div className="form-group">
//                 <label>Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   minLength="8"
//                   required
//                 />
//                 <small className="input-hint">Minimum 8 characters</small>
//               </div>

//               <div className="form-group">
//                 <label>Re-type Password</label>
//                 <input
//                   type="password"
//                   name="retypePassword"
//                   value={formData.retypePassword}
//                   onChange={handleChange}
//                   required
//                 />
//                 {passwordError && (
//                   <p className="error-message">{passwordError}</p>
//                 )}
//               </div>
//             </div>
//           </section>

//           {/* Personal Info */}
//           <section className="form-section">
//             <h2 className="section-title">Contact Information</h2>
//             <div className="form-grid">
//               {["mobile", "aadhar", "linkedin", "dob", "email"].map((field) => (
//                 <div className="form-group" key={field}>
//                   <label>
//                     {field === "dob"
//                       ? "Date of Birth"
//                       : field.charAt(0).toUpperCase() + field.slice(1)}
//                   </label>
//                   <input
//                     type={field === "dob" ? "date" : "text"}
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleChange}
//                     required={field !== "linkedin"}
//                   />
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Location */}
//           <section className="form-section">
//             <h2 className="section-title">Your Location</h2>
//             <div className="form-grid">
//               <div className="form-group">
//                 <label>City</label>
//                 <select
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                 >
//                   {cityOptions.map((city) => (
//                     <option key={city} value={city}>
//                       {city}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Area/Neighborhood</label>
//                 <input
//                   type="text"
//                   name="area"
//                   value={formData.area}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Photos */}
//           <section className="form-section">
//             <h2 className="section-title">Photos</h2>
//             <div className="toggle-container">
//               <span className="toggle-label">I have a house to share</span>
//               <label className="toggle-switch">
//                 <input
//                   type="checkbox"
//                   name="houseOwner"
//                   checked={formData.houseOwner}
//                   onChange={handleChange}
//                 />
//                 <span className="toggle-slider"></span>
//               </label>
//             </div>
//             <p className="info-text">
//               {formData.houseOwner
//                 ? "Upload up to 6 photos of your place."
//                 : "Upload up to 2 photos of yourself."}
//             </p>

//             <div className="photo-controls">
//               <input
//                 type="file"
//                 multiple
//                 accept="image/*"
//                 onChange={handlePhotoUpload}
//                 className="photo-upload"
//                 id="photo-upload"
//               />
//               <label htmlFor="photo-upload" className="photo-upload-label">
//                 Select Photos
//               </label>
//               <button
//                 type="button"
//                 className="photo-url-button"
//                 onClick={handleURLPhoto}
//               >
//                 Add Photo via URL
//               </button>
//             </div>

//             <div className="photo-preview">
//               {formData.photos.map((photo, idx) => (
//                 <div key={idx} className="photo-card">
//                   <img src={photo} alt={`Uploaded ${idx}`} />
//                   <button
//                     type="button"
//                     className="remove-photo"
//                     onClick={() => handleRemovePhoto(idx)}
//                   >
//                     ✕
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Living Preferences */}
//           <section className="form-section">
//             <h2 className="section-title">Living Preferences</h2>
//             <p className="section-subtitle">I'm comfortable living with:</p>
//             <div className="option-buttons">
//               {livingWithOptions.map((option) => (
//                 <label
//                   key={option}
//                   className={`option-button ${
//                     formData.livingWith.includes(option) ? "selected" : ""
//                   }`}
//                 >
//                   <input
//                     type="checkbox"
//                     value={option}
//                     checked={formData.livingWith.includes(option)}
//                     onChange={(e) => handleMultiSelectChange(e, "livingWith")}
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </section>

//           {/* Looking For */}
//           <section className="form-section">
//             <h2 className="section-title">What Are You Looking For?</h2>
//             <div className="option-buttons">
//               {lookingForOptions.map((option) => (
//                 <label
//                   key={option}
//                   className={`option-button ${
//                     formData.lookingFor === option ? "selected" : ""
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name="lookingFor"
//                     value={option}
//                     checked={formData.lookingFor === option}
//                     onChange={handleChange}
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </section>

//           {/* Prompts */}
//           <section className="form-section">
//             <h2 className="section-title">Select 3 Prompts</h2>
//             <p className="section-subtitle">
//               Help others get to know you better
//             </p>
//             <div className="prompt-selection">
//               {promptsList.map((category) => (
//                 <div key={category.id} className="prompt-category">
//                   <h3 className="category-name">{category.name}</h3>
//                   <div className="prompt-questions">
//                     {category.questions.map((question) => {
//                       const promptKey = `${category.id}-${question.id}`;
//                       const isSelected =
//                         formData.selectedPrompts.includes(promptKey);

//                       return (
//                         <div key={question.id} className="prompt-question-item">
//                           <div
//                             className={`prompt-question ${
//                               isSelected ? "selected" : ""
//                             }`}
//                             onClick={() =>
//                               handlePromptSelect(category.id, question.id)
//                             }
//                           >
//                             {question.question}
//                             {isSelected && (
//                               <span className="selected-mark">✓</span>
//                             )}
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {formData.selectedPrompts.length > 0 && (
//               <div className="selected-prompts">
//                 <h3>Your Selected Prompts</h3>
//                 {formData.selectedPrompts.map((promptKey) => (
//                   <div key={promptKey} className="prompt-answer">
//                     <label>{getPromptQuestionByKey(promptKey)}</label>
//                     <textarea
//                       value={formData.promptAnswers[promptKey] || ""}
//                       onChange={(e) =>
//                         handlePromptAnswer(promptKey, e.target.value)
//                       }
//                       placeholder="Your answer..."
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </section>

//           {/* Submit */}
//           <button type="submit" className="submit-button" disabled={loading}>
//             {loading ? "Submitting..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// import React, { useState } from "react";
// import "./Signup.css";
// import axios from "axios"; // Make sure to install axios: npm install axios

// const livingWithOptions = ["Men", "Women", "Everyone"];

// const lookingForOptions = [
//   "Short-term Stay",
//   "Long-term Stay",
//   "Medium-term Stay",
//   "Flexible / Month-to-month",
//   "I'm still figuring it out",
// ];

// const genderOptions = ["Male", "Female", "Non-binary", "Prefer not to say"];

// const promptsList = [
//   {
//     id: "0",
//     name: "About Me",
//     questions: [
//       { id: "0", question: "My guilty pleasure is" },
//       { id: "1", question: "On weekends, you'll find me" },
//       { id: "2", question: "A fun fact about me" },
//       { id: "3", question: "I'm known for always" },
//       { id: "4", question: "One thing I can't live without" },
//       { id: "5", question: "My 3 core values are" },
//       { id: "6", question: "Biggest red flag I avoid" },
//     ],
//   },
//   {
//     id: "1",
//     name: "Living Style",
//     questions: [
//       { id: "0", question: "My ideal home vibe is" },
//       { id: "1", question: "I like to keep my space" },
//       { id: "2", question: "I usually sleep at" },
//       { id: "3", question: "Guests at home: yay or nay?" },
//       { id: "4", question: "Noise level I'm comfortable with" },
//       { id: "5", question: "I share food if..." },
//       { id: "6", question: "My go-to comfort item at home" },
//     ],
//   },
//   {
//     id: "2",
//     name: "Self Care",
//     questions: [
//       { id: "0", question: "I unwind by" },
//       { id: "1", question: "My boundaries include" },
//       { id: "2", question: "I feel supported when" },
//       { id: "3", question: "To me, self-care means" },
//       { id: "4", question: "I handle stress by" },
//       { id: "5", question: "Mental health check-ins are" },
//     ],
//   },
//   {
//     id: "3",
//     name: "Roommate Vibes",
//     questions: [
//       { id: "0", question: "A green flag in a roommate is" },
//       { id: "1", question: "A dealbreaker for me is" },
//       { id: "2", question: "I'd love it if my roommate and I..." },
//       { id: "3", question: "I prefer roommates who are" },
//       { id: "4", question: "My communication style is" },
//       { id: "5", question: "Conflict resolution: my go-to move is" },
//     ],
//   },
//   {
//     id: "4",
//     name: "Dream Home",
//     questions: [
//       { id: "0", question: "My dream corner in our home would have" },
//       { id: "1", question: "A must-have in our apartment is" },
//       { id: "2", question: "The vibe I'm manifesting for our place" },
//       { id: "3", question: "A home tradition I'd love to start" },
//       { id: "4", question: "If I could design one wall, it'd have" },
//     ],
//   },
// ];

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     occupation: "",
//     mobile: "",
//     aadhar: "",
//     email: "",
//     linkedin: "",
//     dob: "",
//     city: "Delhi",
//     area: "",
//     password: "",
//     retypePassword: "",
//     houseOwner: false,
//     livingWith: [],
//     lookingFor: "",
//     selectedPrompts: [],
//     promptAnswers: {},
//   });

//   // Separate state for actual photo files (to be sent to server)
//   const [photoFiles, setPhotoFiles] = useState([]);
//   // State for photo previews (URLs to display in UI)
//   const [photoPreviews, setPhotoPreviews] = useState([]);

//   const [passwordError, setPasswordError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [submitError, setSubmitError] = useState("");
//   const [submitSuccess, setSubmitSuccess] = useState("");

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));

//     // Clear password error when either password field changes
//     if (name === "password" || name === "retypePassword") {
//       setPasswordError("");
//     }
//   };

//   const handleMultiSelectChange = (e, category) => {
//     const { value, checked } = e.target;
//     if (category === "livingWith") {
//       setFormData((prev) => ({
//         ...prev,
//         livingWith: checked
//           ? [...prev.livingWith, value]
//           : prev.livingWith.filter((item) => item !== value),
//       }));
//     }
//   };

//   const handlePromptSelect = (promptId, questionId) => {
//     const promptKey = `${promptId}-${questionId}`;
//     const isAlreadySelected = formData.selectedPrompts.includes(promptKey);

//     // If already selected, remove it
//     if (isAlreadySelected) {
//       setFormData((prev) => ({
//         ...prev,
//         selectedPrompts: prev.selectedPrompts.filter(
//           (key) => key !== promptKey
//         ),
//         promptAnswers: {
//           ...prev.promptAnswers,
//           [promptKey]: undefined,
//         },
//       }));
//       return;
//     }

//     // If not selected but already have 3 prompts, don't add
//     if (formData.selectedPrompts.length >= 3) {
//       alert("You can only select up to 3 prompts.");
//       return;
//     }

//     // Add the new prompt
//     setFormData((prev) => ({
//       ...prev,
//       selectedPrompts: [...prev.selectedPrompts, promptKey],
//       promptAnswers: {
//         ...prev.promptAnswers,
//         [promptKey]: "",
//       },
//     }));
//   };

//   const handlePromptAnswer = (promptKey, answer) => {
//     setFormData((prev) => ({
//       ...prev,
//       promptAnswers: {
//         ...prev.promptAnswers,
//         [promptKey]: answer,
//       },
//     }));
//   };

//   const handlePhotoUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const maxPhotos = formData.houseOwner ? 6 : 2;

//     // Check if adding these files would exceed the limit
//     if (photoPreviews.length + files.length > maxPhotos) {
//       alert(`Maximum ${maxPhotos} photos allowed.`);
//       return;
//     }

//     // Create preview URLs for display
//     const newPreviews = files.map((file) => URL.createObjectURL(file));

//     // Update both the file list and preview URLs
//     setPhotoFiles((prevFiles) => [...prevFiles, ...files]);
//     setPhotoPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
//   };

//   const handleURLPhoto = () => {
//     const maxPhotos = formData.houseOwner ? 6 : 2;
//     if (photoPreviews.length >= maxPhotos) {
//       alert(`Maximum ${maxPhotos} photos allowed.`);
//       return;
//     }
//     const url = prompt("Enter photo URL:");
//     if (url) {
//       // For URL photos, we only add them to previews
//       // We'll handle them differently in the backend
//       setPhotoPreviews((prev) => [...prev, url]);
//       // Add a placeholder in photoFiles to keep indices aligned
//       // You'll need to handle this specially in your submit function
//       setPhotoFiles((prev) => [...prev, { isUrl: true, url }]);
//     }
//   };

//   const handleRemovePhoto = (index) => {
//     // Remove from both arrays to keep them in sync
//     setPhotoPreviews((prev) => prev.filter((_, i) => i !== index));
//     setPhotoFiles((prev) => prev.filter((_, i) => i !== index));
//   };

//   const cityOptions = [
//     "Delhi",
//     "Mumbai",
//     "Bangalore",
//     "Chennai",
//     "Hyderabad",
//     "Kolkata",
//     "Pune",
//     "Ahmedabad",
//     "Jaipur",
//     "Lucknow",
//     "Other",
//   ];

//   const validatePasswords = () => {
//     if (formData.password !== formData.retypePassword) {
//       setPasswordError("Passwords do not match");
//       return false;
//     }
//     if (formData.password.length < 8) {
//       setPasswordError("Password must be at least 8 characters long");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitError("");
//     setSubmitSuccess("");

//     // Validate passwords
//     if (!validatePasswords()) {
//       return;
//     }

//     // Check if email is provided
//     if (!formData.email || formData.email.trim() === "") {
//       setSubmitError("Email is required");
//       return;
//     }

//     // Check if required prompts are answered
//     if (formData.selectedPrompts.length < 3) {
//       setSubmitError("Please select and answer 3 prompts");
//       return;
//     }

//     // Check if all selected prompts have answers
//     const unansweredPrompts = formData.selectedPrompts.filter(
//       (promptKey) => !formData.promptAnswers[promptKey]
//     );
//     if (unansweredPrompts.length > 0) {
//       setSubmitError("Please answer all selected prompts");
//       return;
//     }

//     // Check if living preferences are selected
//     if (formData.livingWith.length === 0) {
//       setSubmitError("Please select who you're comfortable living with");
//       return;
//     }

//     // Check if looking for preference is selected
//     if (!formData.lookingFor) {
//       setSubmitError("Please select what you're looking for");
//       return;
//     }

//     try {
//       setLoading(true);

//       // Create FormData for handling file uploads
//       const data = new FormData();

//       // Add all form fields to FormData
//       Object.entries(formData).forEach(([key, value]) => {
//         // Skip photos since we're handling them separately
//         if (key === "photos" || key === "retypePassword") {
//           return;
//         }

//         // Handle arrays and objects by JSON stringifying them
//         if (
//           key === "livingWith" ||
//           key === "selectedPrompts" ||
//           key === "promptAnswers"
//         ) {
//           data.append(key, JSON.stringify(value));
//         } else {
//           data.append(key, value);
//         }
//       });

//       // Add photos to FormData
//       photoFiles.forEach((photoFile, index) => {
//         if (photoFile.isUrl) {
//           // For URL photos, we send the URL as a string
//           data.append("photoUrls", photoFile.url);
//         } else {
//           // For file uploads, we send the actual file
//           data.append("photos", photoFile);
//         }
//       });

//       console.log("Submitting form data...");

//       // Send the request with FormData (multipart/form-data)
//       const response = await axios.post(
//         "http://localhost:5001/api/auth/register",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       // Handle success
//       setSubmitSuccess("User registered successfully! Redirecting to login...");
//       console.log("Registration successful:", response.data);

//       // Redirect to login after 2 seconds
//       setTimeout(() => {
//         window.location.href = "/login"; // Adjust this to your login route
//       }, 2000);
//     } catch (error) {
//       // Handle error
//       console.error("Registration error:", error);

//       // Show detailed validation errors if available
//       if (error.response?.data?.errors) {
//         const errorMessages = error.response.data.errors
//           .map((err) => err.msg)
//           .join(", ");
//         setSubmitError(errorMessages);
//       } else {
//         setSubmitError(
//           error.response?.data?.message ||
//             "Registration failed. Please try again."
//         );
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getPromptQuestionByKey = (promptKey) => {
//     if (!promptKey) return null;
//     const [promptId, questionId] = promptKey.split("-");
//     const promptCategory = promptsList.find((p) => p.id === promptId);
//     if (!promptCategory) return null;
//     const question = promptCategory.questions.find((q) => q.id === questionId);
//     return question ? question.question : null;
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-wrapper">
//         <h1 className="signup-title">Signup for Roomble</h1>
//         <p className="signup-subtitle">
//           Find your perfect roommate and living space
//         </p>

//         {submitSuccess && (
//           <div className="success-message">{submitSuccess}</div>
//         )}

//         {submitError && <div className="error-message">{submitError}</div>}

//         <form onSubmit={handleSubmit} className="signup-form">
//           {/* Basic Profile Info */}
//           <section className="form-section">
//             <h2 className="section-title">Basic Profile</h2>
//             <div className="form-grid">
//               <div className="form-group">
//                 <label>Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Age</label>
//                 <input
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   min="18"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Gender</label>
//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   {genderOptions.map((option) => (
//                     <option key={option} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Occupation</label>
//                 <input
//                   type="text"
//                   name="occupation"
//                   value={formData.occupation}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Password Section */}
//           <section className="form-section">
//             <h2 className="section-title">Create Password</h2>
//             <div className="form-grid">
//               <div className="form-group">
//                 <label>Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   minLength="8"
//                   required
//                 />
//                 <small className="input-hint">Minimum 8 characters</small>
//               </div>

//               <div className="form-group">
//                 <label>Re-type Password</label>
//                 <input
//                   type="password"
//                   name="retypePassword"
//                   value={formData.retypePassword}
//                   onChange={handleChange}
//                   required
//                 />
//                 {passwordError && (
//                   <p className="error-message">{passwordError}</p>
//                 )}
//               </div>
//             </div>
//           </section>

//           {/* Personal Info */}
//           <section className="form-section">
//             <h2 className="section-title">Contact Information</h2>
//             <div className="form-grid">
//               {["mobile", "aadhar", "linkedin", "dob", "email"].map((field) => (
//                 <div className="form-group" key={field}>
//                   <label>
//                     {field === "dob"
//                       ? "Date of Birth"
//                       : field.charAt(0).toUpperCase() + field.slice(1)}
//                   </label>
//                   <input
//                     type={
//                       field === "dob"
//                         ? "date"
//                         : field === "email"
//                         ? "email"
//                         : "text"
//                     }
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleChange}
//                     required={field !== "linkedin"}
//                   />
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Location */}
//           <section className="form-section">
//             <h2 className="section-title">Your Location</h2>
//             <div className="form-grid">
//               <div className="form-group">
//                 <label>City</label>
//                 <select
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                 >
//                   {cityOptions.map((city) => (
//                     <option key={city} value={city}>
//                       {city}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Area/Neighborhood</label>
//                 <input
//                   type="text"
//                   name="area"
//                   value={formData.area}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Photos */}
//           <section className="form-section">
//             <h2 className="section-title">Photos</h2>
//             <div className="toggle-container">
//               <span className="toggle-label">I have a house to share</span>
//               <label className="toggle-switch">
//                 <input
//                   type="checkbox"
//                   name="houseOwner"
//                   checked={formData.houseOwner}
//                   onChange={handleChange}
//                 />
//                 <span className="toggle-slider"></span>
//               </label>
//             </div>
//             <p className="info-text">
//               {formData.houseOwner
//                 ? "Upload up to 6 photos of your place."
//                 : "Upload up to 2 photos of yourself."}
//             </p>

//             <div className="photo-controls">
//               <input
//                 type="file"
//                 multiple
//                 accept="image/jpeg,image/png,image/gif"
//                 onChange={handlePhotoUpload}
//                 className="photo-upload"
//                 id="photo-upload"
//               />
//               <label htmlFor="photo-upload" className="photo-upload-label">
//                 Select Photos
//               </label>
//               <button
//                 type="button"
//                 className="photo-url-button"
//                 onClick={handleURLPhoto}
//               >
//                 Add Photo via URL
//               </button>
//             </div>

//             <div className="photo-preview">
//               {photoPreviews.map((photo, idx) => (
//                 <div key={idx} className="photo-card">
//                   <img src={photo} alt={`Uploaded ${idx}`} />
//                   <button
//                     type="button"
//                     className="remove-photo"
//                     onClick={() => handleRemovePhoto(idx)}
//                   >
//                     ✕
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Living Preferences */}
//           <section className="form-section">
//             <h2 className="section-title">Living Preferences</h2>
//             <p className="section-subtitle">I'm comfortable living with:</p>
//             <div className="option-buttons">
//               {livingWithOptions.map((option) => (
//                 <label
//                   key={option}
//                   className={`option-button ${
//                     formData.livingWith.includes(option) ? "selected" : ""
//                   }`}
//                 >
//                   <input
//                     type="checkbox"
//                     value={option}
//                     checked={formData.livingWith.includes(option)}
//                     onChange={(e) => handleMultiSelectChange(e, "livingWith")}
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </section>

//           {/* Looking For */}
//           <section className="form-section">
//             <h2 className="section-title">What Are You Looking For?</h2>
//             <div className="option-buttons">
//               {lookingForOptions.map((option) => (
//                 <label
//                   key={option}
//                   className={`option-button ${
//                     formData.lookingFor === option ? "selected" : ""
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name="lookingFor"
//                     value={option}
//                     checked={formData.lookingFor === option}
//                     onChange={handleChange}
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </section>

//           {/* Prompts */}
//           <section className="form-section">
//             <h2 className="section-title">Select 3 Prompts</h2>
//             <p className="section-subtitle">
//               Help others get to know you better
//             </p>
//             <div className="prompt-selection">
//               {promptsList.map((category) => (
//                 <div key={category.id} className="prompt-category">
//                   <h3 className="category-name">{category.name}</h3>
//                   <div className="prompt-questions">
//                     {category.questions.map((question) => {
//                       const promptKey = `${category.id}-${question.id}`;
//                       const isSelected =
//                         formData.selectedPrompts.includes(promptKey);

//                       return (
//                         <div key={question.id} className="prompt-question-item">
//                           <div
//                             className={`prompt-question ${
//                               isSelected ? "selected" : ""
//                             }`}
//                             onClick={() =>
//                               handlePromptSelect(category.id, question.id)
//                             }
//                           >
//                             {question.question}
//                             {isSelected && (
//                               <span className="selected-mark">✓</span>
//                             )}
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {formData.selectedPrompts.length > 0 && (
//               <div className="selected-prompts">
//                 <h3>Your Selected Prompts</h3>
//                 {formData.selectedPrompts.map((promptKey) => (
//                   <div key={promptKey} className="prompt-answer">
//                     <label>{getPromptQuestionByKey(promptKey)}</label>
//                     <textarea
//                       value={formData.promptAnswers[promptKey] || ""}
//                       onChange={(e) =>
//                         handlePromptAnswer(promptKey, e.target.value)
//                       }
//                       placeholder="Your answer..."
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </section>

//           {/* Submit */}
//           <button type="submit" className="submit-button" disabled={loading}>
//             {loading ? "Submitting..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// import React, { useState } from "react";
// import "./Signup.css";
// import axios from "axios"; // Make sure to install axios: npm install axios

// const livingWithOptions = ["Men", "Women", "Everyone"];

// const lookingForOptions = [
//   "Short-term Stay",
//   "Long-term Stay",
//   "Medium-term Stay",
//   "Flexible / Month-to-month",
//   "I'm still figuring it out",
// ];

// const genderOptions = ["Male", "Female", "Non-binary", "Prefer not to say"];

// const promptsList = [
//   {
//     id: "0",
//     name: "About Me",
//     questions: [
//       { id: "0", question: "My guilty pleasure is" },
//       { id: "1", question: "On weekends, you'll find me" },
//       { id: "2", question: "A fun fact about me" },
//       { id: "3", question: "I'm known for always" },
//       { id: "4", question: "One thing I can't live without" },
//       { id: "5", question: "My 3 core values are" },
//       { id: "6", question: "Biggest red flag I avoid" },
//     ],
//   },
//   {
//     id: "1",
//     name: "Living Style",
//     questions: [
//       { id: "0", question: "My ideal home vibe is" },
//       { id: "1", question: "I like to keep my space" },
//       { id: "2", question: "I usually sleep at" },
//       { id: "3", question: "Guests at home: yay or nay?" },
//       { id: "4", question: "Noise level I'm comfortable with" },
//       { id: "5", question: "I share food if..." },
//       { id: "6", question: "My go-to comfort item at home" },
//     ],
//   },
//   {
//     id: "2",
//     name: "Self Care",
//     questions: [
//       { id: "0", question: "I unwind by" },
//       { id: "1", question: "My boundaries include" },
//       { id: "2", question: "I feel supported when" },
//       { id: "3", question: "To me, self-care means" },
//       { id: "4", question: "I handle stress by" },
//       { id: "5", question: "Mental health check-ins are" },
//     ],
//   },
//   {
//     id: "3",
//     name: "Roommate Vibes",
//     questions: [
//       { id: "0", question: "A green flag in a roommate is" },
//       { id: "1", question: "A dealbreaker for me is" },
//       { id: "2", question: "I'd love it if my roommate and I..." },
//       { id: "3", question: "I prefer roommates who are" },
//       { id: "4", question: "My communication style is" },
//       { id: "5", question: "Conflict resolution: my go-to move is" },
//     ],
//   },
//   {
//     id: "4",
//     name: "Dream Home",
//     questions: [
//       { id: "0", question: "My dream corner in our home would have" },
//       { id: "1", question: "A must-have in our apartment is" },
//       { id: "2", question: "The vibe I'm manifesting for our place" },
//       { id: "3", question: "A home tradition I'd love to start" },
//       { id: "4", question: "If I could design one wall, it'd have" },
//     ],
//   },
// ];

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     occupation: "",
//     mobile: "",
//     aadhar: "",
//     email: "",
//     linkedin: "",
//     dob: "",
//     city: "Delhi",
//     area: "",
//     password: "",
//     retypePassword: "",
//     houseOwner: false,
//     livingWith: [],
//     lookingFor: "",
//     selectedPrompts: [],
//     promptAnswers: {},
//   });
//   const [photos, setPhotos] = useState(null);
//   const [photoPreview, setPhotoPreview] = useState([]);

//   const [passwordError, setPasswordError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [submitError, setSubmitError] = useState("");
//   const [submitSuccess, setSubmitSuccess] = useState("");

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));

//     // Clear password error when either password field changes
//     if (name === "password" || name === "retypePassword") {
//       setPasswordError("");
//     }
//   };

//   const handleMultiSelectChange = (e, category) => {
//     const { value, checked } = e.target;
//     if (category === "livingWith") {
//       setFormData((prev) => ({
//         ...prev,
//         livingWith: checked
//           ? [...prev.livingWith, value]
//           : prev.livingWith.filter((item) => item !== value),
//       }));
//     }
//   };

//   const handlePromptSelect = (promptId, questionId) => {
//     const promptKey = `${promptId}-${questionId}`;
//     const isAlreadySelected = formData.selectedPrompts.includes(promptKey);

//     // If already selected, remove it
//     if (isAlreadySelected) {
//       setFormData((prev) => ({
//         ...prev,
//         selectedPrompts: prev.selectedPrompts.filter(
//           (key) => key !== promptKey
//         ),
//         promptAnswers: {
//           ...prev.promptAnswers,
//           [promptKey]: undefined,
//         },
//       }));
//       return;
//     }

//     // If not selected but already have 3 prompts, don't add
//     if (formData.selectedPrompts.length >= 3) {
//       alert("You can only select up to 3 prompts.");
//       return;
//     }

//     // Add the new prompt
//     setFormData((prev) => ({
//       ...prev,
//       selectedPrompts: [...prev.selectedPrompts, promptKey],
//       promptAnswers: {
//         ...prev.promptAnswers,
//         [promptKey]: "",
//       },
//     }));
//   };

//   const handlePromptAnswer = (promptKey, answer) => {
//     setFormData((prev) => ({
//       ...prev,
//       promptAnswers: {
//         ...prev.promptAnswers,
//         [promptKey]: answer,
//       },
//     }));
//   };
//   const handlePhotoUpload = (event) => {
//     const files = Array.from(event.target.files);

//     if (files.length === 0) return;

//     // Create object URLs for previews
//     const newPreview = files.map((file) => URL.createObjectURL(file));

//     // Add new previews to the existing ones
//     setPhotoPreview((prevPreview) => [...prevPreview, ...newPreview]);

//     // Reset the file input to allow selecting the same files again
//     event.target.value = "";
//   };

//   // Handle adding photo via URL (prompt user for URL)
//   const handleURLPhoto = () => {
//     const url = prompt("Enter the URL of the photo:");

//     if (!url) return;

//     // Validate URL format (basic validation)
//     if (url.match(/^https?:\/\/.+\.(jpeg|jpg|png|gif)(\?.*)?$/i)) {
//       setPhotoPreview((prevPreview) => [...prevPreview, url]);
//     } else {
//       alert("Please enter a valid image URL (.jpeg, .jpg, .png, or .gif)");
//     }
//   };

//   // Handle removing a photo from the previews
//   const handleRemovePhoto = (indexToRemove) => {
//     setPhotoPreview((prevPreview) =>
//       prevPreview.filter((_, index) => index !== indexToRemove)
//     );
//   };

//   const cityOptions = [
//     "Delhi",
//     "Mumbai",
//     "Bangalore",
//     "Chennai",
//     "Hyderabad",
//     "Kolkata",
//     "Pune",
//     "Ahmedabad",
//     "Jaipur",
//     "Lucknow",
//     "Other",
//   ];

//   const validatePasswords = () => {
//     if (formData.password !== formData.retypePassword) {
//       setPasswordError("Passwords do not match");
//       return false;
//     }
//     if (formData.password.length < 8) {
//       setPasswordError("Password must be at least 8 characters long");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitError("");
//     setSubmitSuccess("");

//     // Validate passwords
//     if (!validatePasswords()) {
//       return;
//     }

//     // Check if email is provided
//     if (!formData.email || formData.email.trim() === "") {
//       setSubmitError("Email is required");
//       return;
//     }

//     // Check if required prompts are answered
//     if (formData.selectedPrompts.length < 3) {
//       setSubmitError("Please select and answer 3 prompts");
//       return;
//     }

//     // Check if all selected prompts have answers
//     const unansweredPrompts = formData.selectedPrompts.filter(
//       (promptKey) => !formData.promptAnswers[promptKey]
//     );
//     if (unansweredPrompts.length > 0) {
//       setSubmitError("Please answer all selected prompts");
//       return;
//     }

//     // Check if living preferences are selected
//     if (formData.livingWith.length === 0) {
//       setSubmitError("Please select who you're comfortable living with");
//       return;
//     }

//     // Check if looking for preference is selected
//     if (!formData.lookingFor) {
//       setSubmitError("Please select what you're looking for");
//       return;
//     }

//     try {
//       setLoading(true);

//       // Create FormData for handling file uploads
//       const data = new FormData();

//       // Add all form fields to FormData
//       Object.entries(formData).forEach(([key, value]) => {
//         // Skip photos since we're handling them separately
//         if (key === "photos" || key === "retypePassword") {
//           return;
//         }

//         // Handle arrays and objects by JSON stringifying them
//         if (
//           key === "livingWith" ||
//           key === "selectedPrompts" ||
//           key === "promptAnswers"
//         ) {
//           data.append(key, JSON.stringify(value));
//         } else {
//           data.append(key, value);
//         }
//       });

//       // Add photos to FormData
//       if (photos) {
//         formData.append("photos", photos);
//         console.log("Appending cover:", photos.name); // Add this log
//       }

//       // Log the form data keys for debugging
//       console.log("Form data keys:", Array.from(data.keys()));

//       // Send the request with FormData (multipart/form-data)
//       const response = await axios.post(
//         "http://localhost:5001/api/auth/register",
//         data
//         // Don't set Content-Type header, let axios set it automatically with boundary
//       );

//       // Handle success
//       setSubmitSuccess("User registered successfully! Redirecting to login...");
//       console.log("Registration successful:", response.data);

//       // Redirect to login after 2 seconds
//       setTimeout(() => {
//         window.location.href = "/login"; // Adjust this to your login route
//       }, 2000);
//     } catch (error) {
//       // Handle error
//       console.error("Registration error:", error);

//       // Show detailed validation errors if available
//       if (error.response?.data?.errors) {
//         const errorMessages = error.response.data.errors
//           .map((err) => err.msg)
//           .join(", ");
//         setSubmitError(errorMessages);
//       } else {
//         setSubmitError(
//           error.response?.data?.message ||
//             "Registration failed. Please try again."
//         );
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getPromptQuestionByKey = (promptKey) => {
//     if (!promptKey) return null;
//     const [promptId, questionId] = promptKey.split("-");
//     const promptCategory = promptsList.find((p) => p.id === promptId);
//     if (!promptCategory) return null;
//     const question = promptCategory.questions.find((q) => q.id === questionId);
//     return question ? question.question : null;
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-wrapper">
//         <h1 className="signup-title">Signup for Roomble</h1>
//         <p className="signup-subtitle">
//           Find your perfect roommate and living space
//         </p>

//         {submitSuccess && (
//           <div className="success-message">{submitSuccess}</div>
//         )}

//         {submitError && <div className="error-message">{submitError}</div>}

//         <form onSubmit={handleSubmit} className="signup-form">
//           {/* Basic Profile Info */}
//           <section className="form-section">
//             <h2 className="section-title">Basic Profile</h2>
//             <div className="form-grid">
//               <div className="form-group">
//                 <label>Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Age</label>
//                 <input
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   min="18"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Gender</label>
//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   {genderOptions.map((option) => (
//                     <option key={option} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Occupation</label>
//                 <input
//                   type="text"
//                   name="occupation"
//                   value={formData.occupation}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Password Section */}
//           <section className="form-section">
//             <h2 className="section-title">Create Password</h2>
//             <div className="form-grid">
//               <div className="form-group">
//                 <label>Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   minLength="8"
//                   required
//                 />
//                 <small className="input-hint">Minimum 8 characters</small>
//               </div>

//               <div className="form-group">
//                 <label>Re-type Password</label>
//                 <input
//                   type="password"
//                   name="retypePassword"
//                   value={formData.retypePassword}
//                   onChange={handleChange}
//                   required
//                 />
//                 {passwordError && (
//                   <p className="error-message">{passwordError}</p>
//                 )}
//               </div>
//             </div>
//           </section>

//           {/* Personal Info */}
//           <section className="form-section">
//             <h2 className="section-title">Contact Information</h2>
//             <div className="form-grid">
//               {["mobile", "aadhar", "linkedin", "dob", "email"].map((field) => (
//                 <div className="form-group" key={field}>
//                   <label>
//                     {field === "dob"
//                       ? "Date of Birth"
//                       : field.charAt(0).toUpperCase() + field.slice(1)}
//                   </label>
//                   <input
//                     type={
//                       field === "dob"
//                         ? "date"
//                         : field === "email"
//                         ? "email"
//                         : "text"
//                     }
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleChange}
//                     required={field !== "linkedin"}
//                   />
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Location */}
//           <section className="form-section">
//             <h2 className="section-title">Your Location</h2>
//             <div className="form-grid">
//               <div className="form-group">
//                 <label>City</label>
//                 <select
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                 >
//                   {cityOptions.map((city) => (
//                     <option key={city} value={city}>
//                       {city}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Area/Neighborhood</label>
//                 <input
//                   type="text"
//                   name="area"
//                   value={formData.area}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Photos */}

//           <section className="photos-section">
//             <h3>Photos</h3>
//             <div className="photo-controls">
//               <input
//                 type="file"
//                 multiple
//                 accept="image/jpeg,image/png,image/gif"
//                 onChange={handlePhotoUpload}
//                 className="photo-upload"
//                 id="photo-upload"
//               />
//               <label htmlFor="photo-upload" className="photo-upload-label">
//                 Select Photos
//               </label>
//               <button
//                 type="button"
//                 className="photo-url-button"
//                 onClick={handleURLPhoto}
//               >
//                 Add Photo via URL
//               </button>
//             </div>

//             <div className="photo-preview">
//               {photoPreview &&
//                 photoPreview.map((photo, idx) => (
//                   <div key={idx} className="photo-card">
//                     <img src={photo} alt={`Uploaded ${idx}`} />
//                     <button
//                       type="button"
//                       className="remove-photo"
//                       onClick={() => handleRemovePhoto(idx)}
//                     >
//                       ✕
//                     </button>
//                   </div>
//                 ))}
//             </div>
//           </section>

//           {/* Living Preferences */}
//           <section className="form-section">
//             <h2 className="section-title">Living Preferences</h2>
//             <p className="section-subtitle">I'm comfortable living with:</p>
//             <div className="option-buttons">
//               {livingWithOptions.map((option) => (
//                 <label
//                   key={option}
//                   className={`option-button ${
//                     formData.livingWith.includes(option) ? "selected" : ""
//                   }`}
//                 >
//                   <input
//                     type="checkbox"
//                     value={option}
//                     checked={formData.livingWith.includes(option)}
//                     onChange={(e) => handleMultiSelectChange(e, "livingWith")}
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </section>

//           {/* Looking For */}
//           <section className="form-section">
//             <h2 className="section-title">What Are You Looking For?</h2>
//             <div className="option-buttons">
//               {lookingForOptions.map((option) => (
//                 <label
//                   key={option}
//                   className={`option-button ${
//                     formData.lookingFor === option ? "selected" : ""
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name="lookingFor"
//                     value={option}
//                     checked={formData.lookingFor === option}
//                     onChange={handleChange}
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </section>

//           {/* Prompts */}
//           <section className="form-section">
//             <h2 className="section-title">Select 3 Prompts</h2>
//             <p className="section-subtitle">
//               Help others get to know you better
//             </p>
//             <div className="prompt-selection">
//               {promptsList.map((category) => (
//                 <div key={category.id} className="prompt-category">
//                   <h3 className="category-name">{category.name}</h3>
//                   <div className="prompt-questions">
//                     {category.questions.map((question) => {
//                       const promptKey = `${category.id}-${question.id}`;
//                       const isSelected =
//                         formData.selectedPrompts.includes(promptKey);

//                       return (
//                         <div key={question.id} className="prompt-question-item">
//                           <div
//                             className={`prompt-question ${
//                               isSelected ? "selected" : ""
//                             }`}
//                             onClick={() =>
//                               handlePromptSelect(category.id, question.id)
//                             }
//                           >
//                             {question.question}
//                             {isSelected && (
//                               <span className="selected-mark">✓</span>
//                             )}
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {formData.selectedPrompts.length > 0 && (
//               <div className="selected-prompts">
//                 <h3>Your Selected Prompts</h3>
//                 {formData.selectedPrompts.map((promptKey) => (
//                   <div key={promptKey} className="prompt-answer">
//                     <label>{getPromptQuestionByKey(promptKey)}</label>
//                     <textarea
//                       value={formData.promptAnswers[promptKey] || ""}
//                       onChange={(e) =>
//                         handlePromptAnswer(promptKey, e.target.value)
//                       }
//                       placeholder="Your answer..."
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </section>

//           {/* Submit */}
//           <button type="submit" className="submit-button" disabled={loading}>
//             {loading ? "Submitting..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// import React, { useState } from "react";
// import "./Signup.css";
// import axios from "axios";

// const livingWithOptions = ["Men", "Women", "Everyone"];

// const lookingForOptions = [
//   "Short-term Stay",
//   "Long-term Stay",
//   "Medium-term Stay",
//   "Flexible / Month-to-month",
//   "I'm still figuring it out",
// ];

// const genderOptions = ["Male", "Female", "Non-binary", "Prefer not to say"];

// const promptsList = [
//   {
//     id: "0",
//     name: "About Me",
//     questions: [
//       { id: "0", question: "My guilty pleasure is" },
//       { id: "1", question: "On weekends, you'll find me" },
//       { id: "2", question: "A fun fact about me" },
//       { id: "3", question: "I'm known for always" },
//       { id: "4", question: "One thing I can't live without" },
//       { id: "5", question: "My 3 core values are" },
//       { id: "6", question: "Biggest red flag I avoid" },
//     ],
//   },
//   {
//     id: "1",
//     name: "Living Style",
//     questions: [
//       { id: "0", question: "My ideal home vibe is" },
//       { id: "1", question: "I like to keep my space" },
//       { id: "2", question: "I usually sleep at" },
//       { id: "3", question: "Guests at home: yay or nay?" },
//       { id: "4", question: "Noise level I'm comfortable with" },
//       { id: "5", question: "I share food if..." },
//       { id: "6", question: "My go-to comfort item at home" },
//     ],
//   },
//   {
//     id: "2",
//     name: "Self Care",
//     questions: [
//       { id: "0", question: "I unwind by" },
//       { id: "1", question: "My boundaries include" },
//       { id: "2", question: "I feel supported when" },
//       { id: "3", question: "To me, self-care means" },
//       { id: "4", question: "I handle stress by" },
//       { id: "5", question: "Mental health check-ins are" },
//     ],
//   },
//   {
//     id: "3",
//     name: "Roommate Vibes",
//     questions: [
//       { id: "0", question: "A green flag in a roommate is" },
//       { id: "1", question: "A dealbreaker for me is" },
//       { id: "2", question: "I'd love it if my roommate and I..." },
//       { id: "3", question: "I prefer roommates who are" },
//       { id: "4", question: "My communication style is" },
//       { id: "5", question: "Conflict resolution: my go-to move is" },
//     ],
//   },
//   {
//     id: "4",
//     name: "Dream Home",
//     questions: [
//       { id: "0", question: "My dream corner in our home would have" },
//       { id: "1", question: "A must-have in our apartment is" },
//       { id: "2", question: "The vibe I'm manifesting for our place" },
//       { id: "3", question: "A home tradition I'd love to start" },
//       { id: "4", question: "If I could design one wall, it'd have" },
//     ],
//   },
// ];

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     occupation: "",
//     mobile: "",
//     aadhar: "",
//     email: "",
//     linkedin: "",
//     dob: "",
//     city: "Delhi",
//     area: "",
//     password: "",
//     retypePassword: "",
//     houseOwner: false,
//     livingWith: [],
//     lookingFor: "",
//     selectedPrompts: [],
//     promptAnswers: {},
//   });

//   const [photos, setPhotos] = useState([]);
//   const [photoPreviews, setPhotoPreviews] = useState([]);
//   const [passwordError, setPasswordError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [submitError, setSubmitError] = useState("");
//   const [submitSuccess, setSubmitSuccess] = useState("");

//   const cityOptions = [
//     "Delhi",
//     "Mumbai",
//     "Bangalore",
//     "Chennai",
//     "Hyderabad",
//     "Kolkata",
//     "Pune",
//     "Ahmedabad",
//     "Jaipur",
//     "Lucknow",
//     "Other",
//   ];

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));

//     if (name === "password" || name === "retypePassword") {
//       setPasswordError("");
//     }
//   };

//   const handleMultiSelectChange = (e, category) => {
//     const { value, checked } = e.target;
//     if (category === "livingWith") {
//       setFormData((prev) => ({
//         ...prev,
//         livingWith: checked
//           ? [...prev.livingWith, value]
//           : prev.livingWith.filter((item) => item !== value),
//       }));
//     }
//   };

//   const handlePromptSelect = (promptId, questionId) => {
//     const promptKey = `${promptId}-${questionId}`;
//     const isAlreadySelected = formData.selectedPrompts.includes(promptKey);

//     if (isAlreadySelected) {
//       setFormData((prev) => ({
//         ...prev,
//         selectedPrompts: prev.selectedPrompts.filter(
//           (key) => key !== promptKey
//         ),
//         promptAnswers: {
//           ...prev.promptAnswers,
//           [promptKey]: undefined,
//         },
//       }));
//       return;
//     }

//     if (formData.selectedPrompts.length >= 3) {
//       alert("You can only select up to 3 prompts.");
//       return;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       selectedPrompts: [...prev.selectedPrompts, promptKey],
//       promptAnswers: {
//         ...prev.promptAnswers,
//         [promptKey]: "",
//       },
//     }));
//   };

//   const handlePromptAnswer = (promptKey, answer) => {
//     setFormData((prev) => ({
//       ...prev,
//       promptAnswers: {
//         ...prev.promptAnswers,
//         [promptKey]: answer,
//       },
//     }));
//   };

//   const handlePhotoUpload = (event) => {
//     const files = Array.from(event.target.files);
//     const maxPhotos = formData.houseOwner ? 6 : 2;

//     if (files.length === 0) return;

//     if (photoPreviews.length + files.length > maxPhotos) {
//       alert(`You can only upload up to ${maxPhotos} photos.`);
//       return;
//     }

//     const newPreviews = files.map((file) => URL.createObjectURL(file));
//     setPhotoPreviews((prev) => [...prev, ...newPreviews]);
//     setPhotos((prev) => [...prev, ...files]);
//     event.target.value = "";
//   };

//   const handleURLPhoto = () => {
//     const url = prompt("Enter the URL of the photo:");
//     const maxPhotos = formData.houseOwner ? 6 : 2;

//     if (!url) return;

//     if (photoPreviews.length >= maxPhotos) {
//       alert(`You can only upload up to ${maxPhotos} photos.`);
//       return;
//     }

//     if (url.match(/^https?:\/\/.+\.(jpeg|jpg|png|gif)(\?.*)?$/i)) {
//       setPhotoPreviews((prev) => [...prev, url]);
//       setPhotos((prev) => [...prev, url]);
//     } else {
//       alert("Please enter a valid image URL (.jpeg, .jpg, .png, or .gif)");
//     }
//   };

//   const handleRemovePhoto = (indexToRemove) => {
//     setPhotoPreviews((prev) =>
//       prev.filter((_, index) => index !== indexToRemove)
//     );
//     setPhotos((prev) => prev.filter((_, index) => index !== indexToRemove));
//   };

//   const validatePasswords = () => {
//     if (formData.password !== formData.retypePassword) {
//       setPasswordError("Passwords do not match");
//       return false;
//     }
//     if (formData.password.length < 8) {
//       setPasswordError("Password must be at least 8 characters long");
//       return false;
//     }
//     return true;
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setSubmitError("");
//   //   setSubmitSuccess("");

//   //   if (!validatePasswords()) return;
//   //   if (!formData.email || formData.email.trim() === "") {
//   //     setSubmitError("Email is required");
//   //     return;
//   //   }
//   //   if (formData.selectedPrompts.length < 3) {
//   //     setSubmitError("Please select and answer 3 prompts");
//   //     return;
//   //   }

//   //   const unansweredPrompts = formData.selectedPrompts.filter(
//   //     (promptKey) => !formData.promptAnswers[promptKey]
//   //   );
//   //   if (unansweredPrompts.length > 0) {
//   //     setSubmitError("Please answer all selected prompts");
//   //     return;
//   //   }
//   //   if (formData.livingWith.length === 0) {
//   //     setSubmitError("Please select who you're comfortable living with");
//   //     return;
//   //   }
//   //   if (!formData.lookingFor) {
//   //     setSubmitError("Please select what you're looking for");
//   //     return;
//   //   }

//   //   try {
//   //     setLoading(true);
//   //     const data = new FormData();

//   //     Object.entries(formData).forEach(([key, value]) => {
//   //       if (key === "retypePassword") return;

//   //       if (
//   //         key === "livingWith" ||
//   //         key === "selectedPrompts" ||
//   //         key === "promptAnswers"
//   //       ) {
//   //         data.append(key, JSON.stringify(value));
//   //       } else {
//   //         data.append(key, value);
//   //       }
//   //     });

//   //     photos.forEach((photo, index) => {
//   //       if (typeof photo !== "string") {
//   //         data.append(`photos`, photo);
//   //       } else {
//   //         data.append(`photoUrls`, photo);
//   //       }
//   //     });

//   //     const response = await axios.post(
//   //       "http://localhost:5001/api/auth/register",
//   //       data
//   //     );

//   //     setSubmitSuccess("User registered successfully! Redirecting to login...");
//   //     setTimeout(() => {
//   //       window.location.href = "/login";
//   //     }, 2000);
//   //   } catch (error) {
//   //     console.error("Registration error:", error);
//   //     if (error.response?.data?.errors) {
//   //       const errorMessages = error.response.data.errors
//   //         .map((err) => err.msg)
//   //         .join(", ");
//   //       setSubmitError(errorMessages);
//   //     } else {
//   //       setSubmitError(
//   //         error.response?.data?.message ||
//   //           "Registration failed. Please try again."
//   //       );
//   //     }
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitError("");
//     setSubmitSuccess("");

//     // Validate form data
//     if (!validatePasswords()) return;
//     if (!formData.email || formData.email.trim() === "") {
//       setSubmitError("Email is required");
//       return;
//     }
//     if (formData.selectedPrompts.length < 3) {
//       setSubmitError("Please select and answer 3 prompts");
//       return;
//     }

//     const unansweredPrompts = formData.selectedPrompts.filter(
//       (promptKey) => !formData.promptAnswers[promptKey]
//     );
//     if (unansweredPrompts.length > 0) {
//       setSubmitError("Please answer all selected prompts");
//       return;
//     }
//     if (formData.livingWith.length === 0) {
//       setSubmitError("Please select who you're comfortable living with");
//       return;
//     }
//     if (!formData.lookingFor) {
//       setSubmitError("Please select what you're looking for");
//       return;
//     }

//     try {
//       setLoading(true);
//       const data = new FormData();

//       const livingWithArray = Array.isArray(formData.livingWith)
//         ? formData.livingWith
//         : [formData.livingWith].filter(Boolean);

//       // Add all form fields except retypePassword
//       // Object.entries(formData).forEach(([key, value]) => {
//       //   if (key === "retypePassword") return;

//       Object.entries({
//         ...formData,
//         livingWith: livingWithArray,
//         promptAnswers: JSON.stringify(formData.promptAnswers), // Stringify properly
//       }).forEach(([key, value]) => {
//         if (key === "retypePassword") return;

//         if (typeof value === "object" && !(value instanceof File)) {
//           data.append(key, JSON.stringify(value));
//         } else {
//           data.append(key, value);
//         }
//       });

//       //   if (
//       //     key === "livingWith" ||
//       //     key === "selectedPrompts" ||
//       //     key === "promptAnswers"
//       //   ) {
//       //     data.append(key, JSON.stringify(value));
//       //   } else if (key === "houseOwner") {
//       //     data.append(key, value ? "true" : "false");
//       //   } else {
//       //     data.append(key, value);
//       //   }
//       // });

//       // Add photos to FormData
//       photos.forEach((photo, index) => {
//         if (photo instanceof File) {
//           data.append(`photos`, photo);
//         } else if (typeof photo === "string") {
//           data.append(`photoUrls`, photo);
//         }
//       });

//       console.log("FormData contents:");
//       for (let [key, value] of data.entries()) {
//         console.log(key, value);
//       }

//       const response = await axios.post(
//         "http://localhost:5001/api/auth/register",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       setSubmitSuccess("User registered successfully! Redirecting to login...");
//       setTimeout(() => {
//         window.location.href = "/login";
//       }, 2000);
//     } catch (error) {
//       console.error("Registration error:", error);

//       // More detailed error logging
//       if (error.response) {
//         console.error("Response data:", error.response.data);
//         console.error("Response status:", error.response.status);
//         console.error("Response headers:", error.response.headers);

//         if (error.response.data.errors) {
//           const errorMessages = error.response.data.errors
//             .map((err) => err.msg)
//             .join(", ");
//           setSubmitError(errorMessages);
//         } else {
//           setSubmitError(
//             error.response.data.message ||
//               "Registration failed. Please try again."
//           );
//         }
//       } else if (error.request) {
//         console.error("Request:", error.request);
//         setSubmitError("No response received from server. Please try again.");
//       } else {
//         console.error("Error message:", error.message);
//         setSubmitError("An error occurred. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getPromptQuestionByKey = (promptKey) => {
//     if (!promptKey) return null;
//     const [promptId, questionId] = promptKey.split("-");
//     const promptCategory = promptsList.find((p) => p.id === promptId);
//     if (!promptCategory) return null;
//     const question = promptCategory.questions.find((q) => q.id === questionId);
//     return question ? question.question : null;
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-wrapper">
//         <h1 className="signup-title">Signup for Roomble</h1>
//         <p className="signup-subtitle">
//           Find your perfect roommate and living space
//         </p>

//         {submitSuccess && (
//           <div className="success-message">{submitSuccess}</div>
//         )}
//         {submitError && <div className="error-message">{submitError}</div>}

//         <form onSubmit={handleSubmit} className="signup-form">
//           {/* Basic Profile Info */}
//           <section className="form-section">
//             <h2 className="section-title">Basic Profile</h2>
//             <div className="form-grid">
//               <div className="form-group">
//                 <label>Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Age</label>
//                 <input
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   min="18"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Gender</label>
//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   {genderOptions.map((option) => (
//                     <option key={option} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Occupation</label>
//                 <input
//                   type="text"
//                   name="occupation"
//                   value={formData.occupation}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Password Section */}
//           <section className="form-section">
//             <h2 className="section-title">Create Password</h2>
//             <div className="form-grid">
//               <div className="form-group">
//                 <label>Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   minLength="8"
//                   required
//                 />
//                 <small className="input-hint">Minimum 8 characters</small>
//               </div>

//               <div className="form-group">
//                 <label>Re-type Password</label>
//                 <input
//                   type="password"
//                   name="retypePassword"
//                   value={formData.retypePassword}
//                   onChange={handleChange}
//                   required
//                 />
//                 {passwordError && (
//                   <p className="error-message">{passwordError}</p>
//                 )}
//               </div>
//             </div>
//           </section>

//           {/* Personal Info */}
//           <section className="form-section">
//             <h2 className="section-title">Contact Information</h2>
//             <div className="form-grid">
//               {["mobile", "aadhar", "linkedin", "dob", "email"].map((field) => (
//                 <div className="form-group" key={field}>
//                   <label>
//                     {field === "dob"
//                       ? "Date of Birth"
//                       : field.charAt(0).toUpperCase() + field.slice(1)}
//                   </label>
//                   <input
//                     type={
//                       field === "dob"
//                         ? "date"
//                         : field === "email"
//                         ? "email"
//                         : "text"
//                     }
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleChange}
//                     required={field !== "linkedin"}
//                   />
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Location */}
//           <section className="form-section">
//             <h2 className="section-title">Your Location</h2>
//             <div className="form-grid">
//               <div className="form-group">
//                 <label>City</label>
//                 <select
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                 >
//                   {cityOptions.map((city) => (
//                     <option key={city} value={city}>
//                       {city}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Area/Neighborhood</label>
//                 <input
//                   type="text"
//                   name="area"
//                   value={formData.area}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Photos Section with Toggle */}
//           <section className="form-section">
//             <h2 className="section-title">Photos</h2>
//             <div className="toggle-container">
//               <span className="toggle-label">I have a house to share</span>
//               <label className="toggle-switch">
//                 <input
//                   type="checkbox"
//                   name="houseOwner"
//                   checked={formData.houseOwner}
//                   onChange={handleChange}
//                 />
//                 <span className="toggle-slider"></span>
//               </label>
//             </div>
//             <p className="info-text">
//               {formData.houseOwner
//                 ? "Upload up to 6 photos of your place."
//                 : "Upload up to 2 photos of yourself."}
//             </p>

//             <div className="photo-controls">
//               <input
//                 type="file"
//                 multiple
//                 accept="image/jpeg,image/png,image/gif"
//                 onChange={handlePhotoUpload}
//                 className="photo-upload"
//                 id="photo-upload"
//               />
//               <label htmlFor="photo-upload" className="photo-upload-label">
//                 Select Photos
//               </label>
//               <button
//                 type="button"
//                 className="photo-url-button"
//                 onClick={handleURLPhoto}
//               >
//                 Add Photo via URL
//               </button>
//             </div>

//             <div className="photo-preview">
//               {photoPreviews.map((photo, idx) => (
//                 <div key={idx} className="photo-card">
//                   <img src={photo} alt={`Uploaded ${idx}`} />
//                   <button
//                     type="button"
//                     className="remove-photo"
//                     onClick={() => handleRemovePhoto(idx)}
//                   >
//                     ✕
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Living Preferences */}
//           <section className="form-section">
//             <h2 className="section-title">Living Preferences</h2>
//             <p className="section-subtitle">I'm comfortable living with:</p>
//             <div className="option-buttons">
//               {livingWithOptions.map((option) => (
//                 <label
//                   key={option}
//                   className={`option-button ${
//                     formData.livingWith.includes(option) ? "selected" : ""
//                   }`}
//                 >
//                   <input
//                     type="checkbox"
//                     value={option}
//                     checked={formData.livingWith.includes(option)}
//                     onChange={(e) => handleMultiSelectChange(e, "livingWith")}
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </section>

//           {/* Looking For */}
//           <section className="form-section">
//             <h2 className="section-title">What Are You Looking For?</h2>
//             <div className="option-buttons">
//               {lookingForOptions.map((option) => (
//                 <label
//                   key={option}
//                   className={`option-button ${
//                     formData.lookingFor === option ? "selected" : ""
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name="lookingFor"
//                     value={option}
//                     checked={formData.lookingFor === option}
//                     onChange={handleChange}
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </section>

//           {/* Prompts */}
//           <section className="form-section">
//             <h2 className="section-title">Select 3 Prompts</h2>
//             <p className="section-subtitle">
//               Help others get to know you better
//             </p>
//             <div className="prompt-selection">
//               {promptsList.map((category) => (
//                 <div key={category.id} className="prompt-category">
//                   <h3 className="category-name">{category.name}</h3>
//                   <div className="prompt-questions">
//                     {category.questions.map((question) => {
//                       const promptKey = `${category.id}-${question.id}`;
//                       const isSelected =
//                         formData.selectedPrompts.includes(promptKey);

//                       return (
//                         <div key={question.id} className="prompt-question-item">
//                           <div
//                             className={`prompt-question ${
//                               isSelected ? "selected" : ""
//                             }`}
//                             onClick={() =>
//                               handlePromptSelect(category.id, question.id)
//                             }
//                           >
//                             {question.question}
//                             {isSelected && (
//                               <span className="selected-mark">✓</span>
//                             )}
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {formData.selectedPrompts.length > 0 && (
//               <div className="selected-prompts">
//                 <h3>Your Selected Prompts</h3>
//                 {formData.selectedPrompts.map((promptKey) => (
//                   <div key={promptKey} className="prompt-answer">
//                     <label>{getPromptQuestionByKey(promptKey)}</label>
//                     <textarea
//                       value={formData.promptAnswers[promptKey] || ""}
//                       onChange={(e) =>
//                         handlePromptAnswer(promptKey, e.target.value)
//                       }
//                       placeholder="Your answer..."
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </section>

//           {/* Submit */}
//           <button type="submit" className="submit-button" disabled={loading}>
//             {loading ? "Submitting..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState, useEffect } from "react";
import "./Signup.css";
import axios from "axios";

const livingWithOptions = ["Men", "Women", "Everyone"];

const lookingForOptions = [
  "Short-term Stay",
  "Long-term Stay",
  "Medium-term Stay",
  "Flexible / Month-to-month",
  "I'm still figuring it out",
];

const genderOptions = ["Male", "Female", "Non-binary", "Prefer not to say"];

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

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    occupation: "",
    mobile: "",
    aadhar: "",
    email: "",
    linkedin: "",
    dob: "",
    city: "Delhi",
    area: "",
    password: "",
    retypePassword: "",
    houseOwner: false,
    livingWith: [],
    lookingFor: "",
    selectedPrompts: [],
    promptAnswers: {},
  });

  // Verification states
  const [verification, setVerification] = useState({
    mobile: {
      verified: false,
      inProgress: false,
      otp: "",
      showOtpInput: false,
      error: "",
    },
    email: {
      verified: false,
      inProgress: false,
      otp: "",
      showOtpInput: false,
      error: "",
    },
    linkedin: {
      verified: false,
      inProgress: false,
      error: "",
    },
  });

  const [photos, setPhotos] = useState([]); // Array of File objects
  const [photoPreviews, setPhotoPreviews] = useState([]); // Array of preview URLs
  // const [photos, setPhotos] = useState(null);
  // const [photoPreview, setPhotoPreview] = useState([]);
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  const cityOptions = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
    "Other",
  ];

  // LinkedIn SDK initialization
  // LinkedIn verification functions to add to your SignUp.jsx
  // Place these functions within your SignUp component

  // // Add this inside your SignUp component
  // const handleLinkedInLogin = () => {
  //   // Generate a unique state for this verification attempt
  //   const verificationState = `linkedin_${Date.now()}_${Math.random()
  //     .toString(36)
  //     .substring(2, 15)}`;

  //   // Store the state in localStorage to retrieve it after redirect
  //   localStorage.setItem("linkedInVerificationState", verificationState);

  //   // Update verification state to show in progress
  //   setVerification((prev) => ({
  //     ...prev,
  //     linkedin: {
  //       ...prev.linkedin,
  //       inProgress: true,
  //       error: "",
  //     },
  //   }));

  //   // Build the LinkedIn authorization URL
  //   const params = new URLSearchParams({
  //     response_type: "code",
  //     client_id: import.meta.env.VITE_LINKEDIN_CLIENT_ID,
  //     redirect_uri: "http://localhost:5001/api/linkedin/callback",
  //     state: verificationState,
  //     scope: "openid profile email",
  //   });

  //   // Redirect to LinkedIn for authentication
  //   window.location.href = `https://www.linkedin.com/oauth/v2/authorization?${params}`;
  // };

  // // Add this useEffect to your component to handle LinkedIn callbacks
  // useEffect(() => {
  //   const checkLinkedInParams = async () => {
  //     const urlParams = new URLSearchParams(window.location.search);
  //     const linkedInStatus = urlParams.get("linkedin");
  //     const state = urlParams.get("state");
  //     const error = urlParams.get("error");

  //     // Clear URL parameters to avoid reprocessing
  //     if (linkedInStatus) {
  //       const newUrl = window.location.pathname;
  //       window.history.replaceState({}, document.title, newUrl);
  //     }

  //     if (linkedInStatus === "verified" && state) {
  //       // Get the stored state from localStorage
  //       const storedState = localStorage.getItem("linkedInVerificationState");

  //       if (state === storedState) {
  //         try {
  //           // Verify with backend
  //           const response = await axios.post(
  //             "http://localhost:5001/api/checkLinkedInVerification",
  //             { state }
  //           );

  //           if (response.data.verified) {
  //             setVerification((prev) => ({
  //               ...prev,
  //               linkedin: {
  //                 verified: true,
  //                 inProgress: false,
  //                 error: "",
  //               },
  //             }));
  //           } else {
  //             throw new Error(response.data.message || "Verification failed");
  //           }
  //         } catch (error) {
  //           setVerification((prev) => ({
  //             ...prev,
  //             linkedin: {
  //               verified: false,
  //               inProgress: false,
  //               error: error.message || "Verification failed",
  //             },
  //           }));
  //         }
  //       } else {
  //         setVerification((prev) => ({
  //           ...prev,
  //           linkedin: {
  //             verified: false,
  //             inProgress: false,
  //             error: "Security verification failed",
  //           },
  //         }));
  //       }
  //     } else if (linkedInStatus === "failed") {
  //       setVerification((prev) => ({
  //         ...prev,
  //         linkedin: {
  //           verified: false,
  //           inProgress: false,
  //           error: error || "LinkedIn verification failed",
  //         },
  //       }));
  //     }
  //   };

  //   checkLinkedInParams();
  // }, []);

  // Solution 1: Save form data before LinkedIn redirect and restore after
  const handleLinkedInLogin = () => {
    // Save current form data to localStorage before redirect
    localStorage.setItem("formDataBackup", JSON.stringify(formData));

    const verificationState = `linkedin_${Date.now()}_${Math.random()
      .toString(36)
      .substring(2, 15)}`;

    localStorage.setItem("linkedInVerificationState", verificationState);

    setVerification((prev) => ({
      ...prev,
      linkedin: {
        ...prev.linkedin,
        inProgress: true,
        error: "",
      },
    }));

    const params = new URLSearchParams({
      response_type: "code",
      client_id: import.meta.env.VITE_LINKEDIN_CLIENT_ID,
      redirect_uri: "http://localhost:5001/api/linkedin/callback",
      state: verificationState,
      scope: "openid profile email",
    });

    window.location.href = `https://www.linkedin.com/oauth/v2/authorization?${params}`;
  };

  // Modified useEffect to restore form data
  useEffect(() => {
    // First, restore form data if it exists
    const savedFormData = localStorage.getItem("formDataBackup");
    if (savedFormData) {
      try {
        const parsedData = JSON.parse(savedFormData);
        setFormData(parsedData);
        // Clear the backup after restoring
        localStorage.removeItem("formDataBackup");
      } catch (error) {
        console.error("Error restoring form data:", error);
      }
    }

    const checkLinkedInParams = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const linkedInStatus = urlParams.get("linkedin");
      const state = urlParams.get("state");
      const error = urlParams.get("error");

      if (linkedInStatus) {
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
      }

      if (linkedInStatus === "verified" && state) {
        const storedState = localStorage.getItem("linkedInVerificationState");

        if (state === storedState) {
          try {
            const response = await axios.post(
              "http://localhost:5001/api/checkLinkedInVerification",
              { state }
            );

            if (response.data.verified) {
              // Also get the LinkedIn profile URL from the response if available
              const linkedInUrl =
                response.data.linkedInUrl || formData.linkedin;

              setVerification((prev) => ({
                ...prev,
                linkedin: {
                  verified: true,
                  inProgress: false,
                  error: "",
                },
              }));

              // Update form data with LinkedIn URL if not already present
              if (linkedInUrl && !formData.linkedin) {
                setFormData((prev) => ({
                  ...prev,
                  linkedin: linkedInUrl,
                }));
              }
            } else {
              throw new Error(response.data.message || "Verification failed");
            }
          } catch (error) {
            setVerification((prev) => ({
              ...prev,
              linkedin: {
                verified: false,
                inProgress: false,
                error: error.message || "Verification failed",
              },
            }));
          } finally {
            // Clean up stored state
            localStorage.removeItem("linkedInVerificationState");
          }
        } else {
          setVerification((prev) => ({
            ...prev,
            linkedin: {
              verified: false,
              inProgress: false,
              error: "Security verification failed",
            },
          }));
        }
      } else if (linkedInStatus === "failed") {
        setVerification((prev) => ({
          ...prev,
          linkedin: {
            verified: false,
            inProgress: false,
            error: error || "LinkedIn verification failed",
          },
        }));
      }
    };

    checkLinkedInParams();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "password" || name === "retypePassword") {
      setPasswordError("");
    }

    // Reset verification when field is changed
    if (["mobile", "email", "linkedin"].includes(name)) {
      setVerification((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          verified: false,
          showOtpInput: false,
          error: "",
        },
      }));
    }
  };

  const handleOtpChange = (e) => {
    setVerification((prevState) => ({
      ...prevState,
      mobile: {
        ...prevState.mobile,
        otp: e.target.value,
        error: null,
      },
    }));
  };

  const handleMultiSelectChange = (e, category) => {
    const { value, checked } = e.target;
    if (category === "livingWith") {
      setFormData((prev) => ({
        ...prev,
        livingWith: checked
          ? [...prev.livingWith, value]
          : prev.livingWith.filter((item) => item !== value),
      }));
    }
  };

  const handlePromptSelect = (promptId, questionId) => {
    const promptKey = `${promptId}-${questionId}`;
    const isAlreadySelected = formData.selectedPrompts.includes(promptKey);

    if (isAlreadySelected) {
      setFormData((prev) => ({
        ...prev,
        selectedPrompts: prev.selectedPrompts.filter(
          (key) => key !== promptKey
        ),
        promptAnswers: {
          ...prev.promptAnswers,
          [promptKey]: undefined,
        },
      }));
      return;
    }

    if (formData.selectedPrompts.length >= 3) {
      alert("You can only select up to 3 prompts.");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      selectedPrompts: [...prev.selectedPrompts, promptKey],
      promptAnswers: {
        ...prev.promptAnswers,
        [promptKey]: "",
      },
    }));
  };

  const handlePromptAnswer = (promptKey, answer) => {
    setFormData((prev) => ({
      ...prev,
      promptAnswers: {
        ...prev.promptAnswers,
        [promptKey]: answer,
      },
    }));
  };

  // const handlePhotoUpload = (event) => {
  //   const files = Array.from(event.target.files);
  //   const maxPhotos = formData.houseOwner ? 6 : 2;

  //   if (files.length === 0) return;

  //   if (photoPreviews.length + files.length > maxPhotos) {
  //     alert(`You can only upload up to ${maxPhotos} photos.`);
  //     return;
  //   }

  //   const newPreviews = files.map((file) => URL.createObjectURL(file));
  //   setPhotoPreviews((prev) => [...prev, ...newPreviews]);
  //   setPhotos((prev) => [...prev, ...files]);
  //   event.target.value = "";
  // };

  // const handleURLPhoto = () => {
  //   const url = prompt("Enter the URL of the photo:");
  //   const maxPhotos = formData.houseOwner ? 6 : 2;

  //   if (!url) return;

  //   if (photoPreviews.length >= maxPhotos) {
  //     alert(`You can only upload up to ${maxPhotos} photos.`);
  //     return;
  //   }

  //   if (url.match(/^https?:\/\/.+\.(jpeg|jpg|png|gif)(\?.*)?$/i)) {
  //     setPhotoPreviews((prev) => [...prev, url]);
  //     setPhotos((prev) => [...prev, url]);
  //   } else {
  //     alert("Please enter a valid image URL (.jpeg, .jpg, .png, or .gif)");
  //   }
  // };

  // const handleRemovePhoto = (indexToRemove) => {
  //   setPhotoPreviews((prev) =>
  //     prev.filter((_, index) => index !== indexToRemove)
  //   );
  //   setPhotos((prev) => prev.filter((_, index) => index !== indexToRemove));
  // };

  // const handlePhotoUpload = (event) => {
  //   const files = Array.from(event.target.files);

  //   if (files.length === 0) return;

  //   // Create object URLs for previews
  //   const newPreview = files.map((file) => URL.createObjectURL(file));

  //   // Add new previews to the existing ones
  //   setPhotoPreview((prevPreview) => [...prevPreview, ...newPreview]);

  //   // Reset the file input to allow selecting the same files again
  //   event.target.value = "";
  // };

  // // Handle adding photo via URL (prompt user for URL)
  // const handleURLPhoto = () => {
  //   const url = prompt("Enter the URL of the photo:");

  //   if (!url) return;

  //   // Validate URL format (basic validation)
  //   if (url.match(/^https?:\/\/.+\.(jpeg|jpg|png|gif)(\?.*)?$/i)) {
  //     setPhotoPreview((prevPreview) => [...prevPreview, url]);
  //   } else {
  //     alert("Please enter a valid image URL (.jpeg, .jpg, .png, or .gif)");
  //   }
  // };

  // // Handle removing a photo from the previews
  // const handleRemovePhoto = (indexToRemove) => {
  //   setPhotoPreview((prevPreview) =>
  //     prevPreview.filter((_, index) => index !== indexToRemove)
  //   );
  // };

  const handlePhotoUpload = (event) => {
    const files = Array.from(event.target.files);
    const maxPhotos = formData.houseOwner ? 6 : 2;

    if (files.length === 0) return;

    if (photoPreviews.length + files.length > maxPhotos) {
      alert(`You can only upload up to ${maxPhotos} photos.`);
      return;
    }

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPhotoPreviews((prev) => [...prev, ...newPreviews]);
    setPhotos((prev) => [...prev, ...files]);
    event.target.value = ""; // Reset input to allow selecting same files again
  };

  const handleURLPhoto = () => {
    const url = prompt("Enter the URL of the photo:");
    const maxPhotos = formData.houseOwner ? 6 : 2;

    if (!url) return;

    if (photoPreviews.length >= maxPhotos) {
      alert(`You can only upload up to ${maxPhotos} photos.`);
      return;
    }

    if (url.match(/^https?:\/\/.+\.(jpeg|jpg|png|gif)(\?.*)?$/i)) {
      setPhotoPreviews((prev) => [...prev, url]);
      setPhotos((prev) => [...prev, url]); // Store URL directly
    } else {
      alert("Please enter a valid image URL (.jpeg, .jpg, .png, or .gif)");
    }
  };

  const handleRemovePhoto = (indexToRemove) => {
    setPhotoPreviews((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
    setPhotos((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const validatePasswords = () => {
    if (formData.password !== formData.retypePassword) {
      setPasswordError("Passwords do not match");
      return false;
    }
    if (formData.password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return false;
    }
    return true;
  };

  // Send mobile OTP - standalone function
  const sendMobileOtp = async () => {
    if (!formData.mobile) {
      setVerification({
        ...verification,
        mobile: {
          ...verification.mobile,
          error: "Please enter a valid mobile number",
        },
      });
      return;
    }

    setVerification({
      ...verification,
      mobile: {
        ...verification.mobile,
        inProgress: true,
        error: null,
      },
    });

    try {
      // Use the standalone OTP endpoint
      const mobile = formData.mobile;
      console.log(mobile);
      const response = await axios.post(
        "http://localhost:5001/api/send-otp",
        {
          mobile: formData.mobile,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setVerification({
          ...verification,
          mobile: {
            ...verification.mobile,
            inProgress: false,
            showOtpInput: true,
            error: null,
          },
        });
      }
    } catch (error) {
      console.error("Error sending OTP:", error);

      let errorMessage = "Failed to send verification code";
      if (error.response) {
        // Use specific error messages from your backend if available
        errorMessage =
          error.response.data.message ||
          error.response.data.error ||
          errorMessage;
      }

      setVerification({
        ...verification,
        mobile: {
          ...verification.mobile,
          inProgress: false,
          error: errorMessage,
        },
      });
    }
  };

  // Verify mobile OTP - standalone function
  const verifyMobileOtp = async () => {
    if (!verification.mobile.otp) {
      setVerification({
        ...verification,
        mobile: {
          ...verification.mobile,
          error: "Please enter the verification code",
        },
      });
      return;
    }

    setVerification({
      ...verification,
      mobile: {
        ...verification.mobile,
        inProgress: true,
        error: null,
      },
    });

    try {
      // Use the standalone verify endpoint
      const response = await axios.post(
        "http://localhost:5001/api/verify-otp",
        {
          mobile: formData.mobile,
          verificationCode: verification.mobile.otp,
        }
      );

      if (response.data.success) {
        setVerification({
          ...verification,
          mobile: {
            ...verification.mobile,
            inProgress: false,
            verified: true,
            showOtpInput: false,
            error: null,
          },
        });
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);

      let errorMessage = "Verification failed. Please try again.";
      if (error.response) {
        if (error.response.status === 400) {
          errorMessage =
            error.response.data.error ||
            "Verification failed. Please try again.";
        } else {
          // Use specific error messages from your backend if available
          errorMessage =
            error.response.data.message ||
            error.response.data.error ||
            errorMessage;
        }
      }

      setVerification({
        ...verification,
        mobile: {
          ...verification.mobile,
          inProgress: false,
          error: errorMessage,
        },
      });
    }
  };

  // Resend OTP function
  const resendMobileOtp = async () => {
    // Reset the OTP field when resending
    setVerification({
      ...verification,
      mobile: {
        ...verification.mobile,
        otp: "",
        inProgress: true,
        error: null,
      },
    });

    try {
      // Use the same standalone endpoint for sending OTP
      const response = await axios.post("http://localhost:5001/api/send-otp", {
        mobile: formData.mobile,
      });

      if (response.data.success) {
        setVerification({
          ...verification,
          mobile: {
            ...verification.mobile,
            inProgress: false,
            error: "New verification code sent!",
          },
        });
      }
    } catch (error) {
      console.error("Error resending OTP:", error);

      setVerification({
        ...verification,
        mobile: {
          ...verification.mobile,
          inProgress: false,
          error: "Failed to resend code. Please try again.",
        },
      });
    }
  };

  const sendEmailOtp = async () => {
    console.log("Starting sendEmailOtp function");
    console.log("Current verification state:", verification);

    if (!formData.email) {
      setVerification((prevState) => ({
        ...prevState,
        email: {
          ...prevState.email,
          error: "Please enter a valid email address",
        },
      }));
      return;
    }

    console.log("Setting inProgress to true");
    setVerification((prevState) => ({
      ...prevState,
      email: {
        ...prevState.email,
        inProgress: true,
        error: null,
      },
    }));

    try {
      console.log("Sending API request to reqOTPEmail");
      // Use the email OTP endpoint with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await axios.post(
        "http://localhost:5001/api/reqOTPEmail",
        {
          email: formData.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId); // Clear the timeout if request completes normally

      // Check if the request was successful
      console.log("API response status:", response.status);
      console.log("API response data:", response.data);

      if (response.status === 200) {
        console.log(
          "Email OTP sent successfully, updating state to show OTP input"
        );

        // Update the state to show OTP input
        setVerification((prevState) => {
          console.log("Updating verification state with showOtpInput: true");
          return {
            ...prevState,
            email: {
              ...prevState.email,
              inProgress: false,
              showOtpInput: true,
              otp: "", // Reset any previous OTP
              error: null,
            },
          };
        });
      } else {
        throw new Error("Unexpected response from server");
      }
    } catch (error) {
      console.error("Error sending email OTP:", error);

      let errorMessage = "Failed to send verification code";
      if (error.name === "AbortError") {
        errorMessage = "Request timed out. Server may be unresponsive.";
      } else if (error.response) {
        // Use specific error messages from your backend if available
        errorMessage =
          error.response.data.message ||
          error.response.data.error ||
          errorMessage;
      }

      setVerification((prevState) => ({
        ...prevState,
        email: {
          ...prevState.email,
          inProgress: false,
          error: errorMessage,
        },
      }));
    }
  };

  // Verify email OTP - standalone function
  const verifyEmailOtp = async () => {
    if (!verification.email.otp) {
      setVerification((prevState) => ({
        ...prevState,
        email: {
          ...prevState.email,
          error: "Please enter the verification code",
        },
      }));
      return;
    }

    setVerification((prevState) => ({
      ...prevState,
      email: {
        ...prevState.email,
        inProgress: true,
        error: null,
      },
    }));

    try {
      // Use the email verify endpoint
      const response = await axios.post(
        "http://localhost:5001/api/verifyOTPEmail",
        {
          email: formData.email,
          otp: verification.email.otp,
        }
      );

      if (response.data.message === "OTP verified") {
        setVerification((prevState) => ({
          ...prevState,
          email: {
            ...prevState.email,
            inProgress: false,
            verified: true,
            showOtpInput: false,
            error: null,
          },
        }));
      } else {
        setVerification((prevState) => ({
          ...prevState,
          email: {
            ...prevState.email,
            inProgress: false,
            error: "Invalid verification code. Please try again.",
          },
        }));
      }
    } catch (error) {
      console.error("Error verifying email OTP:", error);

      let errorMessage = "Verification failed. Please try again.";
      if (error.response) {
        if (error.response.status === 400) {
          errorMessage =
            error.response.data.message ||
            "Verification failed. Please try again.";
        } else {
          // Use specific error messages from your backend if available
          errorMessage =
            error.response.data.message ||
            error.response.data.error ||
            errorMessage;
        }
      }

      setVerification((prevState) => ({
        ...prevState,
        email: {
          ...prevState.email,
          inProgress: false,
          error: errorMessage,
        },
      }));
    }
  };

  // Resend email OTP function
  const resendEmailOtp = async () => {
    // Reset the OTP field when resending
    setVerification((prevState) => ({
      ...prevState,
      email: {
        ...prevState.email,
        otp: "",
        inProgress: true,
        error: null,
      },
    }));

    try {
      // Use the same endpoint for sending email OTP
      const response = await axios.post(
        "http://localhost:5001/api/reqOTPEmail",
        {
          email: formData.email,
        }
      );

      // Update state properly after successful resend
      setVerification((prevState) => ({
        ...prevState,
        email: {
          ...prevState.email,
          inProgress: false,
          showOtpInput: true,
          error: "New verification code sent!",
        },
      }));
    } catch (error) {
      console.error("Error resending email OTP:", error);

      setVerification((prevState) => ({
        ...prevState,
        email: {
          ...prevState.email,
          inProgress: false,
          error: "Failed to resend code. Please try again.",
        },
      }));
    }
  };

  // Helper function to handle email OTP input changes
  const handleEmailOtpChange = (e) => {
    setVerification((prevState) => ({
      ...prevState,
      email: {
        ...prevState.email,
        otp: e.target.value,
        error: null,
      },
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setSubmitError("");
  //   setSubmitSuccess("");

  //   // Validate form data
  //   if (!validatePasswords()) return;
  //   if (!formData.email || formData.email.trim() === "") {
  //     setSubmitError("Email is required");
  //     return;
  //   }
  //   if (formData.selectedPrompts.length < 3) {
  //     setSubmitError("Please select and answer 3 prompts");
  //     return;
  //   }

  //   const unansweredPrompts = formData.selectedPrompts.filter(
  //     (promptKey) => !formData.promptAnswers[promptKey]
  //   );
  //   if (unansweredPrompts.length > 0) {
  //     setSubmitError("Please answer all selected prompts");
  //     return;
  //   }
  //   if (formData.livingWith.length === 0) {
  //     setSubmitError("Please select who you're comfortable living with");
  //     return;
  //   }
  //   if (!formData.lookingFor) {
  //     setSubmitError("Please select what you're looking for");
  //     return;
  //   }

  //   // Check if mobile and email are verified
  //   // if (!verification.mobile.verified) {
  //   //   setVerification({
  //   //     ...verification,
  //   //     mobile: {
  //   //       ...verification.mobile,
  //   //       error: "Please verify your mobile number",
  //   //     },
  //   //   });
  //   //   return;
  //   // }
  //   // if (!verification.email.verified) {
  //   //   setSubmitError("Please verify your email address");
  //   //   return;
  //   // }

  //   try {
  //     setLoading(true);
  //     const data = new FormData();

  //     const livingWithArray = Array.isArray(formData.livingWith)
  //       ? formData.livingWith
  //       : [formData.livingWith].filter(Boolean);

  //     // Add all form fields except retypePassword
  //     Object.entries({
  //       ...formData,
  //       livingWith: livingWithArray,
  //     }).forEach(([key, value]) => {
  //       if (
  //         key === "retypePassword" ||
  //         key === "livingWith" ||
  //         key === "promptAnswers"
  //       )
  //         return;

  //       if (typeof value === "object" && !(value instanceof File)) {
  //         data.append(key, JSON.stringify(value));
  //       } else {
  //         data.append(key, value);
  //       }
  //     });

  //     // Handle livingWith array properly - append each item separately
  //     livingWithArray.forEach((item) => {
  //       data.append("livingWith", item);
  //     });

  //     // Handle promptAnswers properly - single stringify
  //     data.append("promptAnswers", JSON.stringify(formData.promptAnswers));

  //     photos.forEach((photo, index) => {
  //       if (photo instanceof File) {
  //         data.append(`photos`, photo);
  //       } else if (typeof photo === "string") {
  //         data.append(`photoUrls`, photo);
  //       }
  //     });

  //     console.log("FormData contents:");
  //     for (let [key, value] of data.entries()) {
  //       console.log(key, value);
  //     }

  //     const response = await axios.post(
  //       "http://localhost:5001/api/auth/register",
  //       data,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     setSubmitSuccess("User registered successfully! Redirecting to login...");
  //     setTimeout(() => {
  //       window.location.href = "/login";
  //     }, 2000);
  //   } catch (error) {
  //     console.error("Registration error:", error);

  //     // More detailed error logging
  //     if (error.response) {
  //       console.error("Response data:", error.response.data);
  //       console.error("Response status:", error.response.status);
  //       console.error("Response headers:", error.response.headers);

  //       if (error.response.data.errors) {
  //         const errorMessages = error.response.data.errors
  //           .map((err) => err.msg)
  //           .join(", ");
  //         setSubmitError(errorMessages);
  //       } else {
  //         setSubmitError(
  //           error.response.data.message ||
  //             "Registration failed. Please try again."
  //         );
  //       }
  //     } else if (error.request) {
  //       console.error("Request:", error.request);
  //       setSubmitError("No response received from server. Please try again.");
  //     } else {
  //       console.error("Error message:", error.message);
  //       setSubmitError("An error occurred. Please try again.");
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setSubmitError("");
  //   setSubmitSuccess("");

  //   // Validate form data
  //   if (!validatePasswords()) return;
  //   if (!formData.email || formData.email.trim() === "") {
  //     setSubmitError("Email is required");
  //     return;
  //   }
  //   if (formData.selectedPrompts.length < 3) {
  //     setSubmitError("Please select and answer 3 prompts");
  //     return;
  //   }

  //   const unansweredPrompts = formData.selectedPrompts.filter(
  //     (promptKey) => !formData.promptAnswers[promptKey]
  //   );
  //   if (unansweredPrompts.length > 0) {
  //     setSubmitError("Please answer all selected prompts");
  //     return;
  //   }
  //   if (formData.livingWith.length === 0) {
  //     setSubmitError("Please select who you're comfortable living with");
  //     return;
  //   }
  //   if (!formData.lookingFor) {
  //     setSubmitError("Please select what you're looking for");
  //     return;
  //   }

  //   try {
  //     setLoading(true);
  //     const data = new FormData();

  //     const livingWithArray = Array.isArray(formData.livingWith)
  //       ? formData.livingWith
  //       : [formData.livingWith].filter(Boolean);

  //     // Add all form fields except retypePassword
  //     // Object.entries(formData).forEach(([key, value]) => {
  //     //   if (key === "retypePassword") return;

  //     Object.entries({
  //       ...formData,
  //       livingWith: livingWithArray,
  //       promptAnswers: JSON.stringify(formData.promptAnswers), // Stringify properly
  //     }).forEach(([key, value]) => {
  //       if (
  //         key === "retypePassword" ||
  //         key === "livingWith" ||
  //         key === "promptAnswers" ||
  //         key === "photos"
  //       )
  //         return;

  //       if (typeof value === "object" && !(value instanceof File)) {
  //         data.append(key, JSON.stringify(value));
  //       } else {
  //         data.append(key, value);
  //       }
  //     });

  //     //   if (
  //     //     key === "livingWith" ||
  //     //     key === "selectedPrompts" ||
  //     //     key === "promptAnswers"
  //     //   ) {
  //     //     data.append(key, JSON.stringify(value));
  //     //   } else if (key === "houseOwner") {
  //     //     data.append(key, value ? "true" : "false");
  //     //   } else {
  //     //     data.append(key, value);
  //     //   }
  //     // });

  //     // Handle livingWith array properly - append each item separately
  //     livingWithArray.forEach((item) => {
  //       data.append("livingWith", item);
  //     });

  //     // Handle promptAnswers properly - single stringify
  //     data.append("promptAnswers", JSON.stringify(formData.promptAnswers));

  //     // Add photos to FormData
  //     // photos.forEach((photo, index) => {
  //     //   if (photo instanceof File) {
  //     //     data.append(`photos`, photo);
  //     //   } else if (typeof photo === "string") {
  //     //     data.append(`photoUrls`, photo);
  //     //   }
  //     // });

  //     // // Separate files and URLs
  //     // const photoFiles = photos.filter((photo) => photo instanceof File);
  //     // const photoUrls = photos.filter((photo) => typeof photo === "string");

  //     // // Add photo files to FormData
  //     // photoFiles.forEach((photo) => {
  //     //   data.append("photos", photo);
  //     // });

  //     // // Add photo URLs as a JSON string if there are any
  //     // if (photoUrls.length > 0) {
  //     //   data.append("photoUrls", JSON.stringify(photoUrls));
  //     // }

  //     // Add photos to FormData
  //     // if (photos) {
  //     //   formData.append("photos", photos);
  //     //   console.log("Appending cover:", photos.name); // Add this log
  //     // }
  //     // Add photos to FormData

  //     // console.log("Photos to upload:", photos);
  //     // for (let [key, value] of formData.entries()) {
  //     //   console.log(key, value instanceof File ? value.name : value);
  //     // }

  //     photos.forEach((photo, index) => {
  //       if (photo instanceof File) {
  //         data.append("photos", photo); // Append file directly
  //       } else if (typeof photo === "string") {
  //         data.append("photoUrls", photo); // Append URL as separate field
  //       }
  //     });

  //     console.log("FormData contents:");
  //     for (let [key, value] of data.entries()) {
  //       console.log(key, value);
  //     }

  //     const response = await axios.post(
  //       "http://localhost:5001/api/auth/register",
  //       data,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     setSubmitSuccess("User registered successfully! Redirecting to login...");
  //     setTimeout(() => {
  //       window.location.href = "/login";
  //     }, 2000);
  //   } catch (error) {
  //     console.error("Registration error:", error);

  //     // More detailed error logging
  //     if (error.response) {
  //       console.error("Response data:", error.response.data);
  //       console.error("Response status:", error.response.status);
  //       console.error("Response headers:", error.response.headers);

  //       if (error.response.data.errors) {
  //         const errorMessages = error.response.data.errors
  //           .map((err) => err.msg)
  //           .join(", ");
  //         setSubmitError(errorMessages);
  //       } else {
  //         setSubmitError(
  //           error.response.data.message ||
  //             "Registration failed. Please try again."
  //         );
  //       }
  //     } else if (error.request) {
  //       console.error("Request:", error.request);
  //       setSubmitError("No response received from server. Please try again.");
  //     } else {
  //       console.error("Error message:", error.message);
  //       setSubmitError("An error occurred. Please try again.");
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess("");

    // Validate form data
    if (!validatePasswords()) return;
    if (!formData.email || formData.email.trim() === "") {
      setSubmitError("Email is required");
      return;
    }
    if (formData.selectedPrompts.length < 3) {
      setSubmitError("Please select and answer 3 prompts");
      return;
    }

    const unansweredPrompts = formData.selectedPrompts.filter(
      (promptKey) => !formData.promptAnswers[promptKey]
    );
    if (unansweredPrompts.length > 0) {
      setSubmitError("Please answer all selected prompts");
      return;
    }
    if (formData.livingWith.length === 0) {
      setSubmitError("Please select who you're comfortable living with");
      return;
    }
    if (!formData.lookingFor) {
      setSubmitError("Please select what you're looking for");
      return;
    }

    try {
      setLoading(true);
      const data = new FormData();

      const livingWithArray = Array.isArray(formData.livingWith)
        ? formData.livingWith
        : [formData.livingWith].filter(Boolean);

      // Add all form fields except retypePassword
      Object.entries({
        ...formData,
        livingWith: livingWithArray,
        promptAnswers: JSON.stringify(formData.promptAnswers),
      }).forEach(([key, value]) => {
        if (
          key === "retypePassword" ||
          key === "livingWith" ||
          key === "promptAnswers" ||
          key === "photos"
        )
          return;

        if (typeof value === "object" && !(value instanceof File)) {
          data.append(key, JSON.stringify(value));
        } else {
          data.append(key, value);
        }
      });

      // Handle livingWith array properly - append each item separately
      livingWithArray.forEach((item) => {
        data.append("livingWith", item);
      });

      // Handle promptAnswers properly - single stringify
      data.append("promptAnswers", JSON.stringify(formData.promptAnswers));

      // FIXED: Handle photos properly - only append Files, not URLs
      photos.forEach((photo) => {
        if (photo instanceof File) {
          data.append("photos", photo); // This will be processed by multer
        }
        // Remove the photoUrls handling - backend doesn't expect this field
      });

      console.log("FormData contents:");
      for (let [key, value] of data.entries()) {
        console.log(key, value);
      }

      const response = await axios.post(
        "http://localhost:5001/api/auth/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSubmitSuccess("User registered successfully! Redirecting to login...");
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      console.error("Registration error:", error);

      // More detailed error logging
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);

        if (error.response.data.errors) {
          const errorMessages = error.response.data.errors
            .map((err) => err.msg)
            .join(", ");
          setSubmitError(errorMessages);
        } else {
          setSubmitError(
            error.response.data.message ||
              "Registration failed. Please try again."
          );
        }
      } else if (error.request) {
        console.error("Request:", error.request);
        setSubmitError("No response received from server. Please try again.");
      } else {
        console.error("Error message:", error.message);
        setSubmitError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const getPromptQuestionByKey = (promptKey) => {
    if (!promptKey) return null;
    const [promptId, questionId] = promptKey.split("-");
    const promptCategory = promptsList.find((p) => p.id === promptId);
    if (!promptCategory) return null;
    const question = promptCategory.questions.find((q) => q.id === questionId);
    return question ? question.question : null;
  };

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <h1 className="signup-title">Signup for Roomble</h1>
        <p className="signup-subtitle">
          Find your perfect roommate and living space
        </p>

        {submitSuccess && (
          <div className="success-message">{submitSuccess}</div>
        )}
        {submitError && <div className="error-message">{submitError}</div>}

        <form onSubmit={handleSubmit} className="signup-form">
          {/* Basic Profile Info */}
          <section className="form-section">
            <h2 className="section-title">Basic Profile</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="18"
                  required
                />
              </div>

              <div className="form-group">
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  {genderOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </section>

          {/* Password Section */}
          <section className="form-section">
            <h2 className="section-title">Create Password</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  minLength="8"
                  required
                />
                <small className="input-hint">Minimum 8 characters</small>
              </div>

              <div className="form-group">
                <label>Re-type Password</label>
                <input
                  type="password"
                  name="retypePassword"
                  value={formData.retypePassword}
                  onChange={handleChange}
                  required
                />
                {passwordError && (
                  <p className="error-message">{passwordError}</p>
                )}
              </div>
            </div>
          </section>

          {/* Personal Info */}
          <section className="form-section">
            <h2 className="section-title">Contact Information</h2>
            <div className="form-grid">
              {/* Mobile with Verification */}

              <div className="form-group">
                <label>Mobile</label>
                <div className="input-with-button">
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    disabled={verification.mobile.verified}
                    className={
                      verification.mobile.verified ? "verified-input" : ""
                    }
                  />
                  {verification.mobile.verified ? (
                    <button type="button" className="verified-button" disabled>
                      Verified ✓
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="verify-button"
                      onClick={sendMobileOtp}
                      disabled={
                        verification.mobile.inProgress || !formData.mobile
                      }
                    >
                      {verification.mobile.inProgress
                        ? "Sending..."
                        : "Send OTP"}
                    </button>
                  )}
                </div>
                {verification.mobile.showOtpInput && (
                  <div className="otp-input-container">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={verification.mobile.otp}
                      onChange={handleOtpChange}
                      className="otp-input"
                    />
                    <button
                      type="button"
                      className="verify-button"
                      onClick={verifyMobileOtp}
                      disabled={
                        verification.mobile.inProgress ||
                        !verification.mobile.otp
                      }
                    >
                      {verification.mobile.inProgress
                        ? "Verifying..."
                        : "Verify OTP"}
                    </button>
                  </div>
                )}
                {/* Optional: Add a resend button */}
                {verification.mobile.showOtpInput && (
                  <button
                    type="button"
                    className="resend-button"
                    onClick={resendMobileOtp}
                    disabled={verification.mobile.inProgress}
                  >
                    Resend OTP
                  </button>
                )}

                {verification.mobile.error && (
                  <div className="input-error">{verification.mobile.error}</div>
                )}
              </div>

              {/* Email with Verification */}

              <div className="form-group">
                <label>Email</label>
                <div className="input-with-button">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={verification.email.verified}
                    className={
                      verification.email.verified ? "verified-input" : ""
                    }
                  />

                  {verification.email.verified ? (
                    <button type="button" className="verified-button" disabled>
                      Verified ✓
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="verify-button"
                      onClick={sendEmailOtp}
                      disabled={
                        verification.email.inProgress || !formData.email
                      }
                    >
                      {verification.email.inProgress
                        ? "Sending..."
                        : "Send OTP"}
                    </button>
                  )}
                </div>

                {verification.email.showOtpInput && (
                  <div className="otp-input-container">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={verification.email.otp}
                      onChange={handleEmailOtpChange}
                      className="otp-input"
                    />
                    <button
                      type="button"
                      className="verify-button"
                      onClick={verifyEmailOtp}
                      disabled={
                        verification.email.inProgress || !verification.email.otp
                      }
                    >
                      {verification.email.inProgress
                        ? "Verifying..."
                        : "Verify OTP"}
                    </button>
                  </div>
                )}

                {verification.email.showOtpInput && (
                  <button
                    type="button"
                    className="resend-button"
                    onClick={resendEmailOtp}
                    disabled={verification.email.inProgress}
                  >
                    Resend OTP
                  </button>
                )}

                {verification.email.error && (
                  <div className="input-error">{verification.email.error}</div>
                )}
              </div>

              {/* LinkedIn with Verification */}
              <div className="form-group">
                <label>LinkedIn Profile URL</label>
                <div className="input-with-button">
                  <input
                    type="text"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    disabled={verification.linkedin.verified}
                    className={
                      verification.linkedin.verified ? "verified-input" : ""
                    }
                  />
                  {verification.linkedin.verified ? (
                    <button type="button" className="verified-button" disabled>
                      Verified ✓
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="verify-button"
                      onClick={handleLinkedInLogin}
                      disabled={
                        verification.linkedin.inProgress || !formData.linkedin
                      }
                    >
                      {verification.linkedin.inProgress
                        ? "Verifying..."
                        : "Verify"}
                    </button>
                  )}
                </div>
                {verification.linkedin.error && (
                  <div className="input-error">
                    {verification.linkedin.error}
                  </div>
                )}
              </div>

              {/* Aadhar with Verification */}
              {/* <div className="form-group">
                <label>Aadhar Number</label>
                <div className="input-with-button">
                  <input
                    type="text"
                    name="aadhar"
                    value={formData.aadhar}
                    onChange={handleChange}
                    required
                    disabled={verification.aadhar.verified}
                    className={
                      verification.aadhar.verified ? "verified-input" : ""
                    }
                  />
                  {verification.aadhar.verified ? (
                    <button type="button" className="verified-button" disabled>
                      Verified ✓
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="verify-button"
                      onClick={verifyAadhar}
                      disabled={
                        verification.aadhar.inProgress ||
                        !formData.aadhar ||
                        !formData.name ||
                        !formData.dob
                      }
                    >
                      {verification.aadhar.inProgress
                        ? "Verifying..."
                        : "Verify"}
                    </button>
                  )}
                </div>
                {verification.aadhar.error && (
                  <div className="input-error">{verification.aadhar.error}</div>
                )}
                {!formData.name || !formData.dob ? (
                  <div className="input-info">
                    Fill name and date of birth before verifying Aadhar
                  </div>
                ) : null}
              </div> */}
              <div className="form-group">
                <label>Aadhar Number</label>
                <div className="input-with-button">
                  <input
                    type="text"
                    name="aadhar"
                    value={formData.aadhar}
                    onChange={handleChange}
                    required
                    className=""
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </section>

          {/* Location */}
          <section className="form-section">
            <h2 className="section-title">Your Location</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>City</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                >
                  {cityOptions.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Area/Neighborhood</label>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </section>

          {/* Photos Section with Toggle */}
          <section className="form-section">
            <h2 className="section-title">Photos</h2>
            <div className="toggle-container">
              <span className="toggle-label">I have a house to share</span>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  name="houseOwner"
                  checked={formData.houseOwner}
                  onChange={handleChange}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <p className="info-text">
              {formData.houseOwner
                ? "Upload up to 6 photos of your place."
                : "Upload up to 2 photos of yourself."}
            </p>

            <div className="photo-controls">
              <input
                type="file"
                multiple
                accept="image/jpeg,image/png,image/gif"
                onChange={handlePhotoUpload}
                className="photo-upload"
                id="photo-upload"
              />
              <label htmlFor="photo-upload" className="photo-upload-label">
                Select Photos
              </label>
              <button
                type="button"
                className="photo-url-button"
                onClick={handleURLPhoto}
              >
                Add Photo via URL
              </button>
            </div>

            {/* <div className="photo-preview">
              {photoPreview.map((photo, idx) => (
                <div key={idx} className="photo-card">
                  <img src={photo} alt={`Uploaded ${idx}`} />
                  <button
                    type="button"
                    className="remove-photo"
                    onClick={() => handleRemovePhoto(idx)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div> */}
            <div className="photo-preview">
              {photoPreviews.map((photo, idx) => (
                <div key={idx} className="photo-card">
                  <img src={photo} alt={`Uploaded ${idx}`} />
                  <button
                    type="button"
                    className="remove-photo"
                    onClick={() => handleRemovePhoto(idx)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Living Preferences */}
          <section className="form-section">
            <h2 className="section-title">Living Preferences</h2>
            <p className="section-subtitle">I'm comfortable living with:</p>
            <div className="option-buttons">
              {livingWithOptions.map((option) => (
                <label
                  key={option}
                  className={`option-button ${
                    formData.livingWith.includes(option) ? "selected" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    value={option}
                    checked={formData.livingWith.includes(option)}
                    onChange={(e) => handleMultiSelectChange(e, "livingWith")}
                  />
                  {option}
                </label>
              ))}
            </div>
          </section>

          {/* Looking For */}
          <section className="form-section">
            <h2 className="section-title">What Are You Looking For?</h2>
            <div className="option-buttons">
              {lookingForOptions.map((option) => (
                <label
                  key={option}
                  className={`option-button ${
                    formData.lookingFor === option ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="lookingFor"
                    value={option}
                    checked={formData.lookingFor === option}
                    onChange={handleChange}
                  />
                  {option}
                </label>
              ))}
            </div>
          </section>

          {/* Prompts */}
          <section className="form-section">
            <h2 className="section-title">Select 3 Prompts</h2>
            <p className="section-subtitle">
              Help others get to know you better
            </p>
            <div className="prompt-selection">
              {promptsList.map((category) => (
                <div key={category.id} className="prompt-category">
                  <h3 className="category-name">{category.name}</h3>
                  <div className="prompt-questions">
                    {category.questions.map((question) => {
                      const promptKey = `${category.id}-${question.id}`;
                      const isSelected =
                        formData.selectedPrompts.includes(promptKey);

                      return (
                        <div key={question.id} className="prompt-question-item">
                          <div
                            className={`prompt-question ${
                              isSelected ? "selected" : ""
                            }`}
                            onClick={() =>
                              handlePromptSelect(category.id, question.id)
                            }
                          >
                            {question.question}
                            {isSelected && (
                              <span className="selected-mark">✓</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {formData.selectedPrompts.length > 0 && (
              <div className="selected-prompts">
                <h3>Your Selected Prompts</h3>
                {formData.selectedPrompts.map((promptKey) => (
                  <div key={promptKey} className="prompt-answer">
                    <label>{getPromptQuestionByKey(promptKey)}</label>
                    <textarea
                      value={formData.promptAnswers[promptKey] || ""}
                      onChange={(e) =>
                        handlePromptAnswer(promptKey, e.target.value)
                      }
                      placeholder="Your answer..."
                    />
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Submit */}
          <button type="submit" className="submit-button">
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
