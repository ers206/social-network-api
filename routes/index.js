// from mod 

//  mod 18.1.7 says to Update the /routes/index.js file as follows:  
const router = require('express').Router();
// Import all of the API routes from /api/index.js (no need for index.js though since it's implied)
const apiRoutes = require('./api');
// not sure if below is needed 
const htmlRoutes = require('./html/html-routes');

// add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);
// dont have htmRoutes dont think this is needed 
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
