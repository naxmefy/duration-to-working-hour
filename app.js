angular.module('app', [
    'ngMaterial'
])
    .config([
        '$mdThemingProvider',
        function ($mdThemingProvider) {
            // $mdThemingProvider.disableTheming()
        }
    ])
    .controller('AppController', [
        function () {
            this.durationRegEx = '\\d+'
            this.workingHourRegEx = '[0-9]{2}'
            this.sync = function () {
                console.log(this.duration, this.workingHour)
            }
        }
    ])