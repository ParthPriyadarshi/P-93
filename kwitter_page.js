const firebaseConfig = {
      apiKey: "AIzaSyAlflOz3pWk8Byx-g8CnQ-xqHo0LHklYQE",
      authDomain: "kwitter-2d394.firebaseapp.com",
      databaseURL: "https://kwitter-2d394-default-rtdb.firebaseio.com",
      projectId: "kwitter-2d394",
      storageBucket: "kwitter-2d394.appspot.com",
      messagingSenderId: "203994278532",
      appId: "1:203994278532:web:0d580ccb315c5cf17c70d1",
      measurementId: "G-YXCMP22BPX"
    };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + "onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
function updateLike() {
      console.log("Clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}
//End code
      } });  }); }
getData();