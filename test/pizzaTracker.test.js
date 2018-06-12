var expect = require('chai').expect
var PizzaTracker = require('../lib/pizzaTracker').PizzaTracker

describe('PizzaTracker', function() {

  describe('#numberOfHousesDeliveredToByMariaGivenPath()', function() {
    it('returns 2 for an input of >', function() {
      var numberOfHouses = PizzaTracker.numberOfHousesDeliveredToByMariaGivenPath( '>' ) 
      expect( numberOfHouses ).to.equal( 2 )
    });

    it('returns 4 for an input of ^>v<', function() {
      var numberOfHouses = PizzaTracker.numberOfHousesDeliveredToByMariaGivenPath( '^>v<' ) 
      expect( numberOfHouses ).to.equal( 4 )
    });

    it('returns 2 for an input of ^v^v^v^v^v', function() {
      var numberOfHouses = PizzaTracker.numberOfHousesDeliveredToByMariaGivenPath( '^v^v^v^v^v' ) 
      expect( numberOfHouses ).to.equal( 2 )
    });
  });

  describe('#numberOfHousesDeliveredToByMariaAndClovisGivenPath()', function() {
    it('returns 3 for an input of ^v', function() {
      var numberOfHouses = PizzaTracker.numberOfHousesDeliveredToByMariaAndClovisGivenPath( '>v' ) 
      expect( numberOfHouses ).to.equal( 3 )
    });

    it('returns 3 for an input of ^>v<', function() {
      var numberOfHouses = PizzaTracker.numberOfHousesDeliveredToByMariaAndClovisGivenPath( '^>v<' ) 
      expect( numberOfHouses ).to.equal( 3 )
    });

    it('returns 11 for an input of ^v^v^v^v^v', function() {
      var numberOfHouses = PizzaTracker.numberOfHousesDeliveredToByMariaAndClovisGivenPath( '^v^v^v^v^v' ) 
      expect( numberOfHouses ).to.equal( 11 )
    });
  });
});
