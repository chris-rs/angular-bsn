angular.module('angular-bsn', [])

/* Validates bsn numbers with the 11-proef */
.directive('bsn', [function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, $ngModelCtrl) {
      $ngModelCtrl.$parsers.push(function(viewValue) {
        var bsn = viewValue;
        var rest = viewValue;
        var sum = 0;

        $ngModelCtrl.$setValidity('bsn', false);
        if (bsn.length != 9) {
          console.log('Invalid BSN: not 9 characters');
        } else {
          var sum = 0;
          for (var i = 0; i < 8; i++) {
            sum += (9 - i) * parseInt(bsn.charAt(i));
          }
          sum -= parseInt(bsn.charAt(8));

          if (((sum % 11) == 0)) {
            $ngModelCtrl.$setValidity('bsn', true);
          } else {
            console.log('Invalid BSN: 11-proef is not valid');
          }
        }

        return viewValue;
      });
    }
  };
}]);
