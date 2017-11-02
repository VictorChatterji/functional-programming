(function() {

    'use strict';
    const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const double = x => x * 2;
    const myMap = myArray.map(double);

    console.log(myMap);

})();