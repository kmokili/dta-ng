class PizzaFormComponentController {

  addToppingDUPIZZACONTROLLER ({ topping }) {
    this.pizza.addTopping(topping)
  }

  savePizza (form) {
    if (form.$invalid) return
    this.onSave({
      $event: { pizza: this.pizza }
    })
  }
}

export const PizzaFormComponent = {
  bindings: {
    pizza: '<',
    toppings: '<',
    onSave: '&'
  },
  templateUrl: 'pizza-form.html',
  controller: PizzaFormComponentController
}
