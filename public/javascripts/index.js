//init map as required by google API
function initMap(){

  //map options
  var options = {
    zoom: 15,
    //centered around Marist
    center: {lat:41.7237 , lng:-73.9337}
  }

  //create map called 'map'
  var map = new google.maps.Map(document.getElementById('map'), options);

  //content string for marker dialogue boxes
  var contentString;

  //define infoWindow
  var infoWindow = new google.maps.InfoWindow({
    content: contentString
  });

  //add marker function
  function addMarker(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: map
    });

    //event listener to bring up marker infoWindow
    marker.addListener('click', function(){
      infoWindow.setContent('<div id="content">' +
          '<h4> Lat:' + coords.lat.toString() + '<br> Lng:' + coords.lng.toString() + '</h4>' +
          '</div>');
      infoWindow.open(map,marker);
    });
  };

  //creates a default marker
  addMarker({lat:41.725823676814784,lng:-73.93422634397302});

  //ajax call to populate all markers in the database
  fetch('/getMarkers').then(function(response){
    if(response.status !== 200){
      console.log('problem with ajax call:' + response.status + ' msg: ' + response.value);
    }else{
      response.text().then(function(data){
        var markersJSON = JSON.parse(data);

        //removed was there for testing purposes
        //console.log(' recieved markers starting with: ' + markersJSON[0]);


        for(var i = 0; i < markersJSON.length; i++){
          addMarker({lat: markersJSON[i].lat, lng: markersJSON[i].lng});
        };
      });
    }
  });





};


//call /create marker with the position from getPos()
function createMarker(position){

  var lat = position.coords.latitude;
  var lng = position.coords.longitude;

  document.getElementById('lat').value = lat;

  document.getElementById('lng').value = lng ;
}

//if geo error console log error code and message
function geoError(err){
  console.log('error(${err.code}): :{err.message}');
}

//geo options, only need high accuracy
var geoOptions = {
  enableHighAccurace: true
};

//get the geolocation
function getPos(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(createMarker, geoError, geoOptions);
  }else{
    alert("geolocation not enabled");
  }
}




window.onload = function(){
  getPos();
};
