var myMath = require('./myMath');

function init(){
    console.log("mike");

    myMath.sayHello("Mike");

    
    var res = myMath.smaller(2, 9);
    console.log(res);

    var res2 = myMath.smaller(10, 35);
    console.log(res2);

    var div1 = myMath.division(5, 10);
    console.log(div1);

    var div2 = myMath.division(10, 0);
    console.log(div2);

    var res3 = myMath.greater(4, 7);
    console.log(res3);

    var isEven = myMath.isEven(50)
    console.log(isEven);

    var isOdd = myMath.isOdd(55)
    console.log(isOdd);
}

init();