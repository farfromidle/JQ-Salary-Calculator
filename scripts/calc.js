console.log('JS'); //logs that the JS file is connected properly.

const collect = []; //array for the calculator

$(document).ready(init); //initializing the document

//this function is meant to on click submit the annual salary input by the employee
function init() {
  $('.js-click-calc-salary').on('submit', calcAnnualSalary);
}

//function where on click or submission of information, calculate annual employee salary. Or in this case, show it.
function calcAnnualSalary(event) {
  event.preventDefault();
  console.log('submit', event);
  console.log('This is the annual salary for you.');

  //my object
  const annualSal = {
    annualName: $('.js-input-first-name').val(),
    annualLast: $('.js-input-last-name').val(),
    annualId: $('.js-input-id').val(),
    annualTitle: $('.js-input-jb').val(),
    annualS: $('.js-input-annual').val()
  };

  collect.push(annualSal); //meant to push the salary information into the array

  console.log('SALARY', collect);
  render();
}

//render is supposed to make the thing show on the page. I believe this is where my issue is. I wonder if part of this has to do with my naming conventions, or I confused something
function render() {
  $('.tableBody').empty;
  //   let totalSalary = 0;

  for (let i = 0; i < collect.length; i++) {
    annualSal = collect[i];
    totalSalary = annualS;
  }
  //I pulled the above for loop directly from the lesson Myron gave. Perhaps this isn't the correct loop? I think it is, because it still needs to pull the other information

  $('.tableBody').append(
    `<tr><td>${annualSal.annualName}</td>
    <td>${eachEmployee.annualLast}</td>
    <td>${eachEmployee.annualID}</td>
    <td>${eachEmployee.annualTitle}</td>
    <td>${eachEmployee.annualS}</td></tr>`
  );
  //The above append is supposed to append the information input, into the table (and add new tr/td as they are added.)
  $('annSal').text(`$${totalSalary}`);
}
