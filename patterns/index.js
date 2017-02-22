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
var myNamespace = (function(){

    var myPrivateVar = 0;
    varPrivateMethod = function (someText) {
        console.log(someText);
    };

    return {
        myPublicVar: "foo",

        myPublicFunction: function (bar) {
            myPrivateVar++;
            myPrivateMethod(bar);
        }
    };
})();


