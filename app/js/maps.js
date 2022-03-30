function mapContent(){
  var api_key = 'RXMMPIijGYSz6R439y78bdwFjhagK28P';
  var latAndLong = { lat: 14.541473883122439, lng: 120.97968998483387 };
  var zoomLevel = 14;
  var yourAddress = 'YOUR_ADDRESS';

  var map = tt.map({
      container: 'map',
      key: api_key,
      center: latAndLong,
      zoom: zoomLevel
  });

  var marker = new tt.Marker().setLngLat(latAndLong).addTo(map);
  
  // FOR CUSTOM MARKER
  //var customMarker = document.createElement('div');
  //customMarker.id = 'marker';
  //var marker = new tt.Marker({element: customMarker}).setLngLat(latAndLong).addTo(map);

  var popupOffsets = {
    top: [0, 0],
    bottom: [0, -70],
    'bottom-right': [0, -70],
    'bottom-left': [0, -70],
    left: [25, -35],
    right: [-25, -35]
  }

  var popup = new tt.Popup({offset: popupOffsets}).setHTML(yourAddress);
    marker.setPopup(popup).togglePopup();

  }
