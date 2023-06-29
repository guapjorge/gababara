const express = require('express');
const routes = require('./routes');
const mysql = require('mysql')

const sequelize = require('./config/connection');
const { Session } = require('inspector');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

const connection = mysql.createConnection({
  host : 'localhost',
  database: 'testing',
  user: 'roots',
  password: '',

});

connection.connection((error) => {
  console.log("you have succesfully did the job.")
});

app.use(session({
  secret : '',
  resave : false,
  

}));





sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
})

console.log ("hello world")