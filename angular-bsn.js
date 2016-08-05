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

        if(bsn <= 99999999 || bsn > 9999999999) {
          console.log('invalid length');
          $ngModelCtrl.$setValidity('bsn', false);
        }else{
          sum += (rest % 10) * -1;
          rest = Math.floor(rest / 10);

          for(var multiplier=2; rest > 0; multiplier++) {
            sum += (rest % 10) * multiplier;
            rest = Math.floor(rest / 10);
          }

          if(sum % 11 === 0){
            console.log('valid bsn');
            $ngModelCtrl.$setValidity('bsn', true);
          }else{
            console.log('invalid bsn');
            $ngModelCtrl.$setValidity('bsn', false);
          }
        }

        return viewValue;
        
      });
    }
  }
}]);


