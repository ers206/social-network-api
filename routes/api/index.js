const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
// const pizzaRoutes = require('./pizza-routes'); 

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);
// add prefix of `/pizzas` to routes created in `pizza-routes.js`
// router.use('/pizzas', pizzaRoutes);

module.exports = router;