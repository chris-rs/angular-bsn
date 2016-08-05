# angular-bsn

A simple angular directive for validating dutch social security numbers (BSN).

## usage

(1) include the script in your html template.

(2) add `'angular-bsn'` to your main module's list of dependencies

```javascript
var myApp = angular.module('myApp', ['angular-bsn']);
```
(3) include the `'bsn'` attribute in the respective `'input'` selector.
Directive uses ng-model parsers to validate the value of ng-model. The directive invalidates ng-model in case of wrong BSN and lets you adjust style and messages accordingly.

```html
<input type="text" name="bsn" placeholder="" ng-model="model" bsn>
```