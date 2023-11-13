// - 순서 있는 요소들의 집합, 즉 여러 개의 항목이 들어있는 리스트

// 배열 만드는 방법

// - 생성자를 이용한 방법
// - 배열 리터럴


let arr = new Array(); // 생성자
let arr = []; // 배열 리터럴

//배열

// 배열의 각각 요소에 접근하는 방법

// - 인덱스를 통해 접근 가능


let arr = [1, 2, 3, 4, 5]; // 배열 리터럴
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);


// 배열에 요소 추가

// push()

// - 배열의 가장 마지막에 요소 추가


let arr = [1, 2, 3, 4, 5]; // 배열 리터럴

arr.push({key:"value"});
console.log(arr);


// 배열의 길이 확인하기


let arr = [1, 2, 3, 4, 5]; // 배열 리터럴

arr.push({key:"value"});
console.log(arr.length);


//- 배열은 자바스크립트에서 객체와 함께 가장 많이 사용