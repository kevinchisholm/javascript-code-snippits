(function () {
  'use strict';

  /* global window: false */

  function MyService(){

  /**
  * @desc Description goes here
  * @param Parameter 1 goes here
  * @param Parameter 2 goes here
  * @param Parameter 3 goes here
  * @return Return value goes here
  */
  function functionOne(){
    //
  }

  /**
  * @desc Description goes here
  * @param Parameter 1 goes here
  * @param Parameter 2 goes here
  * @param Parameter 3 goes here
  * @return Return value goes here
  */
  function functionTwo(){
    //
  }

  /**
  * @desc Description goes here
  * @param Parameter 1 goes here
  * @param Parameter 2 goes here
  * @param Parameter 3 goes here
  * @return Return value goes here
  */
  function functionThree(){
    //
  }

    //return the service
    return {
      functionOne: functionOne,
      functionTwo: functionTwo,
      functionThree: functionThree
    };
  }

  window.angular.module('MyModule')

    .factory('MyService', ['$log', '$auth', MyService]);
}());