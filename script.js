//1. Ways to print in Javascript
//console.log("Hello World");
//alert("Me");
// document.write("Write the document"); //to write on html page---->visible area

//2. Console API
console.log("Hello World"); //can also pass multiple arguments
console.warn("This is a warning"); //in yellow colour on console---->marks warning
console.error("This is an error"); //in red colour on console------->marks error


//3. Javascript Variables
//containers to store dats values----variables
var num=34;
var num2=56;
console.log(num+num2);
console.log(num,num2);

//4. Datatypes in javascript
//a. Strings
var str1="This is a string";
var str2='This is also a string';
console.log(str1);
//Can write in both single and double quotes


//b. Objects
var marks={
    ravi: 34,
    shubham: 67,
    aditi: 89
}
console.log(marks);

//c. Boolean
var a=true;
var b=false;
console.log(a);


//d. numbers
var n=123;
console.log(n);
var t= 345.78;
console.log(t);


//e. undefined
var und=undefined;
console.log(und);
//any variable which is not initialized is undefined by default

//f. null
var tt=null;
console.log(tt);

/*Note---2 types of datatypes
1. Primitive data type : null, number, boolean, undefined, string, symbols
2. Reference data type : arrays and objects
*/

//5. Arrays---collection of similar datatypes
var arr=[1,2,3,4,5];
console.log(arr);
var a=[1,2,4,"Aditi",true];
console.log(a);



//6. Operators
var a=34;
var b=32;


//a. Arithmetic Operators
console.log("The value of a+b is", a+b);
console.log("The value of a-b is", a-b);
console.log("The value of a*b is", a*b);
console.log("The value of a/b is", a/b);

//b. Assignment Operator
var c=123;
var aa=c;
console.log(aa);
c+=2;
c-=4;
console.log(c);

//c. Relational Operators
var x=10;
var y=20;
console.log(x==y);
console.log(x>y);
console.log(y>x);
console.log(x!=y);

//d. Logical Operator
console.log(true && false);
console.log(true || true);


//6. Functions in Javascript
function avg(a,b)
{
    return (a+b)/2;
}
var w=avg(2,4);
console.log(w);

//7. Conditional Statement in Javascript
var age=34;
if(age>8)
{
    console.log("You are not a kid");
}
else
{
    console.log("You are a kid");
}
//if, else if, if else if ladder all are valid


//8. Loops in Javascript
var arr=[1,2,3,4,5];
console.log(arr);
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

arr.forEach(function(element)
{
   console.log(element)
})


