const { response, request } = require('express');
const Role = require('../models/role')


const rolesPost = async(req, res = response) => {
    const { rol } = req.body;
    const role = new Role({ rol });

    // Guardar en BD
    await role.save();

    res.json({
        role
    });
}

const rolesGet = async(req = request, res = response) => {


    const roles = await Role.find();
    res.json({
        roles
    });
}
module.exports = {
    rolesGet,
    rolesPost,

}