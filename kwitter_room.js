
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyB4KvsdNKuFQpo6gHSWBimSBtMzb98Jba0",
      authDomain: "kwitter-6d7a5.firebaseapp.com",
      databaseURL: "https://kwitter-6d7a5-default-rtdb.firebaseio.com",
      projectId: "kwitter-6d7a5",
      storageBucket: "kwitter-6d7a5.appspot.com",
      messagingSenderId: "445765881451",
      appId: "1:445765881451:web:0b90b62b898e9830db2b2e"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
