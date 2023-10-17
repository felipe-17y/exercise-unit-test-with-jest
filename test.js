// import the function sum from the app.js file
const { sum
} = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function() {
    const {
        fromEuroToDollar
    } = require('./app.js')

    
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2;
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

