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

console.log("---------------------");
function doubleInteger(i) {
  return i * 2;
}

z = 2;
console.log(doubleInteger(z));

console.log("---------------------");
function countSheeps(arrayOfSheep) {
  const count = arrayOfSheep.filter(Boolean).length;
  return count;
}

a = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

console.log(countSheeps(a));

console.log("---------------------");
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
console.log("---------------------");

function numberSum(N) {
  var total = 0;
  for (var i = 1; i <= N; i++) {
    total += i;
  }
  return total;
}

console.log(numberSum(5));
console.log("---------------------");

function tripleTrouble(one, two, three) {
  let result = "";
  one = one.split("");
  two = two.split("");
  three = three.split("");

  for (let i = 0; i < one.length; i++) {
    result += one[i] + two[i] + three[i];
  }
  return result;
}

a = "aa";
b = "bb";
c = "cc";

console.log(tripleTrouble(a, b, c));

function differenceInAges(ages) {
  return [
    Math.min(...ages),
    Math.max(...ages),
    Math.max(...ages) - Math.min(...ages),
  ];
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
};

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));

function enough(cap, on, wait) {
  return Math.max(wait + on - cap);
}

console.log(enough(50, 30, 20));

function hero(bullets, dragons) {
  if (bullets / 2 === dragons) {
    return true;
  } else return false;
}

console.log(hero(6, 4));

const areaOrPerimeter = function (l, w) {
  return (l + w) * 2;
};

a = 5;
b = 8;
console.log(areaOrPerimeter(a, b));

function digitize(n) {
  //code here
}

a = "789";
// 789 = [9, 8, 7]
console.log(a.split("").reverse());

function between(a, b) {
  return [...Array(b - a + 1).keys()].map((i) => i + a);
}

a = 1;
b = 4;
console.log(between(a, b));

// isvalyti is stringo skaicius
function stringClean(s) {
  return s.replace(/[0-9]/g, "");
}

zodis = "Ke4turi";
console.log(stringClean(zodis));

// isimt pirma ir paskutine raides
function removeChar(str) {
  return str.slice(1, -1);
}

zodis = "Ke4turi";
console.log(removeChar(zodis));

// patikrina ar visos raides yra didziosios, lygybe === netiko :/
String.prototype.isUpperCase = function () {
  if (str == str.toUpperCase()) {
    return true;
  } else false;
};

// padaryti isskirstytu skaiciu array is skaiciaus
function monkeyCount(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  return arr;
}

const g = 5;

console.log(monkeyCount(g));

// parseInt() -> paverčia string 'skaičių' į skaičių.
function sumMix(x) {
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}

console.log(1 % 6);

// fraziu array, kai baigiasi toliau vel nuo pradziu array ima.
const phrases = [
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly",
  "not at all",
];
function howMuchILoveYou(n) {
  return phrases[(n - 1) % phrases.length];
}

console.log(howMuchILoveYou(7));

// padvigubina pradinio array nariu dydzius
function maps(x) {
  return x.map((n) => 2 * n);
}

console.log(maps([3, 2]));

function sortPoints(a, b) {
  return sort(a - b);
}

const xaxa = [5, 3, 1];
xaxa.sort();
console.log(xaxa);

// studentu rezultatai
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  }
  if (exam > 75 && projects >= 5) {
    return 90;
  }
  if (exam > 50 && projects >= 2) {
    return 75;
  }
  return 0;
}

console.log(finalGrade(90, 5));

// replace polish letters in string
function correctPolishLetters(string) {
  return string
    .replace(/ą/g, "a")
    .replace(/ć/g, "c")
    .replace(/ę/g, "e")
    .replace(/ł/g, "l")
    .replace(/ń/g, "n")
    .replace(/ó/g, "o")
    .replace(/ś/g, "s")
    .replace(/ź/g, "z")
    .replace(/ż/g, "z");
}

vardas1 = "Jąnekół";
console.log(correctPolishLetters(vardas1));

vardas = "Antanas";
const pirmasVardas = vardas.split("");
console.log(pirmasVardas);
console.log(vardas.includes("a"));

function strCount(str, letter) {
  //code here
}

function strCount(str, letter) {
  return str.split(letter).length - 1;
}

console.log(strCount("labasvakaras", "a"));

function strCount2(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) count++;
  }
  return count;
}

console.log(strCount2("Krantokritikas", "i"));

function getDrinkByProfession(param) {
  param = param.toLowerCase();

  switch (param) {
    case "jabroni":
      return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
    default:
      return "Beer";
  }
}

const gerimas = "Rapper";
console.log(getDrinkByProfession(gerimas));

// 348+294+205+191+175+173+134+127+78+71+63+63+55+53+43+17+11+9+5+3+3

// console.log(348+294+205+191+175+173+134+127+78+71+63+63+55+53+43+17+11+9+5+3+3);

let str = "La b as";
function noSpace1(str) {
  return str.replace(/\s/g, "");
}
console.log(noSpace1(str));

let arr = [2, 5, 9, 4, 1, 7];

function squareOrSquareRoot(array) {
  for (i = 0; i < array.length; i++) {
    if (Number.isInteger(Math.sqrt(array[i]))) {
      let rootarray = [];
      root = Math.sqrt(array[i]);
      rootarray.push(root);
      return rootarray;
    } else return 0;
  }
  return rootarray;
}

console.log(squareOrSquareRoot(arr));

function squareOrSquareRoot(array) {
  return array.map((item) =>
    Math.sqrt(item) == Math.sqrt(item).toFixed(0)
      ? Math.sqrt(item)
      : item * item
  );
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

// Persistent Bugger 6kyu

function persistence(num) {
  let count = 0;
  while (num.toString().length > 1) {
    num = num
      .toString()
      .split("")
      .reduce((acc, el) => (acc *= +el), 1);
    count++;
  }
  return count;
}

console.log(persistence(999));

// Get the Middle Character 7kyu

function getMiddle(s) {
  if (s.length % 2 === 0) {
    return s.substring(s.length / 2 - 1, s.length / 2 + 1);
  } else return s.substring(s.length / 2 - 0.5, s.length / 2 + 0.5);
}

console.log(getMiddle("Arturas"));
console.log(getMiddle("ArturasK"));

// How much water do I need? 8kyu

function howMuchWater(water, load, clothes) {
  if (clothes > load * 2) {
    return `Too much clothes`;
  }
  if (clothes < load) {
    return `Not enough clothes`;
  } else return water * (1.1 ** (clothes - load)).toFixed(2);
}

console.log(howMuchWater(5, 10, 21));
console.log(howMuchWater(5, 12, 8));
console.log(howMuchWater(10, 10, 20));
console.log(howMuchWater(50, 15, 29));

// Help the Fruit Guy 7kyu

// function removeRotten(bagOfFruits) {
//   if (!bagOfFruits) {
//     return [];
//   } else
//     for (let i = 0; i < bagOfFruits.length - 1; i++) {
//       if (bagOfFruits[i].includes('rotten')) {
//         bagOfFruits[i] = bagOfFruits[i].slice(6).toLowerCase();
//         return bagOfFruits;
//       }
//     } return bagOfFruits;
//   }

function removeRotten(bag) {
  return bag ? bag.map((x) => x.toLowerCase().replace(/rotten/gi, "")) : [];
}

console.log(removeRotten(["apple", "orange", "rottenBanana", "kiwi"]));
console.log(
  removeRotten(["rottenApple", "rottenOrange", "rottenBanana", "rottenKiwi"])
);
console.log(removeRotten(["apple", "banana", "kiwi", "melone", "orange"]));
console.log(removeRotten([]));

// 2022-08-31
// DATA
let juliaData1 = [3, 5, 2, 12, 7];
let juliaData2 = [9, 16, 6, 8, 3];
let kateData1 = [4, 1, 15, 8, 2];
let kateData2 = [10, 5, 6, 1, 4];
let dogAges1 = [5, 2, 4, 1, 15, 8, 3];
let dogAges2 = [16, 6, 10, 5, 6, 1, 4];

function checkDogs(dogsJulia, dogsKate) {
  dogsJulia.slice(1, 3).forEach((year, number) => {
    if (year < 3) {
      console.log(`Julia's dog number ${number + 1} is a puppy.`);
    } else console.log(`Julia's dog number ${number + 1} is an adult.`);
  });
  dogsKate.forEach((year, number) => {
    if (year < 3) {
      console.log(`Kate's dog number ${number + 1} is a puppy.`);
    } else console.log(`Kate's dog number ${number + 1} is an adult.`);
  });
}

function calcAverageHumanAge(ages) {
  ages.forEach((item) => {
    if (item <= 2) {
      console.log(`${2 * item}`);
    } else console.log(`${16 + item * 4}`);
  });
}

const calcAverageHumanAge1 = (ages) =>
  ages.forEach((item) =>
    item <= 2 ? console.log(`${2 * item}`) : console.log(`${16 + item * 4}`)
  );

// TEST
console.log("--------checkDogs-------");
checkDogs(juliaData1, kateData1);
checkDogs(juliaData2, kateData2);

console.log("--------calcAverageHumanAge--------");
calcAverageHumanAge(dogAges1);
calcAverageHumanAge(dogAges2);
calcAverageHumanAge1(dogAges2);

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

let recommendedFood;
let sarahsDog;
let ownersEatTooMuch = [];
let ownersEatTooLittle = [];
let recFood;

for (let i = 0; i < dogs.length; i++) {
  recommendedFood = (dogs[i].weight ** 0.75 * 28).toFixed(2);
  sarahsDog = dogs[i].owners.includes("Sarah")
    ? dogs[i].curFood < recommendedFood
      ? `${dogs[i].curFood} is not enough food`
      : `${dogs[i].curFood} is enough food`
    : "Not this dog";

  if (dogs[i].curFood < recommendedFood) {
    ownersEatTooLittle.push(dogs[i]);
  } else ownersEatTooMuch.push(dogs[i]);

  console.log(`Dog's recommended food: ${recommendedFood}`);
  console.log(sarahsDog);
  console.log(`${dogs[i].owners}`);
}

console.log(ownersEatTooLittle);
console.log(ownersEatTooMuch);

ownersEatTooLittleLog = `${ownersEatTooLittle[0].owners[0]} and ${ownersEatTooLittle[0].owners[1]} and ${ownersEatTooLittle[1].owners}'s dogs eat too little.`;

ownersEatTooMuchLog = `${ownersEatTooMuch[0].owners}'s and ${ownersEatTooMuch[0].owners[0]} and ${ownersEatTooMuch[1].owners[1]} dogs eat too much!`;

console.log(ownersEatTooLittleLog);
console.log(ownersEatTooMuchLog);

// dogs.map((dog) => dog.sort((a, b) => a - b));
console.log(recommendedFood);
console.log(dogs.sort((a, b) => a.curFood - b.curFood));

console.log("------------------");

// const ar = [2, 11, 5, 49];
// const result = ar.reduce((a, n)=> a + n, 10);

// console.log(result)

// function game() {
//   let scrole = 0;
//   function play() {
//     score++;
//     return score;
//   }
//   return play;
// }

// const start = game();
// const gameOne = start();
// const gameTwo = start();

// const namespace = 'lt';
// const AVAILABLE = {
//   MAIN: 'en',
//   OTHER: 'lt'
// };

// const url = namespace === AVAILABLE ? '/' : `/${namespace}`;

// console.log(url);

// function kazkas(inp) {
//   let newString = inp.toString();
//   console.log(newString.length);
//   // console.log(newString.split(' '));

//   newString.forEach(i => {
//     if(i !== 0) {
//       newString.replace(newString[i], ',');
//     }
//   });

// let replacedString;
// for (let i = 0; i < newString.length; i++) {
//   if(newString[i] > 0) {
//     console.log(newString[i])
//     replacedString = newString.replace(newString[i], ',');
//     console.log(replacedString)
//   } else continue;
// } console.log(replacedString)

// arr = arr.filter(i => i !== '');
// console.log(arr);
// console.log(arr.sort().at(-1).length);
// }

// kazkas(30100010010002000000);

console.log("--------------------");

function solution(S, K) {
  let newDay;
  let dayNo;
  let daysCount;

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  for (let i = 0; i < days.length; i++) {
    if (days[i] === S) {
      dayNo = i + 1;
    } else continue;
  }
  console.log(`Dienos eil. nr: ${dayNo}`);

  daysCount = dayNo + K;
  console.log(`Naujos dienos nr: ${daysCount}`);

  if (daysCount % 7 === 0) {
    newDay = S;
    console.log(`Nauja diena: ${newDay}`);
  } else if (daysCount > 7 && daysCount / 7 !== 0) {
    daysCount = daysCount % 7;
    console.log(`Nauja diena: ${(newDay = days[daysCount - 1])}`);
  } else if (daysCount <= 7) {
    newDay = days[daysCount - 1];
    console.log(`Nauja diena: ${newDay}`);
  }
}

solution("Tue", 4);
solution("Mon", 2);
solution("Mon", 24);
solution("Thu", 12);
solution("Fri", 1);
solution("Fri", 0);

console.log("--------------------");

function solution2(A) {
  let cond1;
  let cond2;

  for (let i = 0; i < A.length; i++) {
    if (
      A.filter((number) => A[i] === number).length < 2 ||
      A.filter((number) => A[i] === number).length > 2
    ) {
      cond1 = false;
      // console.log(cond1);
    }
    if (A.filter((number) => A[i] === number).length === 2) {
      cond2 = true;
      // console.log(A.filter(number => A[i] === number));
      // console.log(cond2);
    }
  }
  if (cond1 === false || (cond1 === false && cond2 === true)) {
    console.log(`Atsakymas: ${false}`);
  }
  if (cond2 === true && cond1 !== false) {
    console.log(`Atsakymas: ${true}`);
  }
}

solution2([2, 2, 1, 1, 6, 6, 7]);
solution2([2, 2, 1, 1]);
solution2([4, 2, 1, 1, 3]);
solution2([4, 4]);

console.log("--------------------");

function solution3(A, K) {
  let n = A.length;
  for (let i = 0; i < n - 1; i++) {
    if (A[i] + 1 < A[i + 1]) return false;
  }
  if (A[0] !== 1 && A[n - 1] !== K) {
    return false;
  } else return true;
}

console.log(solution3([1, 1, 2, 2, 3, 4], 3));
console.log(solution3([1, 1, 2, 2, 3, 4], 1));
console.log(solution3([1, 1, 2, 2, 4], 3));
console.log(solution3([1, 1, 2, 2, 4], 4));
console.log(solution3([1, 1, 2, 2, 3], 4));

console.log("--------------------");
// DONE

// reverse = function (array) {
//   return array.reverse();
// };

reverse = function (array) {
  let reversedArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArr.push(array[i]);
  }
  return reversedArr;
};

const ar = [1, 2, 3];
const ar2 = [1, null, 14, "two"];
const ar3 = [43, 991, 720, 307, 625];
const ar4 = [43, 991, 720, , 625];
console.log(reverse(ar));
console.log(reverse(ar2));
console.log(reverse(ar3));
console.log(reverse(ar4));

console.log("--------------------");
// NOT DONE
function upArray(arr) {
  let newArr;
  let sum;
  let len = arr.length - 1;
  let myFunc = (num) => Number(num);
  console.log(arr);

  if (arr.length === 0) return null;

  for (let i = 0; i < len; i++) {
    if (arr[0] === 0) {
      sum = Number(arr.join("")) + 1;
      if (sum < 10) {
        newArr = Array.from(String(sum), myFunc);
        newArr.unshift(0);
        return newArr;
      } else continue;
    }
    if (arr[len] === 0) {
      arr.pop();
      sum = arr.join("") + 1;
      newArr = Array.from(sum, myFunc);
      return newArr;
    }
    if (arr[i] < 0) {
      return console.log(arr[i]);
    } else continue;
  }

  sum = Number(arr.join("")) + 1;
  newArr = Array.from(String(sum), myFunc);
  return newArr;
}

const arr1 = [1, 2, 1];
const arr2 = [1, 2, 9];
const arr3 = [1, 2, 9, 5, 6];
const arr4 = [0, 7];
const arr5 = [0, 9];
const arr6 = [0, 2];
const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const arr8 = [1, -9];
const arr9 = [1, 10];

// console.log(Number(arr1.join('')) + 1);

console.log(upArray(arr1));
console.log(upArray(arr2));
console.log(upArray(arr3));
console.log(upArray(arr4));
console.log(upArray(arr5));
console.log(upArray(arr6));
console.log(upArray(arr7));
upArray(arr8);
console.log(upArray(arr9));
// console.log((arr7.join("")));

console.log("--------------------");
// DONE
function nthSmallest(arr, pos) {
  arr.sort((a, b) => {
    return a - b;
  });
  return arr[pos - 1];
}

console.log(nthSmallest([4, 2, 3], 2));
console.log(nthSmallest([4, 2, 10], 2));
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3));

console.log("--------------------");
// DONE
function sumEvenNumbers(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
      sum = input[i] + sum;
    } else continue;
  }
  return sum;
}

console.log(sumEvenNumbers([1, 2, 4]));
console.log(sumEvenNumbers([1, 2, 4, 0, 5]));
console.log(sumEvenNumbers([1, 2, 4, 0, 6, 8]));

console.log("--------------------");
// DONE
function toNumberArray(stringarray) {
  return stringarray.map((num) => Number(num));
}

console.log(toNumberArray(["1", "2", "3"]));
console.log(toNumberArray(["1.1", "2.1", "3.1"]));

console.log("--------------------");
// DONE
function hasUniqueChars(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false;
    }
  }
  return true;
}

const word1 = "labas";
const word2 = "lab";
const word3 = "  opapa";

console.log(hasUniqueChars(word1));
console.log(hasUniqueChars(word2));
console.log(hasUniqueChars(word3));

console.log("--------------------");
// DONE
function countSmileys(arr) {
  let count = 0;
  if (!arr.length) return count;

  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i].includes(":D") && arr[i].length <= 3) ||
      (arr[i].includes(":)") && arr[i].length <= 3) ||
      (arr[i].includes("-D") && arr[i].length <= 3) ||
      (arr[i].includes("~D") && arr[i].length <= 3) ||
      (arr[i].includes("-)") && arr[i].length <= 3) ||
      (arr[i].includes("~)") && arr[i].length <= 3) ||
      (arr[i].includes(";)") && arr[i].length <= 3) ||
      (arr[i].includes(";D") && arr[i].length <= 3)
    ) {
      count += 1;
    } else continue;
  }
  return count;
}

console.log(countSmileys([]));
console.log(countSmileys([":D", ":~)", ";~D", ":)"]));
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]));
console.log(countSmileys([":-)", ";~D", ":-D", ":_D"]));
console.log(countSmileys([":---)", "))", ";~~D", ";D"]));

console.log("--------------------");
// NOT DONE
function howManyGifts(maxBudget, gifts) {
  let sum = 0;
  let count = 0;
  gifts.sort((a, b) => a - b);

  console.log(gifts);
  for (let i = 0; i < gifts.length; i++) {
    if (gifts[i] === 0) {
      count;
      continue;
    }
    if (maxBudget <= 0) {
      count = 0;
    }
    if (maxBudget > 0 && sum <= maxBudget) {
      sum += gifts[i];
      // console.log(`Sum: ${sum} and budget: ${maxBudget}`)
      if (sum > maxBudget) {
        count--;
      }

      count++;
      // console.log(`Skaicius: ${count}`)
    } else continue;
  }
  return count;
}

console.log(howManyGifts(20, [5, 10, 2, 12])); // 3
console.log(howManyGifts(20, [13, 2, 4, 6, 1])); // 4
console.log(howManyGifts(20, [13, 0, 4, 6, 1])); // 3
console.log(howManyGifts(40, [10, 0, 4, 6, 1])); // 4
console.log(howManyGifts(10, [13, 0, 4, 6, 1])); // 2
console.log(howManyGifts(0, [1])); // 0
console.log(howManyGifts(10, [0, 0, 0, 0, 0])); // 0
console.log(howManyGifts(10, [0, 0, 0, 1, 1])); // 0
// console.log(howManyGifts(918, [
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//   1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
//   2, 2, 2, 10, 10])); // 0

console.log("--------------------");
// DONE
function squareDigits(num) {
  let strArr = num.toString().split("");
  // console.log(strArr);
  let numArr = strArr.map((item) => parseInt(item));
  // console.log(numArr);
  let squareNum = +numArr.map((item) => item * item).join("");
  // console.log(squareArr);
  return squareNum;
}

console.log(squareDigits(256));
console.log(squareDigits(111));
console.log(squareDigits(5893));
console.log(squareDigits(501763));