function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}

console.log(contains([5, 6, 8], 8));

console.log('---------------------')
function doubleInteger(i) {
    return (i * 2);
  }

z = 2;
console.log(doubleInteger(z));


console.log('---------------------')
function countSheeps(arrayOfSheep) {
    const count = arrayOfSheep.filter(Boolean).length;
        return count;
    }   

a = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true ,
    true, true, true, true ,
    false, false, true, true];

console.log(countSheeps(a));


console.log('---------------------')
function testEven(n) {
    let num = 0;
    if (num % 2 === 0) {
      return true;
    }
    if (num % 2 !== 0) {
        return false;
      }
}

a = 0;
console.log(testEven(a));
console.log('---------------------')


function numberSum(N) {
    var total = 0;
      for(var i = 1; i <= N; i++){
        total += i;
      } return total;
      
  }

  console.log(numberSum(5));
  console.log('---------------------')


  function tripleTrouble(one, two, three) {
    let result = '';
    one = one.split('');
    two = two.split('');
    three = three.split('');
    
    for (let i = 0; i < one.length; i++) {
      result += one[i] + two[i] + three[i];
    }
    return result;
  }

  a = 'aa';
  b = 'bb';
  c = 'cc';

  console.log(tripleTrouble(a, b, c));


  function differenceInAges(ages){
    return [Math.min(...ages), Math.max(...ages), Math.max(...ages)-Math.min(...ages)];
  }

  a = [25, 13, 40, 42, 67, 6];
  console.log(differenceInAges(a));



//   const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     if (distanceToPump === 50 && mpg === 25 && fuelLeft === 2) {
//       return true;
//     } else return false;
//  }

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (distanceToPump / mpg === fuelLeft) {
      return true;
    } else return false;
 }
 

 console.log(zeroFuel(50, 25, 2));
 console.log(zeroFuel(100, 50, 1));


 function enough(cap, on, wait) {
    return Math.max(wait + on - cap);
}

console.log(enough(50, 30, 20));


function hero(bullets, dragons){
    if (bullets / 2 === dragons) {
      return true;
    } else return false;
   }

   console.log(hero(6, 4));

   const areaOrPerimeter = function(l , w) {
    return (l + w) * 2;
  };

  a = 5;
  b = 8;
  console.log(areaOrPerimeter(a, b));


  function digitize(n) {
    //code here
  }

a = '789';
  // 789 = [9, 8, 7]
console.log(a.split('').reverse());


function between(a, b) {
  return [...Array(b - a + 1).keys()].map(i => i + a);
}

a = 1;
b = 4;
console.log(between(a, b));


// isvalyti is stringo skaicius
function stringClean(s) {
  return s.replace(/[0-9]/g, '');
} 

zodis = 'Ke4turi'
console.log(stringClean(zodis));


// isimt pirma ir paskutine raides
function removeChar(str){
  return str.slice(1, -1);
};

zodis = 'Ke4turi'
console.log(removeChar(zodis));

// patikrina ar visos raides yra didziosios, lygybe === netiko :/
String.prototype.isUpperCase = function() {
  if (str == str.toUpperCase()) {
    return true;
  } else false;
}

// padaryti isskirstytu skaiciu array is skaiciaus
function monkeyCount(n) {
  let arr = [];
  for (let i = 1; i <= n; i++)arr.push(i);
  return arr;
  }

const g = 5;

console.log(monkeyCount(g));


// parseInt() -> paverčia string 'skaičių' į skaičių.
function sumMix(x){
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  } return result;
} 

console.log(1%6);


// fraziu array, kai baigiasi toliau vel nuo pradziu array ima.
const phrases = [
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly',
  'not at all',
]
function howMuchILoveYou(n) {
   return phrases[(n - 1) % phrases.length] 
}

console.log(howMuchILoveYou(7));

// padvigubina pradinio array nariu dydzius
function maps(x){
  return x.map(n => 2 * n);
}

console.log(maps([3, 2]));


function sortPoints(a, b) {
  
  return sort(a - b);
}

const xaxa = [5, 3, 1];
xaxa.sort();
console.log(xaxa);


// studentu rezultatai
function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } 
  if (exam > 75 && projects >= 5) {
    return 90;
  }
  if (exam > 50 && projects >= 2) {
    return 75;
  } return 0;
}

console.log(finalGrade(90, 5));


// replace polish letters in string
function correctPolishLetters (string) {
  return string
  .replace(/ą/g, 'a')
  .replace(/ć/g, 'c')
  .replace(/ę/g, 'e')
  .replace(/ł/g, 'l')
  .replace(/ń/g, 'n')
  .replace(/ó/g, 'o')
  .replace(/ś/g, 's')
  .replace(/ź/g, 'z')
  .replace(/ż/g, 'z')
}

vardas1 = 'Jąnekół';
console.log(correctPolishLetters(vardas1));



vardas = 'Antanas';
const pirmasVardas = vardas.split('');
console.log(pirmasVardas);
console.log(vardas.includes('a'));


function strCount(str, letter){  
  //code here
}


function strCount(str, letter){  
  return str.split(letter).length-1
}

console.log(strCount("labasvakaras", "a"));


function strCount2(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter)
    count++;
  } return count;
}

console.log(strCount2('Krantokritikas', 'i'));


function getDrinkByProfession(param) {
  param = param.toLowerCase();
  
  switch(param) {
    case "jabroni": return "Patron Tequila";
    case "school counselor": return "Anything with Alcohol";
    case "programmer": return "Hipster Craft Beer";
    case "bike gang member": return "Moonshine";
    case "politician": return  "Your tax dollars";
    case "rapper": return "Cristal";
    default: return "Beer";
  }
}

const gerimas = 'Rapper'
console.log(getDrinkByProfession(gerimas));


// 348+294+205+191+175+173+134+127+78+71+63+63+55+53+43+17+11+9+5+3+3

// console.log(348+294+205+191+175+173+134+127+78+71+63+63+55+53+43+17+11+9+5+3+3);


let str = 'La b as';
function noSpace1(str) {
    return str.replace(/\s/g, '');
}
console.log(noSpace1(str));

let arr = [2, 5, 9, 4, 1, 7];


function squareOrSquareRoot(array) {

  
  for(i = 0; i < array.length; i++) {
    if(Number.isInteger(Math.sqrt(array[i]))) {
      let rootarray = [];
      root = Math.sqrt(array[i]);
      rootarray.push(root);
      return rootarray;
    } else return 0;
  
  } return rootarray; 
}

console.log(squareOrSquareRoot(arr));

function squareOrSquareRoot(array) {
  return array.map(item => Math.sqrt(item) == Math.sqrt(item).toFixed(0) ? Math.sqrt(item) : item * item); 
}

// function sameCase(a, b){
  
//     if (a == /^[a-z]+$/i.test(a) || b == /^[a-z]+$/i.test(b)) {
//        return -1; 
//     }
//     if (a.toLowerCase() == a && b.toLowerCase() == b) {
//       return 1;
//     }
//     if (a.toUpperCase() == a && b.toUpperCase() == b) {
//       return 1;
//     }
//     if (a.toLowerCase() != a || b.toLowerCase() != b || a.toUpperCase() != a || b.toUpperCase() != b) {
//         return 0;
//     }
// }

// console.log(sameCase('H', ':')); 
// console.log(sameCase('0', '?')); 
// console.log(sameCase('a', 'b'));
// console.log(sameCase('C', 'T'));
// console.log(sameCase('c', 'A'));
// console.log(sameCase('G', 'a'));