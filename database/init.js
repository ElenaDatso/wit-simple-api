const { initializeApp } = require('firebase/app');

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'wit-simple-api.firebaseapp.com',
  databaseURL: 'https://wit-simple-api-default-rtdb.firebaseio.com',
  projectId: 'wit-simple-api',
  storageBucket: 'wit-simple-api.firebasestorage.app',
  messagingSenderId: '181076106346',
  appId: '1:181076106346:web:4fd0f8c19084906c257e13',
};

const app = initializeApp(firebaseConfig);

module.exports = app;
