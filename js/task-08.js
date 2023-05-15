let formEl = document.querySelector('.login-form');
let submitBtn = formEl.querySelector('button[type="submit"]');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
      } = event.currentTarget;

      const formData = { 
        email: email.value, 
        password: password.value, 
    };

    if (formData.email.trim() === '' || formData.password.trim() === '') {
        alert('Всі поля повинні бути заповнені.');
        return;
    }

    console.log(formData);
      
    event.currentTarget.reset();
}

