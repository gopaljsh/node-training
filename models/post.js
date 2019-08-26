const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    task: { type: String, require: true},
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User',  require: true}
});

module.exports = mongoose.model('Post', postSchema);
