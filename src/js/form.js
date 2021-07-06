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
    this.validatePassword = this.validatePassword.bind(this);
    this.validatePasswordConf = this.validatePasswordConf.bind(this);
  }
  submit(e) {
    e.preventDefault();
    const validEmail = this.validateEmail();
    const validZip = this.validateZip();
    const validatePassword = this.validatePassword();
    const validatePasswordConf = this.validatePasswordConf();

    const submitReady = [validEmail, validZip, validatePassword, validatePasswordConf]
    .every(val => val === true);
    if (submitReady) {
      this.highfive()
    } else {
      alert('Form not filled in correctly');
    }
  }
  highfive() {
    alert('High Five!!!');
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
    const isValid = this.passElem.value.length >= 14;
    const parentElement = this.passElem.parentElement;
    const hasErrorMsg = parentElement.lastElementChild.classList.contains('form-error-msg');
    const errorMsgText = "Password should be at least 14 characters long and hard to guess";
    this.addRemoveErrorMsg(isValid,
      hasErrorMsg,
      parentElement,
      errorMsgText);
    return isValid;
  }
  validatePasswordConf() {
    const isValid = this.passConfElem.value === this.passElem.value;
    const parentElement = this.passConfElem.parentElement;
    const hasErrorMsg = parentElement.lastElementChild.classList.contains('form-error-msg');
    const errorMsgText = "The passwords do not match";
    this.addRemoveErrorMsg(isValid,
      hasErrorMsg,
      parentElement,
      errorMsgText);
    return isValid;
  }
}

export default Form;