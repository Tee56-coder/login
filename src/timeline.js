let database = JSON.parse(localStorage.getItem('users'));
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
const theName = document.getElementById('name');

// console.log(currentUser);

const search = database.find(function(user){
    return (user.username === currentUser.username) || user.email === currentUser.username;
})
    console.log(search);    
theName.innerText = 'Hello, Welcome ' + search.name;
