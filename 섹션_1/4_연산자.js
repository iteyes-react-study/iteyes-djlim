// #연산자

// 대입연산자 

// - 변수의 값을 넣는 역할


let a =1; // 대입연산자

let b =2;


// 산술연산자

// - 사칙 역산을 해주는 역할


// 산술 연산자 
let a =1; 

let b =2;

console.log(a + b);

console.log(a + b);

console.log(a * b);

console.log(a - b);

console.log(a / b);

console.log(a % b);

// 연결 연산자

// - 두개 이상의 문자열을 이어 붙이는 역할


// 연결 연산자
let c = "대";

let d = "진";

console.log(c + d);


// 복합 연산자

// - 산술 연산자를 대입연산자와 활용할때


// 복합 연산자
let e = 5;

e = e + 10;

e += 10;

e -= 10;

e *= 10;

e /= 10;

console.log(e);


// 증감 연산자

// - 산술 연산자를 두번 쓰는 것
// - 후위연산 - 후위연산 적용된 라인 뒤부분부터 값이 바뀜
// - 전위연산 - 적용된 라인부터 값이 바뀜


// 증감 연산자

let f = 10;

f++;
f++;
--f;
f--;

console.log(f);


// 논리 연산자

// - !(Not) - true면 false , false면 true로 바뀜
// - &&(and)- 연산자, 피연산자 두 개가 참일 경우에만 참
// - ||(OR) - 둘 중 하나만 참이면 참이 된다.


// 논리 연산자
console.log(!true);

console.log(true && true); // true And true

console.log(true || false); // true OR false


// 비교 연산자

// - == 타입이 다르더라도 값만 비교
// - === 값 뿐만 아니라 타입 비교
// - ! = 같지 않은지 비교
// - ! == 타입까지 같지 않은지 비교


// 비교 연산자
let compareA = 1 == "1";
console.log(compareA);

let compareB = 1 === "1";
console.log(compareB);

let compareC = 1 != "1";
console.log(compareC);

let compareD = 1 !== "1";
console.log(compareD);


// 대소 비교


// 대소 비교
let compareA = 1 > 2;
console.log(compareA);

let compareB = 1 < 2;
console.log(compareB);

let compareC = 1 <= 2;
console.log(compareC);

let compareD = 1 >= 2;
console.log(compareD);


// typeof

// - 변수의 자료형이 무엇인지 볼 수 있음


let compareA = 1;
compareA = "1";

console.log(typeof compareA);


// null병합 연산자

// - 피연산자 중에 null이나 undefined가 아닌 값을 선택


let a;

a = a ?? 10;

console.log(a);
