//require modules for user model

let mongoose = require('mongoose');
let passportLocalMongoose= require('passport-local-mongoose');

let userSchema = mongoose.Schema({
username: {
    type: String,
    default: '',
    trim: true,
    required: 'username is required'
},
/* taken out because password will be encrypted by pasport-local-mongoose
    password: {
        type: String,
        default: '',
        trim: true,
        required: 'password is required'
    }
    */
   email: {
       type: String,
       default: '',
       trim: true,
       required: 'email is required'
   },
    displayName: {
        type: String,
        default: '',
        trim: true,
        required: 'Display name is required'
    },

    created: {
        type: Date,
        default: Date.now,   
    },

    update: {
        type: Date,
        default: Date.now,
    }
},
    {
        collection = "users"
    }
);