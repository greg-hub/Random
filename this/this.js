//Object Methods

function helloWorld() {
console.log("hello World");
console.log(this);    
}

helloWorld(this); // "hello World"  //window



var Portland = {
    bridges: 12,
    airport: 1,
    soccerTeams: 1,
    logNumberOfBridges: function() {
         console.log("there are " + this.bridges + " bridges in portland!");
            
    },

    logTeams: function() {
         console.log(this.soccerTeams);
    }
};

Portland.logNumberOfBridges(); // log: there are 12 bridges bridges in portland!
Portland.logTeams();    // log:  1 



//===================================================//


// var Portland = {
//     bridges: 12,
//     airport: 1,
//     soccerTeams: 1,
//     logNumberOfBridges: function() {
//          console.log("there are " + this.bridges + " bridges in portland!");
            
//     },
// };

// function logTeams () {
//       console.log(this.soccerTeams);
// }

// Portland.foo = logTeams;
// Portland.foo(); // 1
// logTeams(); // undefined -- this does not have the key so it is undefined 

// Portland.logTeams();    // 1 


// //==================Constructor====================//

// var City = function(name, state) {
//     this.name = name || 'Portland';
//     this.state = state || 'Oregon';
// };

// portland = new City();
// seattle = new City('Seattle', 'Washington');

// console.log(portland); //{name: "Portland", state: "Oregon"}
// console.log(seattle);City //{name: "Seattle", state: "Washington"}
                          

//The this keyword does not corrospond to the constructer function or the city prototype
// it logs to the instance object {portland/seattle} so you can log different values for each instance

// //==================Constructor====================//
var City = function(name, state) {
    this.name = name || 'Portland';
    this.state = state || 'Oregon';
    this.printMyCityAndState = function(){
        console.log("My city is " + this.name + ", and my state is " + this.state);
    }
};

portland = new City();
seattle = new City('Seattle', 'Washington');

London = new City();
seattle = new City('London', 'England');

portland.printMyCityAndState(); // My city is Portland, and my state is Oregon
seattle.printMyCityAndState(); // My city is Seattle, and my state is Washington
London.printMyCityAndState(); // My city is London, and my state is England
//this can be repated any numner of time and the this keyword will allways respond
//to the object created 
                         
