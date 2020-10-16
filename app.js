const express = require('express'); //Requiere de la librería express
const app = express();
const PORT = process.env.PORT || 3000;
const auth = require('./middleware/auth');


const moviesRouter = require('./routers/movieRouter');
const usersRouter = require('./routers/userRouter');
const ordersRouter = require('./routers/ordersRouter');

app.use(express.json()); //middleware: parsea el body JSON y evita que req.body sea undefined



app.get('/',(req, res) => res.send(req.user))

//Endpoint de películas
app.use('/movies', moviesRouter);

//Endpoint de usuarios
app.use('/users', usersRouter);

//Endpoint de pedidos
app.use('/orders', ordersRouter);



app.listen(PORT, () => console.log('server running on port ' + PORT));