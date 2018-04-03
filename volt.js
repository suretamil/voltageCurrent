
          // Initialize Firebase
            var config = {
    apiKey: "AIzaSyCqyD-wSLceYKBYKOWe1LDlKZMrUf87pz8",
    authDomain: "voltage-18dae.firebaseapp.com",
    databaseURL: "https://voltage-18dae.firebaseio.com",
    projectId: "voltage-18dae",
    storageBucket: "",
    messagingSenderId: "306667343094"
  };
  firebase.initializeApp(config);
          

          var database = firebase.database();


          firebase.database().ref('/current/data').once('value').then(function(snapshot) {
              temps = snapshot.val();
              console.log(temps);

              google.charts.load('current', {
                  'packages': ['corechart', 'line']
              });
              google.charts.setOnLoadCallback(drawChart(temps));
          });

          function parse(temp) {
              return (new Date(temp.replace(/-/g, '/'))).getTime()
          }



          function drawChart(temps) {
              var array = $.map(temps, function(value, index) {
                  return [value];
              });

              var data = new google.visualization.DataTable();
              data.addColumn('number', 'date');
              data.addColumn('number', 'time');
              data.addColumn('number', 'current');
              data.addColumn('number', 'voltage');

              var sort = function(a, b) {
                  return parse(a.time) - parse(b.time)
              };
              var tempData = array.sort(sort);
              var output = [];

              for (var i = 0; i < tempData.length; i++) {
                  var item = tempData[i];
                  output.push([
                      //  parseFloat(parse(item.time)),
                      parseFloat(item.time),
                      parseFloat(item.date),
                      parseFloat(item.current),
                      parseFloat(item.voltage)
                  ]);
              }
              console.log(output);
              data.addRows(output);


              var options = {
                  chart: {
                      title: 'voltage',
                      subtitle: 'Realtime'
                  },
                  width: 900,
                  height: 500
              };

              var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
              console.log("data + options: " + data, options)
              chart.draw(data, options);
          }



          google.charts.load('current', {
              'packages': ['corechart', 'line']
          });
          google.charts.setOnLoadCallback(drawChart);
