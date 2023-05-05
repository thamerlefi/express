const express = require('express');
const app = express();


const testDate = require('./middleware')

// set view engine type to ejs
app.set('view engine', 'ejs');

//set default views directory to rootdir/views
app.set('views', __dirname + '/views');

//set default static files directory to /public
app.use(express.static(__dirname + '/public'));

// run the middleware to verify the time of the request
app.use(testDate)

// home path
app.get('/', (req, res) => {
    res.render('home');
  });
 
// services path  
app.get('/services', (req, res) => {
    res.render('services');
  });

// contact path  
app.get('/contact', (req, res) => {
    res.render('contact');
  });


  app.listen(3000,()=>console.log('Server listening on port 3000'))