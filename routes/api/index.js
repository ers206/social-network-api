const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');


router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;


// ==========================================
// const router = require('express').Router();
// const pizzaRoutes = require('./pizza-routes');
// const commentRoutes = require('./comment-routes');
// // const pizzaRoutes = require('./pizza-routes'); 

// router.use('/comments', commentRoutes);
// router.use('/pizzas', pizzaRoutes);
// // add prefix of `/pizzas` to routes created in `pizza-routes.js`
// // router.use('/pizzas', pizzaRoutes);

// module.exports = router;