import angular from 'angular'

import { DtaDragDropModule } from '../dta-drag-drop'

import { PizzaListController } from './pizza-list.controller'
import { PizzaController } from './pizza.controller'
import { pizzaToppingsFilter } from './pizza-toppings.filter'
import { PizzaService } from './pizza.service'
import { PizzaToppingsComponent } from './pizzaToppings.component'

export default

angular.module('dtang.pizza', [
  DtaDragDropModule
])

  .controller('PizzaListController', PizzaListController)
  .controller('PizzaController', PizzaController)

  .filter('pizzaToppings', pizzaToppingsFilter)

  .service('PizzaService', PizzaService)

  .component('pizzaToppings', PizzaToppingsComponent)

  .name
