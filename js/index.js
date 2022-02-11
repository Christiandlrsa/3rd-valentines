window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      lightbox_close();
    }
  }
  
  function lightbox_open() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
  }
  
  function lightbox_close() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
  }


function clickme(){
  window.location = 'main.html';
}

const open_btn = document.querySelector('.open_modal');
const close_btn = document.querySelector('.close_modal');
const modal = document.querySelector('.modal');

open_btn.addEventListener('click', toggleModal);
close_btn.addEventListener('click', toggleModal);

function toggleModal () {
 modal.classList.toggle('is-visible');
}

gsap.from(".banner", {opacity:0,duraction:2, delay:0.2, x:60})
gsap.from(".sub-title", {opacity:0,duraction:2, delay:0.8, y:25})
gsap.from(".btn1", {opacity:0,duraction:2, delay:1, y:25, ease:'expo.out', stagger:.2})
