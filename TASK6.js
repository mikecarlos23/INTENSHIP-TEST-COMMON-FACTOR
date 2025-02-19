function createCounter(){
    var count=0;
    setInterval(function(){
        count++;
        console.log(count);
    },5000)
}
console.log(count)
createCounter();

setTimeout(function(){
    console.log(count);
},5000)


//1. count is not defined


//2.
//The count variable is declared inside createCounter() using var, making it local to the function.
//console.log(count); is outside the function, where count is not defined, causing a ReferenceError.
// setTimeout Issue (count is not accessible)
//setTimeout(function(){
    //console.log(count);
//}, 5000);
//Similar to the first issue, count is not defined globally.
//The setTimeout callback runs after 5 seconds, but it has no access to count since it's declared inside createCounter().

3.
//fixed code

function createCounter(){
    var count = 0;
    setInterval(function(){
        count++;
        console.log(count);
    }, 5000);
    
    return function() { // Exposing count safely
        return count;
    };
}

const getCount = createCounter();

setTimeout(function(){
    console.log(getCount()); // Properly accessing count
}, 5000);
