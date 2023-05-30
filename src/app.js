import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

const app = express();

app.use(express.static(`${__dirname}/public`))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`); // Ruta hacia la carpeta views
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    const user = {
        name: "Felipe"
    };

    res.render('home', {
        name: user.name
    });
});


const PORT = 8080;
app.listen(PORT, () =>
    console.log(`Utilizando el Puerto ${PORT} en http://localhost:${PORT}`)
);