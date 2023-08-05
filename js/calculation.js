function calculateGeometry(fieldId) {

  const firstInputAmount = document.getElementById(fieldId);
  const getFirstInputAmount = parseFloat(firstInputAmount.value);

  const secondInputAmount = document.getElementById(fieldId);
  const getSecondInputAmount = parseFloat(secondInputAmount.value);

  firstInputAmount.value = '';
  secondInputAmount.value = '';
  return getFirstInputAmount, getSecondInputAmount;
}

function createNewElement(text, areaValue) {
  const Answer = document.createElement("p");
  Answer.innerText = text + areaValue;


  document.getElementById('solution-area').appendChild(Answer);

}


document.getElementById('triangle-calculate').addEventListener('click', function () {

  const returenedBaseValue = calculateGeometry('triangle-base')
  const returenedHightValue = calculateGeometry('triangle-height')

  const triangleAnswer = .5 * returenedBaseValue * returenedHightValue;
  createNewElement('Triangle Area = ', triangleAnswer);

})

document.getElementById('rectangle-calculate').addEventListener('click', function () {
  const returnedWidthAmount = calculateGeometry('rectangle-width');
  const returnedLenghtAmount = calculateGeometry('rectangle-length');

  const rectangleAnswer = returnedWidthAmount * returnedLenghtAmount;
  createNewElement('Rectangle Area = ', rectangleAnswer);


})
document.getElementById('parallelogram-calculate').addEventListener('click', function () {
  const returenedBaseValue = calculateGeometry('parallelogram-base')
  const returenedHightValue = calculateGeometry('parallelogram-hight')

  const parallelogramAnswer = returenedBaseValue * returenedHightValue;
  createNewElement('Parallelogram Area = ', parallelogramAnswer);

})
document.getElementById('rhombus-calculate').addEventListener('click', function () {

  const returenedHand1Value = calculateGeometry('rhombus-hand1')
  const returenedHand2Value = calculateGeometry('rhombus-hand2')

  const rhombusAnswer = .5 * returenedHand1Value * returenedHand2Value;
  createNewElement('Rhombus Area = ', rhombusAnswer);

})
document.getElementById('pentagon-calculate').addEventListener('click', function () {

  const returenedBaseValue = calculateGeometry('pentagon-base')
  const returenedHightValue = calculateGeometry('pentagon-hight')

  const PentagonAnswer = .5 * returenedBaseValue * returenedHightValue;
  createNewElement('Pentagon Area = ', PentagonAnswer);

})
document.getElementById('ellips-calculate').addEventListener('click', function () {

  const returenedAxis1Value = calculateGeometry('ellips-axis1')
  const returenedAxis2tValue = calculateGeometry('ellips-axis2')

  const pi = 3.1416;
  const EllipsAnswer = pi * returenedAxis1Value * returenedAxis2tValue;
  createNewElement('Ellips Area = ', EllipsAnswer);

})

