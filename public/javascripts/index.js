//init map as required by google API
function initMap(){

  //map options
  var options = {
    zoom: 15,
    center: {lat:41.7237 , lng:-73.9337}
  }

  //create map called 'map'
  var map = new google.maps.Map(document.getElementById('map'), options);

  //add marker function
  function addMarker(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: map
    });
  }

  //creates a default marker
  addMarker({lat:41.725823676814784,lng:-73.93422634397302})


}


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
