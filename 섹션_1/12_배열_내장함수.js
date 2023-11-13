// - 내장함수를 잘 이용하면 유연하고 깔끔하게 코드를 작성 할 수 있음
// - 내장함수는 객체의 메서드와 똑같음

// forEach()

// - 배열의 모든 요소를 한 번씩 순회 할수 있다.
// - 내장함수에 전달하는 콜백함수는 배열의 각각의 요소들에 대해서 실행

const arr = [1, 2, 3, 4];
const newArr = [];

// arr.forEach((elm) => console.log(elm));
arr.forEach(function(elm){
  newArr.push(elm * 2);
});

console.log(newArr);

// map()

// - 원본 배열의 모든 요소를 순회하면서 어떤 연산을 해서 리턴된 값들만을 따로 배열로 출현해서 반환할 수 있게 해주는 함수

const arr = [1, 2, 3, 4];
const newArr = arr.map((elm) =>{
  return elm * 2;
})

console.log(newArr);


// includes()

// - 주어진 배열에서 전달받은 인자와 일치하는 값이 존재하는지를 boolean식으로 리턴해 준다.


const arr = [1, 2, 3, 4];

let number = "3";

console.log(arr.includes(number));

// indexOf()

// - 주어진 배열에서 전달받은 인자와 일치하는 값의 인덱스를 반환하는 함수
// - 주어진 값과 배열 안에 있는 값이 일치하는게 하나도 없을 경우 -1을 반


const arr = [1, 2, 3, 4];

let number = 3;

console.log(arr.indexOf(number));


// findIndex()

// - 일치하는 요소가 두 개 있을 경우에는 가장 먼저 만나는 요소를 반환될 수 밖에 없음
// - 배열의 내가 찾고자 하는 검색이 유용한가 확인하고 사용하는 것을 권장
// - 조건에 만족하는 인덱스를 반

const arr = [
  {color: "red"},
  {color: "black"},
  {color: "blue"},
  {color: "green"}
];

let number = 3;

console.log(arr.findIndex((elm) => elm.color === "red"));
console.log(arr.findIndex((elm) => {
  return elm.color === "red";
})
);

// find()

// - 만족하는 요소 자체를 반환

const arr = [
  {color: "red"},
  {color: "black"},
  {color: "blue"},
  {color: "green"}
];

let number = 3;

const element = arr.find((elm) => {
  return elm.color === "blue";
});

console.log(element);

// 배열을 필터링하는 방법

// filter()

// - 전달한 콜백 함수가 true를 반환하는 모든 요소를 배열로 반환

const arr = [
  {num:1, color: "red"},
  {num:2, color: "black"},
  {num:3, color: "blue"},
  {num:4, color: "green"},
  {num:5, color: "blue"}
];

console.log(arr.filter((elm) => elm.color === "blue"));

// 배열을 싹둑 자르는 방법

// slice()

// - end에 명시된 인덱스를 반환하지 않음


const arr = [
  {num:1, color: "red"},
  {num:2, color: "black"},
  {num:3, color: "blue"},
  {num:4, color: "green"},
  {num:5, color: "blue"}
];

console.log(arr.slice(0,4));


// 배열을 붙이는 방법 

// concat()

// - 첫번째 명시한 배열 뒤로 concat메서드에 전달한 배열을 뒤에 붙임

const arr = [
  {num:1, color: "red"},
  {num:2, color: "black"},
  {num:3, color: "blue"},
];

const arr2 = [
  {num: 4, color: "green"},
  {num: 5, color: "blue"}
]

console.log(arr.concat(arr2));


// 배열을 정렬하는 방법

// sort()

// - 원본배열의 순서 정렬하는 메서드(사전순)

let chars = ["나", "다", "가"];

chars.sort();

console.log(chars);


// 비교함수 만들고 넣는 법 

// compare()

// - 비교함수는 두개를 비교해서 3가지중 하나의 결과로 내놔야함(같다,크다,작다)

let numbers = [0, 1, 3, 2, 10, 30, 20];

const compare = (a, b) => {
  // 1. 같다
  // 2. 크다
  // 3. 작다

  if(a > b){
    //크다
    return 1;
  }

  if(a < b){
    // 작다
    return -1;
  }

  // 같다
  return 0;
};

numbers.sort(compare);

console.log(numbers);


// join()

// - 배열에 존재하는 요소들을 문자열로 합쳐서 사용 할 수 있다.

const arr = ["이정환", "님", "안녕하세요", "또오셨군요"];

console.log(arr.join(""));
