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

  addMarker({lat:41.725823676814784,lng:-73.93422634397302})


}



function getPos(position){
  console.log(position)
}

function createMarker(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getPos);
  }else{
    alert("geolocation not enabled");
  }
}
