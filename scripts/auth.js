// 监听用户登录状态变化
auth.onAuthStateChanged(user => {
  setupUI(user);

  if(user) {
    // 获取数据库内的内容
    db
      .collection('guides')
      .get()
      .then(snapshot => {
        setupGuides(snapshot.docs);
      })
  } else {
    // 用户未登录
    setupGuides([]);
  }
})

// signup function
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', e => {
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
});

// sign out
const logout = document.getElementById('logout');
logout.addEventListener('click', () => {
  auth.signOut();
});

// login
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // login with firebase
  auth
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      // clear the form
      loginForm.reset();

      // close the modal
      const loginModal = document.getElementById('modal-login');

      M.Modal.getInstance(loginModal).close();
    })
    .catch(error => {
      alert(error.message);
    })
});
