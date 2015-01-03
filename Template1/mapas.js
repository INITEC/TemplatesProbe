var map, marker;
  function initialize() {
    var posicion = new google.maps.LatLng(-12.040223, -77.036771);
    var mapOptions = {
      zoom: 18,
      center: posicion,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

    var iconoMarcador = "Iconos/Sensor_11.png";
    marker = new google.maps.Marker({
      position: posicion,
      icon: iconoMarcador,
      map: map,
      title:"Hoola mama! Soy un marcador!",
      animation: google.maps.Animation.DROP
    });
    google.maps.event.addListener(marker, 'click', mostrarInfo);
  }

  function mostrarInfo() {
    var infowindow = new google.maps.InfoWindow({
      content: "EMC N°1<br> WAPOSAT",
    });
    infowindow.open(map, marker);
  }

google.maps.event.addDomListener(window, 'load', initialize);
