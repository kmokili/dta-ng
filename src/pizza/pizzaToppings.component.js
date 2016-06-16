class PizzaToppingsComponentController {
  // $onChanges (changes) {
  //   if (changes.allToppings && this.allToppings) {
  //     console.log(this.allToppings)
  //   }
  // }

  addToppingDUCOMPONENT (topping) {
    this.onAddTopping({
      $event: { topping } // équivalent à $event: { topping: topping }
    })

    // EVALUATION DE $ctrl.addToppingDUPIZZACONTROLLER($event)
    // En remplaçant $event par { topping }
    // DONC Appel de $ctrl.addToppingDUPIZZACONTROLLER({ topping: topping })
  }
}

export const PizzaToppingsComponent = {
  bindings: {
    toppings: '<',
    allToppings: '<',
    onAddTopping: '&'
  },
  controller: PizzaToppingsComponentController,
  template: `
    <div class="row">
      <div class="col-md-6">
        <h4>toppings</h4>
        <ul>
          <li ng-repeat="topping in $ctrl.toppings track by $index">{{ topping }}</li>
        </ul>
      </div>
      <div class="col-md-6">
        <h4>available toppings</h4>
          <ul>
            <li ng-repeat="(topping, value) in $ctrl.allToppings track by $index">
              <a href ng-click="$ctrl.addToppingDUCOMPONENT(topping)">
                {{ topping }}
              </a>
            </li>
          </ul>
      </div>
    </div>
  `
}
