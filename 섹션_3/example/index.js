const calc = require("./calc");

console.log(calc.add(1,2));
console.log(calc.add(4,5));
console.log(calc.sub(10,2));

// require함수와 module.exports 내장함수는 node.js에 있는 내장함수이기 때문에 vanilla.js에서는 이용이 제한 됨
//module.exports로 내보내고, 내보낸 이 모듈을 require와 경로를 명시해서 불러오는 모듈 시스템은 Node.js가 기본적으로 제공하는 모듈 시스템인 common.js라는 모듈 시스템
//모둘시스템 - 모듈을 내보낼 수 있고 불러와서 사용할 수 있는 함수 같은 기능을 제공하는 시스템
