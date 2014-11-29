(function (Modernizr) {

    'use strict';
    
    angular
        .module('ocean-internet')
        .provider('modernizr', modernizr);
    
    modernizr.$inject = [];
    
    function modernizr() {
    
        this.$get = function () {
            return Modernizr || {};
        };
    }

})(Modernizr);
