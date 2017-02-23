var coordonnees = [
             [36.746828, 3.035181,
              '<b>ALGERIA</b>'],
             [12.36308, -1.546587,
              '<b>BURKINA FASO</b>']
           ];


           var mapOptions = {
               zoom: 2,
               center: new google.maps.LatLng(24.287027, 42.227783),
               mapTypeId: google.maps.MapTypeId.ROADMAP
           };

           var map = new google.maps.Map(
               document.getElementById('monsite_carte_monde'),
               mapOptions
           );

           for (var i = 0; i < coordonnees.length; i++) {
               setTimeout(function() {
                   ajoutePoint();
               }, i * 800);
           }

           var iterateur = 0;
           function ajoutePoint() {
               var BU = coordonnees[iterateur];
               var myLatLng = new google.maps.LatLng(BU[0], BU[1]);
               var marker = new google.maps.Marker({
                   position: myLatLng,
                   map: map,
                   clickable: true,
                   animation: google.maps.Animation.DROP, /* animation : le point est déposé sur la carte */
                   descriptionLabo: BU[2], /* description qui sera affichée lorsqu'on clique sur le point */
               });
               google.maps.event.addListener(marker, 'click', function() {
                   /* Ajoute l'info-bulle sur le point lorsqu'on clique dessus */
                   var infobulle = new google.maps.InfoWindow({
                       content: this.descriptionLabo
                   });
                   infobulle.open(map, this);
               });
               iterateur++;
           }
