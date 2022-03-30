// Initialize and add the map
function initMap() {
  // The location of Uluru
  const vikings = { lat: 14.541473883122439, lng: 120.97968998483387 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: vikings,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: vikings,
    map: map,
  });
}
