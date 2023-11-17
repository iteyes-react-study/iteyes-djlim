// 단락회로평가

// - 피현산자 중에 뒤에 위차한 피현산자를 확인할 필요 없이 그냥 연산을 끝내버리는 것
  console.log(false && true);

console.log(true || false);

console.log(!true);

// truthy 와 falsy를 이용한 단락회로 평가

const getName = (person) => {
if(!person){
return "객체가 아닙니다.";
}
return person.name;
}

let person;
const name = getName(person);
console.log(name);


// && , || 연산자를 활용한 단록회로 평가
const getName = (person) => {
    const name = person && person.name; //null - person이 null이기 때문에 fasle
    return name || "객체가 아닙니다."; // 객체가 아닙니다 name은 false이기 때문에 "객체가 아닙니다"가 true라 "객체가 아닙니다."호출
  };
  
  let person = null; 
  const name = getName(person);
  console.log(name);