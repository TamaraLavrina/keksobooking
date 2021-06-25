const MAX_PRICE_VALUE = 1000000;
const MIN_BUNGALOW_PRICE_VALUE = 0;
const MIN_FLAT_PRICE_VALUE = 1000;
const MIN_HOTEL_PRICE_VALUE = 3000;
const MIN_HOUSE_PRICE_VALUE = 5000;
const MIN_PALACE_PRICE_VALUE = 10000;
const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');
const roomNumberSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');
const adHousingType = document.querySelector('#type');
const priceInput = document.querySelector('#price');

priceInput.addEventListener('input', () => {
  if (priceInput.value > MAX_PRICE_VALUE) {
    priceInput.setCustomValidity(`Не жадничайте. Маскимальная цена - ${MAX_PRICE_VALUE}`);
  }
  else {
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
});


const getTimeIn = () => {
  timeInSelect.value = timeOutSelect.value;

};

const getTimeOut = () => {
  timeOutSelect.value = timeInSelect.value;
};

adHousingType.addEventListener('change', () => {
  switch (adHousingType.value) {
    case 'bungalow':
      priceInput.setAttribute('min', MIN_BUNGALOW_PRICE_VALUE);
      priceInput.setAttribute('placeholder', MIN_BUNGALOW_PRICE_VALUE);
      break;
    case 'flat':
      priceInput.setAttribute('min', MIN_FLAT_PRICE_VALUE);
      priceInput.setAttribute('placeholder', MIN_FLAT_PRICE_VALUE);
      break;
    case 'hotel':
      priceInput.setAttribute('min', MIN_HOTEL_PRICE_VALUE);
      priceInput.setAttribute('placeholder', MIN_HOTEL_PRICE_VALUE);
      break;
    case 'house':
      priceInput.setAttribute('min', MIN_HOUSE_PRICE_VALUE);
      priceInput.setAttribute('placeholder', MIN_HOUSE_PRICE_VALUE);
      break;
    case 'palace':
      priceInput.setAttribute('min', MIN_PALACE_PRICE_VALUE);
      priceInput.setAttribute('placeholder', MIN_PALACE_PRICE_VALUE);
      break;
  }
  adHousingType.setCustomValidity('');
});


const onRoomChanger = () => {
  if (roomNumberSelect.value === '100' && capacitySelect.value === 0) {
    capacitySelect.setCustomValidity('');
  } else if (roomNumberSelect.value === '100' && capacitySelect.value !== 0) {
    capacitySelect.setCustomValidity('Помещение не предназначено для гостей');
  }  else if (capacitySelect.value > roomNumberSelect.value) {
    capacitySelect.setCustomValidity('Количество гостей не может превышать количество комнат');
  } else {
    capacitySelect.setCustomValidity('');
  }

  capacitySelect.reportValidity();
};

capacitySelect.addEventListener('change', onRoomChanger);
roomNumberSelect.addEventListener('change', onRoomChanger);
timeInSelect.addEventListener('change', getTimeOut);
timeOutSelect.addEventListener('change', getTimeIn);
