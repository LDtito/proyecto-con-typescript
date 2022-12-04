import { Course } from "./entities/course.entity";
import { GradeBookSetup } from "./entities/gradeBook.Setup";
import { Student } from "./entities/student.entity";
import { Teacher } from "./entities/teacher.entity";

let students:Student[] = [];
let teachers:Teacher[] = [];
let courses:Course[] = [];
let gradesBookSetup: GradeBookSetup[] = [];

enum Course1{
    Programacion = "Programacion Visual",
    BaseDatos = "Base de Datos",
    Metodologias = "Metodologias",
}
enum Area1{
    Desarrollo = "Desarrollo de Software",
    Marketing = "Marketing",
    Turismo = "Turismo",
}

function addStudent():void{
    let currentStudent: Student = {
        fullName: readFormHtml("fullName"),
        identification:parseInt(readFormHtml("identification")),
        direction: readFormHtml("fullName"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level")
    }
    students.push(currentStudent);
    //console.log(students)
    console.table(students)
}


function addTeacher():void{
    let currentTeacher: Teacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification:parseInt(readFormHtml("identification-teacher")),
        direction: readFormHtml("direction-teacher"),
        title: readFormHtml("title"),
        area : readFormHtml("area-teacher")
    }
    teachers.push(currentTeacher);
    //console.log(teachers)
    console.table(teachers)
}

function addCourses():void{
    let currentCourse: Course = {
        nameCourse: readFormHtml("nameCourse"),
        parallel:readFormHtml("parallel"),
        hours:parseInt(readFormHtml("hours")),
    }
    courses.push(currentCourse);
    //console.log(teachers)
    console.table(courses)
}

function addGradeBookSetup(): void {
    let currentGradeBookSetup: GradeBookSetup = {   
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity-gradebook"),
        maximunGrade: parseInt(readFormHtml("maximungrade-gradebook")),
    }
    gradesBookSetup.push(currentGradeBookSetup);
    console.table(gradesBookSetup);
}

function initCourse():void{
    let courseGradeBook = document.getElementById("course-gradebook") as HTMLSelectElement;
    let courses = Object.values(Course1);
courses.forEach(
    (value) => {
     let option = document.createElement("option"); 
       option.value = value;
       option.text = value,
       courseGradeBook.add(option);
    }
);
}
initCourse();
function initArea():void{
    let areaGradeBook = document.getElementById("area-teacher") as HTMLSelectElement;
    let areas = Object.values(Area1);
areas.forEach(
    (value) => {
     let option = document.createElement("option"); 
       option.value = value;
       option.text = value,
       areaGradeBook.add(option);
    }
);
}
initArea();

function readFormHtml(id:string):string{
    return (<HTMLInputElement>document.getElementById(id)).value;

}