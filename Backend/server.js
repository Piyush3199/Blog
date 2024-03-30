const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/posts');


const app = express();
//middlware 

app.use(cors());
app.use(express.json());

//MongoDB connection

mongoose.connect('mongodb://localhost/Blog',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=> console.log('MongoDB connected'))
.catch(err => console.log(err));

//Routes
app.use('/routes/posts', postRoutes);

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.listen(5000)