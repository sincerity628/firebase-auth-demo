// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);
});

// setup the guides list
function setupGuideList(data) {
  const guideList = document.querySelector('.guides');

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
}
