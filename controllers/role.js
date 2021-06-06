const { response, request } = require('express');
const Role = require('../models/role')


const rolesPost = async(req, res = response) => {
    
    const { role } = req.body;
    const role = new Role({ role });

    // Guardar en BD
    await Role.save();

    res.json({
        usuario
    });
}

const usuariosGet = async(req = request, res = response) => {


    const usuario = await Role.find();

    res.json({
        usuario
    });
}
