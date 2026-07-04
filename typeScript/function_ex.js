"use strict";
// 함수 정의
// return이 있는 함수 - 뒤에 : number는 return 값의 타입도 정의
/*
function sub(x: number, y: number): number {
    return x - y;
}
*/
const sub = (x, y) => {
    return x - y;
};
const result = sub(10, 11);
console.log(`결과: ${result}`);
// 리턴이 없는 경우 - void
/*
function greet(name: string): void {
    console.log(`Hello, ${name}`);
}
*/
const greet = (name) => {
    console.log(`Hello, ${name}`);
};
//greet("TypeScript");
const result2 = greet("TypeScript");
console.log(`결과2: ${result2}`);
// 객체를 반환하는 함수
const createUser = (id, name) => {
    return { id, name };
};
const userhl = createUser(1, "이기광");
console.log(`사용자 ID: ${userhl.id}, 이름: ${userhl.name}`);
