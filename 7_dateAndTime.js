//dates
let myDate = new Date()
console.log(myDate.toDateString());// makes date readable
console.log(myDate.toLocaleDateString("en-NEP"));// Nepali language
console.log(typeof myDate);//object

let newDate = new Date("2019-01-2")// string so base index is 1
let newDate1= new Date(2019, 0, 1)// array 0 based index so 0 becomes jan
let newDate2= new Date(2019, 0, 0)// dec 31 2018 goes one day back
console.log(newDate1.toDateString());
console.log(newDate2.toDateString());
console.log(newDate.getFullYear());// we can also we get day get full year 


let timeStamp= Date.now()// show the current time in milisecond
console.log(timeStamp);
console.log(newDate.getTime());// turns date to milisecond - easier to compare
console.log(Math.floor(timeStamp/1000));//divide by 1000 to turn into seconds and floor to avoid decimal value


