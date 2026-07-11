"use strict";
let stduent2 = {
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
};
console.log(`학생명: ${stduent2.name}`);
stduent2.subjects.forEach(subject => {
    console.log(`과목명: ${subject.courseName}, 학점: ${subject.grade}`);
});
