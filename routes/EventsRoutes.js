const express=require('express')
const router=express.Router()
const EventsController=require('../controllers/EventsController')
const multer = require('multer');
const images = multer({dest: '../uploadsevent/'})
const path=require('path');
const Storage = multer.diskStorage({
  destination: "uploadsevent",
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    callback(null,Date.now()+'_'+name);
  }
});
const upload=multer({storage:Storage}).single('uploadsevent')

router.get('/',EventsController.index)
router.get('/showevents/:id',EventsController.show)
router.post('/storeevent',upload,EventsController.store)
router.put('/updateevent/:id',upload,EventsController.update)
router.delete('/deleteevent/:id',EventsController.destroy)



module.exports =router