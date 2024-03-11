"use strict" // treat all js code as new version code of js if not written it becomes automatically 

// alert(4+5); can be used in browser but not in node

console.log(5+5);// add semicolon if you use 2 syntax at a single line but avoid mostly

//datatypes
let name="samir"//string
let age=15//number
let loogedin=true //boolean
let state=null // standalone datatype but is is defined
let house= "" // undefined value 
// symbol = unique datatype mostly used in react
let id = Symbol('123')
let id2 = Symbol('123')
console.log("Symbol");
console.log(id==id2);//false
//object

//bigint
const Bignum = 2432423423423434n // n for bigint useless mostly

console.log(typeof null);// shows it is object  a error from javascript

//primitive: number boolean string null undeifined symbol bigint 
//reference: arrays objects functions
// js is dyanmically type so dont need to write the type of datatype while intitalizing

/* return types
number=number
boolean =boolean
null= object-error by js
function=function
object=object
symbol=symbol
bigint=bigint
undefined=undefined*/
