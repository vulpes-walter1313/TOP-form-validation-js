import "./css/style.scss";
import Form from './js/form.js';

const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zip = document.querySelector('#zip');
const password = document.querySelector('#password');
const passwordConf = document.querySelector('#pass-confirm');
let form = new Form(email, country, zip, password, passwordConf);

const submit = document.querySelector('#submit-btn');
const formElement = document.querySelector('form');

formElement.addEventListener('submit', form.submit);
submit.addEventListener('click', form.submit);
email.addEventListener('input', form.validateEmail);
zip.addEventListener('input', form.validateZip);
password.addEventListener('input', form.validatePassword);
passwordConf.addEventListener('input', form.validatePasswordConf)