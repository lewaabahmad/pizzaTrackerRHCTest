 exports.PizzaTracker = (function() {

  function numberOfHousesDeliveredToByMariaGivenPath( path ) {
    //Make path string individual steps:
    var steps = path.split( '' )
    //Mapping of deliverers path is done on grid, where intitial coordinates are [ 0, 0 ].
    var mariaCoordinates = [ 0, 0 ]
    //Use an array to keep track of visited house identified by coordinates in the 
    //format of "x${ x-coordinate }y${}". How many times a particular house has been visited, 
    //is unimportant. If it were, a hash is more advantageous and can be used.
    var currentHouse = 'x0y0'
    var housesVisited = [ currentHouse ]

    for (var i = 0; i < steps.length; i++ ) {
      //Each step gives new house delivered to:
      mariaCoordinates = determineNewCoordinatesGivenStep( mariaCoordinates, steps[ i ] )
      currentHouse = 'x' + mariaCoordinates[ 0 ] + 'y' + mariaCoordinates[ 1 ]
      //If the house has not yet been delivered to, we will add it to the array of houses
      //visited:
      if ( housesVisited.indexOf( currentHouse ) === -1 ) {
        housesVisited.push( currentHouse )
      }
    }
    return housesVisited.length
  }

  function numberOfHousesDeliveredToByMariaAndClovisGivenPath( path ) {
    var steps = path.split( '' )
    //Here we have two sets of coordinate to track that are updated in an alternating 
    //fashion:
    var mariaCoordinates = [ 0, 0 ]
    var clovisCoordinates = [ 0, 0 ]
    var currentMariaHouse = 'x0y0'
    var currentClovisHouse = 'x0y0'
    //We can still keep track of a singular variable currentHouse which will allow us 
    //to DRY up some code below. See *
    var currentHouse = currentMariaHouse
    //We still only need one array to keep track of houses visited.
    var housesVisited = [ currentHouse ]

    for (var i = 0; i < steps.length; i++ ) {
      //In order to keep track of who is taking which step (and therefore delivering to 
      //which house, we can take advantage of i. If i is even, it is Maria, and if it is 
      //odd, then it is the superbly fantastic pizza delivery goat Clovis. 
      //NOTE: This starts to demonstrate a pattern that can solve for even more delivery 
      //women/men/goats/dogs/etc. We can imagine a scenario where we have 4, 7, or 10 entities
      //making deliveries. In such a case, we can use module operation and the remainder to 
      //identify who is making the step given the proper instantiation of variables or a data
      //structure to keep track of them (I can gladly elaborate on this in more detail should 
      //this idea be useful.) For now, the two cases are simple enough so as not to warrant a 
      //complex abstraction.
      if ( ( i % 2 ) === 0 ) { //then i is even, and so it is Maria.
        mariaCoordinates = determineNewCoordinatesGivenStep( mariaCoordinates, steps[ i ] )
        currentMariaHouse = 'x' + mariaCoordinates[ 0 ] + 'y' + mariaCoordinates[ 1 ]
        currentHouse = currentMariaHouse
      } else { //then i is odd, and so it is Clovis.
        clovisCoordinates = determineNewCoordinatesGivenStep( clovisCoordinates, steps[ i ] )
        currentClovisHouse = 'x' + clovisCoordinates[ 0 ] + 'y' + clovisCoordinates[ 1 ]
        currentHouse = currentClovisHouse
      }
      // * - here, we can have this block apply to Maria and Clovis and be DRY.
      if ( housesVisited.indexOf( currentHouse ) === -1 ) {
        housesVisited.push( currentHouse )
      }
    }
    return housesVisited.length
  }

  function determineNewCoordinatesGivenStep( currentCoordinates, step ) {
    var cc = currentCoordinates // for conciseness
    switch( step ) {
      case '<':
        return [ cc[0] - 1, cc[1] ];
      case '>':
        return [ cc[0] + 1, cc[1] ];
      case '^':
        return [ cc[0], cc[1] + 1 ];
      case 'v':
        return [ cc[0], cc[1] - 1 ];
      default:
        console.log( 'Improper imput given. Ignoring: ' + steps[ i ] );
        return currentCoordinates;
    }
  }

  //We use an immediately invoked function to return a hash of exposed functions. In doing so, we 
  //create a context that allows for privatized methods and provide a verbosely defined API.
  return {
    numberOfHousesDeliveredToByMariaGivenPath: numberOfHousesDeliveredToByMariaGivenPath,
    numberOfHousesDeliveredToByMariaAndClovisGivenPath: numberOfHousesDeliveredToByMariaAndClovisGivenPath
  }
})()

