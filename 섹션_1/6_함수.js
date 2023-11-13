// - 중복되는 동일한 동작의 코드들을 하나로 묶어서 사용
// - 전역변수 - 함수 외부에 선언되어서 어디에서나 접근할 수 있는 변수
// - 지역변수 - 함수 내부에 선언되어 접근할 수 없는 변수

let count = 1; // 전역변수

function getArea(width, height){
  let area = width * height; //지역변수
  console.log(count);
  return area; //함수 결과값
} // 함수 선언

let area1 = getArea(100, 200); // 함수 호출
