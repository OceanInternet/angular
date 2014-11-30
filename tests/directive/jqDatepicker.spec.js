describe('Test ocean-internet.directive.jqDatepicker', function () {

    var modernizr,
        $compile,
        $rootScope,
        settings,
        input;   

    beforeEach(function () {
    
        settings =  {
            dateFormat:  'dd/mm/yy',
            changeMonth: true,
            onSelect:    jasmine.any(Function)
        };
        
        input = '<input type="date" data-ng-model="date" data-jq-datepicker />';
        
        modernizr = {};
        
        module('ocean-internet', function ($provide) {
            
            $provide.value('modernizr', modernizr);
        });

        spyOn(jQuery.fn, 'datepicker');
    });
    
    beforeEach(inject(function (_$compile_, _$rootScope_) {
    
        $compile   = _$compile_;
        $rootScope = _$rootScope_;
    }));
    
    describe('Attach jQuery Datepicker Widget', function () {
    
        it('should attach datepicker if !modernizr.inputtypes', function () {
    
            $compile(input)($rootScope);
            
            $rootScope.$digest();
            
            expect(jQuery.fn.datepicker).toHaveBeenCalledWith(settings);
        });

        it('should attach datepicker if !modernizr.inputtypes.date', function () {
    
            modernizr.inputtypes = {date: undefined};

            $compile(input)($rootScope);
                    
            $rootScope.$digest();

            expect(jQuery.fn.datepicker).toHaveBeenCalledWith(settings);
        });
        
        it('should set minDate', function () {

            var minDate = '2014-01-01';
            
            settings.minDate = new Date(minDate);
            
            input = '<input type="date" data-ng-model="date" min="' + minDate + '" data-jq-datepicker />'

            $compile(input)($rootScope);
                    
            $rootScope.$digest();

            expect(jQuery.fn.datepicker).toHaveBeenCalledWith(settings);        
        });
        
        it('should set maxDate', function () {

            var maxDate = '2014-12-31';
            
            settings.maxDate = new Date(maxDate);
            
            input = '<input type="date" data-ng-model="date" max="' + maxDate + '" data-jq-datepicker />'

            $compile(input)($rootScope);
                    
            $rootScope.$digest();

            expect(jQuery.fn.datepicker).toHaveBeenCalledWith(settings);
        
        });
        
        it('should set yearRange if minYear != maxYear', function () {

            var minDate = '2000-01-01',
                maxDate = '2020-12-31',
                range   = '2000:2020';

            settings.minDate    = new Date(minDate);
            settings.maxDate    = new Date(maxDate);
            settings.changeYear = true;
            settings.yearRange  = range;

            input = '<input type="date" data-ng-model="date" min="' + minDate + '" max="' + maxDate + '" data-jq-datepicker />'

            $compile(input)($rootScope);
                    
            $rootScope.$digest();

            expect(jQuery.fn.datepicker).toHaveBeenCalledWith(settings);
        
        });
        
        it('should not set yearRange if minYear == maxYear', function () {
        
            var minDate = '2014-01-01',
                maxDate = '2014-12-31';
                
            settings.minDate    = new Date(minDate);
            settings.maxDate    = new Date(maxDate);

            input = '<input type="date" data-ng-model="date" min="' + minDate + '" max="' + maxDate + '" data-jq-datepicker />'

            $compile(input)($rootScope);
                    
            $rootScope.$digest();

            expect(jQuery.fn.datepicker).toHaveBeenCalledWith(settings);
        
        });
    });
    
    describe('Don\'t attach jQuery Datepicker Widget', function () {
    
        it('should not attach datepicker if modernizr.inputtypes.date', function () {
        
            modernizr.inputtypes = {date: true};
            
            $compile(input)($rootScope);
        
            $rootScope.$digest();

            expect(jQuery.fn.datepicker).not.toHaveBeenCalled();
        });
    });
});
