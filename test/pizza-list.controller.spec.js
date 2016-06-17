describe('Test du ToppingListController', function () {
  var ctrl, _PizzaService, http

  beforeEach(angular.mock.module('dtang'));

  beforeEach(angular.mock.inject(function ($rootScope, $controller, $httpBackend, PizzaService) {
    let scope = $rootScope.$new();
    ctrl = $controller("PizzaListController as ctrl", { $scope: scope })
    http = $httpBackend
    _PizzaService = PizzaService
  }))

  it('should initialize predicate to name', function () {
    expect(ctrl.predicate).toEqual('name')
  })

  it('should load pizzas', function (done) {
    http.when('GET', 'http://localhost:3000/pizzas').respond([
      {
        name: 'test',
        toppings: [
          'un',
          'deux',
          'trois'
        ]
      }
    ])
    ctrl.getPizzas()
        .then(() => {
          console.log(ctrl.pizzas)
        })
        .finally(done)
  })
})
