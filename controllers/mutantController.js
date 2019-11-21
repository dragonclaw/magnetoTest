const models = require('../models');
const mutantService = require('../services/isMutant');

exports.mutant = (req, res) => {
    let { dna } = req.body;
    dna = JSON.parse(dna);
    if (mutantService.isMutant(dna))
        res.status(200).json({
            success: true,
        });
    else
        res.status(403).json({
            success: false,
        });
};