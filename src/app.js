import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js'
const app = express();

app.use(express.static(`${__dirname}/public`))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`); // Ruta hacia la carpeta views
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);


const PORT = 8080;
app.listen(PORT, () =>
    console.log(`Utilizando el Puerto ${PORT} en http://localhost:${PORT}`)
);