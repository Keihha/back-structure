const response = require('express');

const responser = async (req, res = response) => {
    res.json({
        msg: 'response',
    });
}

module.exports = {responser};