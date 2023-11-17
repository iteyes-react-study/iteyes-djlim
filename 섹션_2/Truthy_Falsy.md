# Truthy & Falsy

Truthy - JavaScript의 조건식에서 true가 아니어도 참으로 평가 값

```jsx
let a = {};

if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}
```

```jsx
let a = "12";

if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}
```

```jsx
let a = "0";

if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}
```

```jsx
let a = Infinity;

if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}
```

falsy - 거짓이 아니어도 거짓으로 평가되는 값

```jsx
let a = null;

if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}
```

```jsx
let a = undefined;

if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}
```

```jsx
let a = 0;

if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}
```

```jsx
let a = -0;

if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}
```

```jsx
let a = NaN;

if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}
```

```jsx
let a = "";

if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}
```

```jsx
const getName = (person) => {
  return person.name;
};

let person;
const name = getName(person);
console.log(name);
```

→ 조건문을 통해서 전달받은 파라미터가 객체인지 또 undefine이 아닌지 Null이 아닌지 판단해줘야 함

```jsx
const getName = (person) => {
  if (person === undefined || person === null) {
    return "객체가 아닙니다.";
  }
  return person.name;
};

let person = null;
const name = getName(person);
console.log(name);
```

- 매번 파라미터마다 undefined, null인지 판단해줄 수 없음

- falsy 속성을 이용해서 쉽게 해결 할 수 있음

```jsx
const getName = (person) => {
  if (!person) {
    return "객체가 아닙니다.";
  }
  return person.name;
};

let person = null;
const name = getName(person);
console.log(name);
```

- null이든 undefined든 false 속성이 있기 때문에 not을 붙이면 true가 되는 성질을 활용하여 예외처리를 할 수 있다
