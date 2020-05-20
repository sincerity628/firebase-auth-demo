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
      if(res.additionalUserInfo.isNewUser) {
        // clear the form
        signupForm.reset();

        // close the modal
        const signupModal = document.getElementById('modal-signup');

        M.Modal.getInstance(signupModal).close();
      }
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
