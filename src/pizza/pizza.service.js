import { Pizza } from './pizza'

var pizzas = [
  new Pizza({ name: 'un', status: 0, toppings: ['eggs', 'mushrooms'] }),
  new Pizza({ name: 'deux', status: 0, toppings: [] }),
  new Pizza({ name: 'trois', status: 1, toppings: ['eggs', 'eggs', 'mushrooms'] }),
  new Pizza({ name: 'quatre', status: 0 }),
  new Pizza({ name: 'cinq', status: 1 })
]

export class PizzaService {
  constructor ($timeout) {
    this.$timeout = $timeout
  }

  getPizzas () {
    return this.$timeout(500)
      .then(() => pizzas)
  }

  addPizza (pizza) {
    var x = this.$timeout(500)
    this.$timeout.cancel(x)
    return x.then(() => {
      console.log('ADD PIZZA')
      pizzas.push(pizza)
      return pizzas
    })
  }
}

PizzaService.$inject = ['$timeout']
