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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
        
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4>" + name + "</h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button = "<button class = 'btn btn-primary' id = "+firebase_message_id+" value = "+like+" onclick = 'updateLike(this.id)'>";
         span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;
                 
      } });  }); }
getData();

function return_to_home()
{
      window.location = "letschat_room.html";
}

function send()
{
      msg = document.getElementById("msg").value;
      localStorage.setItem("Message",msg)
      document.getElementById("output").innerHTML = localStorage.getItem("Message");
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
document.getElementById("msg").value = ""; 
}

function updateLike(message_id)
{
 console.log("Clicked on Like Button for this message - " + message_id);
 button_id = message_id;
 likes = document.getElementById(button_id).value;
 updated_likes = Number(likes) + 1;
 console.log(updated_likes);

 firebase.database().ref(room_name).child(message_id).update({
       like : updated_likes
       });

}
function logout()
{
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
    window.location = "letschat.html";
}