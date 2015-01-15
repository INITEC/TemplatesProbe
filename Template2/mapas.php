<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>WAPOSAT</title>
      
    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/stylish-portfolio.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
      
    <!-- Fonts -->      
    <link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">
    
    <!--  Maps Style -->
    <link rel="stylesheet" type="text/css" href="css/estilos_mapas.css">  
    
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    
    
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
    
    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/bootstrap.js"></script>
    
    <!-- API Google Maps -->
    <script src="js/mapas.js"></script>
      
    <!-- Graficas de Chart -->
    <script src="js/Chart.js"></script>
    
    <!-- Graficas de Chart -->
    <script src="js/GenericChart.js"></script> 
    
    <script>
        
        window.onload = function(){


    }
    </script>
    
    
    
  </head>
  <body>
    
    <!-- Navigation -->
    <?php include("navigation.php"); ?>  
    
    <!-- Body -->
    <div class="tab-content">  
        <!-- GoogleMaps -->
        <div id="map-canvas" class="col-xs-12 col-md-12 " ></div>

        <!-- Container -->
        <div id="container" class="col-xs-12 col-md-12">
            <div id="information"  >
                

            </div> <!-- information -->
        </div> <!-- /Container -->
    </div> <!-- /Body -->
    
    <!-- Footer -->
    <?php include("footer.php") ?> 
      
    <!-- Custom Theme JavaScript -->
    <script>

    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    </script>
    
  </body>
</html>