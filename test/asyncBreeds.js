const assert = require('chai').assert;
const breedDetailsFromFile = require('../asyncBreeds');

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {

    breedDetailsFromFile('Bombay', (bombay) => { //call back function

      // console.log('Return Value: ', bombay);

      const expectedDesc = 'Return Value: "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver\'s shoulder."';
      assert.equal(expectedDesc, bombay); //compare the expected to the value inside the function - note this value is not available outside of the function because we are not returning it

    }); // breedDetailsFromFile
  }); // it
}); // describe