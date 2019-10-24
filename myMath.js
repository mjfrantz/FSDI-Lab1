module.exports = {
    
    sayHello: function(name) {
        console.log("Hello " + name);
    },
    smaller : function(num1, num2) {
        if (num1 < num2) return num1;
        return num2;
    },
    greater : function(num1, num2) {
        if (num1 > num2) return num1;
        return num2;
    },
    division : function(num1, by) {
        if (by == 0) {
            console.log("Error, you should not divide by 0");
            return 0;
        }

        var res = num1 / by
        return res.toFixed(2);
    },
    // recieves a number and return true if that number is even
    isEven : function(number) {
        var res = number % 2;
        if(res == 0) return true;

        return false;
    },
    isOdd : function(number) {
        var res = number % 2;
        if(res == 1) return true;

        return false;
    }
};