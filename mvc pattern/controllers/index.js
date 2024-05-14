const user = require("../sampldata.json");


async function handleuserBYId(req, res) {
    const id = Number(req.params.id);
    const userss = user.find((user) => user.id === id);
    return res.json(userss);
}

module.exports = {
    handleuserBYId,
}