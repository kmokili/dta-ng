import { fixtures } from './fixtures.spec'
describe('Test du ToppingListController', function () {
  var ctrl, http

  beforeEach(angular.mock.module('dtang'));

  beforeEach(angular.mock.inject(function ($rootScope, $controller, $httpBackend) {
    let scope = $rootScope.$new();
    ctrl = $controller("PizzaListController as ctrl", { $scope: scope })
    http = $httpBackend
  }))

  it('should initialize predicate to name', function () {
    expect(ctrl.predicate).toEqual('name')
  })

  it('should load pizzas', function (done) {
    http.when('GET', 'http://localhost:3000/pizzas').respond(fixtures.pizzas)

    ctrl.getPizzas()
        .then(() => {
          expect(ctrl.pizzas.length).toEqual(fixtures.pizzas.length)
        })
        .finally(done)

    http.flush()
  })


})

