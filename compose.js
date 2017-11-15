(function() {
    'use strict';
    //Composition: the act of combining the parts and elements to form a whole
    //The act of breaking the complex problem into simple problems
    //what is function composition ?
    //what is object composition ?


    //the math way of seeing the code

    const f = x => x + 1;
    const g = x => x * 2;

    const h = x => {
        const afterG = g(x);
        const afterF = f(afterG);
        return afterF;
    }

    console.log(h(2));
})();