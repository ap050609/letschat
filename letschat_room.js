  var firebaseConfig = {
      apiKey: "AIzaSyDZhHrwIONh1MF5r8SZ8n5tYIXSeVuI7hQ",
      authDomain: "test-73a98.firebaseapp.com",
      databaseURL: "https://test-73a98.firebaseio.com",
      projectId: "test-73a98",
      storageBucket: "test-73a98.appspot.com",
      messagingSenderId: "369311507127",
      appId: "1:369311507127:web:349ca2d05ac91176b12332",
      measurementId: "G-CDKBMNJVRD"
    };
    firebase.initializeApp(firebaseConfig);

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(username).update({
        purpose : "adding room name"
  });

      localStorage.setItem("Room Name",room_name);

      window.location = "letschat_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name'id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><br><hr><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("Room Name", name);
  window.location = "letschat_page.html";
}
function logout()
{
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
    window.location = "letschat.html";
}