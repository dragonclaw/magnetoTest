module.exports = function (app) {

    const index = require('./index');
    const mutant = require('./mutant');

    //initial route
    app.use('/', index);

    //MUTANT ROUTE
    app.use('/mutant', mutant);

}