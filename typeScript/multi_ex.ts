// 학점 타입 정의
// 정의 된 grade 값 이외의 값을 사용하는 경우 오류 발생
type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

// 과목 자료형 정의
interface Course {
    courseId: number,
    courseName: string,
    grade: Grade
}

// 학생 자료형 정의
interface Student {
    id: number, 
    name: string, 
    subject: Course
}

let stduent1: Student = {
    id: 1,
    name: "김선화", 
    subject: {
        courseId: 101,
        courseName: "Java",
        grade: "B"
    }
}

console.log(`학생명: ${stduent1.name}`);
console.log(`수강과목 ID: ${stduent1.subject.courseId}, \
            수강과목명: ${stduent1.subject.courseName}, \
            학점: ${stduent1.subject.grade}`);