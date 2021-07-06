class Form {
  constructor(email, country, zip, pass, passConf) {
    this.emailElem = email;
    this.countryElem = country;
    this.zipElem = zip;
    this.passElem = pass;
    this.passConfElem = passConf;
    this.submit = this.submit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
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
  validateEmail() {
    const regex = /^[a-z0-9._-]+@[a-z0-9.]{3,}\.[a-z]{2,4}$/i;
    const isValid = regex.test(this.emailElem.value);
    const parentElement = this.emailElem.parentElement;
    const hasErrorMsg = parentElement.lastElementChild.classList.contains('email-error-msg');
    if (!isValid) {
      if (hasErrorMsg == false) {
        const errorMsg = document.createElement('p');
        errorMsg.classList.add('email-error-msg');
        errorMsg.classList.add('form-error-msg');
        errorMsg.textContent = "Your email is not in the right formating: example@email.com!";
        parentElement.appendChild(errorMsg);
      }
    } else {
      if (hasErrorMsg) {
        parentElement.lastElementChild.remove();
      }
    }
    return isValid;
  }
  validateZip() {
    return this.zipElem.value.toString().length == 5;
  }
  validatePassword() {

  }
}

export default Form;