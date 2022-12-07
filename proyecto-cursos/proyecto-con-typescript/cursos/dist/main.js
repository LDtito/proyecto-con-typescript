"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let courses = [];
let gradesBookSetup = [];
var Course1;
(function (Course1) {
    Course1["Programacion"] = "Programacion Visual";
    Course1["BaseDatos"] = "Base de Datos";
    Course1["Metodologias"] = "Metodologias";
})(Course1 || (Course1 = {}));
var Area1;
(function (Area1) {
    Area1["Desarrollo"] = "Desarrollo de Software";
    Area1["Marketing"] = "Marketing";
    Area1["Turismo"] = "Turismo";
})(Area1 || (Area1 = {}));
function addStudent() {
    let currentStudent = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        direction: readFormHtml("fullName"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level")
    };
    students.push(currentStudent);
    //console.log(students)
    console.table(students);
}
function addTeacher() {
    let currentTeacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification: parseInt(readFormHtml("identification-teacher")),
        direction: readFormHtml("direction-teacher"),
        title: readFormHtml("title"),
        area: readFormHtml("area-teacher")
    };
    teachers.push(currentTeacher);
    //console.log(teachers)
    console.table(teachers);
}
function addCourses() {
    let currentCourse = {
        nameCourse: readFormHtml("nameCourse"),
        parallel: readFormHtml("parallel"),
        hours: parseInt(readFormHtml("hours")),
    };
    courses.push(currentCourse);
    //console.log(teachers)
    console.table(courses);
}
function addGradeBookSetup() {
    let currentGradeBookSetup = {
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity-gradebook"),
        maximunGrade: parseInt(readFormHtml("maximungrade-gradebook")),
    };
    gradesBookSetup.push(currentGradeBookSetup);
    console.table(gradesBookSetup);
}
function initCourse() {
    let courseGradeBook = document.getElementById("course-gradebook");
    let courses = Object.values(Course1);
    courses.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value,
            courseGradeBook.add(option);
    });
}
initCourse();
function initArea() {
    let areaGradeBook = document.getElementById("area-teacher");
    let areas = Object.values(Area1);
    areas.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value,
            areaGradeBook.add(option);
    });
}
initArea();
function readFormHtml(id) {
    return document.getElementById(id).value;
}
