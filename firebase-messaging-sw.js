

  importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
  importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");
  
  firebase.initializeApp({
   apiKey: "AIzaSyBwRnxtZ8rNQ1k4GWH7cOJjvOZmB7jmEDw",
   authDomain: "sheduledatabase.firebaseapp.com",
   projectId: "sheduledatabase",
   storageBucket: "sheduledatabase.appspot.com",
   messagingSenderId: "100449872320",
   appId: "1:100449872320:web:70765cbf1f8df14127c025",
   measurementId: "G-FXZMW21BJR"
  });
  
  const messaging = firebase.messaging();
  
  // Optional:
  messaging.onBackgroundMessage((message) => {
    console.log("onBackgroundMessage", message);
  });



  