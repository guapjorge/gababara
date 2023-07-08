const express = require('express');
const routes = require('./routes');
const mysql = require('mysql')

const sequelize = require('./config/connection');
const { Session } = require('inspector');
const exphbs = require('express-handlebars');



const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create()
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"))

app.use(routes);

// const connection = mysql.createConnection({
//   host : 'localhost',
//   database: 'testing',
//   user: 'roots',
//   password: '',

// });

// connection.connect((error) => {
//   console.log("you have succesfully did the job.")
// });

// app.use(Session({
//   secret : '',
//   resave : false,


// }));





sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
})

console.log("hello world");

// set up handlebars in this file and set up express sessions (for log in and log out)
