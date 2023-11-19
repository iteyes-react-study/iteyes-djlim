# Promise 콜백지옥 탈출하기

![Untitled](Promise%20%E1%84%8F%E1%85%A9%E1%86%AF%E1%84%87%E1%85%A2%E1%86%A8%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A9%E1%86%A8%20%E1%84%90%E1%85%A1%E1%86%AF%E1%84%8E%E1%85%AE%E1%86%AF%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20de55961e6deb4373b4dcebef7f1b3e43/Untitled.png)

- 콜백지옥은 연속되는 비동기 함수를 처리할 때 비동기 처리의 결과 값을 사용하기 위해서 콜백이 계속 깊어지는 현상

Promise 

- 자바스크립트의 비동기를 돕는 객체
- 콜백을 줄지어 처리할 필요가 없어서 쉽고 빠르고 직관적으로 비동기 처리를 만들 수 있음

![Untitled](Promise%20%E1%84%8F%E1%85%A9%E1%86%AF%E1%84%87%E1%85%A2%E1%86%A8%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A9%E1%86%A8%20%E1%84%90%E1%85%A1%E1%86%AF%E1%84%8E%E1%85%AE%E1%86%AF%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20de55961e6deb4373b4dcebef7f1b3e43/Untitled%201.png)

- Pending: 대기 상태로 현재 비동기 작업이 진행 중이거나 작업이 시작 할 수도 없는 문제가 발생했음을 의미
- Fulfilled: 성공 상태로 비동기 작업이 우리가 의도한 대로 정상적으로 완료한 상태를 의미
- Rejected: 거부, 실패 상태로 비동기 작업이 모종의 이유로 인해서 실패했음을 의미
- 비동기 작업은 한 번 성공하거나 실패하면 작업이 끝난다고 생각하면 된다.

![Untitled](Promise%20%E1%84%8F%E1%85%A9%E1%86%AF%E1%84%87%E1%85%A2%E1%86%A8%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A9%E1%86%A8%20%E1%84%90%E1%85%A1%E1%86%AF%E1%84%8E%E1%85%AE%E1%86%AF%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20de55961e6deb4373b4dcebef7f1b3e43/Untitled%202.png)

- resolve(해결) : 비동기 작업이 펜딩 사태에 있을 때 성공 상태인 Fulfilled상태로 변화하는 과정
- reject(거부): 펜딩 상태에서 비동기작업이 실패했다는 의미에서 Rejected, 실패 상태로 변화하는 것은 거부라는 표현에서 Reject라고 부를 수 있음

```jsx
function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      // 성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다.");
    }
  }, 2000);
}

isPositive(
  10,
  (res) => {
    console.log("성공적으로 수행됨 : ", res);
  },
  (err) => {
    console.log("실패 하였음 : ", err);
  }
);
```

![Untitled](Promise%20%E1%84%8F%E1%85%A9%E1%86%AF%E1%84%87%E1%85%A2%E1%86%A8%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A9%E1%86%A8%20%E1%84%90%E1%85%A1%E1%86%AF%E1%84%8E%E1%85%AE%E1%86%AF%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20de55961e6deb4373b4dcebef7f1b3e43/Untitled%203.png)

```jsx
function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      // 성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다.");
    }
  }, 2000);
}

isPositive(
  [],
  (res) => {
    console.log("성공적으로 수행됨 : ", res);
  },
  (err) => {
    console.log("실패 하였음 : ", err);
  }
);
```

![Untitled](Promise%20%E1%84%8F%E1%85%A9%E1%86%AF%E1%84%87%E1%85%A2%E1%86%A8%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A9%E1%86%A8%20%E1%84%90%E1%85%A1%E1%86%AF%E1%84%8E%E1%85%AE%E1%86%AF%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20de55961e6deb4373b4dcebef7f1b3e43/Untitled%204.png)

```jsx
function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      // 성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다.");
    }
  }, 2000);
}

function isPositiveP(number) {
  const executor = (resolve, reject) => {
    // 실행자
    setTimeout(() => {
      if (typeof number === "number") {
        // 성공 -> resolve
        console.log(number);
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        //실패 -> reject
        reject("주어진 값이 숫자형 값이 아닙니다");
      }
    }, 2000);
  };
  const asyncTask = new Promise(executor);
  return asyncTask;
}

const res = isPositiveP(101);

res
  .then((res) => {
    console.log("작업 성공 : ", res);
  })
  .catch((err) => {
    console.log("작업 실패 : ", err);
  });
```

```jsx
function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      // 성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다.");
    }
  }, 2000);
}

function isPositiveP(number) {
  const executor = (resolve, reject) => {
    // 실행자
    setTimeout(() => {
      if (typeof number === "number") {
        // 성공 -> resolve
        console.log(number);
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        //실패 -> reject
        reject("주어진 값이 숫자형 값이 아닙니다");
      }
    }, 2000);
  };
  const asyncTask = new Promise(executor);
  return asyncTask;
}

const res = isPositiveP([]);

res
  .then((res) => {
    console.log("작업 성공 : ", res);
  })
  .catch((err) => {
    console.log("작업 실패 : ", err);
  });
```

```jsx
function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

taskA(5, 1)
  .then((a_res) => {
    console.log("A RESULT : ", a_res);
    return taskB(a_res);
  })
  .then((b_res) => {
    console.log("B RESULT : ", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("C RESULT : ", c_res);
  });
```