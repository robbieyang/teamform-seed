var eventControllers = angular.module('eventControllers', ["firebase"]);

eventControllers.controller('eventListController', ['$scope', '$http','$firebaseArray', function($scope, $http, $firebaseArray) {
initalizeFirebase();
var ref = firebase.database().ref("/event/");// 抄左angular js 的structure

    $scope.event = $firebaseArray(ref);//firebase copy the data to view also link it to firebase blinding firebase to model

    $scope.eventOrder='';



  // $http.get('js/data.json').success(function(data) {
  //   $scope.event = data;
  //   $scope.eventOrder = 'name';
  // });
}]);

eventControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.artists.length-1;
    }

    if ($routeParams.itemId < $scope.artists.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);
