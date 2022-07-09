
//imports
const { Router } = require('express');
const { getTareas, postTareas, putTareas, deleteTareas } = require('../controllers/tareas');


//router
const router = Router();

//get/tareas
router.get('/tareas', getTareas);

//post/tareas
router.post('/tareas', postTareas);

//put/tareas
router.put('/tareas', putTareas);

//delete/tareas
router.delete('/tareas', deleteTareas);

//exports
module.exports = router;