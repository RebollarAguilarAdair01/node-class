
//imports
const {request, response} = require('express');


//getTareas
const getTareas = ( req = request, res = response ) => {

    res.json({ msg: 'Hiciste una petición a get /tareas'});

};


//postTareas
const postTareas = ( req = request, res = response ) => {

    res.json({ msg: 'Hiciste una petición a post /tareas'});

};


//putTareas
const putTareas = ( req = request, res = response ) => {

    res.json({ msg: 'Hiciste una petición a put/tareas'});

};


//deleteTareas
const deleteTareas = ( req = request, res = response ) => {

    res.json({ msg: 'Hiciste una petición a delete/tareas'});

};

// exports
module.exports = {
    getTareas,
    postTareas,
    putTareas,
    deleteTareas
};