const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/sportsApp',
  { useNewUrlParser: true },
  err => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
  }
);
