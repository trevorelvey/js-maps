var map;
var infowindow;
$(document).ready(function() {
  function initMap() {
    var sizzle = {lat: 45.522839, lng: -122.659124};

    map = new google.maps.Map(document.getElementById('googleMap'), {
      center: sizzle,
      zoom:15,
      mapTypeId:google.maps.MapTypeId.HYBRID,
      streetViewControl:false
    });
    map.setTilt(45);

    infowindow = new google.maps.InfoWindow();
    request = ({
      location: sizzle,
      radius: '1500',
      query: 'pizza slice',
      type: ['restaurant']
    });
    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
    // service.nearbySearch({
    //   location: sizzle,
    //   radius: 500,
    //   type: ['restaurant']
    // service.textSearch(
    //   request: pizza,
      // location: sizzle,
      // radius: 500,
    // , callback);
    // service.textSearch("pizza", callback);

  }

  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }

  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }
  initMap();
});
