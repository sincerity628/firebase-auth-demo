// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);
});

// signup function
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (e => {
  e.preventDefault();

  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // signup with firebase
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      // clear the form
      signupForm.reset();

      // close the modal
      const signupModal = document.getElementById('modal-signup');

      M.Modal.getInstance(signupModal).close();
    })
    .catch(error => {
      console.log(error);
    })
}));

// sign out
const logout = document.getElementById('logout');
logout.addEventListener('click', () => {

  auth
    .signOut()
    .then(() => {
      console.log('user logout.');
    })
    .catch(error => {
      console.log(error);
    })
});

// login
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // login with firebase
  auth
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      const user = res.user;
      // clear the form
      loginForm.reset();

      // close the modal
      const loginModal = document.getElementById('modal-login');

      M.Modal.getInstance(loginModal).close();
    })
    .catch(error => {
      console.log(error);
      alert(error.message);
    })
});
