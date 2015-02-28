angular.module('imaginrio', ['ngRoute', 'ngResource'])

  /*  //see
.service('Albums', function ($q, $ngResource) {
    var self = this;
    this.fetch = function () {
        if (this.albums) {
            return $q.when(this.albums);
        }

        return
    }
})*/

.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeCtrl',
            templateUrl: 'home.html'
        })
        .when('/about', {
            controller: 'AboutCtrl',
            templateUrl: 'about.html'
        })
        .when('/contact', {
            controller: 'ContactCtrl',
            templateUrl: 'contact.html'
        })
        .when('/albums', {
            controller: 'AlbumListCtrl',
            templateUrl: 'albums.html'
        }).otherwise({
            redirectTo: '/'
        })
})

.controller('NavigationCtrl', function ($scope, $location) {
    $scope.isActive = function (path) {
        return path == $location.path();
    }
})

.controller('HomeCtrl', function ($scope) {
    $scope.isItPinterest = function() {
        alert('It\'s not Pinterest! Stop asking. Cheezus!');
    }

    $scope.whyIsThePinterestLogoInTheThumbnails = function () {
        alert('That\'s not Pinterest! That stands for \'PICTURES\'. I\'m so sick and tired of this motherfucking question.');
    }
})

.controller('AboutCtrl', function ($scope) {
    console.log('About controller');
})

.controller('ContactCtrl', function ($scope) {
    console.log('Contact controller');
})

.controller('AlbumListCtrl', function ($scope) {
    console.log('AlbumListCtrl');
})
;