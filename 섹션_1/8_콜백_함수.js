// 콜백함수

// - 어떤 다른 함수에 매개 변수로 함수를 전달 해주는 것을 의미
// - 함수의 파라미터로 함수를 넘기는 것

function checkMood(mood, goodCallback, badCallback){
  if(mood === "good"){
    // 기분 좋을 때 하는 동작
    goodCallback();
  }else{
    // 기분 안 좋을 때 하는 동작
    badCallback();
  }
}

function cry(){
  console.log("ACTION :: CRY");
}

function sing(){
  console.log("ACTION :: SING");
}

function dance(){
  console.log("ACTION :: DANCE");
}

checkMood("sad", sing, cry);
