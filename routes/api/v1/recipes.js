

const router = require('express').Router()
const recipes = require('../../../data/recipes.json')

router.get('/', (request, response) => {
    response.json(recipes)
})

router.post('/recipe/add', (request, response) => {
    const { title, image, prepTime, difficulty, instructions, ingredients } = request.body
    const newRecipe = {
        id: recipes.length + 1,
        title,
        image,
        prepTime,
        difficulty,
        instructions,
        ingredients
    }
    recipes.push(newRecipe)
    response.status(201).json(newRecipe)
})

router.get('/recipe/:id', (request, response) => {
    const { id } = request.params
    const recipe = recipes.find(recipe => recipe.id === parseInt(id))
    if (recipe) {
        response.json(recipe)
    } else {
        response.status(404).json({ error: 'Recipe not found' })
    }
})

module.exports = router