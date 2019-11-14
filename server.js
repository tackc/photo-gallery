const express = require('express');
const app = express();
const multer = require('multer');
const cors = require('cors');

app.use(cors())

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

var upload = multer({ storage: storage }).array('file')

app.get('/', function(req, res) {
    return res.send('Hello Server')
})

app.post('/upload', function(req, res) {
    upload(req, res, err => {
        if(err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })
});

app.post('/photos', function(req, res) {
    upload(req, res, err => {
        if(err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })
})

app.delete('/photos', function(req, res) {
    console.log('Image was removed')
})

app.listen(8000, function() {
    console.log('App running on port 8000')
})