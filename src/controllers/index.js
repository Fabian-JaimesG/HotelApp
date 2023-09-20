const { response, request } = require("express");



const welcome = async (req = request, res = response) => {
    res.status(200).json({
        msg:"Hi world"
    })
};

module.exports = {welcome};