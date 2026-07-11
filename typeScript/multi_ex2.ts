// 학점 타입 정의
// 정의 된 grade 값 이외의 값을 사용하는 경우 오류 발생
type GradeType = 'A' | 'B' | 'C' | 'D' | 'F';

// 과목 자료형 정의
interface Course {
    courseId: number,
    courseName: string,
    grade: GradeType
}

// 학생 자료형 정의
interface Student {
    id: number, 
    name: string, 
    subjects: Course[]
}

let stduent2: Student = {
    id: 1,
    name: "김선화", 
    subjects: [{
            courseId: 101,
            courseName: "Java",
            grade: "B"
        },
        {
            courseId: 102,
            courseName: "TypeScript",
            grade: "A"
        },
    ]
}

console.log(`학생명: ${stduent2.name}`);
stduent2.subjects.forEach(subject => {
    console.log(`과목명: ${subject.courseName}, 학점: ${subject.grade}`)
});