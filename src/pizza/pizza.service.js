import { Pizza } from './pizza'

const url = 'http://localhost:3000/pizzas'

export class PizzaService {
  constructor ($timeout, $http) {
    this.$timeout = $timeout
    this.$http = $http
  }

  getPizzas () {
    return this.$http.get(url)
      .then(({data: pizzas}) => pizzas.map(pizzaJson => new Pizza(pizzaJson)))
  }

  getPizza (id) {
    return this.$http.get(url + '/' + id)
      .then(response => response.data)
  }

  savePizza (pizza) {
    return this.$http.put(url + '/' + pizza.id, pizza)
  }

  addPizza (pizza) {
    return this.$http.post(
      url,
      pizza // ou pizza.json() si besoin
    ).then(response => {
      return this.getPizzas()
    })
  }
}

PizzaService.$inject = ['$timeout', '$http']
