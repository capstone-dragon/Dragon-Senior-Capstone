const contents = document.querySelectorAll('.content div');

function showContent(tabNumber) {
  contents.forEach(content => content.classList.remove('active'));
  document.getElementById(`content${tabNumber}`).classList.add('active');
}
