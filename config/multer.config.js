const multer = require('multer')
const firebaseStorage = require('multer-firebase-storage')
const firebase = require('./firebase.config')
const serviceAccount = require('../drive-30e84-firebase-adminsdk-hb0yj-aa8daa2fc7.json')

const storage = firebaseStorage({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName: 'drive-30e84.firebasestorage.app',
    unique: true
})


const upload = multer({
    storage: storage,

})

module.exports = upload