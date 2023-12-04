var accountinfo = [];

function signup(event) {
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-comfirm_password').value;

    if(!username|| !password){
        alert("Must enter something");
    }else if (confirm === password) {
        const account = { username: username, password: password };
        accountinfo.push(account);

        let myLoginBox = document.getElementById("logIn_box");
        let mySignUpBox = document.getElementById("signUp_box");

        mySignUpBox.classList.remove("old-signUp-box");
        mySignUpBox.classList.add("new-signUp-box");

        mySignUpBox.classList.add("old-signUp-box");
        mySignUpBox.classList.remove("new-signUp-box");
        

        myLoginBox.classList.remove("old-login-box");
        myLoginBox.classList.add("new-login-box");
        myLoginBox.classList.remove("new-login-box");
        myLoginBox.classList.add("old-login-box"); 
    }
}

function login(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    const account = accountinfo.find(account => account.username === username && account.password === password);

    if (account) {
        // Set a flag in local storage to indicate the user is logged in
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', username);

        // Redirect to the main page
        window.location.href = 'MainPage.html';
    } else {
        alert("Enter a valid username or password");
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
}
function loginPage(){
    let myLoginBox = document.getElementById("logIn_box");
    let mySignUpBox = document.getElementById("signUp_box");

    mySignUpBox.classList.remove("new-signUp-box");
    mySignUpBox.classList.add("old-signUp-box");

    myLoginBox.classList.remove("new-login-box");
    myLoginBox.classList.add("old-login-box");
}
function signUpPage(){
    let myLoginBox = document.getElementById("logIn_box");
    let mySignUpBox = document.getElementById("signUp_box");

    mySignUpBox.classList.remove("old-signUp-box");
    mySignUpBox.classList.add("new-signUp-box");

    myLoginBox.classList.remove("old-login-box");
    myLoginBox.classList.add("new-login-box");
}