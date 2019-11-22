const models = require('../models');
const mutantService = require('../services/isMutant');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.mutant = async (req, res) => {
    let { dna } = req.body;
    dna = JSON.parse(dna);
    const tester = await models.MutantsDNA.findOne({ where: { mutantDNA: JSON.stringify(dna) } })
    if (mutantService.isMutant(dna)) {
        if (!tester) {
            await models.MutantsDNA.create({ mutantDNA: JSON.stringify(dna), isMutant: true });
        }
        res.status(200).json({
        });
    }
    else {
        if (!tester) {
            await models.MutantsDNA.create({ mutantDNA: JSON.stringify(dna), isMutant: false });
        }
        res.status(403).json({
        });
    }

};

