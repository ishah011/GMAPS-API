function initialize() {
  var miles = 7;
  var mark = new google.maps.LatLng(28.4186,-81.5811);
  var mapOptions = {
    zoom: 12,
    center: mark
  };/* var map is an object literal that contains map initialization variables
  requires options center and zoom
  LatLng is an object that holds the latitude and longitude of where the map should be centered around.*/

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);  /*Map class represents a map and an object of it defines a single map on a page; have to specify the id of the element*/
  var pos = new google.maps.Marker({
    position: mark,
    map: map,
    icon: 'http://www.aim-awards.co.uk/media/png/beachflag.png'
  });
  var circle = new google.maps.Circle({
    center: new google.maps.LatLng(28.4186,-81.5811),
    radius: miles * 1609.344,
    strokeColor: '#FF0000',
    strokeOpacity: 1,
    fillOpacity: 0.0,
    strokeWeight: 2,
    map: map
  });


  var locations = [
      [28.443380, -81.629026, 2],
      [28.403354, -81.527306, 1],
      [28.467648, -81.561155, 3],
  ];

    for (var i = 0; i < locations.length; i++) {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][0], locations[i][1]),
        map: map,
        icon: 'http://www.popot.org/timeline/timeline_js/images/dark-red-circle.png'
      });

      google.maps.event.addListener(marker, 'click', function(){
        map.setZoom(16);
        map.setCenter(this.getPosition());
        document.getElementById("information").style.display="block";
        $("#information2").hide();
        $("#information3").hide();
        $("#information4").hide();
        $("#information5").hide();
        var myBtn = document.getElementById("2");
        myBtn.addEventListener('click', function(event) {
          change1();
        }, false);
        function change1(){
          $("#information1").hide();
          $("#information2").fadeIn("medium");
          $("#information3").hide();
          $("#information4").hide();
          $("#information5").hide();         
        }
        var myBtn2 = document.getElementById("3");
        myBtn2.addEventListener('click', function(event) {
          change2();
        }, false);
        function change2(){
          $("#information1").hide();
          $("#information2").hide();
          $("#information3").fadeIn("medium");
          $("#information4").hide();
          $("#information5").hide();            
        }
        var myBtn3 = document.getElementById("4");
        myBtn3.addEventListener('click', function(event) {
          change3();
        }, false);
        function change3(){
          $("#information1").hide();
          $("#information2").hide();
          $("#information3").hide();
          $("#information4").fadeIn("medium");
          $("#information5").hide();            
        }
        var myBtn4 = document.getElementById("1");
        myBtn4.addEventListener('click', function(event) {
          change4();
        }, false);
        function change4(){
          $("#information1").fadeIn("medium");
          $("#information2").hide();
          $("#information3").hide();
          $("#information4").hide();
          $("#information5").hide();         
        }
        var myBtn5 = document.getElementById("5");
        myBtn5.addEventListener('click', function(event) {
          change5();
        }, false);
        function change5(){
          $("#information1").hide();
          $("#information2").hide();
          $("#information3").hide();
          $("#information4").hide();
          $("#information5").fadeIn("medium");         
        }
      });
    }

  var back = document.getElementById("back");
  back.addEventListener('click', function(event) {
    map.setZoom(12);
    map.setCenter(mark);
    document.getElementById("information").style.display="none";
  });
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
      'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript; /*Only loads after the entire page has loaded; gives more control on how and when the map is drawn*/