// 객체의 구조 정의 - Member

// 유니언 타입(Union type) - 여러 타입 중 하나를 선택할 수 있는 타입
type MemberRole = "리더" | "멤버";

type Member = {
    id: number;
    name: string;
    age?: number;
    role: MemberRole;       // 참조 타입
}

// 객체 생성
const member1: Member = {
    id: 1,
    name: "윤두준",
    role: "리더"
}

const member2: Member = {
    id: 2,
    name: "양요섭",
    age: 38,
    role: "멤버"
}

// 출력 시 \ 를 이용하면 한줄로 이어진다. 없으면 다음줄로 이동(띄어쓰기 들어감)
console.log(`멤버1 - ID: ${member1.id}, 이름: ${member1.name}, \
권한: ${member1.role}`);
console.log(`멤버2 - ID: ${member2.id}, 이름: ${member2.name}, \
나이: ${member2.age}, 권한: ${member2.role}`);