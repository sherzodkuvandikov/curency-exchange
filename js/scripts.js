var elCurrencyBtn = document.querySelector('.currency-btn');
var elOutPutAmount = document.querySelector('.currency-out');

elCurrencyBtn.addEventListener('click', function(evt) {
  var elMoneyAmount = parseFloat(document.querySelector('.money-amount').value);
  var elCurrencyType = parseFloat(document.querySelector('.currency-type').value);

  var currencySolution = (elMoneyAmount * elCurrencyType).toFixed(2);
   elOutPutAmount.value = `${currencySolution} so'm`
   evt.preventDefault();
});
