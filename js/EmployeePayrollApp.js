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
dateError = document.querySelector(".date-error");
var year = document.querySelector("#year");
var month = document.querySelector("#month");
var day = document.querySelector("#day");
let currentDate = new Date();

year.addEventListener("input", checkDate);
month.addEventListener("input", checkDate);
day.addEventListener("input", checkDate);

function checkDate() {
  try {
    let dates =
      document.querySelector("#day").value +
      " " +
      document.querySelector("#month").value +
      " " +
      document.querySelector("#year").value;
    dates = new Date(Date.parse(dates));
    employeePayrollObject.startDate = dates;
    dateError.textContent = "";
  } catch (e) {
    dateError.textContent = e;
  }
}
/// Creating save function for internally creating an employee payroll object and initialise it with the data provided by the user
const save = () => {
  try {
    /// Calling create payroll function to create instance of employee payroll class
    let employeePayrollData = createEmployeePayroll();
  } catch (e) {
    /// Logging the error message if any
    alert(e);
    return;
  }
};
/// Creating the instance of employee payroll class and initialise it with the data provided by the user on UI
const createEmployeePayroll = () => {
  let employeePayrollData = new EmployeePayRoll();
  try {
    employeePayrollData.name = getInputValueById("#name");
  } catch (e) {
    setTextValue(".name-error", e);
  }
  employeePayrollData.profilePic = getSelectedValues("[name=profile]").pop();
  employeePayrollData.gender = getSelectedValues("[name=gender]").pop();
  employeePayrollData.department = getSelectedValues("[name=department]");
  employeePayrollData.salary = getInputValueById("#salary");
  employeePayrollData.note = getInputValueById("#notes");
  let date =
    getInputValueById("#day") +
    "," +
    getInputValueById("#month") +
    "," +
    getInputValueById("#year");
  employeePayrollData.startDate = new Date(Date.parse(date));
  /// Logging the alert to the browser window after the data has been validated.
  alert(employeePayrollData.toString());
  return employeePayrollData;
};
/// Method to fetch the result of the input from the browser input for buttons and checkboxes.
const getSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  let setItems = [];
  allItems.forEach((item) => {
    if (item.checked) selItems.push(item.value);
  });
  return setItems;
};
/// Method to fetch the result of the input from the browser input for id by the user
const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
};
/// Method to fetch the result of the input value from the browser input for id by the user
const getInputElementValue = (id) => {
  let value = document.getElementById(id).value;
  return value;
};
