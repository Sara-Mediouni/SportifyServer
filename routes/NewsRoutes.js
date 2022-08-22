const express=require('express')
const router=express.Router()
const NewsController=require('../controllers/NewsController')
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

router.get('/',NewsController.index)
router.get('/shownews/:id',NewsController.show)
router.post('/stornews',upload,NewsController.store)
router.put('/updatenews/:id',upload,NewsController.update)
router.delete('/deletenews/:id',NewsController.destroy)



module.exports =router