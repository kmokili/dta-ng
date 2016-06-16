class PizzaToppingsComponentController {
  $onInit () {
    console.log(this.allToppings)
  }
  $onChanges (changes) {
    console.log(changes)
  }
}

export const PizzaToppingsComponent = {
  bindings: {
    toppings: '<',
    allToppings: '<'
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
          <li ng-repeat="(available, value) in $ctrl.allToppings track by $index">{{ available }}</li>
        </ul>
      </div>
    </div>
  `
}
