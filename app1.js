(function(){
var config = {
    apiKey: "AIzaSyC8Zijwus62xrztaBLB8EETd5nv2o_apFc",
    authDomain: "humiditytemp-cb646.firebaseapp.com",
    databaseURL: "https://humiditytemp-cb646.firebaseio.com",
    projectId: "humiditytemp-cb646",
    storageBucket: "humiditytemp-cb646.appspot.com",
   
  };
  firebase.initializeApp(config);

var userDataRef = firebase.database().ref("Solar monitoring system").orderByKey();
userDataRef.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();              // childData will be the actual contents of the child

      var current_val = childSnapshot.val().current;
      var status_val = childSnapshot.val().Status;
      var time_val = childSnapshot.val().time;
      var voltage_val = childSnapshot.val().voltage;

                  // this method only last data retrive  start

     // document.getElementById("current").innerHTML = current_val;
     // document.getElementById("Status").innerHTML = status_val;
     // document.getElementById("time").innerHTML = time_val;
     // document.getElementById("voltage").innerHTML = voltage_val;
                  //End

                // its working but not alagn
      //  $("#current").append(current_val);
     //  $("#voltage").append(voltage_val);

   // $("#current").append("<p>" + current_val + "</p><p> " + voltage_val + "</p><br>");

    $("#current").append("<p>" + current_val + "</p><hr>");
    $("#voltage").append("<p>" + voltage_val + "</p><hr>");
    $("#Status").append("<p>" + status_val + "</p><hr>");
    $("#time").append("<p>" + time_val + "</p><hr>");



  });
 });
}());