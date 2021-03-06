const translateType = {
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
  palace: 'Дворец',
};

const renderCard = (advert) => {
  const popup = document.querySelector('#card')
    .content
    .querySelector('.popup');
  const newPopup = popup.cloneNode(true);
  const title = newPopup.querySelector('.popup__title');
  title.textContent = advert.offer.title;
  if (advert.offer.title === undefined) { title.remove(); }
  const address = newPopup.querySelector('.popup__text--address');
  address.textContent = advert.offer.address;
  if (advert.offer.address === undefined) { address.remove(); }
  const price = newPopup.querySelector('.popup__text--price');
  price.textContent = `${advert.offer.price}${'₽/ночь'}`;
  if (advert.offer.price === undefined) { price.remove(); }
  const type = newPopup.querySelector('.popup__type');
  type.textContent = translateType[advert.offer.type];
  if (advert.offer.type === undefined) { type.remove(); }
  const capacity = newPopup.querySelector('.popup__text--capacity');
  capacity.textContent = `${advert.offer.rooms} ${'комнат для'} ${advert.offer.guests} ${'гостей'}`;
  const time = newPopup.querySelector('.popup__text--time');
  time.textContent = `Заезд после ${advert.offer.checkin}, выезд до ${advert.offer.checkout}`;
  if (advert.offer.time === undefined) { time.remove(); }
  const description = newPopup.querySelector('.popup__description');
  description.textContent = advert.offer.description;
  if (advert.offer.description === undefined) { description.remove(); }


  const featureListElement = newPopup.querySelector('.popup__features');
  featureListElement.innerHTML = '';

  const features = advert.offer.features || [];
  const fragment = document.createDocumentFragment();
  features.forEach((item) => {
    const listElement = document.createElement('li');
    listElement.setAttribute('class', `popup__feature popup__feature--${item}`);
    fragment.appendChild(listElement);
  });
  featureListElement.appendChild(fragment);
  if (featureListElement.children.length === 0) { featureListElement.remove(); }

  const photoElements = newPopup.querySelector('.popup__photos');

  const photoElement = photoElements.querySelector('.popup__photo');
  const arrayPhotos = advert.offer.photos || [];
  arrayPhotos.map((img) => img);
  const photoFragment = document.createDocumentFragment();
  photoElements.innerHTML = '';
  arrayPhotos.forEach((item) => {
    const photo = photoElement.cloneNode(true);
    photo.src = item;
    photoFragment.appendChild(photo);
  });
  photoElements.appendChild(photoFragment);
  if (photoElements.children.length === 0) { photoElements.remove(); }

  const avatar = newPopup.querySelector('.popup__avatar');
  avatar.src = advert.author.avatar;

  return newPopup;

};

export { renderCard };

