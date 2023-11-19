Promise를 가독성 좋게 작성할 수 있는 async & await

```jsx
// async

function hello() {
  return "hello";
}

async function helloAsync() {
  return "hello Async";
}

# async_ & _await_직관적인_비동기_처리_코드작성하기

helloAsync().then((res) => {
  console.log(res);
});
```

```jsx
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function helloAsync() {
  await delay(3000);
  return "hello async";
}

async function main() {
  const res = await helloAsync();
  console.log(res);
}

main();
```
