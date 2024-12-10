const Firebase = require('firebase-admin')

const serviceAccount = require('../drive-30e84-firebase-adminsdk-hb0yj-aa8daa2fc7.json')

const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: 'drive-30e84.firebasestorage.app'
})

module.exports = Firebase;