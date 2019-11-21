const models = require('../models');
const mutantService = require('../services/isMutant');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.stats = async (req, res) => {

    const mutants = await models.MutantsDNA.count({ where: { isMutant: true } })
    const humans = await models.MutantsDNA.count({ where: { isMutant: false } })
    const ratio = (mutants.count / humans.count)
    return res.status(200).json({
        'count_mutant_dna': mutants.length,
        'count_human_dna': humans.length,
        ratio,
    })

};