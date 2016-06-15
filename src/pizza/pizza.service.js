import { Pizza } from './pizza'

export function PizzaService ($timeout) {
      // privé
  var pizzas = [
    new Pizza({ name: 'un', status: 0, toppings: ['eggs', 'mushrooms'] }),
    new Pizza({ name: 'deux', status: 0, toppings: [] }),
    new Pizza({ name: 'trois', status: 1, toppings: ['eggs', 'eggs', 'mushrooms'] }),
    new Pizza({ name: 'quatre', status: 0 }),
    new Pizza({ name: 'cinq', status: 1 })
  ]

  return {
    getPizzas () {
      return $timeout(2000)
        .then(() => pizzas)
    }
  }
}
