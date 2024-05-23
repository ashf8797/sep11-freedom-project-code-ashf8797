const router = require ("express-promise-router")();
const trainController = require ("../controllers/trains.js");



  router.route('/train') // replace <endpoint> with whatever you want
  .get(trainController.train);
  router.route('/robloxtrains') // replace <endpoint> with whatever you want
  .get(trainController.robloxtrains);

  
module.exports = router;