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
   firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name- " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      getData();
      });});}
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}