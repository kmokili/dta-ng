import angular from 'angular'
import ngRoute from 'angular-route'
import PizzaModule from './pizza'

class DtaUserDirectiveController {
  constructor ($timeout) {
    console.log('Instanciation du contrôleur')
    $timeout(() => {
      this.onAction({
        $event: {
          color: this.color
        }
      })
    }, 1000)
  }
}

angular.module('dtang', [
  PizzaModule,
  ngRoute
])

  .config(function ($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'pizza-list.html',
        controller: 'PizzaListController',
        controllerAs: '$ctrl'
      })

      .when('/about', {
        template: `
      <h1>ABOUT DTA</h1>
        `
      })

      .when('/pizza/:id', {
        templateUrl: 'pizza-form.html',
        controller: 'PizzaController',
        controllerAs: '$ctrl'
      })

      .otherwise('/')
  })



// .component('pizzaToppings', {
//   bindings: {
//     user: '=',
//     color: '@userColor',
//     onAction: '&'
//   },
//   transclude: true,
//   template: `
//     <h2>
//       <strong ng-transclude></strong>
//       {{ $ctrl.user }}
//     </h2>
//   `,
//   controller: DtaUserDirectiveController
// })

// .directive('twoWords', function () {
//   return {
//     require: 'ngModel',
//     link: function (scope, element, attrs, ngModelCtrl) {
//       ngModelCtrl.$validators.weird = function (value) {
//         return (value || '').split(' ').length === 2
//       }
//     }
//   }
// })

//   .run(function ($rootScope) {
//     $rootScope.user2 = { name: 'Thomas' }
//     // $rootScope.$on('$routeChangeStart', (event, next, current) => {
//     //   console.log('$routeChangeStart', event)
//     // })
//     $rootScope.test = function ({ color }) {
//       console.log('TEST', color)
//     }
//   })




angular.bootstrap(document, ['dtang'])
