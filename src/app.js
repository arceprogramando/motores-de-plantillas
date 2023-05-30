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
    const PORT = 8080;

    const user = {
        name: "Felipe"
    };

    res.render('home', {
        name: user.name,
        PORT: PORT
    });
});

app.get('/food', (req, res) => {
    const food = [
        {
            "name": "Cheeseburgers",
            "price": 100
        },
        {
            "name": "Veggie Burgers",
            "price": 120
        },
        {
            "name": "Chicken Burgers",
            "price": 90
        },
        {
            "name": "Turkey Burgers",
            "price": 110
        },
        {
            "name": "Fish Burgers",
            "price": 130
        },
        {
            "name": "Mushroom Burgers",
            "price": 95
        },
        {
            "name": "Black Bean Burgers",
            "price": 85
        },
        {
            "name": "Lamb Burgers",
            "price": 150
        },
        {
            "name": "Salmon Burgers",
            "price": 140
        },
        {
            "name": "Bison Burgers",
            "price": 160
        }
    ]

    res.render('food', {
        food,
        PORT: PORT
    })
})


const PORT = 8080;
app.listen(PORT, () =>
    console.log(`Utilizando el Puerto ${PORT} en http://localhost:${PORT}`)
);