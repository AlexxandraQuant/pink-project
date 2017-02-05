var form = document.querySelector('form');
var popup = document.querySelectorAll('.modal-content');
var failPopup = document.querySelector('.modal-content--fail');
var successPopup = document.querySelector('.modal-content--success');
var wrapperPopup = document.querySelector('.modal-content__wrapper');
var userName = form.querySelector('[name=first-name]');
var userLastName = form.querySelector('[name=last-name]');
var userEmail = form.querySelector('[name=email]');
var userStory = form.querySelector('[name=emotions-description]');
var closeSuccessPopup = successPopup.querySelector('.btn--close');
var closeFailPopup = failPopup.querySelector('.btn--close');

document.addEventListener("DOMContentLoaded", function(ready) {
  userName.removeAttribute("required");
  userLastName.removeAttribute('required');
  userEmail.removeAttribute('required');
  userStory.removeAttribute('required');
  console.log('no required');
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!userName.value || !userLastName.value || !userEmail.value || !userStory.value) {
    failPopup.classList.add('modal-content--visible');
    console.log('провал');
  } else {
    successPopup.classList.add('modal-content--visible');
    console.log('success');
    // messagePopup.focus();
  }

  if (!userName.value) {
    userName.classList.add('user-info__form-item--fail');
  }

  if (!userLastName.value) {
    userLastName.classList.add('user-info__form-item--fail');
  }

  if (!userEmail.value) {
    userEmail.classList.add('user-info__form-item--fail');
  }

  if (!userStory.value) {
    userStory.classList.add('user-info__form-item--fail');
  }

  wrapperPopup.focus();
  console.log('focus');
});

closeFailPopup.addEventListener('click', function(event) {
  event.preventDefault();
  if (failPopup.classList.contains('modal-content--visible')) {
    failPopup.classList.remove('modal-content--visible');
  }
});

closeSuccessPopup.addEventListener('click', function(event) {
  event.preventDefault();
  if (successPopup.classList.contains('modal-content--visible')) {
    successPopup.classList.remove('modal-content--visible');
  }
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains('modal-content--visible')) {
      popup.classList.remove('modal-content--visible');
    }
  }
});

