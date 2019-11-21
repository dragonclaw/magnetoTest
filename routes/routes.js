module.exports = function (app) {

    const index = require('./index');
    const mutant = require('./mutant');
    const stats = require('./stats');

    //initial route
    app.use('/', index);

    //MUTANT ROUTE
    app.use('/mutant', mutant);

    //STATS ROUTE
    app.use('/stats', stats);

}