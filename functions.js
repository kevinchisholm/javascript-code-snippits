'use strict';

/**
* @desc A fuction - duh!
*/
function someFuntion(){
    //do stuff here...
}

/**
* @desc Immediately-invoked function dxpression (IIFE)
*/
(function (){
    //do stuff here...
})();

/**
* @desc Determines if the passed-in argument is a valid function
* @param function functionToTest - a function
* @return boolean
*/
function isFunction(functionToTest){
  return (functionToTest && functionToTest instanceof Function) ? true : false;
}

/**
* @desc Determines if the passed-in argument is a valid array
* @param function func - a function
* @return boolean
*/
function isArray(arrayToTest){
  return (arrayToTest && arrayToTest instanceof Array) ? true : false;
}

/**
* @desc Determines if the passed-in argument is a valid array
* @param function func - a function
* @return boolean
*/
function arrayIsNotEmpty(arrayToTest){
  return (arrayToTest && arrayToTest instanceof Array && arrayToTest.length) ? true : false;
}


//keeps the jslint plugin happy - you can ignore everything below this line :- )
someFuntion();
isFunction();
isArray();
arrayIsNotEmpty();
