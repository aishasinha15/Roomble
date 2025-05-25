// // models/User.js

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     age: { type: Number, required: true },
//     gender: { type: String, required: true },
//     occupation: { type: String },
//     mobile: { type: String, required: true, unique: true },
//     aadhar: { type: String, required: true, unique: true },
//     linkedin: { type: String },
//     dob: { type: Date },
//     city: { type: String },
//     area: { type: String },
//     photos: [{ type: String }], // URLs or paths to photos
//     houseOwner: { type: Boolean, default: false },
//     livingWith: [{ type: String }], // Names or relationship labels maybe
//     lookingFor: { type: String },
//     selectedPrompts: [{ type: String }],
//     promptAnswers: { type: mongoose.Schema.Types.Mixed }, // any key-value pairs
//     password: { type: String, required: true }, // ADDED this field
//   },
//   {
//     timestamps: true, // automatically adds createdAt and updatedAt
//   }
// );

// const User = mongoose.model("User", userSchema);

// module.exports = User;

// models/User.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Non-binary", "Prefer not to say"],
    },
    occupation: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    aadhar: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    linkedin: {
      type: String,
      default: "",
      trim: true,
    },
    email: {
      type: String,
      default: "",
      trim: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    city: {
      type: String,
      default: "Delhi",
    },
    area: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: true,
    },
    photos: [
      {
        type: String, // array of photo URLs
      },
    ],
    houseOwner: {
      type: Boolean,
      default: false,
    },
    livingWith: [
      {
        type: String,
        enum: ["Men", "Women", "Everyone"],
        default: [],
      },
    ],
    lookingFor: {
      type: String,
      enum: [
        "Short-term Stay",
        "Long-term Stay",
        "Medium-term Stay",
        "Flexible / Month-to-month",
        "I'm still figuring it out",
      ],
    },
    selectedPrompts: [
      {
        type: String, // Save prompt IDs like "0-3" meaning promptsList[0].questions[3]
      },
    ],
    promptAnswers: {
      type: Map,
      of: String, // { "0-3": "I love late night snacks!" }
      default: {},
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
