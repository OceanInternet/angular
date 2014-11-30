(function () {
    'use strict';
    
    angular
        .module('ocean-internet')
        .directive('jqDatepicker', jqDatepicker);
    
    jqDatepicker.$inject = ['$filter', 'modernizr'];
    
    function jqDatepicker($filter, modernizr) {
      
        return {
            restrict: 'A',
            require:  'ngModel',
            link:     link
        };
      
        function link(scope, element, attrs, ngModelCtrl) {

            var settings = {
                    dateFormat:  'dd/mm/yy', // My chosen display format
                    changeMonth: true,       // I wanted a month selector
                    onSelect:    onSelect    // I'll use this to update the model
                };
                


            // Check for native input[date] availability
            if (!modernizr.hasOwnProperty('inputtypes') || !modernizr.inputtypes.date) {
            
                if(attrs.min) {
                    settings.minDate = new Date(attrs.min);
                }
                
                if(attrs.max) {
                    settings.maxDate = new Date(attrs.max);
                }
                
                // I wanted a year selector if minDate and maxDate are set
                if(settings.hasOwnProperty('minDate') && settings.hasOwnProperty('maxDate')) {
                
                    var minYear = settings.minDate.getFullYear(),
                        maxYear = settings.maxDate.getFullYear();
                                                
                    if(minYear !== maxYear) {
                    
                        var range = minYear + ':' + maxYear;
                        
                        settings.changeYear = true;
                        settings.yearRange  = range;
                    }
                }
                
                element.datepicker(settings);
            }                
            
            function onSelect(date) {

                scope.$apply(function () {
                
                    var parsedDate = jQuery.datepicker.parseDate(settings.dateFormat, date),
                        mysqlDate  = $filter('date')(parsedDate, 'yyyy-MM-dd');

                    ngModelCtrl.$setViewValue(mysqlDate);
                });
            }
        }
    }

})();
