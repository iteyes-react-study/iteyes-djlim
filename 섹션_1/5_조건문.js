// 조건문 if,else if, else

// - 연산의 참, 거짓에 따라서 각각 다른 명령어를 주는 것


let a = 3;

if(a >= 7){
  console.log("7 이상입니다.");
} else if(a >= 5){
  console.log("5 이상입니다.");
} else{
  console.log("5 이하입니다.");
}


// switch


let country = "ko";

switch(country){
  case "ko":
    console.log("한국");
    break;
  case "cn":
    console.log("중국");
    break;
  case "jp":
    console.log("일본");
    break;
  case "uk":
    console.log("영국");
    break;
  default:
    console.log("미 분류");
    break;
}