import { Pizza } from './pizza'

export class PizzaService {
  constructor ($timeout, $http) {
    this.$timeout = $timeout
    this.$http = $http
  }

  getPizzas () {
    return this.$http.get('http://192.168.99.2:1337/pizzas')
      .then(({data: pizzas}) => pizzas.map(pizzaJson => new Pizza(pizzaJson)))
  }

  addPizza (pizza) {
    return this.$http.post(
      'http://192.168.99.2:1337/pizzas',
      pizza // ou pizza.json() si besoin
    ).then(response => {
      console.log('ici', response)
      return response.data
    })
  }
}

PizzaService.$inject = ['$timeout', '$http']
