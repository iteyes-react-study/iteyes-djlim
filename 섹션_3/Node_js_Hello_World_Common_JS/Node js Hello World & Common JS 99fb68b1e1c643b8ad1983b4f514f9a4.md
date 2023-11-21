# Node.js Hello World & Common JS

GUI (Graphic User Interface) - 마우스 클릭만으로 동작해주는 방식,그래픽 유저 인터페이

CLI(Command Line Interface) - 터미널에 타이핑을 사용

```bash
node [js파일이름].js
```

![Untitled](Node%20js%20Hello%20World%20&%20Common%20JS%2099fb68b1e1c643b8ad1983b4f514f9a4/Untitled.png)

![Untitled](Node%20js%20Hello%20World%20&%20Common%20JS%2099fb68b1e1c643b8ad1983b4f514f9a4/Untitled%201.png)

모듈: 어떤 기능을 담당하는 분리된 파일 각각을 모듈이라고 한다.

모듈 내보내기

- *모듈시스템 - 모듈을 내보낼 수 있고 불러와서 사용할 수 있는 함수 같은 기능을 제공하는 시스템*
- Node.js에서 모듈 단위로 데이터를 내보내고 받아와서 사용할 수 있다.

```jsx
// 계산 기능을 하는 파일

const add = (a,b) => a + b;
const sub = (a,b) => a - b;

console.log(add(1,2));

// 모듈 내보내기
module.exports = {
    moduleName: "calc module",
    add: add,
    sub: sub,
};
```

```jsx
const calc = require("./calc");

console.log(calc.add(1,2));
console.log(calc.add(4,5));
console.log(calc.sub(10,2));

// require함수와 module.exports 내장함수는 node.js에 있는 내장함수이기 때문에 vanilla.js에서는 이용이 제한 됨
//module.exports로 내보내고, 내보낸 이 모듈을 require와 경로를 명시해서 불러오는 모듈 시스템은 Node.js가 기본적으로 제공하는 모듈 시스템인 common.js라는 모듈 시스템
//모둘시스템 - 모듈을 내보낼 수 있고 불러와서 사용할 수 있는 함수 같은 기능을 제공하는 시스템
```