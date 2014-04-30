'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
        .controller('MyCtrl1', function($scope, $http) {

            $scope.allFeeds = [];

            $http.get('http://metroclick.us:8080/facebookfeeds/?screenName=TheTonyAwards').success(function(data) {
                angular.forEach(data, function(value) {

                    this.push(value);
                }, $scope.allFeeds)
               
            });
            $http.get('http://metroclick.us:8080/twitterfeeds/?screenName=TheTonyAwards').success(function(data) {

                angular.forEach(data, function(value) {

                    this.push(value);
                }, $scope.allFeeds)
            });

            $http.get('http://metroclick.us:8080/instagramfeeds/?screenName=TheTonyAwards').success(function(data) {

                angular.forEach(data, function(value) {

                    this.push(value);
                }, $scope.allFeeds)
            });


        })