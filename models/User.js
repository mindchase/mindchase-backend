const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      message: [true, "Name is required"],
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      required: true,
      default: "User",
    },
    password: {
      type: String,
      required: true,
      message: [true, "Password is required!"],
    },
  },

  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  },

  {
    timestamps: true,
  }
);
userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified || !user.isNew) {
    next();
  } else {
    bcrypt.hash(user.password, 10, function (err, hash) {
      if (err) {
        throw new Error(err);
      } else {
        user.password = hash;
        next();
      }
    });
  }
});

module.exports = mongoose.model("User", userSchema);
