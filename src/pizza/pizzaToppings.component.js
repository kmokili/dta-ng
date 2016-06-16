class PizzaToppingsComponentController {
  constructor ($element) {
    this.$element = $element
  }

  // $onChanges (changes) {
  //   if (changes.allToppings && this.allToppings) {
  //     this.sources = this.$element[0].getElementsByClassName('sourceTopping')
  //     Array.prototype.slice.call(this.sources)
  //       .forEach(li => {
  //         li.addEventListener('dragstart', evt => {
  //           console.log('dragstart', evt)
  //           //this.topping =
  //         })
  //       })
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

  delToppingDUCOMPONENT (topping) {
    this.onDelTopping({
      $event: { topping } // équivalent à $event: { topping: topping }
    })

    // EVALUATION DE $ctrl.addToppingDUPIZZACONTROLLER($event)
    // En remplaçant $event par { topping }
    // DONC Appel de $ctrl.addToppingDUPIZZACONTROLLER({ topping: topping })
  }

  dropped () {
    this.addToppingDUCOMPONENT(this.draggedTopping)
  }
}

export const PizzaToppingsComponent = {
  bindings: {
    toppings: '<',
    allToppings: '<',
    onAddTopping: '&',
    onDelTopping: '&'
  },
  controller: PizzaToppingsComponentController,
  template: `
    <div class="row">
      <div class="col-md-6">
        <h4>Pizza toppings</h4>
        <ul dta-drop="$ctrl.dropped()" class="list-group">
          <li class="list-group-item" ng-repeat="topping in $ctrl.toppings track by $index">
            <a href ng-click="$ctrl.delToppingDUCOMPONENT(topping)">
              {{ topping }}
            </a>
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <h4>Available toppings</h4>
          <ul class="list-group">
            <li draggable dta-drag="$ctrl.draggedTopping = topping" 
              class="sourceTopping list-group-item" 
              ng-repeat="(topping, value) in $ctrl.allToppings track by $index">
              <a href ng-click="$ctrl.addToppingDUCOMPONENT(topping)">
                {{ topping }}
              </a>
            </li>
          </ul>
      </div>
    </div>
  `
}
