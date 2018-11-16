const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      let res = utils.add(33, 11);
      expect(res).toBe(44).toBeA('number');
    });
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    let res = utils.square(2);
    expect(res).toBe(4).toBeA('number');
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(3, (squ) => {
      expect(squ).toBe(9).toBeA('number');
      done();
    });
  });

  it('should set firstName and lastName', () => {
    let user = {location: 'Japan', age: 25};
    let res = utils.setName(user, 'sola reenlo');
    expect(res).toInclude({
      firstName: 'sola',
      lastName: 'reenlo'
    });
  });
});


// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'solareenlo'}).toEqual({name: 'solareenlo'});
//   // expect({name: 'Solareenlo'}).toNotEqual({name: 'solareenlo'});
//   // expect([2, 3, 4]).toInclude(2);
//   // expect([2, 3, 4]).toExclude(1);
//   expect({
//     name: 'solareenlo',
//     age: 25,
//     location: 'Japan'
//   }).toInclude({
//     age: 25
//   });
// });
