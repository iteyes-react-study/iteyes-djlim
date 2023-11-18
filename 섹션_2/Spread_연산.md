# Spread 연산

- …으로 표현함
- 객체의 값을 새로운 객체에 펼쳐주는 역할

```jsx
const cookie = {
  base: "cookie",
  madeIn: "korea",
};

const chocohipCookie = {
  base: "cookie",
  maeIn: "korea",
  toping: "chocochip",
};

const blueberryCookie = {
  base: "cookie",
  madeIn: "korea",
  toping: "blueberry",
};

const strawberryCookie = {
  base: "cookie",
  madeIn: "korea",
  toping: "strawberry",
};
```

- ‘base’와 ‘madeIn’프로퍼티가 계속 겹침 → 중복되는 프로퍼티를 계속 사용할 경우 Spread 연산자로 해결 할 수 있음

```jsx
const cookie = {
  base: "cookie",
  madeIn: "korea",
};

const chocohipCookie = {
  ...cookie,
  toping: "chocochip",
};

const blueberryCookie = {
  ...cookie,
  toping: "blueberry",
};

const strawberryCookie = {
  ...cookie,
  toping: "strawberry",
};

console.log(chocochipCookie);
console.log(blueberryCookie);
console.log(strawberryCookie);
```

```jsx
const noTopingCookies = ["촉촉한쿠키", "안촉촉한쿠키"];
const topingCookies = ["바나나쿠키", "블루베리쿠키", "딸기쿠키", "초코칩쿠키"];

const allCookies = [...noTopingCookies, ...topingCookies];
console.log(allCookies);
```

- Spread 연산은 배열에서도 사용할 수 있음
