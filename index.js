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

var showa = document.getElementById("showa");
var showb = document.getElementById("showb");
var show1 = document.getElementById("show1");
var show2 = document.getElementById("show2");
var show3 = document.getElementById("show3");
var show4 = document.getElementById("show4");
var showmore1 = document.getElementById("showmore1");
var showless1 = document.getElementById("showless1");
var showmore2 = document.getElementById("showmore2");
var showless2 = document.getElementById("showless2");


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
  showa.style.display = 'block';
  show1.style.display = 'block';
  showless1.style.display = 'none';


  showb.style.display = 'block';
  show3.style.display = 'block';
  showless2.style.display = 'none';


  showmore1.onclick = function() {
    show2.classList.add('active');
    this.style.display = 'none';
    showless1.style.display = 'block';

  }

  showmore2.onclick = function() {
    show4.classList.add('active');
    this.style.display = 'none';
    showless2.style.display = 'block';

  }

  showless1.onclick = function() {
    show2.classList.remove('active');
    this.style.display = 'none';
    showmore1.style.display = 'block';

  }

  showless2.onclick = function() {
    show4.classList.remove('active');
    this.style.display = 'none';
    showmore2.style.display = 'block';

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
