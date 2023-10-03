
function showContent(tabNumber) {
  const tabs = document.querySelectorAll('.tabs .tab');
  const contents = document.querySelectorAll('.content div');

  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  tabs[tabNumber - 1].classList.add('active');
  contents[tabNumber - 1].classList.add('active');
}
