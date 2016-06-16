export const PizzaComponent = {
  bindings: {
    toppings: '<list'
  },
  template: `
    <div class="well">
      <h4>toppings</h4>
      <pre>{{ $ctrl.toppings }}</pre>
    </div>
    <div class="well">
      <h4>toppings</h4>
      <ul ng-repeat="topping in $ctrl.toppings" track by $index>
        <li>{{ topping }}</li>
      </ul>
    </div>
  `
}
