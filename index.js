const express = require('express');
const app = express();
const port = 3000;

var data = require('./data/test.json');

app.set('view engine', 'ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

//all 4 of these app.get's are our pages and routes for the assignment
app.get('/', (req, res) => {
  var title = 'My Home Page';
  res.render('pages/index', {'title':title});
});

app.get('/restaurants', (req, res) => {
  var title = 'Favorite Restaurants';
  res.render('pages/restaurants', {'title':title});
});

app.get('/drinks', (req, res) => {
  var title = 'Favorite Drinks';
  res.render('pages/drinks', {'title':title});
});

app.get('/about-me', (req, res) => {
  var title = 'About Me';
  res.render('pages/about-me', {'title':title});
});

  //add users route
  app.get('/users', function(req, res) {
  	var title = 'Users Page';
  	res.render('users/index', {
      	title: title,
      	users: data
  	});
  });

  //add user/view route - we are cheating by using the array index - 1
  app.get('/users/view/:id', function(req, res) {
   var title = 'User Page';
   var id = req.params.id;
   res.render('users/view', {
       title: title,
       user: data[--id]
   });
  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});