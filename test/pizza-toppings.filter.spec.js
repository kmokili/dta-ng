import { Pizza } from '../src/pizza/pizza'

describe("Test du filtre Topping", function () {
    var toppingFilter

    beforeEach(angular.mock.module("dtang"));
    // beforeEach(window.module("dtang"))

    beforeEach(angular.mock.inject(function ($filter) {
    // beforeEach(inject(function ($filter) {
        toppingFilter = $filter('pizzaToppings')
    }))

    it("should show toppings string", function () {
        let pizza = new Pizza({
          name: 'test',
          toppings: [
            'un',
            'deux',
            'trois'
          ]
        })
        expect(toppingFilter(pizza)).toEqual("un, deux, trois")
    })

    it("should show undefined string", function () {
        let pizza = new Pizza({
          name: 'test',
          toppings: [
            'undefined'
          ]
        })
        expect(toppingFilter(pizza)).toEqual("undefined")
    })

    it("should show duplicate toopings this way (toppings x2)", function () {
        let pizza = new Pizza({
          name: 'Eggs and mush',
          toppings: [
            'eggs',
            'eggs',
            'mushrooms'
          ]
        })
        expect(toppingFilter(pizza)).toEqual("eggs x2, mushrooms")
    })
})
