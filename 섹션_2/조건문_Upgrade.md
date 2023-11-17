# 조건문 업그레이드

```jsx
function isKoreanFood(food) {
  if (food === "불고기" || food === "비빔밥" || food === "떡볶이") {
    return true;
  }
  return false;
}

const food1 = isKoreanFood("불고기");

const food2 = isKoreanFood("파스타");

console.log(food1);

console.log(food2);
```

_여러가지 케이스중 하나인지 비교 할때 배열의 내장함수인 includes 사용 예시_

```jsx
function isKoreanFood(food) {
  if (["불고기", "떡볶이", "비빔밥"].includes(food)) {
    return true;
  }

  return false;
}

const food1 = isKoreanFood("불고기");

const food2 = isKoreanFood("파스타");

console.log(food1);

console.log(food2);
```

```jsx
const getMeal = (mealType) => {
  if (mealType === "한식") return "불고기";
  if (mealType === "양식") return "파스타";
  if (mealType === "중식") return "멘보샤";
  if (mealType === "일식") return "초밥";
  return "굶기";
};

console.log(getMeal("한식"));
console.log(getMeal("주식"));
console.log(getMeal());
```

- 매번 if문을 새로 만들어ㅑ 하기 때무네 비효율적임
-

많은 유형의 대표적인 뭔가 하나를 리턴해야 될 때 객체의 괄호 표기법을

통해서 조건문을 간략하게 사용할 수 있는 방법

```jsx
const meal = {
  한식: "불고기",
  중식: "멘보샤",
  일식: "초밥",
  양식: "스테이크",
  인도식: "카레",
};

const getMeal = (mealType) => {
  return meal[mealType] || "굶기";
};

console.log(getMeal("한식"));
console.log(getMeal());
```

```jsx
const meal = {
  한식: "불고기",
  중식: "멘보샤",
  일식: "초밥",
  양식: "스테이크",
  인도식: "카레",
};

const getMeal = (mealType) => {
  return meal[mealType] || "굶기";
};

console.log(getMeal("한식"));
console.log(getMeal());
```
