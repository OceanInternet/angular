describe('Test ocean-internet.modernizr provider', function () {

    beforeEach(module('ocean-internet'));

    describe('Modernizr undefined', function () {

        beforeEach(function () {
        
            window.Modernizr = undefined;
        });

        it('should return an empty object in the absence of Modernizr', inject(function (modernizr) {
    
            expect(modernizr).toEqual({});
        }));
    });
    
    describe('Modernizr defined', function () {
    
        beforeEach(function () {
            window.Modernizr = 'Modernizr is defined';
        });
        
        it('should return window.Modernizr', inject(function (modernizr) {
        
            expect(modernizr).toEqual('Modernizr is defined');
        }));
    });
});
