var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



// footer slider
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// footer slider


// btn active
function toggleClass() {
  document.getElementById("popup-1").classList.toggle('active');
}

function toggleClassKpay() {
  document.getElementById("popup-2").classList.toggle('active');
}

function toggleClassWavepay() {
  document.getElementById("popup-3").classList.toggle('active');
}

function toggleClassCbpay() {
  document.getElementById("popup-4").classList.toggle('active');
}

function toggleClassOnepay() {
  document.getElementById("popup-5").classList.toggle('active');
}

function toggleClassMytelpay() {
  document.getElementById("popup-6").classList.toggle('active');
}

function toggleClassAyabank() {
  document.getElementById("popup-7").classList.toggle('active');
}

function toggleClassKbzbank() {
  document.getElementById("popup-8").classList.toggle('active');
}

function toggleClassYomabank() {
  document.getElementById("popup-9").classList.toggle('active');
}

function toggleClassAgdbank() {
  document.getElementById("popup-10").classList.toggle('active');
}

toggleClassChangePassword

function toggleClassChangePassword() {
  document.getElementById("popup-1").classList.toggle('active');
}



function toggleClassUpdateLevel2() {
  document.getElementById("popup-2").classList.toggle('active');
}

function toggleClassEditusername() {
  document.getElementById("popup-3").classList.toggle('active');
}

function toggleClassEditemail() {
  document.getElementById("popup-4").classList.toggle('active');
}

function toggleClassEditphone() {
  document.getElementById("popup-5").classList.toggle('active');
}

function toggleClassEditbirthdate() {
  document.getElementById("popup-6").classList.toggle('active');
}

function toggleClassTransfer() {
  document.getElementById("popup-27").classList.toggle('active');
}

// accountpay active






