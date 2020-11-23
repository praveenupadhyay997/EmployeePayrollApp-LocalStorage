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
const date = document.querySelector("#date");
/// Using the event listener for the input of the date property
date.addEventListener("input", function () {
  let startDate =
    getInputValueById("#day") +
    " " +
    getInputValueById("#month") +
    " " +
    getInputValueById("#year");

  try {
    employeePayrollObject.startDate = new Date(Date.parse(startDate));
    setTextValue(".date-error", "");
  } catch (e) {
    setTextValue(".date-error", e);
  }
});
/// Setting the element's text content
const setTextValue = (id, value) => 
{
    const element = document.querySelector(id); 
    element.textContent = value; 
} 
