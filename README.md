# Backendmovies 🎬

Movie backend made by sequialize with Javascript and Mysql using Users,Movies and Orders.

# Used Tools  🔨 

Javascript
NodeJS
Express
Sequelize
Git
GitHub
Postman
MySQL

# Use of the app  📃 

It allows to make the following queries in the database:

Path to show all movies -> GET "/movies"
Path to show the movies filtered by Id -> GET "movies/:id/"
Path to display movies filtered by title -> GET "/title/:title"
Path to add a new movie to the table -> POST "movies/"

User registration path -> POST "users/signup"
User login path -> POST "users/login"
User profile path -> GET "users/profile/:email"
User unsubscribe path -> DELETE "users/deleteUser"

Path to show all orders -> GET "/orders/"
Path to create an order -> POST "/orders/"

link to remotely access the backend in heroku: https://backendmovies.herokuapp.com/








