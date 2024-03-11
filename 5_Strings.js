console.log("Samir " + 50);//old methods avoid
 
//String interpolation - use this method to concatinate
const name="Samir"
const age= 20
console.log(`hello my name is ${name} and I am ${age} years old.`);//use backtick dollar sign and curly braces

// string declaration as a object
const MyName= new String('samir')
console.log(MyName.valueOf());// to print the value of the string object
console.log(MyName.__proto__);// shows the object
console.log(MyName.length);//length 
console.log(MyName.toUpperCase());// makes it uppercase but doesnt change original string (pass by value) 
console.log(MyName.indexOf("s"));//which index it lies in

//substring-divides the string into small parts
const newStr = MyName.substring(0,2)//start point and endpoint, endpoint is not included
console.log(newStr);

//slice- same as substring but negative value can also be given
const newstr2= MyName.slice(-4,4)// same as substring but accepts negative value and reverses them
console.log(newstr2);

//trim- trims the whitespaces trim left or right can also be used
const Username="    samir     "
console.log(Username);
console.log(Username.trim())// trims the whitespace

//replace- replaces a value with another value in a string
const url="https://samirKhanal.com/amir%20khanal"//%20 mostly represents white space which is not represented in url
console.log(url)
console.log(url.replace("%20", "__"));//replaces %20 with __

//includes- to check whether the string includes the given value
console.log(url.includes("samir"));//returns boolean

//split - to split the string and store it in array
const value="Hi I am Samir Khanal"
let arrOfIntro = value.split(" ")
console.log(arrOfIntro[0]);//prints hi as the sring are splited into arrays by white spaces

const value2="Samir-Khanal and i am a coder"
let arrOfName=value2.split("-")
console.log(arrOfName[1]);//prints Khanal and i am a coder as it is splitted by "-"

