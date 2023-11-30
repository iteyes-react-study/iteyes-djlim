# API 호출

![Untitled](API%20%E1%84%92%E1%85%A9%E1%84%8E%E1%85%AE%E1%86%AF%20aec43f63eac841f5b374c5ded00a9c84/Untitled.png)

![Untitled](API%20%E1%84%92%E1%85%A9%E1%84%8E%E1%85%AE%E1%86%AF%20aec43f63eac841f5b374c5ded00a9c84/Untitled%201.png)

- API호출이라는 것은 다른 프로그램의 데이터를 받기 위해 말을 건다라는 의미

```jsx
async function getData() {
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
}

getData();
```

![Untitled](API%20%E1%84%92%E1%85%A9%E1%84%8E%E1%85%AE%E1%86%AF%20aec43f63eac841f5b374c5ded00a9c84/Untitled%202.png)