var map, marker;
  function initialize() {
    var posicion = new google.maps.LatLng(-12.010915, -77.050718);
    var posicion2 = new google.maps.LatLng(-12.032472, -77.011557);
    var posicion3 = new google.maps.LatLng(-12.029450, -76.985808);
    var posicion4 = new google.maps.LatLng(-12.009470, -76.880237);
    var posicion5 = new google.maps.LatLng(-12.037508, -77.046662);
    var posicion6 = new google.maps.LatLng(-12.082834, -76.920148);
    var centro = new google.maps.LatLng(-12.041034, -76.984692);
    
    var mapOptions = {
      zoom: 13,
      center: centro,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var iconoMarcador = "img/PointSensor.png";
    marker = new google.maps.Marker({
      position: posicion,
      icon: iconoMarcador,
      map: map,
      title:"EMT1-CITRAR_UNI",
      animation: google.maps.Animation.DROP
    });
    
    marker2 = new google.maps.Marker({
      position: posicion2,
      icon: iconoMarcador,
      map: map,
      title:"EMT1-CITRAR_UNI",
      animation: google.maps.Animation.DROP
    });
      
    marker3 = new google.maps.Marker({
      position: posicion3,
      icon: iconoMarcador,
      map: map,
      title:"EMT1-CITRAR_UNI",
      animation: google.maps.Animation.DROP
    });
      
    marker4 = new google.maps.Marker({
      position: posicion4,
      icon: iconoMarcador,
      map: map,
      title:"EMT1-CITRAR_UNI",
      animation: google.maps.Animation.DROP
    });
      
    marker5 = new google.maps.Marker({
      position: posicion5,
      icon: iconoMarcador,
      map: map,
      title:"EMT1-CITRAR_UNI",
      animation: google.maps.Animation.DROP
    });
      
    marker6 = new google.maps.Marker({
      position: posicion6,
      icon: iconoMarcador,
      map: map,
      title:"EMT1-CITRAR_UNI",
      animation: google.maps.Animation.DROP
    });
      
    google.maps.event.addListener(marker, 'click', mostrarInfo);
      google.maps.event.addListener(marker, 'click', MostrarCuadroEMT);
      
        function mostrarInfo() {
    var infowindow = new google.maps.InfoWindow({
      content: "Estacion CITRAR",
    });
    infowindow.open(map, marker);
    setTimeout(function () { infowindow.close(); }, 5000);
  }

    function MostrarCuadroEMT () {
        $( "#map-canvas" ).removeClass( "col-md-12" ).addClass( "col-md-6" );
        $( "#container" ).removeClass( "col-md-12" ).addClass( "col-md-6" );
        //map.setCenter(marker.getPosition());
        CargarCuadroGraficas ();
        
    }
      
  }

  

google.maps.event.addDomListener(window, 'load', initialize);
