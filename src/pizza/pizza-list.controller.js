import { Pizza } from './pizza'

export class PizzaListController {
  constructor ($timeout) {
    this.$timeout = $timeout

    this.pizzas = [
      new Pizza({ name: 'un', status: 0, toppings: ['eggs', 'mushrooms'] }),
      new Pizza({ name: 'deux', status: 0, toppings: [] }),
      new Pizza({ name: 'trois', status: 0, toppings: ['eggs', 'eggs', 'mushrooms'] }),
      new Pizza({ name: 'quatre', status: 0 }),
      new Pizza({ name: 'cinq', status: 0 }),
      { name: 'six', status: 0, toppings: ['eggs'] }
    ]
  }

  addPizza () {
    this.pizzas.push({
      name: 'new pizza'
    })
  }

  cookPizza (pizza) {
    return this.$timeout(() => {
      pizza.status = 1
    }, 1000)
  }

  cookPizzas () {
    const pizza = this.pizzas.find(p => p.status === 0)
    if (!pizza) return

    this.cookPizza(pizza)
      .then(this.cookPizzas.bind(this))
  }
}
