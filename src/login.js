const database = JSON.parse(localStorage.getItem('users')) || []

const logInForm = document.getElementById('form');
const formUsername = document.getElementById('username');
const formPassword = document.getElementById('password');

logInForm.addEventListener('submit', function(e) {
    e.preventDefault();

    if(!formUsername.value || !formPassword.value) {
        alert('Please enter username and password!');
        return;
    }

    const validator = function() {
        for (let i = 0; i < database.length; i++){
            const { email, username, password } = database[i];
            if((username === formUsername.value || email === formUsername.value) && password === formPassword.value) {
                return true;
            }
        }
        
        return false; 
    }

    if(validator()) {
        alert('success!');

            const loggedUser = {
                    username: formUsername.value,
                    password: formPassword.value
                }
            
            // console.log(loggedUser);

            localStorage.setItem('currentUser', JSON.stringify(loggedUser));
            window.location.pathname = 'pages/timeline.html';
        } else {
            alert('wrong username or password!');
            return;
    }
})
