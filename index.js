

function showContent(tabNumber) {
  const contents = document.querySelectorAll('.content div');
  contents.forEach(content => content.classList.remove('active'));
  document.getElementById(`content${tabNumber}`).classList.add('active');
}
