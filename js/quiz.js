const question_one = document.querySelector('#option1');
const question_two = document.querySelector('#option2');
const question_three = document.querySelector('#option3');
const question_four = document.querySelector('#option4');
const question_five = document.querySelector('#option5');
const question_six = document.querySelector('#option6');
const question_seven = document.querySelector('#option7');
const question_8 = document.querySelector('#option8');
const question_nine = document.querySelector('#option9');
const question_10 = document.querySelector('#option10');
const question_11 = document.querySelector('#option11');
const question_12 = document.querySelector('#option12');
const question_13 = document.querySelector('#option13');
const question_14 = document.querySelector('#option14');
const question_15 = document.querySelector('#option15');

// HIDE LOADER
document.querySelector('#loading').style.display = 'none';

// HIDE RESULTS
document.querySelector('#results1').style.display = 'none';
document.querySelector('#results2').style.display = 'none';
document.querySelector('#results3').style.display = 'none';
document.querySelector('#results4').style.display = 'none';
document.querySelector('#modal-close').style.display = 'none';

const form = document.querySelector('#main-form');

let beans = 0;
let pingu = 0;
let dooda = 0;

document.querySelector('#modal-close').addEventListener('click', clearAll);
document.querySelector('#reset').addEventListener('click', clearAll);

form.addEventListener('submit', function (e) {
  document.querySelector('#loading').style.display = 'block';

  setTimeout(calcResults, 1000);

  e.preventDefault();
});

function calcResults(e) {
  if (question_one.checked) {
    dooda += 1;
  }

  if (question_two.checked) {
    beans += 1;
  }

  if (question_three.checked) {
    pingu += 1;
  }

  if (question_four.checked) {
    dooda += 1;
  }

  if (question_five.checked) {
    pingu += 1;
  }

  if (question_six.checked) {
    beans += 1;
  }

  if (question_seven.checked) {
    beans += 1;
  }

  if (question_8.checked) {
    pingu += 1;
  }

  if (question_nine.checked) {
    dooda += 1;
  }

  if (question_10.checked) {
    beans += 1;
  }

  if (question_11.checked) {
    dooda += 1;
  }

  if (question_12.checked) {
    pingu += 1;
  }
  
  if (question_13.checked) {
    dooda += 1;
  }

  if (question_14.checked) {
    pingu += 1;
  }

  if (question_15.checked) {
    beans += 1;
  }


  console.log(`Beans = ${beans} // Pingu = ${pingu} // Dooda = ${dooda}`);

  // Hide loader
  document.querySelector('#loading').style.display = 'none';

  if (beans > dooda && beans > pingu) {
    document.querySelector('#results1').style.display = 'block';
  } else if (dooda > beans && dooda > pingu) {
    document.querySelector('#results3').style.display = 'block';
  } else if (pingu > beans && pingu > dooda) {
    document.querySelector('#results2').style.display = 'block';
  }
  else {
    document.querySelector('#results4').style.display = 'block';
  }



  document.querySelector('#modal-close').style.display = 'inline';

  // Show results
}

function clearAll() {
  beans = 0;
  pingu = 0;
  dooda = 0;

  // HIDE LOADER
  document.querySelector('#loading').style.display = 'none';

  // HIDE RESULTS
  document.querySelector('#results1').style.display = 'none';
  document.querySelector('#results2').style.display = 'none';
  document.querySelector('#results3').style.display = 'none';
  document.querySelector('#modal-close').style.display = 'none';

}
