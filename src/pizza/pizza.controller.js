export class PizzaController {
  constructor (PizzaService, $routeParams, $location) {
    this.PizzaService = PizzaService
    this.$location = $location

    this.PizzaService.getPizza($routeParams.id)
      .then(pizza => {
        this.pizza = pizza
      })
  }

  savePizza (form) {
    if (form.$invalid) return
    this.PizzaService.savePizza(this.pizza)
      .then(() => {
        this.$location.path('/')
      })
  }
}

PizzaController.$inject = ['PizzaService', '$routeParams', '$location']
