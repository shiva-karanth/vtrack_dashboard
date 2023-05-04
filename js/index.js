// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMUwDzLmPvMeG4Wjaixma7n4MVoDrxikA",
  authDomain: "vtrack-b84d0.firebaseapp.com",
  databaseURL: "https://vtrack-b84d0-default-rtdb.firebaseio.com",
  projectId: "vtrack-b84d0",
  storageBucket: "vtrack-b84d0.appspot.com",
  messagingSenderId: "981987826366",
  appId: "1:981987826366:web:1818660e21d6f32b531cef",
  measurementId: "G-TXK96X6SBT",
};
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var ref=database.ref("Client");

var vehicle_container_div=document.getElementById("vehicle-container");
ref.on("value", function(snapshot) {
    var data=snapshot.val();
    for(let i in data) {
    // console.log(data.vehicle);
    console.log(data[i].Vehicle_Name);
    var div = document.createElement("div");

    // document.getElementById('Channel-ID').innerText = data[i].Channel_ID;data[i].Channel_ID;
    // document.getElementById('vehicleName').innerText = data[i].Vehicle_name;
    // document.getElementById('RouteName').innerText = data[i].Route_name;
    // console.log(data[i].Channel_ID);
    // console.log(data[i].Vehicle_name);
    // console.log(data[i].Route_name);



    var div = document.createElement("div");
    div.classList.add("vehicle-tile");
    
    var CHA_ID = document.createElement("h1");
    CHA_ID.classList.add("channel-id");
    CHA_ID.innerHTML = "Channel ID: <span>" + data[i].Channel_ID + "</span>";
  
    var Vehi_Name = document.createElement("h1");
    Vehi_Name.classList.add("vehicle-name");
    Vehi_Name.innerHTML = "Vehicle Name: <span>" + data[i].Vehicle_Name + "</span>";
  
    var Rou_Name = document.createElement("h1");
    Rou_Name.classList.add("route-name");
    Rou_Name.innerHTML = "Route Name: <span>" + data[i].Route_Name + "</span>";
  
    div.appendChild(CHA_ID);
    div.appendChild(Vehi_Name);
    div.appendChild(Rou_Name);

    vehicle_container_div.append(div);

}
})