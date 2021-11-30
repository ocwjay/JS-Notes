//FOR LOOPS
//You will want to use this when you need to repeat a process a known number of times
//for instance, I know I need to walk 5 steps and then stop. So I will walk exactly 5 steps and then stop.

//for loop structure: for(where loop starts;where loop ends;what loop does);
for(var i = 0; i < 10; i++){
    console.log('hello');
}
//this will print hello 10 times.

for(var x = 5; x <= 8; x += 2){
    console.log(x);
}
//x will start at 5, and iterate until x reaches 8. x goes up by 2 during each iteration. this will print 5, then 7, then the iteration will stop.
//the += is the same as x = x+2

for(var a = 5; a > 0; a--){
    a-=2;
    console.log(a);
}
//this loop decrements until the condition is met

var arr = [2,4,6,8,10];
for(var i = 0; i < arr.length; i += 1){ //+= 1 is the same as++
    console.log(i); //prints the index
    console.log(arr[i]); //prints the array value at that index
}
//this for loop works with an array. i will increment until it reaches the length of the array. It will log what I is, and then it will log the value of the array at the index of I