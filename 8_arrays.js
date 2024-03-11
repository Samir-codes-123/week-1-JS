//intialization
const arr= [1,2,3,4,5]
const arr2 = new Array(0,1,2,3,4,5)
console.log(arr2);
console.log(typeof arr2);// object
// js can have array containig all datatypes and are resizable
let MyArr=[1,3,"samir",true,null, " "]
console.log(MyArr[4]);

//methods

//push - adds new elements to arrays at last index
console.log(MyArr);//6
MyArr.push(8)
console.log(MyArr);//7

//pop-removes the last element from array
MyArr.pop()
console.log(MyArr);//6

//unshift- to add new elements in array at first index
MyArr.unshift(0)
console.log(MyArr);//7 adds 0 at 0 index

//shift- removes first element of the array
MyArr.shift()
console.log(MyArr);//removes 0

//includes - to check if it contains required element
console.log(MyArr.includes("samir"));//returns boolean

//join- to join  the array and change it into string
const newArr= new Array("samir", "khanal", "Amir", "khanal")
console.log(newArr);
newArr.join("@")//need to make new array as it returns new array
console.log(typeof newArr);//didnt change
console.log(newArr.join("@"));

//slice- same as substring for array
console.log(newArr.slice(0,1));

//splice-splits the array
console.log(newArr.splice(1,3));// it will not remian in the main variable
console.log(newArr);// print other than the index form 0-2

//concat = to add together any arrays witout making sub array
const Allname = ["amir", "samir", "Anisha", "sonisha"]
const Allsurname = ["khanal", "adhikari", "regmi"]
//Allname.push(Allsurname)// moves the array inside another array becomes 2d returns in same array
console.log(Allname.concat(Allsurname));
console.log(Allname);// need to be stored in new array  so there will not be any change

//spread- same as concat but ca be done to more than one array
const newAll= [...Allname,...Allsurname]// .. removes array and spreads all the elements
console.log(newAll);

//flat= removes subarrrays and make it simple elements in the main array
const MergeArray=[1,2,[2,3,4,4],[12,[45]]]
const NewMergeArray =MergeArray.flat(2)// give depth inside the method if not sure give infinity
console.log(NewMergeArray);

//from- makes any string a array
const myName="samir"
console.log(Array.from(myName));// makes samir array
console.log(Array.from(12345));//doesnt work

//of- make array from variables
const num1=1
const num2= 2
const num3 = 3
console.log(Array.of(num1,num2,num3))

