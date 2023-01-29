var school = [];
var Student1 = {
    id: 333,
    name: "ahmad",
    level: "2",
    isSenior: true
};
var Student2 = {
    id: 242,
    name: "ali",
    level: "9",
    isSenior: true
};
var Student3 = {
    id: 3232,
    name: "Mohammed",
    level: "5",
    isSenior: false
};
;
var Teacher1 = {
    id: 3232,
    name: "fhad",
    specialty: "er",
    courseNum: 334
};
var Teacher2 = {
    id: 3232,
    name: "omar",
    specialty: "dd",
    courseNum: 334
};
var Teacher3 = {
    id: 3232,
    name: "fisal",
    specialty: "re",
    courseNum: 334
};
school.push(Student1, Student2, Student3);
console.log(school);
function Senior(x, isSenior) {
    x.isSenior = isSenior;
    return x;
}
console.log(Senior(school[2], true));
function course(x, courseNum) {
    x.courseNum = courseNum;
    return x;
}
console.log(course(school[3], 4));
