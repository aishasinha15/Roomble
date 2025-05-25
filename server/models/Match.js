// models/Match.js

import mongoose from "mongoose";

const matchSchema = new mongoose.Schema(
  {
    user1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    user2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
    },
    matchedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Match = mongoose.model("Match", matchSchema);

export default Match;
