
const express = require("express");
const app = express.Router();

const [filterCheapMeals , filterHighCapacityMeals , giveOneRandom] = require('./mealsEvaluator.js');

const addReviews = require('./addReviews.js')

const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');
const reservations = require('../data/reservations.json');

app.get("/" , (req , res) => {
    console.log('large-meals page is called- From routes folder');
    const highCapacityMeals = filterHighCapacityMeals(meals);
    const highCapacityMealsWithReviews = addReviews(highCapacityMeals , reviews);
    res.send(highCapacityMealsWithReviews);
})

module.exports = app;