// UC8 -- Adding the script for the salary range update when user is entering the data
const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener("input", function () {
  output.textContent = salary.value;
});
/// Validation for name by using the instance variable of the employee payroll class
let employeePayrollObject = new EmployeePayRoll();
const name = document.querySelector("#name");
const nameError = document.querySelector(".name-error");
name.addEventListener("input", () => {
  try {
    if (name.value == "") {
      nameError.textContent = "";
    } else {
      employeePayrollObject.name = name.value;
      nameError.textContent = "";
    }
  } catch (e) {
    nameError.textContent = e;
  }
});
/// Validation for the date property entered by the user from the console
//validation for date
dateError= document.querySelector(".date-error");
var year= document.querySelector('#year');
var month= document.querySelector('#month');
var day=document.querySelector('#day');
let currentDate= new Date();

year.addEventListener('input',checkDate);
month.addEventListener('input',checkDate);
day.addEventListener('input',checkDate)

function checkDate(){ 
    try
    {
        let dates= document.querySelector('#day').value+" "+document.querySelector('#month').value+" "+document.querySelector('#year').value;
        dates=new Date(Date.parse(dates));
        employeePayrollObject.startDate=dates;
        dateError.textContent="";
    }
    catch(e)
    {
        dateError.textContent=e;
    }
}