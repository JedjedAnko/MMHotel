// navbar Scroll
window.addEventListener('scroll', function(){
    let navbar = document.querySelector('.navbar');
    if(this.window.scrollY > 20){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
});


// Scroll Up (Instant Smooth Scroll)
document.querySelector('#to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // smooth + fast
    });
});



function showscroll(){
    let TopButton = document.getElementById('to-top');
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        TopButton.classList.add('show')
    }else{
        TopButton.classList.remove('show')
    }
}

window.onscroll = () =>{
    showscroll();
}

// navbar toggle

const menuBtn = document.getElementById('menu_btn')
const navLinks = document.getElementById('nav_links')
const menuIcon = document.querySelector('i');

menuBtn.addEventListener('click',(e)=>{
    navLinks.classList.toggle('open')

    const isOpen = navLinks.classList.contains('open')
    menuIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line')
})


// Modal functionality
function openRoomModal() {
  document.getElementById("roomModal").style.display = "block";
}

function closeRoomModal() {
  document.getElementById("roomModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("roomModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// Change main image when thumbnail is clicked
function changeImage(element) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = element.src;

  // Highlight the active thumbnail
  document.querySelectorAll('.thumbnail').forEach(img => img.classList.remove('active'));
  element.classList.add('active');
}



// FAMILY ROOM Modal Functions
function openFamilyRoomModal() {
  document.getElementById("familyRoomModal").style.display = "block";
}

function closeFamilyRoomModal() {
  document.getElementById("familyRoomModal").style.display = "none";
}

window.onclick = function(event) {
  const familyModal = document.getElementById("familyRoomModal");
  if (event.target === familyModal) {
    familyModal.style.display = "none";
  }
}

// Change main image for FAMILY ROOM
function changeFamilyImage(element) {
  const mainImage = document.getElementById("familyMainImage");
  mainImage.src = element.src;

  // Highlight the active thumbnail
  document.querySelectorAll('#familyRoomModal .thumbnail').forEach(img => img.classList.remove('active'));
  element.classList.add('active');
}



const openVideo = document.getElementById("openVideo");
const closeVideo = document.getElementById("closeVideo");
const videoModal = document.getElementById("videoModal");
const video = videoModal.querySelector("video");

// SHOW MODAL
openVideo.addEventListener("click", () => {
    videoModal.style.display = "flex";
    video.currentTime = 0; // reset video
    video.play(); // play when shown
});

// HIDE MODAL
closeVideo.addEventListener("click", () => {
    video.pause(); // pause video
    video.currentTime = 0; // reset
    videoModal.style.display = "none";
});



function changeCoffeeImage(element) {
    const mainImage = document.getElementById('mainCoffeeImage');
    mainImage.src = element.src;
}
