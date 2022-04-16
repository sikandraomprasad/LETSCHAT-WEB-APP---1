// Your web app's Firebase configuration

const firebaseConfig = {
      apiKey: "AIzaSyAWQUaZk04qax0yd3h-QKT8iUW__oAaTZs",
      authDomain: "chat-app-eb7d2.firebaseapp.com",
      databaseURL: "https://chat-app-eb7d2-default-rtdb.firebaseio.com",
      projectId: "chat-app-eb7d2",
      storageBucket: "chat-app-eb7d2.appspot.com",
      messagingSenderId: "311973728822",
      appId: "1:311973728822:web:f92f620e7b94c69cec3e97",
      measurementId: "G-WWVMZRVFCS"
    };
    
    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);

user_name=localStorage.setItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+":"

function add_room()
{
     room_name=document.getElementById("room_name").Value;

    localStorage.setItem("roomname",room_name);

    window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
