"use strict";
let stduent1 = {
    id: 1,
    name: "김선화",
    subject: {
        courseId: 101,
        courseName: "Java",
        grade: "B"
    }
};
console.log(`학생명: ${stduent1.name}`);
console.log(`수강과목 ID: ${stduent1.subject.courseId}, \
            수강과목명: ${stduent1.subject.courseName}, \
            학점: ${stduent1.subject.grade}`);
