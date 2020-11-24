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
    /// Calling the create or update storage function to push the value to the browser local storage
    createAndUpdateStorage(employeePayrollData);
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
    if (item.checked) setItems.push(item.value);
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
/// Method to parse the input data to the lightweight json type and then push the data to the browser local storage
function createAndUpdateStorage(employeePayrollData){

  /// EmployeePayrollList will be the array of object parsed to JSON format
  let employeePayrollList= JSON.parse(localStorage.getItem("EmployeePayrollList"));
  /// If the employeePayrollData list is not empty i.e. already created then push the incoming data onto the local storage
  if(employeePayrollList!=undefined)
  {
      employeePayrollList.push(employeePayrollData);
  }
  else
  {
      employeePayrollList=[employeePayrollData];
  }
  /// Displaying the alert popup for the user one more time before the local storage has been populated
  alert(employeePayrollList.toString());
  /// Push the data to the local storage
  localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
}

/// UC5 -- Defining the method to reset the form once the reset button is pressed
/// Will be called once the reset button is clicked
const resetForm=() =>
{
  /// Either set to empty or unset the values
  setTextValue('#name','');
  unsetSelectedValues('[name=profile]');
  unsetSelectedValues('[name=gender]');
  unsetSelectedValues('[name=department]');
  setTextValue('#salary','');
  setTextValue('#notes','');
  unsetTextValue('#day');
  unsetTextValue('#month');
  unsetTextValue('#year');
}
/// Method defined to unset the property value changed in the base html and set the select status to be false
const unsetSelectedValues= (propertyValue)=>{
  let allItems= document.querySelectorAll(propertyValue);
  allItems.forEach(items=>{
      items.checked=false;
  });
}
/// Either set the element value with the one passed in as value
const setTextValue=(id,value)=>
{
  const element= document.querySelector(id);
  element.textContent=value;
} 