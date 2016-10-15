(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

var itemEmpty = "Please enter data first"
var itemMessagePass = "Enjoy!";
var itemMessageFail = "Too much!";
var itemMessageFail1 = "Too much!";
var itemLimit = 3;

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchCsItems = "";
  $scope.lunchCsItemsStyle = {};
  $scope.lunchMessage = "";
  $scope.lunchMessageStyle = {};

  var removeEmptyStrings = function(arr) {
     return arr.filter(function(str) {
       return str != undefined && str.trim().length > 0;
     });
  }

  $scope.checkLunch = function () {
    var lunchCsItems = $scope.lunchCsItems;
    if (!lunchCsItems) {
      $scope.lunchMessageStyle.style = {"color":"red"};
      $scope.lunchCsItemsStyle.style = {"border-color":"red"};
      $scope.lunchMessage = itemEmpty;
      return;
    }
    var lunchItems = removeEmptyStrings(lunchCsItems.split(','));

    var numberOfItems = lunchItems.length;

    $scope.lunchMessageStyle.style = {"color":"green"};
    $scope.lunchCsItemsStyle.style = {"border-color":"green"};
    if (numberOfItems <= itemLimit) {
        $scope.lunchMessage = itemMessagePass;
    } else {
        $scope.lunchMessage = itemMessageFail;
    }
  };
}

})();
