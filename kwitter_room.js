
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAvLWd7BpWVKC8UdyZzNaNnkZPKutiYPCY",
      authDomain: "kwitter-3c9ad.firebaseapp.com",
      projectId: "kwitter-3c9ad",
      storageBucket: "kwitter-3c9ad.appspot.com",
      messagingSenderId: "685602894791",
      appId: "1:685602894791:web:44cec45cd773d4b056dfe2"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
