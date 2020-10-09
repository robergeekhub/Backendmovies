const express = require('express'); //Requiere la librería express
const app = express();
const PORT = 3000;


app.use(express.json()); //middleware: parsea el body JSON y evita que req.body sea undefined

const MoviesRouter = require('./router/movieRouter');
const UsersRouter = require('./router/userRouter');






app.get('/',(req, res) => res.send(req.user))

//Endpoint de películas
app.use('/Movies', MoviesRouter);

//Endpoint de usuarios
app.use('/users', UsersRouter);

//Endpoint de 


app.listen(PORT, () => console.log('server running on port ' + PORT));