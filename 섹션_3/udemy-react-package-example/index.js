const randomColor = require("randomcolor");
// npm i 를 통해서 다운받은 외부의 모듈은 경로를 명시할 필요가 없음

let color1 = randomColor();
let color2 = randomColor();
let color3 = randomColor();

console.log(color1, color2, color3);