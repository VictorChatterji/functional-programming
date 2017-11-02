(function() {

    'use strict';
    const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const isEven = x => x % 2 === 0;
    const myFilter = myArray.filter(isEven);

    console.log(myFilter);

})();