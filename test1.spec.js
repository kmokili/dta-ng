const describe = window.describe
const it = window.it
const expect = window.expect

describe('mon 1er test', function () {
  it('add 3,2 === 5', function () {
    var res = add(3, 2)
    expect(res).toEqual(5)
  })
})
