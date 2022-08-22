const express=require('express')
const router=express.Router()
const EventsController=require('../controllers/NewsController')
const multer = require('multer');
const images = multer({dest: '../images/'})
const path=require('path');
const Storage = multer.diskStorage({
  destination: "images",
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    callback(null,Date.now()+'_'+name);
  }
});
const upload=multer({storage:Storage}).single('images')

router.get('/',EventsController.index)
router.get('/shownews/:id',EventsController.show)
router.post('/stornews',upload,EventsController.store)
router.put('/updatenews/:id',upload,EventsController.update)
router.delete('/deletenews/:id',EventsController.destroy)



module.exports =router