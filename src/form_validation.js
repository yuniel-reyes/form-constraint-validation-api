export default function validateForm() {
  const emailObject = {
    mail: document.querySelector('input[type="email"]'),
    mailError: document.querySelector('.mail-error'),
  };

  const selectObject = {
    select: document.getElementsByTagName('select')[0],
    countryError: document.querySelector('.country-error'),
  };

  const buttonObject = {
    button: document.getElementsByTagName('button')[0],
  };

  const zipCodeObject = {
    zipCode: document.getElementById('zip-code'),
    zipError: document.querySelector('.zip-error'),
  };

  const firstPassword = {
    first_password: document.querySelector('input[type="password"]'),
    passwordError: document.querySelector('.password-error'),
    passWordValue: document.querySelector('input[type="password"]').value,
  };

  const passwordConfirmation = {
    secondPassword: document.getElementById('password-confirm'),
    secondPasswordError: document.querySelector('.password-confirmation-error'),
  };

  const addHanders = (() => {
    emailObject.mail.addEventListener('blur', (e) => {
      checkEmail(emailObject);
    });
    selectObject.select.addEventListener('blur', (e) => {
      checkSelect(selectObject);
    });
    zipCodeObject.zipCode.addEventListener('blur', (e) => {
      checkZipCode(zipCodeObject);
    });
    firstPassword.first_password.addEventListener('blur', (e) => {
      checkPassWord(firstPassword);
    });
    passwordConfirmation.secondPassword.addEventListener('blur', (e) => {
      checkPassWordConfirmation(passwordConfirmation, firstPassword);
    });
  })();
}

function checkPassWordConfirmation(passwordConfirmation, firstPassword) {
  if (
    passwordConfirmation.secondPassword.value !==
    firstPassword.first_password.value
  ) {
    passwordConfirmation.secondPasswordError.textContent =
      'Passwords must be the same';
    passwordConfirmation.secondPasswordError.style.backgroundColor = 'red';
    passwordConfirmation.secondPasswordError.style.color = 'white';
  } else {
    passwordConfirmation.secondPasswordError.textContent = 'Ok';
    passwordConfirmation.secondPasswordError.style.backgroundColor = 'green';
    passwordConfirmation.secondPasswordError.style.color = 'white';
  }
}

function checkPassWord(firstPassword) {
  if (!firstPassword.first_password.value.match(/[a-z]/g)) {
    firstPassword.first_password.setCustomValidity('');
    firstPassword.first_password.reportValidity();
    firstPassword.passwordError.textContent =
      'Password must cointain at least one lowercase';
    firstPassword.passwordError.style.backgroundColor = 'red';
    firstPassword.passwordError.style.color = 'white';
  } else if (!firstPassword.first_password.value.match(/[A-Z]/g)) {
    firstPassword.passwordError.textContent =
      'Password must cointain at least one uppercase';
    firstPassword.passwordError.style.backgroundColor = 'red';
    firstPassword.passwordError.style.color = 'white';
  } else if (!firstPassword.first_password.value.match(/[0-9]/g)) {
    firstPassword.passwordError.textContent =
      'Password must cointain at least one digit';
    firstPassword.passwordError.style.backgroundColor = 'red';
    firstPassword.passwordError.style.color = 'white';
  } else if (!firstPassword.first_password.value.match(/[\W]/g)) {
    firstPassword.passwordError.textContent =
      'Password must cointain at least one special character';
    firstPassword.passwordError.style.backgroundColor = 'red';
    firstPassword.passwordError.style.color = 'white';
  } else if (!firstPassword.first_password.value.length > 7) {
    firstPassword.passwordError.textContent =
      'Password must be at least 8 characters large';
    firstPassword.passwordError.style.backgroundColor = 'red';
    firstPassword.passwordError.style.color = 'white';
  } else {
    firstPassword.passwordError.textContent = 'Ok';
    firstPassword.passwordError.style.backgroundColor = 'green';
    firstPassword.passwordError.style.color = 'white';
  }
}

function checkZipCode(zipCodeObject) {
  if (zipCodeObject.zipCode.value.length !== 5) {
    zipCodeObject.zipError.textContent =
      'ZIP code value should be of 5 ziffers';
    zipCodeObject.zipError.style.backgroundColor = 'red';
    zipCodeObject.zipError.style.color = 'white';
  } else {
    zipCodeObject.zipError.textContent = 'Ok';
    zipCodeObject.zipError.style.backgroundColor = 'green';
    zipCodeObject.zipError.style.color = 'white';
  }
}

function checkEmail(emailObject) {
  if (emailObject.mail.validity.valueMissing) {
    emailObject.mailError.textContent = 'You need to enter an email address';
    emailObject.mailError.style.backgroundColor = 'red';
    emailObject.mailError.style.color = 'white';
  } else if (emailObject.mail.validity.typeMismatch) {
    emailObject.mailError.textContent =
      'Entered value needs to be an email address';
    emailObject.mailError.style.backgroundColor = 'red';
    emailObject.mailError.style.color = 'white';
  } else if (emailObject.mail.validity.tooShort) {
    emailObject.mailError.textContent = `Email should be at least ${emailObject.mail.minLength} characters`;
    emailObject.mailError.style.backgroundColor = 'red';
    emailObject.mailError.style.color = 'white';
  } else {
    emailObject.mail.setCustomValidity('');
    emailObject.mail.reportValidity();
    emailObject.mailError.textContent = 'Ok';
    emailObject.mailError.style.backgroundColor = 'green';
    emailObject.mailError.style.color = 'white';
  }
}

function checkSelect(selectObject) {
  if (!selectObject.select.validity.valueMissing) {
    selectObject.select.setCustomValidity('');
    selectObject.countryError.textContent = 'Ok';
    selectObject.countryError.style.backgroundColor = 'green';
    selectObject.countryError.style.color = 'white';
  } else {
    selectObject.countryError.textContent = 'Enter a valid value';
    selectObject.countryError.style.backgroundColor = 'red';
    selectObject.countryError.style.color = 'white';
  }
}
