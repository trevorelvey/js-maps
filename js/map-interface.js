var map;
$(document).ready(function() {
  function initMap() {
    map = new google.maps.Map(document.getElementById('googleMap'), {
      center: {lat: 45.523893, lng: -122.637242},
      zoom:15,
      mapTypeId:google.maps.MapTypeId.HYBRID
    })
  }
  initMap();
});
