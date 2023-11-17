let a = 3;
if(a >=0) {
    console.log("양수");
}else{
    console.log("음수");
}

let a = 3;
a>= 0 ? console.log("양수") : console.log("음수");

//  삼항 연산자는 자바스크립트의 조건문을 간략하게 만들 수 있다. 

// let a = [];

// if(a.length === 0){
//     console.log("빈 배열");
// }else{
//     console.log("안 빈 배열");
// }

// let a = [];
// a.length === 0 ? console.log("빈 배열") : console.log("안 빈 배열");

// let a = [];
// const arrayStatus = a.length === - ? "빈 배열" : "안 빈 배열";
// console.log(arrayStatus);

// truthy 와 falsy를 이용한 삼항연산자
// let a;

// const result = a ? true : false;
// console.log(result);

// a는 undefined이기 때문에 false 

// 빈배열(truthy)를 이용한 삼항 연산자

// let a=[];

// const result = a ? true : false;
// console.log(result);

//삼항연산자 중첩 활용

// 1000: 학점 계산 프로그램
// 99점 이상 A+
// 50점 이상 B+
// 둘다 아니면 F

let score = 40;

// score >= 90 
//     ? console.log("A+") 
//     : score >= 50 
//     ? console.log("B+") 
//     : console.log("F");

// 중첩 삼항연산자는 가독성이 떨어지기 때문에 중첩 if문을 사용하는 걸 권장

if(score >= 90){
    console.log("A+");
}else if(score >= 50){
    console.log("B+");
}else{
    console.log("F");
}
