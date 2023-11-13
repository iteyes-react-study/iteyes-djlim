// - 프로그래밍은 조건과 반복문으로 완성된다.
// - 특정 명령을 반복해서 수행할 수 있도록 도와주는 문법
// - 반복문을 통해서 중복되는 코드를 줄여서 사용할 수 있음

let person = {
  name: "이정환",
  age: 25,
  tall:175
};

const personValues = Object.values(person);

for(let i = 0; i < personValues.length;i++){
  console.log(personValues[i]);
}
