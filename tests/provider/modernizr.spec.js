describe('Test ocean-internet.modernizr provider', function () {

    it('should return an empty object in the absence of Modernizr', function () {
    
        inject(function (modernizr) {
            expect(modernizr).toEqual({});
        });
    });
});
