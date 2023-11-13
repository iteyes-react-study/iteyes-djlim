// 객체를 만드는 방법

// - 객체 생성자 이용하는 방법
// - 객체 리터럴 방식(중괄호로 객체를 만드는 것 )
// - 리터럴 식을 많이 씀

// 생성자 방식
let person = new Object();

//객체 리터럴 방식
let person = ();


// porperty 

// - key value 쌍으로 저장되는 데이터
// - 객체가 가지고 있는 데이터
// - key는 항상 문자열로 사용해야됨
// - key끼리 중복되는 것은 추천하지 않음
// - 어떤 자료형을 넣어도 상관없음

let person = {
  key: "value", // 프로퍼티 (객체 프로퍼티)
  key1: 123,
  key2: true,
  key3: undefined,
  key4: [1, 2],
  key5: function () {}
};

console.log(person);


// 표기법 

// - 프로퍼티의 값에 접근하는 것
// - 점표기법 - 점을 통해 접근하는 것
// - 괄호표기법- 괄호를 통해 접근하는것 (반드시 문자열 형태로 표현)
// - 괄호표기법 장점 - 동적인 파라미터를 전달 받는 상황, 키가 고정되어 있지 않는 상황

let person = {
  key: "value", // 프로퍼티 (객체 프로퍼티)
  key1: 123,
  key2: true,
  key3: undefined,
  key4: [1, 2],
  key5: function () {}
};

console.log(person["name"]);
console.log(person.age);


// 객체 생성 이후에 프로퍼티를 추가, 수정, 삭제하는 방법

// 프로퍼티 추가 방법

// - 점표기법 사용해서 값을 대입하는 방식
// - 괄호표기법 이용


let person = {
  name: "이정환",
  age: 25
};

person.location = "한국";
person["gender"] = "남성";
console.log(person);

// 프로퍼티 값 수정 

// - const도 수정 가능(이유: 상수가 갖는 object를 수정하는 행위인 거지 상수 자체를 수정하는 행위가 아니기 때문)
// - 상수 자체에 대입 연산을 하지 않으면 에러가 발생하지 않음


const person = {
  name: "이정환",
  age: 25
};

person.location = "한국";
person["gender"] = "남성";

person.name = "이정환 A";
person["age"] = 40;

console.log(person);


// 프로퍼티 삭제

// - delete 객체이름 key
// - property의 값을 null로 바꾸기
// - delete방법은 값이 메모리에 남겨져 있음 그래서 property의 값을 null로 바꾸는 것을 추천


const person = {
  name: "이정환",
  age: 25
};

delete person["name"];
delete person.age;

person.name = null;

console.log(person);


// method

// - 객체 안에 들어가 있는 함수
// - 객체를 다루는 방법

// 멤버

// - 함수가 아닌 프로퍼티

// this

// - 자기 자신 객체
// - 객체 안에 메서드를 만들기되면 메서드 안에서 객체는 this라고 쓸 수 있음


const person = {
  name: "이정환", // 멤버
  age: 25, // 멤버
  say: function (){
    console.log(`안녕나는 ${person["name"]}`);
  } // 메서드 -> 방법
};

person["say"]();


// 객체에 property가 존재하는지 안하는지 확인하는 방법

// - in 연산자를 활용해서 property의 유무를 boolean으로 반환 받을 수 있음


const person = {
  name: "이정환", // 멤버
  age: 25, // 멤버
  say: function (){
    console.log(`안녕나는 ${person["name"]}`);
  } // 메서드 -> 방법
};

console.log(`name : ${"name" in person}`);
console.log(`age : ${"age" in person}`);
console.log(`gender : ${"gender" in person}`);