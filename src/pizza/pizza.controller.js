import { Pizza } from './pizza'
import { toppings } from './toppings'

export class PizzaController {
  constructor () {
    this.pizza = {
      name: ''
    }
    this.toppings = toppings
  }

  savePizza (form) {
    if (form.$invalid) {
      alert('ERROR !')
      return
    }
    console.log('save', this.pizza)
  }
}
