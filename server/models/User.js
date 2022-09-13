const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');




const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
   
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;



// const mongoose = require('mongoose');

// const { Schema } = mongoose;
// const bcrypt = require('bcrypt');

// const userSchema = new Schema({
  
//     username: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//   firstName: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     match: [/.+@.+\..+/, 'Must use a valid email address'],
//   },
//   age: {
//     type: Number,
//     required: true,
//   },
//   location: {
//     type: String,
//     required: true
//   },
//   work: {
//     type: String
//   },
//   looking_for: {
//     type: String,
//     required: true,
//   }
//   ,
//   favorite_language: {
//     type: String
//   },
//   likes: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'User',
//     }
//   ],
//   passed: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'User',
//     }
//   ],
//   matches: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'User',
//     },
//   ],
//   password: {
//     type: String,
//     required: true,
//     minlength: 5,
//   },
// });

// // Set up pre-save middleware to create password
// userSchema.pre('save', async function (next) {
//   if (this.isNew || this.isModified('password')) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// // Compare the incoming password with the hashed password
// userSchema.methods.isCorrectPassword = async function (password) {
//   await bcrypt.compare(password, this.password);
// };

// const User = mongoose.model('User', userSchema);

// module.exports = User;
