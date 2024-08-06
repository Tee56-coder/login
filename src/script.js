const signUpForm = document.getElementById('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');

const database = JSON.parse(localStorage.getItem('users')) || []

signUpForm.addEventListener('submit', function(e){
    e.preventDefault();

    if(fullName.value === '' || password.value === '' || username.value === '') {
        alert('Please fill all necessary fields!');
        return;
    }
    const newUser = {
        name: fullName.value,
        email: email.value,
        username: username.value,
        password: password.value
    }

    database.push(newUser);
    storeData();

    fullName.value = '';
    email.value = '';
    username.value = '';
    password.value = '';

    window.location.pathname = '/pages/login.html';
    console.log(database);
})

function storeData () {
    localStorage.setItem('users', JSON.stringify(database));
}