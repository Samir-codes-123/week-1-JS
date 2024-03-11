//console.log(2>1)
//console.log("02" < 1)//converts the string into number
//console.log(true <2);//same 

console.log(null  > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true
// greater or less (comparision) converts null to 0 but not equal to

console.log(undefined>0);//false
console.log(undefined ==0);//false
console.log(undefined <= 0);//false always

// === strict checks comparision which also includes datatypes
console.log("01"===1);//false
console.log(null===0);//false
console.log(0o1===1);//true 01 is octal so 0o1 using
//avoid all this datatype mismatch clean code prefer
