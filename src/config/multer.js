const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/assets/upload/company');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + '.' + file.mimetype.split('/')[1]
    );
  },
});

module.exports = multer({
  storage: storage,
}).fields([
  { name: 'pdf', maxCount: 1 },
  { name: 'photo', maxCount: 1 },
]);