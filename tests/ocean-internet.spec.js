describe('ocean-internet Module', function() {

    beforeEach(module('ocean-internet'));

    it('gets loaded', function() {

        expect(angular.module('ocean-internet').name).toBe('ocean-internet');
    });  
});
