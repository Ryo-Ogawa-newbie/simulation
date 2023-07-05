function updateEquation() {
  var coefficientA = document.getElementById('inputA').value;
  var coefficientB = document.getElementById('inputB').value;
  var coefficientC = document.getElementById('inputC').value;
  
  document.getElementById('coefficientA').textContent = coefficientA;
  document.getElementById('coefficientB').textContent = coefficientB;
  document.getElementById('coefficientC').textContent = coefficientC;
}

var showButton = document.getElementById('showButton');
var inputField = document.getElementById('inputField');
var submitp = document.getElementById('submitp');

showButton.addEventListener('click', function() {
  inputField.style.display = 'block';
});

submitButton.addEventListener('click', function() {
  var numberInput = document.getElementById('numberInput');
  var number = parseInt(numberInput.value);
  
  if (!isNaN(number)) {
    // 数字が入力された場合の処理
    console.log("入力された数字: " + number);
  } else {
    // 数字以外が入力された場合の処理
    console.log("数字を入力してください");
  }

  // 数字入力欄を非表示にする
  inputField.style.display = 'none';

  // 数字入力欄の値をリセットする
  numberInput.value = '';
});
