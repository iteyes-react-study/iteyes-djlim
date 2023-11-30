# Create React App

![Untitled](Create%20React%20App%20e0364359eec34f61a65876dddad8315e/Untitled.png)

![Untitled](Create%20React%20App%20e0364359eec34f61a65876dddad8315e/Untitled%201.png)

- Boiler Plate - 어떤 기술에 대해서 미리 기초 설정 작업을 다해놔서 기초 세팅 작업을 제로로 만들어주는 것
- npx - 설치되어 있지 않은 패키지를 딱 한 번만 쓰고 싶을 때 사용하는 것

> npx -v
> 
- npx가 설치되어있는지 확인

> npm install gnpx
> 

npx라는 도구를 설치하는 명령어 

> npx create-react-app reactexam1
> 
- 실패시 대부분 Noe.js의 버전 문제일 가능성이 큼

> react-scripts-start
> 

리액트를 실행시키는 start 스크립트

> 컨트롤 + C;
> 

리액트 앱을 끄는 법

nodeModule.js페키지의 구성요소 중 하나로 외부 모듈을 저장하고 있는 폴더

- nodeModule.js 가 없어도 어떤 모듈을 써야되는지가 package.json과 package.lock.json에 명시가 되어있기 때문이다.
- npm i 라고 입력을 해주면 자동으로 노드모듈이 다시 다운로드가 받아짐

favicon.ico 

- 웹사이트의 아이콘이 된다.
- 크롬브라우저 탭 상단에 있는 아이콘
- react는 앱이라는 함수를 만들고 return으로 JSX문법의 html을 return해주면서 컴포넌트를 만들 수 있다.

- react가 실행되면서 src 디렉토리 밑에 index.js가 실행되면서 index.html에 있는 id가 root인 div아래로 app.js안에 있는 app함수가 리턴하는 값들이 들어간다.

ex moule system

- export default app 이런 식으로 app이라는 함수를 내보내게 됨
- 다른 파일에서 import 이름 from 파일의 경로로 사용할 수 있음
- export default는 한 개만 내보낼 수 있다.