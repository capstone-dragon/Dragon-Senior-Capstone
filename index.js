var tab1 = document.getElementById("tab1");
var tab2 = document.getElementById("tab2");
var tab3 = document.getElementById("tab3");
var tab4 = document.getElementById("tab4");
var tab5 = document.getElementById("tab5");


var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");
var content5 = document.getElementById("content5");

var show = document.getElementById("show");
var show1 = document.getElementById("show1");
var show2 = document.getElementById("show2");
var showmore = document.getElementById("showmore");
var showless = document.getElementById("showless");



tab1.classList.add('active');
content1.classList.add('active');



tab1.onclick = function() {
  tab1.classList.add('active');
  content1.classList.add('active');

  tab2.classList.remove('active');
  content2.classList.remove('active');

  tab3.classList.remove('active');
  content3.classList.remove('active');

  tab4.classList.remove('active');
  content4.classList.remove('active');

  tab5.classList.remove('active');
  content5.classList.remove('active');

}

tab2.onclick = function() {
  tab2.classList.add('active');
  content2.classList.add('active');

  tab1.classList.remove('active');
  content1.classList.remove('active');

  tab3.classList.remove('active');
  content3.classList.remove('active');

  tab4.classList.remove('active');
  content4.classList.remove('active');

  tab5.classList.remove('active');
  content5.classList.remove('active');

}


tab3.onclick = function() {
  tab3.classList.add('active');
  content3.classList.add('active');

  tab1.classList.remove('active');
  content1.classList.remove('active');

  tab2.classList.remove('active');
  content2.classList.remove('active');

  tab4.classList.remove('active');
  content4.classList.remove('active');

  tab5.classList.remove('active');
  content5.classList.remove('active');

}


tab4.onclick = function() {
  tab4.classList.add('active');
  content4.classList.add('active');
  show.classList.add('active');
  show1.classList.add('active');
  showless.style.display = 'none';


  showmore.onclick = function() {
    show2.classList.add('active');
    this.style.display = 'none';
    showless.style.display = 'block';

  }

  showless.onclick = function() {
    show2.classList.remove('active');
    this.style.display = 'none';
    showmore.style.display = 'block';

  }

  tab1.classList.remove('active');
  content1.classList.remove('active');

  tab3.classList.remove('active');
  content3.classList.remove('active');

  tab2.classList.remove('active');
  content2.classList.remove('active');

  tab5.classList.remove('active');
  content5.classList.remove('active');

}


tab5.onclick = function() {
  tab5.classList.add('active');
  content5.classList.add('active');

  tab1.classList.remove('active');
  content1.classList.remove('active');

  tab3.classList.remove('active');
  content3.classList.remove('active');

  tab4.classList.remove('active');
  content4.classList.remove('active');

  tab2.classList.remove('active');
  content2.classList.remove('active');

}
