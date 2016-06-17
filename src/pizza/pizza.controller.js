import { Pizza } from './pizza'

export class PizzaController {
  constructor (PizzaService, $routeParams, $location) {
    this.PizzaService = PizzaService
    this.$location = $location

    if ($routeParams.id) {
      this.PizzaService.getPizza($routeParams.id)
        .then(pizza => {
          this.pizza = pizza
        })
    } else {
      this.pizza = new Pizza({
        name: '',
        toppings: []
      })
    }

    // this.PizzaService.getPizza($routeParams.id)
    //   .then(pizza => {
    //     this.pizza = pizza
    //   })

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
    // var promise
    // if (pizza.id) {
    //   promise = this.PizzaService.savePizza(pizza)
    // } else {
    //   promise = this.PizzaService.addPizza(pizza)
    // }
    // promise.then(() => {
    //   this.$location.path('/')
    // })

    var promise = (pizza.id)
    ? promise = this.PizzaService.savePizza(pizza)
    : promise = this.PizzaService.addPizza(pizza)
    promise.then(() => {
      this.$location.path('/')
    })

    // if (pizza.id) {
    //   this.PizzaService.savePizza(pizza)
    //     .then(() => {
    //       this.$location.path('/')
    //     })
    // } else {
    //   this.PizzaService.addPizza(pizza)
    //     .then(() => {
    //       this.$location.path('/')
    //     })
    // }
  }
}

PizzaController.$inject = ['PizzaService', '$routeParams', '$location']
