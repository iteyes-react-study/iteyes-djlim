// 자료형  

// Primitive Data Type

// - Number
// - String
// - Boolean
// - Unedefined
// - Null

// Non-Primitive Data Type

// - Object
// - Array
// - Function

// Primitive Type(원시 타입, 내장형, 기본)


let number =12;


// - 한번에 하나의 값 만 가질 수 있음
// - 하나의 고정된 저장 공간 이용

// Non-Primitive Type(비 원시 타입)


let array = [1,2,3,4];


// - 한번에 러 개의 값을 가질 수 있음
// - 여러개의 고정되지 않은 동적 공간 사용


let age = 25; //정수
 
let tall = 175.9; //실수

let inf = Infinity; //무한대

let minusInf = -Infinity; //음의 무한대
 
let nan = NaN; //수학적인 연산의 실패 결과 값

console.log(age * tall); //연산가능

let name = "winterlood";

let name2 = '이저환';

let name3 = `winterlood ${name2}`; // 문자열안에 변수의 값을 집어 넣을 때 (템플릿 리터럴럴)

let isSwitchoOff = false; // boolean 참 거짓의 값을 사용

let a = null; //null - 변수에 아무 값도 안담고 있다라는 것을 표현할때 사용
console.log(a);

let variable;
console.log(variable);  //변수는 선언 했는데 아무 값도 가지질 않을때

let numberA = 12;

let numberB = "2";

console.log(numberA * numberB);

// 형변환 캐스틍 - 값은 유지하면서 문자열의 자료혀을 변환
// 묵시적 형변환 - 자바스크립트 엔진이 알아서 형변환 해주는 것

console.log(numberA + parseInt(numberB));

// 명시적 형변환 - 프로그래머가 의도적으로 형변환 하는 것
