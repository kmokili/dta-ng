import angular from 'angular'
import { PizzaListController } from './pizza-list.controller'
import { pizzaToppingsFilter } from './pizza-toppings.filter'
import { PizzaController } from './pizza.controller'
import { PizzaService } from './pizza.service.js'
import { PizzaToppingsComponent } from './pizzaToppings.component'

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
    .component('pizzaToppings', PizzaToppingsComponent)
    .directive('dtaDrag', function () {
      return {
        scope: {
          dtaDrag: '&'
        },
        restrict: 'A',
        link: function (scope, element, attrs) {
          element[0].addEventListener('dragstart', evt => {
            // console.log('drag start')
            scope.$apply(function () {
              scope.dtaDrag()
            })
          }, false)
        }
      }
    })
    .directive('dtaDrop', function () {
      return {
        scope: {
          dtaDrop: '&'
        },
        restrict: 'A',
        link: function (scope, element, attrs) {
          element[0].addEventListener('dragover', evt => {
            evt.preventDefault()
          }, false)
          element[0].addEventListener('drop', evt => {
            evt.preventDefault()
            scope.$apply(function () {
              scope.dtaDrop()
            })
          }, false)
        }
      }
    })
    .name
