export class PizzaController {
  constructor (PizzaService, $routeParams, $location) {
    this.PizzaService = PizzaService
    this.$location = $location

    this.PizzaService.getPizza($routeParams.id)
      .then(pizza => {
        this.pizza = pizza
      })

    this.PizzaService.getToppings()
      .then(toppings => {
        this.toppings = toppings
      })
  }

  addToppingDUPIZZACONTROLLER ({ topping }) {
    this.pizza.addTopping(topping)
  }

  delToppingDUPIZZACONTROLLER ({ topping }) {
    this.pizza.delTopping(topping)
  }

  savePizza ({ pizza }) {
    this.PizzaService.savePizza(pizza)
      .then(() => {
        this.$location.path('/')
      })
  }
}

PizzaController.$inject = ['PizzaService', '$routeParams', '$location']
