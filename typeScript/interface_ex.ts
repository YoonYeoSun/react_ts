// 객체의 구조 정의 - interface
interface person {
    readonly id: number,     // 필수 속성이면서 읽기전용(수정불가)
    name: string,   // 필수 속성
    age?: number    // 선택 속성 (?를 붙여준다)
}

let person1: person = {
    id: 1,
    name: "우영우",
    age: 31
}

let person2: person = {
    id: 2,
    name: "이준호",
}

let person3: person = {
    id: 3,
    name: "윤두준",
    age: 38
}

// person2의 이름을 변경
//person2.id = 20;
person2.name = "한준호";

console.log(`이름: ${person1.name}, 나이: ${person1.age}`);
console.log(`이름2: ${person2.name}, 나이2: ${person2.age}`);
console.log(`이름3: ${person3.name}, 나이3: ${person3.age}`);

