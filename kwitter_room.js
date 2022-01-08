var firebaseConfig = {
      apiKey: "AIzaSyAN1gcvcW3AXeq3VT17q-ZzOhq5ygq1PNM",
      authDomain: "kwitter-2ead7.firebaseapp.com",
      databaseURL: "https://kwitter-2ead7-default-rtdb.firebaseio.com",
      projectId: "kwitter-2ead7",
      storageBucket: "kwitter-2ead7.appspot.com",
      messagingSenderId: "801340057719",
      appId: "1:801340057719:web:d5c7d80a976c027a777e72"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addroomname(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location="kwitter_room.html";

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });}
      );}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}