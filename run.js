var PizzaTracker = require('./lib/pizzaTracker').PizzaTracker
var questionPath = require('./questionPath').questionPath

console.log( 'As a solo delivery woman and given the question path, Maria delivers to:' )
var housesDeliveredToByMaria = PizzaTracker.numberOfHousesDeliveredToByMariaGivenPath( questionPath ) 
console.log( housesDeliveredToByMaria + ' houses!' )

console.log( 'As a duo, Maria and Clovis deliver to:' )
var housesDeliveredToByMariaAndClovis = PizzaTracker.numberOfHousesDeliveredToByMariaAndClovisGivenPath( questionPath ) 
console.log( housesDeliveredToByMariaAndClovis + ' houses!' )
