//Numbers
const marks = 400// normal declaration
const score = new Number(123)// object type declaration
console.log(marks);
console.log(score.valueOf());//specially casts it as number datatype

//to string-converts number to string
console.log(typeof score.toString());//prints string
console.log(typeof score.toString().length) // strings methods can also be used after conversion

// to fixed - rounds off the values-returns in string
let myAge= 20.55
console.log(myAge.toFixed());// rounds off to 21
console.log(myAge.toFixed(1))// rounds up 2 decimal place t one decimal place and prints 20.6

//to precision - gives precise  value according to number of digits given- also returns as string
console.log(myAge.toPrecision(1)); // gives one digit answer and other remaining in exponitial
console.log(myAge.toPrecision(2));// prints 21 (precise)

//to LocaleString (change to local string)- adds comma(,) to the large number in US standard and also returns as s string
const num= 100000000
console.log(num);
console.log(num.toLocaleString("en-NEP"))//changes into Nepali System


//Math- Object//
console.log(Math.sqrt(4));   // square root 
console.log(Math.abs(-2)); // positive value
console.log(Math.round(3.54));// round off
console.log(Math.ceil(3.54));//top value
console.log(Math.floor(3.54));//bottom value
console.log(Math.max(1,2,3,4,5));//prints max value
console.log(Math.min(1,2,3,4,5));// prints min value
console.log(Math.floor(Math.random()*10 +1));// gives random value between 1 and 0 add 1 and multiply to get whole value excluding 0

// to get a random number between any range
const min = 5
const max = 10
console.log(Math.floor(Math.random()*(max-min+1) + min));
// random to generate a random number betweeen 0 to 1 then multipling by the diff of max and min and adding to avoid 0 and adding min to bring it in range