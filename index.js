// 1-6 numbwe randomly given
function getRandon(min,max){
    return Math.floor(Math.random()*(max-min +1))+min;
}
console.log(getRandon(1,6));

//  name alphabetically organice
const students=["Sumit","Saad","Daiyan","Akash"]
console.log(students.sort());
console.log(students);

// roll number organised
const rollNumber=[3,5,7,1,2,4,8,9,12,76,87,34,56,98,32,54,56,87,68,98]
 const roll=rollNumber.sort(function(a,b){
    return a-b;
 });
 console.log(roll);
 console.log(rollNumber);

//  leap year probelm

function isLeapYear(year){
    if((year%400===0)||((year%4===0) &&(year%100!==0))){
console.log(`${year} is a leap year`)
    }
    else{
        console.log(`${year} is not a leap year`)
    }
}
isLeapYear(2026);

// count vowles
const vowles=["a","e","i","o","u","A","I","E","O","U"];
function countVowles(sentence){
let count=0;
const lettres=Array.from(sentence);
lettres.forEach(function(value){
    if(vowles.includes(value)){
        count++;
    }
});
return count;
}
console.log(countVowles("I Love Bangladesh"));

// duplicate number ber korta hba

const numbers=[1,3,2,4,6,5,7,9,8,6,5,4,3,2,8,90,5,0,90,60,40]
const duplicates=numbers.filter(function(value,index,array){
return array.indexOf(value)!==index
});
console.log(duplicates);

// unice number
const numbers1=[1,3,2,4,6,5,7,9,8,6,5,4,3,2,8,90,5,0,90,60,40]
const uneic=numbers.filter(function(value,index,array){
return array.indexOf(value)===index
});
console.log(uneic);

// output only number

const l=[1,2,'a','b'];
const numbers3=l.filter(function(value){
    return typeof value==="number";
});
console.log(numbers3);

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
    str=str.toLowerCase();
    for(let i=0; i<str.length;i++){
for(let j=i+1;j<str.length;j++){
    if(str[i]===str[j]){
        return false
    }
}
    }
    return true
}
isIsogram("isogram")



// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

function countBits(n){
    var result=n.toString(2).match(/1/g);
    if(result){
        return result.length;
    }
    return 0;
}
console.log(countBits(2));


// cradite card mask code last 4 degite

function maskify(cc){
    let masked='';
    let lastFour=cc.substr(-4);
    for(var i=0; i<cc.length -4;i++){
        masked +="#"
    }
    return console.log(masked + lastFour);
}

maskify("RsMahmud");


// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumToSmallNumber(allNumbers){
var ordered=allNumbers.sort(function(a,b){
    return a-b;
})
var result=0;
for(i=0;i<ordered.length;i++){
    if(i==0){
        result+=ordered[0];
    }
    if(i==1){
        result+=ordered[1];
    }
}
return console.log(result);
}
sumToSmallNumber([19, 5, 42, 2, 77]);


// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?


function nbYear(p,percent,aug,q){
    let i=0;
    for(i;p<q;i++){
        p=p*(1+percent/100)+aug;
       
    }
    return i;
}
console.log(nbYear(1000,2,50,1200));


// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 


function multiples(n){
    let sum=0;
    for(let i=0;i<n;i++){
        if((i%3==0)||(i%5==0)){
            sum+=i;
        }
    }
    return console.log(sum);
}
multiples(10);


// redian to degree convart

function radianToDegree(radians){
    const pi=Math.PI;
    const degress=radians*(180/pi);
    return console.log(degress);

}
radianToDegree(.7)

// chake the js file name true or false

function isJavaScriptFine(filename){
   const extension=filename.split('.').pop();
   if (extension==="js"){
    return true;
   }else{
    return false;
   }
}
const result=isJavaScriptFine ('rs.text')
console.log(result);


// calcutate the oil price total

 function oilPrice(disel,petrol,octen){
    const diselPrice=114;
    const petrolrice=130;
    const octenPrice=135;
    const discelTotalPrice=disel*diselPrice;
    const petrolTotalPrice=petrol*petrolrice;
    const octenTotalPeice=octen*octenPrice;
    let totalPrice=discelTotalPrice+petrolTotalPrice+octenTotalPeice;
    console.log(totalPrice);
    return totalPrice;
 }
 oilPrice(4,2,3);


// public bus transport cost

 function publicBusFare(public){
    const busPuple=50;
    const micribusPuple=11;
if(public>50){
    const remaingBusPeople=public % busPuple;
    const publicBus=remaingBusPeople % micribusPuple;
    const totalBusFare=publicBus*250;
   return totalBusFare;
}
else if(public<50){
    const publicBus=public % micribusPuple;
    const totalBusFare=250*publicBus;
  return  totalBusFare;
}
else{
    const totalBusFare=250*public;
    return totalBusFare;
}
 }
 const totalFee= publicBusFare(2);
 console.log(totalFee);


//  find your best friend

 const friend1={name:"Tom",friend:"Rock"}
 const friend2={name:"Rock",friend:"Tom"}
 function isBestFriend(friend1,friend2){
if((friend1.name===friend2.friend)&&(friend1.friend===friend2.name)){
 return true;
}
else{
    return false
}
 }
const bestFr= isBestFriend(friend1,friend2);
console.log(bestFr);
 
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.


String.prototype.toJadenCase = function () {
    var words = this.split(' ');
  
    for(var i = 0, wordsLen = words.length; i < wordsLen; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  
    return words.join(' ');
  };


//   Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.


//my example
function descendingOrder(n){
    var digits = (""+n).split("").sort(function(a, b){return b-a});
    digits = digits.join("");
    return console.log( digits);
  }
  descendingOrder(23532);

//   Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

function uniqueInOrder(it){
    const result=[];
    for(let i=0;i<it.length;i++){
        if(it[i]!==it[i+1]){
            result.push(it[i])
        }
    }
    return console.log(result);
}
uniqueInOrder('ABCDEFGHIJKLM');



// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).


function narcissistic(value){
    const intergerSet=value.toString().split('').map(Number);
    const pow=intergerSet.length;
    const sum=intergerSet.reduce((total,item)=>total+Math.pow(item,pow),0);
 return sum ==value   
}

console.log(narcissistic(153));



// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

function squarDigits(num){
    let number=num.toString();
    let arr =number.split('');
    let squareArr=[];

   for(let i=0; i<arr.length; i++){
   let int=parseInt(arr[i]);
 let result =Math.pow(int,2);
   squareArr.push(result);
   }
   return Number(squareArr.join(''));
}
console.log(squarDigits(123));