console.log("hello world");
//console.log("hey");
///creation of variable
//syntax-> variablekeyword variablename = value
var a=15;

//declaring a variable
var b;
b=30;
console.log(b);

//different types of variable declaration
//var let const

//var
var xyz=35;
xyz=40; //we can reassign a value
var xyz=45; //we can redeclare

//let
let abc=50;
abc=55; //we can reassign a value
//let abc=60; //we cannot redeclare

//const
const studentName='shreedhana';
//studentName='sanjay'; //cannot be reassigned and redeclared
console.log(studentName);

//datatypes
//primitive
///String -> " or"
///boolean -> true or false
///number
///null -> defined but have nothing that is no value
//const vale=null
///undefined ->nothing is defined
//let value;
//console.log(value); //here value is undefined
///float-> decimal values


//non primitive
///arrays
const arr=["any type of primitive data type can be written inside square bracket and multiple primitive datatypes can be written in sinle array"];
///objects
//key:value
const sampleObj = {
    name : "shreedhana",
    education : "m.tech",
    age: "25",
};
console.log(sampleObj);
//accesing object
console.log(sampleObj.age);

///operators-> two different entities or values are compared and given results
//arithmetic operators
//+-*/% ++ --
let val1=90;
let val2=99;

console.log("add",val1+val2);
console.log("sub",val1-val2);
console.log("div",val1/val2);
console.log("mul",val1*val2);
console.log("reminder",val1%val2);
console.log("before inc val1",val1);
val1++
console.log("after inc :",val1);
console.log("before inc val1",val1);
val1--
console.log("after dec :",val1);
console.log("--------------------------------");

console.log("assignment operator");
//val1 = val1+50 can be written as val1+=50; can be used with any arithmetic operators
console.log(val1);
val1 += 50;
console.log(val1);

console.log("comparison operators");
const conval1 = 10;
const conval2 = "10";
console.log("non strict comparison", conval1 == conval2);
console.log("strict comparison", conval1 === conval2);
console.log("not equal", conval1 != conval2);
console.log("not equal comparison", conval1 !== conval2);
console.log("greater than", val1>val2);
console.log("lesser than", val1<val2);
const eqlval1 = 10;
const eqlval2 = 10;
console.log("greater that equal", eqlval1>=eqlval2);


console.log("logical operators");
//&& || !
const task = 80;
const attendence = 75;
const score = 65;

console.log(score>task&&score>attendence);
console.log(score>task||score>attendence);
console.log(!(score>task&&score>attendence));
console.log(!(score>task||score>attendence));

console.log("  ");
console.log("loops");
//for loop
console.log("-----for loop------");
//let i(variable)=0, 0 1 2 3 4 5
//condition i=5
//value will be updated
//day=1->day<=5 (true), day++ = 2
//day=2->day<=5 (true), day++ = 3
//day=3->day<=5 (true), day++ = 4
//day=4->day<=5 (true), day++ = 5
//day=5->day<=5 (true), day++ = 6


//conditions
console.log("-----condition----");
let average=35
let good = 60
let excellence = 90

let youmark=50

if(youmark > excellence){
console.log("you are excellent");
}else {
    console.log("you failed");
}

if (youmark > excellence) {
    console.log("you are excellent");
} else if (youmark > good) {
    console.log("you scored good mark");
} else if (youmark >= average) {
    console.log("you have just passed");
} else {
    console.log("you failed");
}
       
 //switch case
 const day = 6;
 switch(day) {
    case 0:
    console.log("sunday");
    break;
    case 1:
    console.log("monday");
    break;
    case 2:
    console.log("tuesday");
    break;
    case 3:
    console.log("wednesday");
    break;
    case 4:
    console.log("thursday");
    break;
    case 5:
    console.log("friday");
    break;
    case 6:
    console.log("saturday");
    break;
    default:
        console.log("you have not entered a date");
 }

 ///function with return keyword
 ///function functionName (..arguments){
    ///logic of a function
 ///}
///functionName(parameters)


 function add(num1, num2){
    console.log(num1 + num2);
 }
 add(4,6);

 function calculator(type, num1, num2) {
    switch (type) {
        case "add":
            return num1+num2;
        case "sub":
            return num1-num2;
        case "mul":
            return num1*num2;
        default: 
            return "please check your inputs";
    }
 }

 const result = calculator("mul", 20,5);
 console.log(result);