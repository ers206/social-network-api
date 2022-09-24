// from mod 18 pizza-hunt 

const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.use(require('./routes')); 

mongoose.connect(
    // does Pizza need to be capitalized 
    process.env.MONGODB_URI || 'mongodb://localhost:27017/pizza-hunt',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );


mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));