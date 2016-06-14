import angular from 'angular'
import { PizzaListController } from './pizza-list.controller'
import { pizzaToppingsFilter } from './pizza-toppings.filter'
import { PizzaController } from './pizza.controller'

export default

  angular.module('dtang.pizza', [])
    .controller('PizzaListController', PizzaListController)
    .controller('PizzaController', PizzaController)

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

    .filter('pizzaToppings', pizzaToppingsFilter)

    .name
