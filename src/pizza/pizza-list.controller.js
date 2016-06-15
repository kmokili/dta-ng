import { Pizza } from './pizza'

export class PizzaListController {
  constructor ($timeout, PizzaService, $http) {
    $http({
      url: 'http://192.168.99.2:1337/pizzas',
      method: 'GET'
    }).then(response => {
      console.log('response', response.data)
    })


    this.$timeout = $timeout
    this.PizzaService = PizzaService

    // tri par défaut
    this.predicate = 'name'

    console.log('PizzaService', PizzaService)
    PizzaService.getPizzas()
      .then(pizzas => {
        this.pizzas = pizzas
          .map(pizza => {
            pizza._toppings = pizza.toppings2string()
            pizza._toppingsLength = (pizza.toppings || []).length
            return pizza
          })
      })
  }

  addPizza () {
    const pizza = new Pizza({
      name: 'new pizza',
      toppings: ['eggs']
    })
    this.PizzaService.addPizza(pizza)
      .then((pizzas) => {
        this.pizzas = this.initPizzas(pizzas)
      })
      .catch(err => {
        window.alert('Pb lors de l\'ajout de la pizza')
      })
  }

  cookPizza (pizza) {
    return this.$timeout(() => {
      pizza.status = 1
    }, 3000)
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
      return pizza.name.indexOf(this.query) !== -1 ||
        (pizza.toppings || []).join('').indexOf(this.query) !== -1
    }.bind(this)
  }
}

PizzaListController.$inject = ['$timeout', 'PizzaService', '$http']
