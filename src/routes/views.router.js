import { Router } from "express";

const router = Router();

const PORT = 8080

router.get('/', (req, res) => {


    const user = {
        name: "Felipe"
    };

    res.render('home', {
        name: user.name,
        PORT: PORT
    });
});

router.get('/food', (req, res) => {
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

export default router;