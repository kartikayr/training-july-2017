let mongoose     = require('mongoose');
let Schema       = mongoose.Schema;

let UserSchema   = new Schema({
    username : {type : 'String',unique: true},
    name: {type : 'String'},
    email: {type : 'String',unique:true},
    password: String,
    role : String
});

module.exports = mongoose.model('User', UserSchema);
