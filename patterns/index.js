// (function () {
//     function foo () {
//         console.log("hello");
//     }
// foo();

// }());


// you can do this if you're joining files together
// +function () {
//     function foo () {
//         console.log("hello");
//     }
// foo();

// }();


// var awesomeNewModule = (function(exports) {
//     var exports = {
//         foo: 5,
//         bar: 10
//     };
//     exports.helloMars = function() {
//         console.log("Hello Mars!");
//     };
//         exports.goodbuy = function() {
//         console.log("Goodbuy!");
//     };
   
//     return exports;

// }(awesomeNewModule || {})); 



// var testModule = (function (){

//     var counter = 0;
//     return {
//         incrementCounter: function () {
//         return counter++;
//         },
        
//         resetCounter: function() {
//             console.log('counter value prior to reset:' + counter);
//             counter = 0;
//         }

//     };

// })();

// //test
// testModule.incrementCounter();
// testModule.resetCounter();


//basic template
// var myNamespace = (function(){

//     var myPrivateVar = 0;
//     varPrivateMethod = function (someText) {
//         console.log(someText);
//     };

//     return {
//         myPublicVar: "foo",

//         myPublicFunction: function (bar) {
//             myPrivateVar++;
//             myPrivateMethod(bar);
//         }
//     };
// })();


// Private methods

var Module = (function () {
  
  var privateMethod = function () {
    // do something
  };

})();


//Understanding “return”

var Module = (function () {
  
  return {
    publicMethod: function () {
      // code
    }
  };

})();
Module.publicMethod();


var myObjLiteral = {
  defaults: { name: 'Todd' },
  someMethod: function () {
    console.log(this.defaults);
  }
};

// console.log: Object { name: 'Todd' }
myObjLiteral.someMethod();


//Anonymous Object Literal return

var Module = (function () {

  var privateMethod = function () {};
  
  return {
    publicMethodOne: function () {
      // I can call `privateMethod()` you know...
    },
    publicMethodTwo: function () {

    },
    publicMethodThree: function () {

    }
  };

})();

// Locally scoped Object Literal

var Module = (function () {

  // locally scoped Object
  var myObject = {};

  // declared with `var`, must be "private"
  var privateMethod = function () {};

  myObject.someMethod = function () {
    // take it away Mr. Public Method
  };
  
  return myObject;

})();

//Stacked locally scoped Object Literal
var Module = (function () {

  var privateMethod = function () {};

  var myObject = {
    someMethod:  function () {

    },
    anotherMethod:  function () {
      
    }
  };
  
  return myObject;

})();