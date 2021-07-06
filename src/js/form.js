class Form {
  constructor(email, country, zip, pass, passConf) {
    this.emailElem = email;
    this.countryElem = country;
    this.zipElem = zip;
    this.passElem = pass;
    this.passConfElem = passConf;
    this.submit = this.submit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateZip = this.validateZip.bind(this);
  }
  submit(e) {
    e.preventDefault();
    console.log('');
    console.log(`Email: ${this.emailElem.value}`);
    console.log(`Email is valid: ${this.validateEmail()}`);

    console.log(`Country: ${this.countryElem.value}`);
    console.log(`Zip: ${this.zipElem.value}`);
    console.log(`Zip is valid: ${this.validateZip()}`);
    console.log(`Password: ${this.passElem.value}`);
    console.log(`PasswordConfirmation: ${this.passConfElem.value}`);
    this.highfive()
  }
  highfive() {
    console.log('High Five!!!');
  }
  addRemoveErrorMsg(isValid, hasErrorMsg, parentElement, errorMsgText) {
    if (!isValid) {
      if (hasErrorMsg == false) {
        const errorMsg = document.createElement('p');
        errorMsg.classList.add('form-error-msg');
        errorMsg.textContent = errorMsgText;
        parentElement.appendChild(errorMsg);
      }
    } else {
      if (hasErrorMsg) {
        parentElement.lastElementChild.remove();
      }
    }
  }
  validateEmail() {
    const regex = /^[a-z0-9._-]+@[a-z0-9.]{3,}\.[a-z]{2,4}$/i;
    const isValid = regex.test(this.emailElem.value);
    const parentElement = this.emailElem.parentElement;
    const hasErrorMsg = parentElement.lastElementChild.classList.contains('form-error-msg');
    const errorMsgText = "Your email is not in a valid format, Please use a valid format like: example@email.com"
    this.addRemoveErrorMsg(isValid,
      hasErrorMsg,
      parentElement,
      errorMsgText);
    return isValid;
  }
  validateZip() {
    const isValid = this.zipElem.value.toString().length == 5;
    const parentElement = this.zipElem.parentElement;
    const hasErrorMsg = parentElement.lastElementChild.classList.contains('form-error-msg');
    const errorMsgText = "Your zip code should be a valid 5-digit ZipCode";
    this.addRemoveErrorMsg(isValid,
      hasErrorMsg,
      parentElement,
      errorMsgText);
    return isValid;
  }
  validatePassword() {

  }
}

export default Form;