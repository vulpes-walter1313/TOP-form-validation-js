class Form {
  constructor(email, country, zip, pass, passConf) {
    this.emailElem = email;
    this.countryElem = country;
    this.zipElem = zip;
    this.passElem = pass;
    this.passConfElem = passConf;
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    // e.preventDefault();
    console.log(`Email: ${this.emailElem.value}`);
    console.log(`Country: ${this.countryElem.value}`);
    console.log(`Zip: ${this.zipElem.value}`);
    console.log(`Password: ${this.passElem.value}`);
    console.log(`PasswordConfirmation: ${this.passConfElem.value}`);
  }
}

export default Form;