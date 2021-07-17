// const { sum } = require('./app.js');

// test('adds 14 + 9 to equal 23', () => {
//     //inside the test we call our sum function with 2 numbers
//     let total = sum(14, 9);

//     // we expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });


// test('adding 0+0 = 0', ()=> {

//     let total = sum(0,0);
//     expect(total).toBe(0);
// });


test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test('1000 yens should be 6.25 pounds', function(){
    const { fromYenToPound } = require('./app.js')
    const pounds = fromYenToPound(1000)
    const expected = (1000/127.9)*0.8
    expect(pounds).toBe(expected);
})

test('1000 dollars should be 106583.33 yens', function(){
    const { fromDollarToYen} = require('./app.js')
    const pounds = fromDollarToYen(1000)
    const expected = (1000/1.2)*127.9
    expect(pounds).toBe(expected);
})

