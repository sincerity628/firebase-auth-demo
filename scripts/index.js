// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);
});


function setupUI(data) {
  const guideList = document.querySelector('.guides');
  const navbar = document.getElementById('nav-mobile');

  if(data.length) {
    // setup the navbar
    navbar.innerHTML = `
      <li class="logged-in">
        <a href="#" class="grey-text modal-trigger" data-target="modal-account">Account</a>
      </li>
      <li class="logged-in">
        <a href="#" class="grey-text" id="logout">Logout</a>
      </li>
      <li class="logged-in">
        <a href="#" class="grey-text modal-trigger" data-target="modal-create">Create Guide</a>
      </li>
    `;

    // setup the guides list
    // 清空 guideList 内部的内容
    guideList.innerHTML = '';

    data.forEach(item => {
      const guide = item.data();
      const liItem = document.createElement('li');
      liItem.innerHTML = `
        <div class="collapsible-header grey lighten-4">${ guide.title }</div>
        <div class="collapsible-body white">${ guide.content }</div>
      `;

      guideList.appendChild(liItem);

    });
  } else {
    // navbar
    navbar.innerHTML = `
      <li class="logged-out">
        <a href="#" class="grey-text modal-trigger" data-target="modal-login">Login</a>
      </li>
      <li class="logged-out">
        <a href="#" class="grey-text modal-trigger" data-target="modal-signup">Sign up</a>
      </li>
    `;
    // guide list
    guideList.innerHTML = `<h5 class="center-align">Login to view all the guides!</h5>`;
  }
}
