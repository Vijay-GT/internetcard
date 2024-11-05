function showSignUpForm() {
 document.getElementById('sign-in-form').style.display = 'none';
 document.getElementById('sign-up-form').style.display = 'block';
}

function showSignInForm() {
 document.getElementById('sign-up-form').style.display = 'none';
 document.getElementById('sign-in-form').style.display = 'block';
}
let userinfo={}
function signUp() {
 

 userinfo.email =document.getElementById('signup-email').value;
 userinfo.password=document.getElementById('signup-password').value;
          
  userinfo.confirmPassword=document.getElementById('confirm-password').value;
 var payload = JSON.stringify(userinfo)
 localStorage.setItem("userinfo",payload)

 if (userinfo.email && userinfo.password && userinfo.confirmPassword) {
     if (userinfo.password === userinfo.confirmPassword) {
         localStorage.setItem('userEmail', userinfo.email);
         localStorage.setItem('userPassword', userinfo.password );
         alert('Signup successful!');
         showSignInForm();
     } else {
         alert('Passwords do not match.');
     }
 } else {
     alert('Please fill in all fields.');
 }
}

  var userinfologin={}

  function login() {
     userinfologin.email = document.getElementById('user-email').value;
     userinfologin.password = document.getElementById('user-password').value;
     var payload = JSON.stringify(userinfologin);
     localStorage.setItem("userinfologin", payload);
 
     // Retrieve and parse the stored user info
     let stored = localStorage.getItem('userinfo');
     let storedUserinfo = JSON.parse(stored);
 
     // Check if email and password match
     if (userinfologin.email === storedUserinfo.email && userinfologin.password === storedUserinfo.password) {
         alert('Login successful!');
     } else {
         alert('Invalid email or password.');
        }
    }

