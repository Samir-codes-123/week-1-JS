let age="45aa"
//console.log(typeof age);
let convert=Number(age)// to convert other dataypes in number can also be done for string using String

//console.log(typeof convert)
//console.log(convert)// gives NaN not a number for string and undefined

age=null
convert=Number(age)
//console.log(typeof convert)
//console.log(convert)// null becomes 0
// for true 1 and false 0

let loggedin=3// only one is true and string also is true
let booleanConvert=Boolean(loggedin)
/*console.log(typeof booleanConvert)
console.log(booleanConvert)*/

let num=45+33// first gets  add then convert to the string
let con= String(num)
console.log(con)

/*console.log(2+2)
console.log(2-2)
console.log(2**4)//power
*/

let str1="samir"
let str2= "khanal"
let str3=str1+str2
console.log(str3)

console.log("1"+2)//12
console.log(2+2+"22")//422
console.log("2"+2+2)// 222 changed into string at first 2 so all becomes string
ans=55
console.log(++ans)//increment and becomes 56
console.log(ans++)//stays 56 
console.log(ans)// becomes 57