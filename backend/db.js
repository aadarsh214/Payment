const mongoose = require('mongoose');   

mongoose.connect('mongodb://localhost:27017/paytm');

const userSchema = mongoose.Schema({
    UserName: String,
    FirstName: String,
    LastName: String,
    Password: String,

});

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}