import angular from 'angular'
import { PizzaListController } from './pizza-list.controller'

export default

  angular.module('dtang.pizza', [])
    .controller('PizzaListController', PizzaListController)



    .filter('toto', function () {
      // mon filtre toto
      return function (input) {
        return parseInt(input) + 10
      }
    })

    .filter('bang', function () {
      // mon filtre bang
      return function (input, size = 1) {
        return input + ' ' + '!'.repeat(size)
      }
    })


    .name
