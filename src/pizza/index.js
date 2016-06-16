import angular from 'angular'
import { PizzaListController } from './pizza-list.controller'
import { pizzaToppingsFilter } from './pizza-toppings.filter'
import { PizzaController } from './pizza.controller'
import { PizzaService } from './pizza.service.js'
import { Pizza } from './pizza'
import { PizzaComponent } from './pizzaToppings.component'

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
    .service('PizzaService', PizzaService)
    .component('pizzaToppings', PizzaComponent)
    .name
