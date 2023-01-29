interface Student{
    id:number;
    name:string;
    level:string;
    isSenior:boolean
}
let school=[]
let Student1:Student={
    id:333,
    name:"ahmad",
    level:"2",
    isSenior:true

}
let Student2:Student={
    id:242,
    name:"ali",
    level:"9",
    isSenior:true

}
let Student3:Student={
    id:3232,
    name:"Mohammed",
    level:"5",
    isSenior:false

}

interface Teacher{
    id:number;
    name:string;
    specialty:string;
    courseNum:number
};

let Teacher1:Teacher={
    id:3232,
    name:"fhad",
    specialty:"er",
    courseNum:334

}
let Teacher2:Teacher={
    id:3232,
    name:"omar",
    specialty:"dd",
    courseNum:334

}
let Teacher3:Teacher={
    id:3232,
    name:"fisal",
    specialty:"re",
    courseNum:334

}



type school = {
  name: Teacher;
  id: Teacher;
  specialty:Teacher;
  courseNum:Teacher;
  level:Student;
  isSenior:Student;

};
school.push(Student1,Student2,Student3)

console.log(school);



function Senior(x: any, isSenior: boolean) {

    x.isSenior = isSenior;

    return x;
}

console.log(Senior(school[2], true));

function course(x: any, courseNum: number) {

    x.courseNum = courseNum;

    return x;
}

console.log(course(school[3], 4));

