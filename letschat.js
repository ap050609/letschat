function addUser()
{
    username = document.getElementById("username").value;

    localStorage.setItem("username", username);

    window.location = "letschat_room.html";
    
    firebase.database().ref("/").child(username).update({
        purpose : "adding user"
  });

    
}