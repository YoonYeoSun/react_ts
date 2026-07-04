// 함수 정의
// return이 있는 함수 - 뒤에 : number는 return 값의 타입도 정의

/*
function sub(x: number, y: number): number {
    return x - y;
}
*/

const sub = (x: number, y: number): number => {
    return x - y;
}

const result = sub(10, 11);
console.log(`결과: ${result}`);

// 리턴이 없는 경우 - void
/*
function greet(name: string): void {
    console.log(`Hello, ${name}`);
}
*/
const greet = (name: string): void => {
    console.log(`Hello, ${name}`);
}
//greet("TypeScript");
const result2 = greet("TypeScript");
console.log(`결과2: ${result2}`);

// 객체를 반환하는 함수 - 반환타입 내에서 ; 또는 ,으로 구분
// const createUser = (id: number, name: string): {id: number; name: string} => {
const createUser = (id: number, name: string): {id: number, name: string} => {
    return {id, name};
}

const userhl = createUser(1, "이기광");
console.log(`사용자 ID: ${userhl.id}, 이름: ${userhl.name}`);

