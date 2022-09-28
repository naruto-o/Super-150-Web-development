let x = NaN;
console.log(x,typeof x);
let isGreater = 4>1;
alert(isGreater);
let y;
console.log(y,typeof y);
alert("this is an alert");
let a = prompt("How old are you",25);
alert('you are  ${a} years old');

let isGreater = confirm('is 4 greater than 1');
alert(isGreater);
document.write('this is a statement');

let a = '31'
console.log(typeof a);
a = Numuber(a);
console.log(typeof a);
a+=1;
alert(a);


let b,c;
b = '31';
c = '32';
// console.log(+a + +b);

function typeConversion(){
    let num = document.getElementById("t1").value;
    console.log(+num,typeof +num);
}

let x,y,z;
x = String(3.14);
console.log(x,typeof x);
y= Boolean("");
 console.log(y,typeof y);


 console.log('this is a string first' + ' this is second stirng');
//  console.log('this is a string first' - ' this is second stirng'); NAN
console.log('6'/2);
let num = 2;
console.log(++num);
console.log(num);
console.log(num++);
console.log(num);

let num2 = 3;
num2 *= 3;
console.log(num2);

let a,b;
a = 3;
b = 3;
c =10;
// alert(a == b  && b==c);
console.log(!!true);

console.log('tree'>'trie');


let age = prompt("enter your age");
if (age>18) {
    alert("you can vote");
} else {
    alert(18-age+" more years until you  get to vote");
}


let i =0;
while(i<3){
    alert[i];
    i++;
}
 
for (let index = 0; index < 3; index++) {
     alert("GOOGLE WANTS TO KNOWYOUR LOCATION")
}
for (let index = 0; index < 3;) {
    let name = prompt("enter your name");
 index++;
 let age = prompt("enter your age");
 index++;
 alert(name+" is your name "+age+" is your age");
 index++;
    
}