// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);
});

const guideList = document.querySelector('.guides');
const loggedInLinks = document.querySelectorAll('.logged-in');
const loggedOutLinks = document.querySelectorAll('.logged-out');

function setupUI(user) {
  if(user) {
    // toggle the loggedIn links
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // toggle the loggedOut links
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
}

// setup the guides list
function setupGuides(data) {
  if(data.length) {
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
    // guide list
    guideList.innerHTML = `<h5 class="center-align">Login to view all the guides!</h5>`;
  }
}
