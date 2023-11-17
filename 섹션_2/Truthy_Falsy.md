#Truthy & Falsy

Truthy - JavaScript의 조건식에서 true가 아니어도 참으로 평가 값

```jsx
let a = {};

if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}
```

![숫자값 -True](https://prod-files-secure.s3.us-west-2.amazonaws.com/b5c4e3f2-abdf-4a7b-b791-0282bcdb1fba/533c8568-a84d-4bc6-b6e4-afc41f9d8440/Untitled.png)

숫자값 -True

![문자열 - True](https://prod-files-secure.s3.us-west-2.amazonaws.com/b5c4e3f2-abdf-4a7b-b791-0282bcdb1fba/38eb076f-aea4-493b-a97b-f81deb11602e/Untitled.png)

문자열 - True

![Infinity - TRUE](https://prod-files-secure.s3.us-west-2.amazonaws.com/b5c4e3f2-abdf-4a7b-b791-0282bcdb1fba/3aa41a54-425d-4635-a2e4-92901185ccfc/Untitled.png)

Infinity - TRUE

falsy - 거짓이 아니어도 거짓으로 평가되는 값

![null- FALSE](https://prod-files-secure.s3.us-west-2.amazonaws.com/b5c4e3f2-abdf-4a7b-b791-0282bcdb1fba/cedeb6d9-7984-4b5d-8f3d-e821373e552f/Untitled.png)

null- FALSE

![undefined-FALSE](https://prod-files-secure.s3.us-west-2.amazonaws.com/b5c4e3f2-abdf-4a7b-b791-0282bcdb1fba/ca68991f-a844-45b9-a99f-63da0d7f3dcc/Untitled.png)

undefined-FALSE

![숫자0 - FALSE](https://prod-files-secure.s3.us-west-2.amazonaws.com/b5c4e3f2-abdf-4a7b-b791-0282bcdb1fba/81e93d4b-33ae-4321-ab02-7a2e9f74111c/Untitled.png)

숫자0 - FALSE

![-0 - FALSE](https://prod-files-secure.s3.us-west-2.amazonaws.com/b5c4e3f2-abdf-4a7b-b791-0282bcdb1fba/f93ebf4f-5183-4fbf-af25-79ca4fbca8c0/Untitled.png)

-0 - FALSE

![NAN - FALSE](https://prod-files-secure.s3.us-west-2.amazonaws.com/b5c4e3f2-abdf-4a7b-b791-0282bcdb1fba/3d74f076-31e2-47da-adcc-7d8490d0ee5f/Untitled.png)

NAN - FALSE

![“”(빈문자열)-FALSE](https://prod-files-secure.s3.us-west-2.amazonaws.com/b5c4e3f2-abdf-4a7b-b791-0282bcdb1fba/b45abab8-c13f-4a87-95e9-ddf38c6c46a8/Untitled.png)

“”(빈문자열)-FALSE

![undefine은 객체가 아니기 때문에 내부 프로퍼티에 접근 할 수 없음](https://prod-files-secure.s3.us-west-2.amazonaws.com/b5c4e3f2-abdf-4a7b-b791-0282bcdb1fba/31c81a8e-bc91-4f78-9851-c9dc347d1c81/Untitled.png)

undefine은 객체가 아니기 때문에 내부 프로퍼티에 접근 할 수 없음

→ 조건문을 통해서 전달받은 파라미터가 객체인지 또 undefine이 아닌지 Null이 아닌지 판단해줘야 함

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/b5c4e3f2-abdf-4a7b-b791-0282bcdb1fba/19f15143-d651-481a-8201-0b16b478f35e/Untitled.png)

- 매번 파라미터마다 undefined, null인지 판단해줄 수 없음
- falsy 속성을 이용해서 쉽게 해결 할 수 있음

![null이든 undefined든 false 속성이 있기 때문에 not을 붙이면 true가 되는 성질을 활용하여 예외처리를 할 수 있다](https://prod-files-secure.s3.us-west-2.amazonaws.com/b5c4e3f2-abdf-4a7b-b791-0282bcdb1fba/92e7f8ae-7d55-4c91-a982-0612b8faab97/Untitled.png)

null이든 undefined든 false 속성이 있기 때문에 not을 붙이면 true가 되는 성질을 활용하여 예외처리를 할 수 있다
