"use strict";

module.exports = function (sequelize, DataTypes) {

    const MutantsDNA = sequelize.define('MutantsDNA', {
        mutantDNA: DataTypes.STRING,
        isMutant: DataTypes.BOOLEAN,
    }, {
        tableName: 'MutantsDNA'
    });

    return MutantsDNA;
}