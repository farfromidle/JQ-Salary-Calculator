console.log('JS'); //logs that the JS file is connected properly.

const collect = []; //array for the calculator. Information should be pushed here.

$(document).ready(init); //initializing the document

//this function is meant to on click submit the annual salary input by the employee
function init() {
  $('.tableBodyRow').on('submit', calcAnnualSalary);
  $('.tableBody').on('click', '.js-btn-delete', deleteSalary);
}

function deleteSalary(event) {
  console.log('DELETE:', event);
  console.log('DELETE:', this);

  const collectIndex = $(this).data('index');
  console.log('DELETE:', collectIndex);

  // create a function to adjust price
  collect.splice(collectIndex, 1);

  render();
}

//function where on click or submission of information, calculate annual employee salary. Or in this case, show it.
function calcAnnualSalary(event) {
  console.log('submit', event);
  event.preventDefault();
  console.log('This is the annual salary for you.');

  //my object
  const annualSal = {
    annualName: $('.js-input-first-name').val(),
    annualLast: $('.js-input-last-name').val(),
    annualId: $('.js-input-id').val(),
    annualTitle: $('.js-input-jb').val(),
    annualS: parseFloat($('.js-input-annual').val())
  };

  collect.push(annualSal); //meant to push the salary information into the array

  console.log('SALARY', collect);
  render();
}

//render is supposed to make the thing show on the page. I believe this is where my issue is. I wonder if part of this has to do with my naming conventions, or I confused something
function render() {
  $('.tableBody').empty;
  let totalSalary = 0;
  let personSal = 0;

  for (let i = 0; i < collect.length; i++) {
    const personSal = collect[i];
    totalSalary = personSal.annualS;
  }
  //I pulled the above for loop directly from the lesson Myron gave. Perhaps this isn't the correct loop? I think it is, because it still needs to pull the other information

  $('.tableBody').append(
    `<tr><td>${personSal.annualName}</td>
    <td>${personSal.annualLast}</td>
    <td>${personSal.annualID}</td>
    <td>${personSal.annualTitle}</td>
    <td>${personSal.annualS}</td>
    </tr>`
  );
  //The above append is supposed to append the information input, into the table (and add new tr/td as they are added.)
  $('.annSal').text(`$${totalSalary}`);
}
