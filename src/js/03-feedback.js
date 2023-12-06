import * as _ from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailRef = document.querySelector('input[name="email"]');
const messageRef = document.querySelector('textarea[name="message"]');
const data = {};
let data2storage;
let dataFromStorage = JSON.parse(localStorage.getItem('feedback-form-state'));

if (dataFromStorage) {
    if (dataFromStorage.email) {
        emailRef.value = dataFromStorage.email;
}
    if (dataFromStorage.message) {
        messageRef.value = dataFromStorage.message;
}
}

form.addEventListener('input', _(function (event) {
    data.email = emailRef.value;
    data.message = messageRef.value;
//Зробила саме так, тому що через data[event.target.value]
// при редагуванні тільки 1 поля
//значення іншого очищувалось з локал сторейдж
//(бо запис спрацьовував тільки для поля де проходив івент "інпут")
    
    data2storage = JSON.stringify(data);
    localStorage.setItem('feedback-form-state', data2storage);
}, 500));
form.addEventListener("submit", (event) => {
    event.preventDefault();
    dataFromStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(dataFromStorage);
  localStorage.clear();
  form.reset();
});
