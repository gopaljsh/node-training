const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: { type: String, require: true, unique: true},
  password: { type: String, require: true},
  roleFlag: { type: Boolean, require: true, default: false}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('user', userSchema);
