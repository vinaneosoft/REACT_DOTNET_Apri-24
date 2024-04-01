

let student={
    studId:5678,
    studName:"Ravi Kumar",
    studPercentage:78.9
}
let id=student.studId;
let sname=student.studName;
/** object destructruring */
let {studId,studName,studPercentage}=student;
console.log(studId);

let {sid,ssname,sperc}=student; // wrong
console.log(sid);

let neoemployee={
    empId:5678,
    empName:"Ravi Kumar",
    empSalary:5678980
}

let empId, empName, empSalary;
({empId,empName,empSalary}=neoemployee);
