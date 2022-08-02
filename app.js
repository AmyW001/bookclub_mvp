var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
// var app = express.Router();
app.use(express.json());
const db = require("./model/helper");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// router.use(logger('dev'));
// router.use(express.json());
// router.use(express.urlencoded({ extended: false }));
// router.use(cookieParser());
// router.use(express.static(path.join(__dirname, 'public')));

// router.use('/', indexRouter);
// router.use('/users', usersRouter);

//replace app with Router.
//write Router.get etc here


//NOT WORKING. How do I get this to redirect to my landing page?
app.get('/', function(req, res, next) {
  res.send( "How do I get this to redirect to my landing page?" );
});


//this works, need to add in if/else statement that throws error if clubname does not exist
app.get('/club/:clubname', function(req, res, next) {
  db(`SELECT clubname, description, current_book from admins WHERE clubname="${req.params.clubname}";`)
    .then((results) => {
        res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

//add if else statement here to check if club name already exists, if already exists don't allow new club with this name
//tried to check results.data.clubname but doesn't work?
// const pokemon = data.find(e => +e.id === +req.params.id);

//   if (!pokemon) {
//     return res.status(404).send("Pokemon does not exist");
//   }
app.post('/create-a-club', function(req, res, next) {
    db(`INSERT INTO admins (name, password, clubname) VALUES ("${req.body.name}", "${req.body.password}", "${req.body.clubname}")`)
    .then(() => {
        db("SELECT * from admins ORDER BY id ASC;").then((results) => {
            res.send(results.data);
        })
    })
    .catch((err) => res.status(500).send(err));
});


//this is working!
app.get('/sign-in', function(req, res, next) {
    db(`SELECT name, password, clubname from admins WHERE name="${req.body.name}" AND password="${req.body.password}" AND clubname="${req.body.clubname}";`)
    .then((results) => {
        res.send(results.data);
    // , password="${req.body.password}", clubname="${req.body.clubname}"? Why doesn't it work chaining
    // these together with commas?
    // The above doesn't work, it doesn't check all criteria.
    })
    .catch((err) => res.status(500).send(err));
//   should check if data is in database then direct to book club page if password matches
//  admins WHERE name="${req.body.name}"`
});

//this is working!
app.get('/search', (req, res, next) => {
    db(`SELECT clubname, description, current_book from admins WHERE clubname="${req.body.clubname}";`)
    .then((results) => {
        res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});     

module.exports = app;
