import angular from 'angular'
import { PizzaListController } from './pizza-list.controller'
import { pizzaToppingsFilter } from './pizza-toppings.filter'
import { PizzaController } from './pizza.controller'
import { Pizza } from './pizza'

export default

  angular.module('dtang.pizza', [])
    .controller('PizzaListController', PizzaListController)
    .controller('PizzaController', PizzaController)

    .filter('bang', function () {
      // mon filtre bang
      return function (input, size = 1) {
        return input + ' ' + '!'.repeat(size)
      }
    })

    .filter('pizzaToppings', pizzaToppingsFilter)

    .factory('PizzaService', function () {
      return {
        getPizzas () {
          return [
            new Pizza({ name: 'un', status: 0, toppings: ['eggs', 'mushrooms'] }),
            new Pizza({ name: 'deux', status: 0, toppings: [] }),
            new Pizza({ name: 'trois', status: 1, toppings: ['eggs', 'eggs', 'mushrooms'] }),
            new Pizza({ name: 'quatre', status: 0 }),
            new Pizza({ name: 'cinq', status: 1 })
          ]
        }
      }
    })

    .name
