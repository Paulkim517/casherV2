angular.module('starter.controllers', ['ionic','ngMap'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

// map controller

.controller('MapCtrl', ['$scope', '$stateParams', '$http', '$timeout', function($scope, $stateParams, $http, $timeout) {

  // customize bar pin style on view
  $scope.image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    size: [20, 32],
    origin: [0,0],
    anchor: [0, 32]
  };

  $scope.$on('mapInitialized', function (event, map) {
            $scope.objMapa = map;
         });

  // seed data of "atms"

$scope.atms = [
   {'id': 1, name: 'Jon Harlen', lat:  37.7960398 , lng: -122.4021932 },
   {'id': 2, name: 'Greg Onza', lat: 37.7952 , lng: -122.4028 },
   {'id': 3, name: 'Paul Kim', lat: 37.808674 , lng: -122.4098 },
   {'id': 4, name: 'Josh Baker', lat: 37.794138 , lng: -122.407791},
   {'id': 5, name: 'Esben Smith', lat: 37.795313 , lng: -122.393757}
  ]; 
  

  $scope.show = function (event, atm) {
            var infowindow = new google.maps.InfoWindow();
            var center = new google.maps.LatLng(atm.lat, atm.lng);

          infowindow.setContent(
                '<p>' + atm.name + '</p>'
            );

            infowindow.setPosition(center);
            infowindow.open($scope.objMapa);
            $scope.objMapa.setZoom(15);
            $scope.objMapa.setCenter(center);
         };

  // render all pins and info windows to the map based on the returned data

}])

.controller('LoginCtrl', function($scope) {
    $scope.data = {};
 
    $scope.login = function() {
        console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);
    }
});





