import { Pizza } from './pizza'

export class PizzaListController {
  constructor ($timeout) {
    this.$timeout = $timeout

    // tri par défaut
    this.predicate = 'name'

    this.pizzas = [
      new Pizza({ name: 'un', status: 0, toppings: ['eggs', 'mushrooms'] }),
      new Pizza({ name: 'deux', status: 0, toppings: [] }),
      new Pizza({ name: 'trois', status: 1, toppings: ['eggs', 'eggs', 'mushrooms'] }),
      new Pizza({ name: 'quatre', status: 0 }),
      new Pizza({ name: 'cinq', status: 1 })
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

  keep () {
    return function (pizza) {
      if (!this.query) return true
      return pizza.name.indexOf(this.query) !== -1
        || (pizza.toppings || []).join('').indexOf(this.query) !== -1
    }.bind(this)
  }

  sortPizzas () {
    return function (pizza) {
      if (this.predicate === 'name' || this.predicate === 'status') {
        return pizza[this.predicate]
      }
      if (this.predicate === 'toppings') {
        return (pizza.toppings || []).length
      }
      return 1
    }.bind(this)
  }

}
