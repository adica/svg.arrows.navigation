

var myApp = angular.module('myApp',[]);

myApp.controller('testCtrl', ['$scope', function($scope) {

  $scope.MA = {};
  $scope.MA.rangeV = 0;
  $scope.MA.range = 0;

  $scope.moveStage = function(dir) {
        var step = event.ctrlKey ? 0.5 : 0.1;
        if (dir === "left")
          $scope.MA.rangeH = $scope.MA.rangeH - step;
        else if (dir === "right")
          $scope.MA.rangeH = $scope.MA.rangeH + step;
    }

    $scope.tiltCamera = function(dir) {
        if (dir === "top" && $scope.MA.rangeV <= 1)
          $scope.MA.rangeV = $scope.MA.rangeV + 0.2;
        else if (dir === "bottom" && $scope.MA.rangeV >= 0)
          $scope.MA.rangeV = $scope.MA.rangeV - 0.2;
    }

  document.onkeydown = function(evt) {
        evt = evt || window.event;
        switch (evt.keyCode) {
            case 37:
                $scope.moveStage('left')
                break;
            case 38:
                $scope.tiltCamera('top')
                break;
            case 39:
                $scope.moveStage('right')
                break;
            case 40:
                $scope.tiltCamera('bottom')
                break;
        }
    };
}]);
