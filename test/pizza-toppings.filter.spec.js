import { Pizza } from '../src/pizza/pizza'
import { fixtures } from './fixtures.spec'

describe('Test du filtre Topping', function () {
    var toppingFilter

    beforeEach(angular.mock.module('dtang'));

    beforeEach(angular.mock.inject(function ($filter) {
        toppingFilter = $filter('pizzaToppings')
    }))

    it('should show toppings string', function () {
        let pizza = new Pizza(fixtures.pizzas[0])
        expect(toppingFilter(pizza)).toEqual("un, deux, trois")
    })

    it('should show toppings with double string', function () {
        let pizza = new Pizza(fixtures.pizzas[1])
        expect(toppingFilter(pizza)).toEqual("un, deux x2")
    })

})
