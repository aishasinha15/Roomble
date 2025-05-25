// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./EditProfile.css";

// const EditProfile = () => {
//   // This would come from your app state or API in a real app
//   const [formData, setFormData] = useState({
//     name: "Sarah Johnson",
//     age: "28",
//     gender: "Female",
//     occupation: "UX Designer",
//     mobile: "9876543210",
//     aadhar: "XXXX-XXXX-XXXX",
//     linkedin: "linkedin.com/in/sarahjohnson",
//     dob: "1997-06-15",
//     city: "Delhi",
//     area: "Hauz Khas",
//     password: "",
//     confirmPassword: "",
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
//     livingWith: ["Everyone"],
//     lookingFor: "Long-term Stay",
//     selectedPrompts: ["0-2", "1-0", "3-0"],
//     promptAnswers: {
//       "0-2":
//         "I can speak three languages fluently: English, Hindi, and French!",
//       "1-0":
//         "My ideal home vibe is cozy minimalist with lots of plants and natural light.",
//       "3-0":
//         "A green flag in a roommate is someone who communicates openly about issues instead of letting them build up.",
//     },
//   });

//   const [passwordError, setPasswordError] = useState("");

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

//   const livingWithOptions = ["Men", "Women", "Everyone"];
//   const lookingForOptions = [
//     "Short-term Stay",
//     "Long-term Stay",
//     "Medium-term Stay",
//     "Flexible / Month-to-month",
//     "I'm still figuring it out",
//   ];
//   const genderOptions = ["Male", "Female", "Non-binary", "Prefer not to say"];
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

//     // Clear password error when user starts typing again
//     if (name === "password" || name === "confirmPassword") {
//       setPasswordError("");
//     }
//   };

//   const validatePasswords = () => {
//     if (formData.password && formData.password.length < 8) {
//       setPasswordError("Password should be at least 8 characters long");
//       return false;
//     }

//     if (
//       formData.password &&
//       formData.confirmPassword &&
//       formData.password !== formData.confirmPassword
//     ) {
//       setPasswordError("Passwords don't match");
//       return false;
//     }

//     return true;
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

//   const handlePhotoUpload = (e, photoType) => {
//     const files = Array.from(e.target.files);
//     const maxPersonalPhotos = 2;
//     const maxPlacePhotos = 4;

//     if (photoType === "personal") {
//       if (formData.photos.length + files.length > maxPersonalPhotos) {
//         alert(`Maximum ${maxPersonalPhotos} personal photos allowed.`);
//         return;
//       }

//       const newPhotos = files.map((file) => URL.createObjectURL(file));
//       setFormData((prev) => ({
//         ...prev,
//         photos: [...prev.photos, ...newPhotos],
//       }));
//     } else {
//       if (formData.placePhotos.length + files.length > maxPlacePhotos) {
//         alert(`Maximum ${maxPlacePhotos} place photos allowed.`);
//         return;
//       }

//       const newPhotos = files.map((file) => URL.createObjectURL(file));
//       setFormData((prev) => ({
//         ...prev,
//         placePhotos: [...prev.placePhotos, ...newPhotos],
//       }));
//     }
//   };

//   const handleURLPhoto = (photoType) => {
//     const maxPersonalPhotos = 2;
//     const maxPlacePhotos = 4;

//     if (photoType === "personal") {
//       if (formData.photos.length >= maxPersonalPhotos) {
//         alert(`Maximum ${maxPersonalPhotos} personal photos allowed.`);
//         return;
//       }

//       const url = prompt("Enter personal photo URL:");
//       if (url) {
//         setFormData((prev) => ({
//           ...prev,
//           photos: [...prev.photos, url],
//         }));
//       }
//     } else {
//       if (formData.placePhotos.length >= maxPlacePhotos) {
//         alert(`Maximum ${maxPlacePhotos} place photos allowed.`);
//         return;
//       }

//       const url = prompt("Enter place photo URL:");
//       if (url) {
//         setFormData((prev) => ({
//           ...prev,
//           placePhotos: [...prev.placePhotos, url],
//         }));
//       }
//     }
//   };

//   const handleRemovePhoto = (index, photoType) => {
//     if (photoType === "personal") {
//       setFormData((prev) => ({
//         ...prev,
//         photos: prev.photos.filter((_, i) => i !== index),
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         placePhotos: prev.placePhotos.filter((_, i) => i !== index),
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

//   const getPromptQuestionByKey = (promptKey) => {
//     if (!promptKey) return null;
//     const [promptId, questionId] = promptKey.split("-");
//     const promptCategory = promptsList.find((p) => p.id === promptId);
//     if (!promptCategory) return null;
//     const question = promptCategory.questions.find((q) => q.id === questionId);
//     return question ? question.question : null;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate passwords
//     if (!validatePasswords()) {
//       return;
//     }

//     console.log(formData);
//     alert("Profile updated successfully!");
//     // Here you would typically redirect back to the profile page
//   };
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../AuthContext";
import "./EditProfile.css";

const EditProfile = () => {
  const { isAuthenticated, user: authUser, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [photoFiles, setPhotoFiles] = useState([]);
  // const [photoPreviews, setPhotoPreviews] = useState([]);
  // const [personalPhotoFiles, setPersonalPhotoFiles] = useState([]);
  // const [personalPhotoPreviews, setPersonalPhotoPreviews] = useState([]);
  // const [housePhotoFiles, setHousePhotoFiles] = useState([]);
  // const [housePhotoPreviews, setHousePhotoPreviews] = useState([]);

  // Track both new files and existing photos separately
  const [personalPhotoFiles, setPersonalPhotoFiles] = useState([]);
  const [personalPhotoPreviews, setPersonalPhotoPreviews] = useState([]);
  const [existingPersonalPhotos, setExistingPersonalPhotos] = useState([]);

  const [housePhotoFiles, setHousePhotoFiles] = useState([]);
  const [housePhotoPreviews, setHousePhotoPreviews] = useState([]);
  const [existingHousePhotos, setExistingHousePhotos] = useState([]);

  // Initial form state is empty; will be populated with user data
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    occupation: "",
    mobile: "",
    aadhar: "",
    linkedin: "",
    dob: "",
    city: "",
    area: "",
    houseOwner: false,
    livingWith: [],
    lookingFor: "",
    selectedPrompts: [],
    promptAnswers: {},
  });

  // Fetch user profile data when component mounts
  useEffect(() => {
    const fetchProfileData = async () => {
      if (!isAuthenticated || !authUser) {
        setLoading(false);
        return;
      }

      try {
        // Get token from local storage
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("No authentication token found");
        }

        console.log("Token found, attempting API call to fetch profile");

        const response = await axios.get(
          `http://localhost:5001/api/profile/user/${authUser.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Profile data received for editing:", response.data);
        const profileData = response.data.profile || response.data;

        // Convert photo URLs to absolute URLs if they're relative
        const photos =
          profileData.photos?.map((photo) =>
            photo.startsWith("/") ? `http://localhost:5001${photo}` : photo
          ) || [];

        if (photos.length > 0) {
          // setPersonalPhotoPreviews(photos.slice(0, 2));
          // if (photos.length > 2 && profileData.houseOwner) {
          //   setHousePhotoPreviews(photos.slice(2));
          // }
          // Store existing photos separately for personal photos (max 2)
          const personalPhotos = photos.slice(0, 2);
          setPersonalPhotoPreviews(personalPhotos);
          setExistingPersonalPhotos(personalPhotos);

          // Store existing photos separately for house photos (if any)
          if (photos.length > 2 && profileData.houseOwner) {
            const housePhotos = photos.slice(2);
            setHousePhotoPreviews(housePhotos);
            setExistingHousePhotos(housePhotos);
          }
        }

        // Extract selected prompts from promptAnswers
        const selectedPrompts = profileData.promptAnswers
          ? Object.keys(profileData.promptAnswers)
          : [];

        // Transform the API data to match our form structure
        setFormData({
          name: profileData.name || "",
          age: profileData.age ? profileData.age.toString() : "",
          gender: profileData.gender || "",
          occupation: profileData.occupation || "",
          mobile: profileData.mobile || "",
          aadhar: profileData.aadhar || "",
          linkedin: profileData.linkedin || "",
          dob: profileData.dob ? profileData.dob.split("T")[0] : "",
          city: profileData.city || "",
          area: profileData.area || "",
          houseOwner: profileData.houseOwner || false,
          livingWith: profileData.livingWith || [],
          lookingFor: profileData.lookingFor || "",
          selectedPrompts: selectedPrompts,
          promptAnswers: profileData.promptAnswers || {},
        });

        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile data for edit:", err);

        // Fallback to using authUser data if available
        if (authUser) {
          console.log("Using auth user as fallback for edit form:", authUser);

          // Extract selected prompts from promptAnswers
          const selectedPrompts = authUser.promptAnswers
            ? Object.keys(authUser.promptAnswers)
            : [];

          setFormData({
            name: authUser.name || "",
            age: authUser.age ? authUser.age.toString() : "",
            gender: authUser.gender || "",
            occupation: authUser.occupation || "",
            mobile: authUser.mobile || "",
            aadhar: authUser.aadhar || "",
            linkedin: authUser.linkedin || "",
            dob: authUser.dob || "",
            city: authUser.city || "",
            area: authUser.area || "",
            houseOwner: authUser.houseOwner || false,
            livingWith: authUser.livingWith || [],
            lookingFor: authUser.lookingFor || "",
            selectedPrompts: selectedPrompts,
            promptAnswers: authUser.promptAnswers || {},
          });
        }

        setError(`Failed to load profile data for editing: ${err.message}`);
        setLoading(false);
      }
    };

    if (!authLoading) {
      fetchProfileData();
    }
  }, [isAuthenticated, authUser, authLoading]);

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

  const livingWithOptions = ["Men", "Women", "Everyone"];
  const lookingForOptions = [
    "Short-term Stay",
    "Long-term Stay",
    "Medium-term Stay",
    "Flexible / Month-to-month",
    "I'm still figuring it out",
  ];
  const genderOptions = ["Male", "Female", "Non-binary", "Prefer not to say"];
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear password error when user starts typing again
    // if (name === "password" || name === "confirmPassword") {
    //   setPasswordError("");
    // }
  };

  // const validatePasswords = () => {
  //   // If both fields are empty, no password update is needed
  //   if (!formData.password && !formData.confirmPassword) {
  //     return true;
  //   }

  //   if (formData.password && formData.password.length < 8) {
  //     setPasswordError("Password should be at least 8 characters long");
  //     return false;
  //   }

  //   if (
  //     formData.password &&
  //     formData.confirmPassword &&
  //     formData.password !== formData.confirmPassword
  //   ) {
  //     setPasswordError("Passwords don't match");
  //     return false;
  //   }

  //   return true;
  // };

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

  // const handlePhotoUpload = (e) => {
  //   const files = Array.from(e.target.files);
  //   const maxPhotos = formData.houseOwner ? 6 : 2;

  //   if (formData.photos.length + files.length > maxPhotos) {
  //     alert(`Maximum ${maxPhotos} photos allowed.`);
  //     return;
  //   }

  //   const newPhotos = files.map((file) => URL.createObjectURL(file));
  //   setFormData((prev) => ({
  //     ...prev,
  //     photos: [...prev.photos, ...newPhotos],
  //   }));
  // };

  // const handleURLPhoto = () => {
  //   const maxPhotos = formData.houseOwner ? 6 : 2;

  //   if (formData.photos.length >= maxPhotos) {
  //     alert(`Maximum ${maxPhotos} photos allowed.`);
  //     return;
  //   }

  //   const url = prompt("Enter photo URL:");
  //   if (url) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       photos: [...prev.photos, url],
  //     }));
  //   }
  // };

  // const handleRemovePhoto = (index) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     photos: prev.photos.filter((_, i) => i !== index),
  //   }));
  // };

  // const handlePhotoUpload = (e, type) => {
  //   const files = Array.from(e.target.files);

  //   if (files.length === 0) return;

  //   files.forEach((file) => {
  //     const reader = new FileReader();

  //     reader.onload = (event) => {
  //       setFormData((prevData) => {
  //         const newPhotos = [...prevData.photos];

  //         if (type === "personal") {
  //           // Limit to 2 personal photos (positions 0-1)
  //           if (newPhotos.length < 2) {
  //             newPhotos.push(event.target.result);
  //           } else {
  //             // Replace one of the existing personal photos
  //             newPhotos[1] = event.target.result;
  //           }
  //         } else if (type === "place") {
  //           // Add place photos from positions 2-5
  //           if (newPhotos.length < 6) {
  //             // Fill in any missing personal photos with placeholders if needed
  //             while (newPhotos.length < 2) {
  //               newPhotos.push("");
  //             }
  //             // Add the new place photo
  //             newPhotos.push(event.target.result);
  //           } else {
  //             // Replace the last place photo
  //             newPhotos[5] = event.target.result;
  //           }
  //         }

  //         return {
  //           ...prevData,
  //           photos: newPhotos,
  //         };
  //       });
  //     };

  //     reader.readAsDataURL(file);
  //   });
  // };

  // // Handle photo addition via URL
  // const handleURLPhoto = (type) => {
  //   const url = prompt("Enter the URL of the photo:");

  //   if (!url) return;

  //   setFormData((prevData) => {
  //     const newPhotos = [...prevData.photos];

  //     if (type === "personal") {
  //       // Limit to 2 personal photos (positions 0-1)
  //       if (newPhotos.length < 2) {
  //         newPhotos.push(url);
  //       } else {
  //         // Replace one of the existing personal photos
  //         newPhotos[1] = url;
  //       }
  //     } else if (type === "place") {
  //       // Add place photos from positions 2-5
  //       if (newPhotos.length < 6) {
  //         // Fill in any missing personal photos with placeholders if needed
  //         while (newPhotos.length < 2) {
  //           newPhotos.push("");
  //         }
  //         // Add the new place photo
  //         newPhotos.push(url);
  //       } else {
  //         // Replace the last place photo
  //         newPhotos[5] = url;
  //       }
  //     }

  //     return {
  //       ...prevData,
  //       photos: newPhotos,
  //     };
  //   });
  // };

  // // Handle photo removal
  // const handleRemovePhoto = (idx, type) => {
  //   setFormData((prevData) => {
  //     const newPhotos = [...prevData.photos];

  //     if (type === "personal") {
  //       // Remove personal photo and shift other personal photos if needed
  //       newPhotos.splice(idx, 1);
  //       // If removing from personal section, we might need to shift place photos
  //       if (newPhotos.length >= 2) {
  //         // Ensure place photos stay in their positions
  //         // This is only needed if we removed index 0
  //         if (idx === 0 && newPhotos.length >= 3) {
  //           // Move one photo from place section to personal section
  //           // and keep total array length the same
  //           const placePhotos = newPhotos.slice(1);
  //           newPhotos.splice(1); // Clear all but first photo
  //           newPhotos.push(placePhotos[0]); // Add first place photo to personal
  //           newPhotos.push(...placePhotos.slice(1)); // Add remaining place photos
  //         }
  //       }
  //     } else if (type === "place") {
  //       // For place photos (which start at index 2)
  //       newPhotos.splice(idx, 1);
  //     }

  //     return {
  //       ...prevData,
  //       photos: newPhotos,
  //     };
  //   });
  // };

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

  // Photo handling
  // const handlePhotoUpload = (e) => {
  //   const files = Array.from(e.target.files);
  //   const maxPhotos = formData.houseOwner ? 6 : 2;

  //   if (photoPreviews.length + files.length > maxPhotos) {
  //     alert(`You can only upload up to ${maxPhotos} photos`);
  //     return;
  //   }

  //   const newPreviews = files.map((file) => URL.createObjectURL(file));
  //   setPhotoPreviews((prev) => [...prev, ...newPreviews]);
  //   setPhotoFiles((prev) => [...prev, ...files]);
  //   e.target.value = "";
  // };

  // const handleRemovePhoto = (indexToRemove) => {
  //   setPhotoPreviews((prev) =>
  //     prev.filter((_, index) => index !== indexToRemove)
  //   );
  //   setPhotoFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
  // };

  // const handleURLPhoto = () => {
  //   const maxPhotos = formData.houseOwner ? 6 : 2;
  //   if (photoPreviews.length >= maxPhotos) {
  //     alert(`Maximum ${maxPhotos} photos allowed`);
  //     return;
  //   }

  //   const url = prompt("Enter photo URL:");
  //   if (!url) return;

  //   if (url.match(/^https?:\/\/.+\.(jpeg|jpg|png|gif)(\?.*)?$/i)) {
  //     setPhotoPreviews((prev) => [...prev, url]);
  //     // Also add to photoFiles to track URLs
  //     setPhotoFiles((prev) => [...prev, url]);
  //   } else {
  //     alert("Please enter a valid image URL (.jpeg, .jpg, .png, or .gif)");
  //   }
  // };

  // const handlePersonalPhotoUpload = (e) => {
  //   const files = Array.from(e.target.files);
  //   if (files.length === 0) return;

  //   const maxPhotos = 2;
  //   if (personalPhotoPreviews.length + files.length > maxPhotos) {
  //     alert(`You can only upload up to ${maxPhotos} personal photos`);
  //     return;
  //   }

  //   const newPreviews = files.map((file) => URL.createObjectURL(file));
  //   setPersonalPhotoPreviews((prev) => [...prev, ...newPreviews]);
  //   setPersonalPhotoFiles((prev) => [...prev, ...files]);
  //   e.target.value = "";
  // };

  // const handleRemovePersonalPhoto = (indexToRemove) => {
  //   setPersonalPhotoPreviews((prev) =>
  //     prev.filter((_, index) => index !== indexToRemove)
  //   );
  //   setPersonalPhotoFiles((prev) =>
  //     prev.filter((_, index) => index !== indexToRemove)
  //   );
  // };

  // const handlePersonalURLPhoto = () => {
  //   const maxPhotos = 2;
  //   if (personalPhotoPreviews.length >= maxPhotos) {
  //     alert(`Maximum ${maxPhotos} personal photos allowed`);
  //     return;
  //   }

  //   const url = prompt("Enter personal photo URL:");
  //   if (!url) return;

  //   if (url.match(/^https?:\/\/.+\.(jpeg|jpg|png|gif)(\?.*)?$/i)) {
  //     setPersonalPhotoPreviews((prev) => [...prev, url]);
  //     setPersonalPhotoFiles((prev) => [...prev, url]);
  //   } else {
  //     alert("Please enter a valid image URL (.jpeg, .jpg, .png, or .gif)");
  //   }
  // };

  // // House photo handlers
  // const handleHousePhotoUpload = (e) => {
  //   const files = Array.from(e.target.files);
  //   if (files.length === 0) return;

  //   const maxPhotos = 4;
  //   if (housePhotoPreviews.length + files.length > maxPhotos) {
  //     alert(`You can only upload up to ${maxPhotos} house photos`);
  //     return;
  //   }

  //   const newPreviews = files.map((file) => URL.createObjectURL(file));
  //   setHousePhotoPreviews((prev) => [...prev, ...newPreviews]);
  //   setHousePhotoFiles((prev) => [...prev, ...files]);
  //   e.target.value = "";
  // };

  // const handleRemoveHousePhoto = (indexToRemove) => {
  //   setHousePhotoPreviews((prev) =>
  //     prev.filter((_, index) => index !== indexToRemove)
  //   );
  //   setHousePhotoFiles((prev) =>
  //     prev.filter((_, index) => index !== indexToRemove)
  //   );
  // };

  // const handleHouseURLPhoto = () => {
  //   const maxPhotos = 4;
  //   if (housePhotoPreviews.length >= maxPhotos) {
  //     alert(`Maximum ${maxPhotos} house photos allowed`);
  //     return;
  //   }

  //   const url = prompt("Enter house photo URL:");
  //   if (!url) return;

  //   if (url.match(/^https?:\/\/.+\.(jpeg|jpg|png|gif)(\?.*)?$/i)) {
  //     setHousePhotoPreviews((prev) => [...prev, url]);
  //     setHousePhotoFiles((prev) => [...prev, url]);
  //   } else {
  //     alert("Please enter a valid image URL (.jpeg, .jpg, .png, or .gif)");
  //   }
  // };

  const handlePersonalPhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    const maxPhotos = 2;
    // Count both existing and new photos when checking the limit
    const totalPhotos = personalPhotoPreviews.length + files.length;

    if (totalPhotos > maxPhotos) {
      alert(`You can only upload up to ${maxPhotos} personal photos`);
      return;
    }

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPersonalPhotoPreviews((prev) => [...prev, ...newPreviews]);
    setPersonalPhotoFiles((prev) => [...prev, ...files]);
    e.target.value = "";
  };

  const handleRemovePersonalPhoto = (indexToRemove) => {
    // Check if the photo is an existing one from the server
    const photoUrl = personalPhotoPreviews[indexToRemove];
    const isExistingPhoto = existingPersonalPhotos.includes(photoUrl);

    // Update previews by removing the selected index
    setPersonalPhotoPreviews((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );

    if (isExistingPhoto) {
      // Remove from existing photos list if it's a server photo
      setExistingPersonalPhotos((prev) =>
        prev.filter((photo) => photo !== photoUrl)
      );
    } else {
      // If it's a new upload, remove from the files array
      // We need to calculate the correct index in the files array
      const fileIndex = indexToRemove - existingPersonalPhotos.length;
      if (fileIndex >= 0) {
        setPersonalPhotoFiles((prev) =>
          prev.filter((_, index) => index !== fileIndex)
        );
      }
    }
  };

  const handlePersonalURLPhoto = () => {
    const maxPhotos = 2;
    if (personalPhotoPreviews.length >= maxPhotos) {
      alert(`Maximum ${maxPhotos} personal photos allowed`);
      return;
    }

    const url = prompt("Enter personal photo URL:");
    if (!url) return;

    if (url.match(/^https?:\/\/.+\.(jpeg|jpg|png|gif)(\?.*)?$/i)) {
      setPersonalPhotoPreviews((prev) => [...prev, url]);
      setPersonalPhotoFiles((prev) => [...prev, url]);
    } else {
      alert("Please enter a valid image URL (.jpeg, .jpg, .png, or .gif)");
    }
  };

  // House photo handlers with similar fixes
  const handleHousePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    const maxPhotos = 4;
    // Count both existing and new photos
    const totalPhotos = housePhotoPreviews.length + files.length;

    if (totalPhotos > maxPhotos) {
      alert(`You can only upload up to ${maxPhotos} house photos`);
      return;
    }

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setHousePhotoPreviews((prev) => [...prev, ...newPreviews]);
    setHousePhotoFiles((prev) => [...prev, ...files]);
    e.target.value = "";
  };

  const handleRemoveHousePhoto = (indexToRemove) => {
    // Check if the photo is an existing one from the server
    const photoUrl = housePhotoPreviews[indexToRemove];
    const isExistingPhoto = existingHousePhotos.includes(photoUrl);

    // Update previews by removing the selected index
    setHousePhotoPreviews((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );

    if (isExistingPhoto) {
      // Remove from existing photos list if it's a server photo
      setExistingHousePhotos((prev) =>
        prev.filter((photo) => photo !== photoUrl)
      );
    } else {
      // If it's a new upload, remove from the files array
      // We need to calculate the correct index in the files array
      const fileIndex = indexToRemove - existingHousePhotos.length;
      if (fileIndex >= 0) {
        setHousePhotoFiles((prev) =>
          prev.filter((_, index) => index !== fileIndex)
        );
      }
    }
  };

  const handleHouseURLPhoto = () => {
    const maxPhotos = 4;
    if (housePhotoPreviews.length >= maxPhotos) {
      alert(`Maximum ${maxPhotos} house photos allowed`);
      return;
    }

    const url = prompt("Enter house photo URL:");
    if (!url) return;

    if (url.match(/^https?:\/\/.+\.(jpeg|jpg|png|gif)(\?.*)?$/i)) {
      setHousePhotoPreviews((prev) => [...prev, url]);
      setHousePhotoFiles((prev) => [...prev, url]);
    } else {
      alert("Please enter a valid image URL (.jpeg, .jpg, .png, or .gif)");
    }
  };

  const handlePromptSelect = (promptId, questionId) => {
    const promptKey = `${promptId}-${questionId}`;
    const isAlreadySelected = formData.selectedPrompts.includes(promptKey);

    // If already selected, remove it
    if (isAlreadySelected) {
      setFormData((prev) => {
        const updatedPromptAnswers = { ...prev.promptAnswers };
        delete updatedPromptAnswers[promptKey];

        return {
          ...prev,
          selectedPrompts: prev.selectedPrompts.filter(
            (key) => key !== promptKey
          ),
          promptAnswers: updatedPromptAnswers,
        };
      });
      return;
    }

    // If not selected but already have 3 prompts, don't add
    if (formData.selectedPrompts.length >= 3) {
      alert("You can only select up to 3 prompts.");
      return;
    }

    // Add the new prompt
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

  const getPromptQuestionByKey = (promptKey) => {
    if (!promptKey) return null;
    const [promptId, questionId] = promptKey.split("-");
    const promptCategory = promptsList.find((p) => p.id === promptId);
    if (!promptCategory) return null;
    const question = promptCategory.questions.find((q) => q.id === questionId);
    return question ? question.question : null;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Validate passwords
  //   if (!validatePasswords()) {
  //     return;
  //   }

  //   try {
  //     setLoading(true);

  //     // Get token from local storage
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       throw new Error("No authentication token found");
  //     }

  //     // Prepare form data for submission
  //     const dataToSubmit = { ...formData };

  //     // Remove password fields if they're empty
  //     if (!dataToSubmit.password) {
  //       delete dataToSubmit.password;
  //       delete dataToSubmit.confirmPassword;
  //     }

  //     // Remove confirmPassword as we don't need to store it
  //     delete dataToSubmit.confirmPassword;

  //     console.log("Submitting profile update:", dataToSubmit);

  //     photos.forEach((photo, index) => {
  //       if (photo instanceof File) {
  //         data.append(`photos`, photo);
  //       } else if (typeof photo === "string") {
  //         data.append(`photoUrls`, photo);
  //       }
  //     });

  //     // Make API call to update profile
  //     const response = await axios.put(
  //       "http://localhost:5001/api/profile/user",
  //       dataToSubmit,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     console.log("Profile update response:", response.data);

  //     alert("Profile updated successfully!");

  //     // Redirect back to profile page
  //     navigate("/profile");
  //   } catch (err) {
  //     console.error("Error updating profile:", err);
  //     setError(`Failed to update profile: ${err.message}`);
  //     alert(`Failed to update profile: ${err.message}`);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    // if (formData.password && formData.password.length < 8) {
    //   setPasswordError("Password must be at least 8 characters");
    //   return;
    // }
    // if (formData.password !== formData.confirmPassword) {
    //   setPasswordError("Passwords don't match");
    //   return;
    // }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Not authenticated");

      const formDataToSend = new FormData();

      // Append all form data
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== "password" && key !== "confirmPassword") {
          if (typeof value === "object" && !(value instanceof File)) {
            formDataToSend.append(key, JSON.stringify(value));
          } else {
            formDataToSend.append(key, value);
          }
        }
      });

      // // Append personal photo files
      // personalPhotoFiles.forEach((file) => {
      //   if (file instanceof File) {
      //     formDataToSend.append("photos", file);
      //   } else if (typeof file === "string") {
      //     formDataToSend.append("photoUrls", file);
      //   }
      // });

      // // Append house photo files if houseOwner is true
      // if (formData.houseOwner) {
      //   housePhotoFiles.forEach((file) => {
      //     if (file instanceof File) {
      //       formDataToSend.append("photos", file);
      //     } else if (typeof file === "string") {
      //       formDataToSend.append("photoUrls", file);
      //     }
      //   });
      // }

      // Preserve existing photos by adding them as URLs
      existingPersonalPhotos.forEach((photoUrl) => {
        formDataToSend.append("existingPhotos", photoUrl);
      });

      if (formData.houseOwner) {
        existingHousePhotos.forEach((photoUrl) => {
          formDataToSend.append("existingPhotos", photoUrl);
        });
      }

      // Append new personal photo files
      personalPhotoFiles.forEach((file) => {
        if (file instanceof File) {
          formDataToSend.append("photos", file);
        } else if (typeof file === "string") {
          formDataToSend.append("photoUrls", file);
        }
      });

      // Append new house photo files if houseOwner is true
      if (formData.houseOwner) {
        housePhotoFiles.forEach((file) => {
          if (file instanceof File) {
            formDataToSend.append("photos", file);
          } else if (typeof file === "string") {
            formDataToSend.append("photoUrls", file);
          }
        });
      }

      // Log FormData contents for debugging
      console.log("FormData contents:");
      for (let [key, value] of formDataToSend.entries()) {
        console.log(key, value);
      }

      await axios.put(
        `http://localhost:5001/api/profile/user/${authUser.id}`,
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      navigate("/profile");
    } catch (err) {
      console.error("Update failed:", err);
      setError(err.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  // Show loading state while fetching data
  if (authLoading || loading) {
    return (
      <div className="profile-loading">
        <p>Loading profile data...</p>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="profile-not-found">
        <p>You must be logged in to edit your profile.</p>
        <Link to="/login" className="edit-profile-button">
          Log In
        </Link>
      </div>
    );
  }

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-wrapper">
        <div className="edit-profile-header">
          <Link to="/profile" className="back-button">
            &larr; Back to Profile
          </Link>
          <h1 className="edit-profile-title">Edit Your Profile</h1>
          <p className="edit-profile-subtitle">
            Update your information to find better matches
          </p>
        </div>

        <form onSubmit={handleSubmit} className="edit-profile-form">
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

          {/* Contact Information */}
          <section className="form-section">
            <h2 className="section-title">Contact Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Aadhar</label>
                <input
                  type="text"
                  name="aadhar"
                  value={formData.aadhar}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>LinkedIn</label>
                <input
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                />
              </div>

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

          {/* Password Section */}
          {/* <section className="form-section">
            <h2 className="section-title">Update Password</h2>
            <p className="section-subtitle">
              Leave blank if you don't want to change your password
            </p>
            <div className="form-grid">
              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="At least 8 characters"
                  minLength="8"
                />
              </div>

              <div className="form-group">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your new password"
                />
                {passwordError && (
                  <p className="password-error">{passwordError}</p>
                )}
              </div>
            </div>
          </section> */}

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

          {/* Personal Photos Section */}
          {/* <section className="form-section">
            <h2 className="section-title">My Photos</h2>
            <p className="info-text">Upload up to 2 personal photos.</p>

            <div className="photo-controls">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handlePersonalPhotoUpload}
                className="photo-upload"
                id="personal-photo-upload"
              />
              <label
                htmlFor="personal-photo-upload"
                className="photo-upload-label"
              >
                Select Photos
              </label>
              <button
                type="button"
                className="photo-url-button"
                onClick={handlePersonalURLPhoto}
              >
                Add Photo via URL
              </button>
            </div>

            
            <div className="photo-preview">
              {personalPhotoPreviews.length > 0 ? (
                personalPhotoPreviews.map((photo, idx) => (
                  <div key={`personal-${idx}`} className="photo-card">
                    <img src={photo} alt={`Personal ${idx}`} />
                    <button
                      type="button"
                      className="remove-photo"
                      onClick={() => handleRemovePersonalPhoto(idx)}
                    >
                      ✕
                    </button>
                  </div>
                ))
              ) : (
                <p>No personal photos added yet</p>
              )}
            </div>
          </section> */}

          {/* House Owner Toggle and Place Photos */}
          {/* <section className="form-section">
            <h2 className="section-title">My Place</h2>
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

            {formData.houseOwner && (
              <>
                <p className="info-text">
                  Upload up to 4 photos of your place.
                </p>

                <div className="photo-controls">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="photo-upload"
                    id="place-photo-upload"
                  />
                  <label
                    htmlFor="place-photo-upload"
                    className="photo-upload-label"
                  >
                    Select Place Photos
                  </label>
                  <button
                    type="button"
                    className="photo-url-button"
                    onClick={handleURLPhoto}
                  >
                    Add Place Photo via URL
                  </button>
                </div>

                <div className="photo-preview">
                  {photoPreviews.length > 2 ? (
                    photoPreviews.slice(2, 6).map((photo, idx) => (
                      <div key={idx + 2} className="photo-card">
                        <img src={photo} alt={`Place ${idx}`} />
                        <button
                          type="button"
                          className="remove-photo"
                          onClick={handleRemovePhoto(idx)}
                        >
                          ✕
                        </button>
                      </div>
                    ))
                  ) : (
                    <p>No photos added yet</p>
                  )}
                </div>
              </>
            )}
          </section> */}
          {/* House Owner Toggle and Place Photos */}
          {/* <section className="form-section">
            <h2 className="section-title">My Place</h2>
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

            {formData.houseOwner && (
              <>
                <p className="info-text">
                  Upload up to 4 photos of your place.
                </p>

                <div className="photo-controls">
                  <input
                    type="file"
                    multiple
                    accept="image/jpeg,image/png,image/gif"
                    onChange={handleHousePhotoUpload}
                    className="photo-upload"
                    id="place-photo-upload"
                  />
                  <label
                    htmlFor="place-photo-upload"
                    className="photo-upload-label"
                  >
                    Select Place Photos
                  </label>
                  <button
                    type="button"
                    className="photo-url-button"
                    onClick={handleHouseURLPhoto}
                  >
                    Add Place Photo via URL
                  </button>
                </div>

                <div className="photo-preview">
                  {housePhotoPreviews.length > 0 ? (
                    housePhotoPreviews.map((photo, idx) => (
                      <div key={`house-${idx}`} className="photo-card">
                        <img src={photo} alt={`Place ${idx}`} />
                        <button
                          type="button"
                          className="remove-photo"
                          onClick={() => handleRemoveHousePhoto(idx)}
                        >
                          ✕
                        </button>
                      </div>
                    ))
                  ) : (
                    <p>No house photos added yet</p>
                  )}
                </div>
              </>
            )}
          </section> */}

          {/* Personal Photos Section */}
          <section className="form-section">
            <h2 className="section-title">My Photos</h2>
            <p className="info-text">Upload up to 2 personal photos.</p>

            <div className="photo-controls">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handlePersonalPhotoUpload}
                className="photo-upload"
                id="personal-photo-upload"
              />
              <label
                htmlFor="personal-photo-upload"
                className="photo-upload-label"
              >
                Select Photos
              </label>
              <button
                type="button"
                className="photo-url-button"
                onClick={handlePersonalURLPhoto}
              >
                Add Photo via URL
              </button>
            </div>

            <div className="photo-preview">
              {personalPhotoPreviews.length > 0 ? (
                personalPhotoPreviews.map((photo, idx) => (
                  <div key={`personal-${idx}`} className="photo-card">
                    <img src={photo} alt={`Personal ${idx}`} />
                    <button
                      type="button"
                      className="remove-photo"
                      onClick={() => handleRemovePersonalPhoto(idx)}
                    >
                      ✕
                    </button>
                  </div>
                ))
              ) : (
                <p>No personal photos added yet</p>
              )}
            </div>
          </section>

          {/* House Owner Toggle and Place Photos */}
          <section className="form-section">
            <h2 className="section-title">My Place</h2>
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

            {formData.houseOwner && (
              <>
                <p className="info-text">
                  Upload up to 4 photos of your place.
                </p>

                <div className="photo-controls">
                  <input
                    type="file"
                    multiple
                    accept="image/jpeg,image/png,image/gif"
                    onChange={handleHousePhotoUpload}
                    className="photo-upload"
                    id="place-photo-upload"
                  />
                  <label
                    htmlFor="place-photo-upload"
                    className="photo-upload-label"
                  >
                    Select Place Photos
                  </label>
                  <button
                    type="button"
                    className="photo-url-button"
                    onClick={handleHouseURLPhoto}
                  >
                    Add Place Photo via URL
                  </button>
                </div>

                <div className="photo-preview">
                  {housePhotoPreviews.length > 0 ? (
                    housePhotoPreviews.map((photo, idx) => (
                      <div key={`house-${idx}`} className="photo-card">
                        <img src={photo} alt={`Place ${idx}`} />
                        <button
                          type="button"
                          className="remove-photo"
                          onClick={() => handleRemoveHousePhoto(idx)}
                        >
                          ✕
                        </button>
                      </div>
                    ))
                  ) : (
                    <p>No house photos added yet</p>
                  )}
                </div>
              </>
            )}
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

          {/* Action Buttons */}
          <div className="action-buttons">
            <Link to="/profile" className="cancel-button">
              Cancel
            </Link>
            <button type="submit" className="save-button">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../../AuthContext";
// import "./EditProfile.css";

// const EditProfile = () => {
//   const { isAuthenticated, user: authUser, loading: authLoading } = useAuth();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [passwordError, setPasswordError] = useState("");

//   // Initial form state is empty; will be populated with user data
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     occupation: "",
//     mobile: "",
//     aadhar: "",
//     linkedin: "",
//     dob: "",
//     city: "",
//     area: "",
//     password: "",
//     confirmPassword: "",
//     photos: [],
//     houseOwner: false,
//     livingWith: [],
//     lookingFor: "",
//     selectedPrompts: [],
//     promptAnswers: {},
//   });

//   // Fetch user profile data when component mounts
//   useEffect(() => {
//     const fetchProfileData = async () => {
//       if (!isAuthenticated || !authUser) {
//         setLoading(false);
//         return;
//       }

//       try {
//         // Get token from local storage
//         const token = localStorage.getItem("token");

//         if (!token) {
//           throw new Error("No authentication token found");
//         }

//         console.log("Token found, attempting API call to fetch profile");

//         const response = await axios.get(
//           `http://localhost:5001/api/profile/user/${authUser.id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         console.log("Profile data received for editing:", response.data);
//         const profileData = response.data.profile || response.data;

//         // Extract selected prompts from promptAnswers
//         const selectedPrompts = profileData.promptAnswers
//           ? Object.keys(profileData.promptAnswers)
//           : [];

//         // Transform the API data to match our form structure
//         setFormData({
//           name: profileData.name || "",
//           age: profileData.age ? profileData.age.toString() : "",
//           gender: profileData.gender || "",
//           occupation: profileData.occupation || "",
//           mobile: profileData.mobile || "",
//           aadhar: profileData.aadhar || "",
//           linkedin: profileData.linkedin || "",
//           dob: profileData.dob || "",
//           city: profileData.city || "",
//           area: profileData.area || "",
//           password: "",
//           confirmPassword: "",
//           photos: profileData.photos || [],
//           houseOwner: profileData.houseOwner || false,
//           livingWith: profileData.livingWith || [],
//           lookingFor: profileData.lookingFor || "",
//           selectedPrompts: selectedPrompts,
//           promptAnswers: profileData.promptAnswers || {},
//         });

//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching profile data for edit:", err);

//         // Fallback to using authUser data if available
//         if (authUser) {
//           console.log("Using auth user as fallback for edit form:", authUser);

//           // Extract selected prompts from promptAnswers
//           const selectedPrompts = authUser.promptAnswers
//             ? Object.keys(authUser.promptAnswers)
//             : [];

//           setFormData({
//             name: authUser.name || "",
//             age: authUser.age ? authUser.age.toString() : "",
//             gender: authUser.gender || "",
//             occupation: authUser.occupation || "",
//             mobile: authUser.mobile || "",
//             aadhar: authUser.aadhar || "",
//             linkedin: authUser.linkedin || "",
//             dob: authUser.dob || "",
//             city: authUser.city || "",
//             area: authUser.area || "",
//             password: "",
//             confirmPassword: "",
//             photos: authUser.photos || [],
//             houseOwner: authUser.houseOwner || false,
//             livingWith: authUser.livingWith || [],
//             lookingFor: authUser.lookingFor || "",
//             selectedPrompts: selectedPrompts,
//             promptAnswers: authUser.promptAnswers || {},
//           });
//         }

//         setError(`Failed to load profile data for editing: ${err.message}`);
//         setLoading(false);
//       }
//     };

//     if (!authLoading) {
//       fetchProfileData();
//     }
//   }, [isAuthenticated, authUser, authLoading]);

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

//   const livingWithOptions = ["Men", "Women", "Everyone"];
//   const lookingForOptions = [
//     "Short-term Stay",
//     "Long-term Stay",
//     "Medium-term Stay",
//     "Flexible / Month-to-month",
//     "I'm still figuring it out",
//   ];
//   const genderOptions = ["Male", "Female", "Non-binary", "Prefer not to say"];
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

//     // Clear password error when user starts typing again
//     if (name === "password" || name === "confirmPassword") {
//       setPasswordError("");
//     }
//   };

//   const validatePasswords = () => {
//     // If both fields are empty, no password update is needed
//     if (!formData.password && !formData.confirmPassword) {
//       return true;
//     }

//     if (formData.password && formData.password.length < 8) {
//       setPasswordError("Password should be at least 8 characters long");
//       return false;
//     }

//     if (
//       formData.password &&
//       formData.confirmPassword &&
//       formData.password !== formData.confirmPassword
//     ) {
//       setPasswordError("Passwords don't match");
//       return false;
//     }

//     return true;
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

//   const handlePromptSelect = (promptId, questionId) => {
//     const promptKey = `${promptId}-${questionId}`;
//     const isAlreadySelected = formData.selectedPrompts.includes(promptKey);

//     // If already selected, remove it
//     if (isAlreadySelected) {
//       setFormData((prev) => {
//         const updatedPromptAnswers = { ...prev.promptAnswers };
//         delete updatedPromptAnswers[promptKey];

//         return {
//           ...prev,
//           selectedPrompts: prev.selectedPrompts.filter(
//             (key) => key !== promptKey
//           ),
//           promptAnswers: updatedPromptAnswers,
//         };
//       });
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

//   const getPromptQuestionByKey = (promptKey) => {
//     if (!promptKey) return null;
//     const [promptId, questionId] = promptKey.split("-");
//     const promptCategory = promptsList.find((p) => p.id === promptId);
//     if (!promptCategory) return null;
//     const question = promptCategory.questions.find((q) => q.id === questionId);
//     return question ? question.question : null;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate passwords
//     if (!validatePasswords()) {
//       return;
//     }

//     try {
//       setLoading(true);

//       // Get token from local storage
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       // Prepare form data for submission
//       const dataToSubmit = { ...formData };

//       // Remove password fields if they're empty
//       if (!dataToSubmit.password) {
//         delete dataToSubmit.password;
//         delete dataToSubmit.confirmPassword;
//       }

//       // Remove confirmPassword as we don't need to store it
//       delete dataToSubmit.confirmPassword;

//       console.log("Submitting profile update:", dataToSubmit);

//       // Make API call to update profile
//       const response = await axios.put(
//         "http://localhost:5001/api/profile/update",
//         dataToSubmit,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("Profile update response:", response.data);

//       alert("Profile updated successfully!");

//       // Redirect back to profile page
//       navigate("/profile");
//     } catch (err) {
//       console.error("Error updating profile:", err);
//       setError(`Failed to update profile: ${err.message}`);
//       alert(`Failed to update profile: ${err.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Show loading state while fetching data
//   if (authLoading || loading) {
//     return (
//       <div className="profile-loading">
//         <p>Loading profile data...</p>
//       </div>
//     );
//   }

//   // Redirect to login if not authenticated
//   if (!isAuthenticated) {
//     return (
//       <div className="profile-not-found">
//         <p>You must be logged in to edit your profile.</p>
//         <Link to="/login" className="edit-profile-button">
//           Log In
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="edit-profile-container">
//       <div className="edit-profile-wrapper">
//         <h1 className="edit-profile-title">Edit Your Profile</h1>

//         {error && <div className="error-message">{error}</div>}

//         <form onSubmit={handleSubmit} className="edit-profile-form">
//           <div className="form-section">
//             <h2 className="section-title">Basic Information</h2>
//             <div className="form-grid">
//               <div className="form-group">
//                 <label htmlFor="name">Full Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="age">Age</label>
//                 <input
//                   type="number"
//                   id="age"
//                   name="age"
//                   min="18"
//                   max="100"
//                   value={formData.age}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="gender">Gender</label>
//                 <select
//                   id="gender"
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
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
//                 <label htmlFor="occupation">Occupation</label>
//                 <input
//                   type="text"
//                   id="occupation"
//                   name="occupation"
//                   value={formData.occupation}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="mobile">Mobile Number</label>
//                 <input
//                   type="tel"
//                   id="mobile"
//                   name="mobile"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="aadhar">Aadhar Number</label>
//                 <input
//                   type="text"
//                   id="aadhar"
//                   name="aadhar"
//                   value={formData.aadhar}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="linkedin">LinkedIn Profile</label>
//                 <input
//                   type="text"
//                   id="linkedin"
//                   name="linkedin"
//                   value={formData.linkedin}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="dob">Date of Birth</label>
//                 <input
//                   type="date"
//                   id="dob"
//                   name="dob"
//                   value={formData.dob}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="city">City</label>
//                 <select
//                   id="city"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select City</option>
//                   {cityOptions.map((option) => (
//                     <option key={option} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="area">Area/Locality</label>
//                 <input
//                   type="text"
//                   id="area"
//                   name="area"
//                   value={formData.area}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="form-section">
//             <h2 className="section-title">Housing Preferences</h2>
//             <div className="form-group checkbox-group">
//               <label htmlFor="houseOwner" className="checkbox-label">
//                 <input
//                   type="checkbox"
//                   id="houseOwner"
//                   name="houseOwner"
//                   checked={formData.houseOwner}
//                   onChange={handleChange}
//                 />
//                 I have a place to share
//               </label>
//             </div>

//             <div className="form-group">
//               <label>Comfortable Living With</label>
//               <div className="checkbox-options">
//                 {livingWithOptions.map((option) => (
//                   <label key={option} className="checkbox-label">
//                     <input
//                       type="checkbox"
//                       value={option}
//                       checked={formData.livingWith.includes(option)}
//                       onChange={(e) => handleMultiSelectChange(e, "livingWith")}
//                     />
//                     {option}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <div className="form-group">
//               <label htmlFor="lookingFor">Looking For</label>
//               <select
//                 id="lookingFor"
//                 name="lookingFor"
//                 value={formData.lookingFor}
//                 onChange={handleChange}
//               >
//                 <option value="">Select Option</option>
//                 {lookingForOptions.map((option) => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="form-section">
//             <h2 className="section-title">Photos</h2>
//             <p className="photo-instructions">
//               {formData.houseOwner
//                 ? "Upload up to 6 photos (first 2 will be shown as your personal photos, rest will be shown as your place photos)"
//                 : "Upload up to 2 personal photos"}
//             </p>

//             <div className="photo-upload-buttons">
//               <div className="upload-btn-wrapper">
//                 <button type="button" className="upload-btn">
//                   Upload Photos
//                 </button>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   multiple
//                   onChange={handlePhotoUpload}
//                 />
//               </div>
//               <button
//                 type="button"
//                 className="url-btn"
//                 onClick={handleURLPhoto}
//               >
//                 Add Photo URL
//               </button>
//             </div>

//             <div className="photos-preview">
//               {formData.photos.map((photo, index) => (
//                 <div key={index} className="photo-preview-item">
//                   <img src={photo} alt={`Upload ${index + 1}`} />
//                   <button
//                     type="button"
//                     className="remove-photo-btn"
//                     onClick={() => handleRemovePhoto(index)}
//                   >
//                     ×
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="form-section">
//             <h2 className="section-title">About Me (Select up to 3 prompts)</h2>
//             <div className="prompts-container">
//               {promptsList.map((category) => (
//                 <div key={category.id} className="prompt-category">
//                   <h3 className="category-title">{category.name}</h3>
//                   <div className="prompts-list">
//                     {category.questions.map((question) => {
//                       const promptKey = `${category.id}-${question.id}`;
//                       const isSelected =
//                         formData.selectedPrompts.includes(promptKey);

//                       return (
//                         <div
//                           key={promptKey}
//                           className={`prompt-item ${
//                             isSelected ? "selected" : ""
//                           }`}
//                         >
//                           <div
//                             className="prompt-question"
//                             onClick={() =>
//                               handlePromptSelect(category.id, question.id)
//                             }
//                           >
//                             {question.question}
//                           </div>

//                           {isSelected && (
//                             <div className="prompt-answer-input">
//                               <textarea
//                                 placeholder="Your answer..."
//                                 value={formData.promptAnswers[promptKey] || ""}
//                                 onChange={(e) =>
//                                   handlePromptAnswer(promptKey, e.target.value)
//                                 }
//                               ></textarea>
//                             </div>
//                           )}
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="form-section">
//             <h2 className="section-title">Change Password (Optional)</h2>
//             <div className="form-grid">
//               <div className="form-group">
//                 <label htmlFor="password">New Password</label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="confirmPassword">Confirm New Password</label>
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             {passwordError && (
//               <div className="error-message">{passwordError}</div>
//             )}
//           </div>

//           <div className="form-actions">
//             <Link to="/profile" className="cancel-button">
//               Cancel
//             </Link>
//             <button type="submit" className="save-button" disabled={loading}>
//               {loading ? "Saving..." : "Save Changes"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditProfile;
