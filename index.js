// ================================
// Navbar Scroll Effect
// ================================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    // Navbar background
    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Scroll-to-top button
    const topButton = document.getElementById("to-top");
    if (window.scrollY > 100) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }
});


// ================================
// Scroll To Top
// ================================
const topBtn = document.getElementById("to-top");

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// ================================
// Mobile Navbar Toggle
// ================================
const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav_links");
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {
        menuIcon.className = "ri-close-line";
    } else {
        menuIcon.className = "ri-menu-line";
    }

});


// Close menu after clicking a link (Mobile)
document.querySelectorAll("#nav_links a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 850) {

            navLinks.classList.remove("open");
            menuIcon.className = "ri-menu-line";

        }

    });

});


// ================================
// Room Modal
// ================================
function openRoomModal() {
    document.getElementById("roomModal").style.display = "block";
}

function closeRoomModal() {
    document.getElementById("roomModal").style.display = "none";
}

function changeImage(element) {

    document.getElementById("mainImage").src = element.src;

    document.querySelectorAll("#roomModal .thumbnail").forEach(img => {
        img.classList.remove("active");
    });

    element.classList.add("active");
}


// ================================
// Family Room Modal
// ================================
function openFamilyRoomModal() {
    document.getElementById("familyRoomModal").style.display = "block";
}

function closeFamilyRoomModal() {
    document.getElementById("familyRoomModal").style.display = "none";
}

function changeFamilyImage(element) {

    document.getElementById("familyMainImage").src = element.src;

    document.querySelectorAll("#familyRoomModal .thumbnail").forEach(img => {
        img.classList.remove("active");
    });

    element.classList.add("active");
}


function openFunctionModal() {
    document.getElementById("functionModal").style.display = "block";
}

function closeFunctionModal() {
    document.getElementById("functionModal").style.display = "none";
}

function changeFunctionImage(img){

    document.getElementById("FunctionHallImage").src = img.src;

    document.querySelectorAll("#functionModal .thumbnail")
        .forEach(t => t.classList.remove("active"));

    img.classList.add("active");

}

window.onclick = function(event){

    const modal = document.getElementById("functionModal");

    if(event.target == modal){
        modal.style.display = "none";
    }

}

// ================================
// Close Any Modal when Clicking Outside
// ================================
window.addEventListener("click", function (event) {

    const roomModal = document.getElementById("roomModal");
    const familyModal = document.getElementById("familyRoomModal");
    const functionModal = document.getElementById("FunctionHallModal");
    const videoModal = document.getElementById("videoModal");

    if (event.target === roomModal) {
        roomModal.style.display = "none";
    }

    if (event.target === familyModal) {
        familyModal.style.display = "none";
    }

    if (event.target === functionModal) {
        functionModal.style.display = "none";
    }

    if (event.target === videoModal) {
        const video = videoModal.querySelector("video");
        video.pause();
        video.currentTime = 0;
        videoModal.style.display = "none";
    }

});


// ================================
// Video Modal
// ================================
const openVideo = document.getElementById("openVideo");
const closeVideo = document.getElementById("closeVideo");
const videoModal = document.getElementById("videoModal");

if (openVideo && closeVideo && videoModal) {

    const video = videoModal.querySelector("video");

    openVideo.addEventListener("click", () => {

        videoModal.style.display = "flex";
        video.currentTime = 0;
        video.play();

    });

    closeVideo.addEventListener("click", () => {

        video.pause();
        video.currentTime = 0;
        videoModal.style.display = "none";

    });

}


// ================================
// Coffee Gallery
// ================================
function changeCoffeeImage(element) {

    document.getElementById("mainCoffeeImage").src = element.src;

}

function openFunctionModal() {
    document.getElementById("functionModal").style.display = "flex";
}

function closeFunctionModal() {
    document.getElementById("functionModal").style.display = "none";
}

window.addEventListener("click", function(e) {
    const modal = document.getElementById("functionModal");

    if (e.target === modal) {
        modal.style.display = "none";
    }
});


function openFunctionModal(){
    document.getElementById("functionModal").style.display = "block";
}

function closeFunctionModal(){
    document.getElementById("functionModal").style.display = "none";
}

window.onclick = function(event){
    const modal = document.getElementById("functionModal");

    if(event.target == modal){
        modal.style.display = "none";
    }
}
  

// ================================
// MENU RESTO
// ================================

const openMenu = document.getElementById("openMenu");
const menuModal = document.getElementById("menuModal");
const closeMenu = document.querySelector(".menu-close");

const swiper = new Swiper(".menuSwiper", {
    loop: true,
    grabCursor: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    keyboard: {
        enabled: true,
    }
});

openMenu.addEventListener("click", () => {
    menuModal.style.display = "flex";
    document.body.style.overflow = "hidden";
    swiper.update();
});

closeMenu.addEventListener("click", () => {
    menuModal.style.display = "none";
    document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
    if (e.target === menuModal) {
        menuModal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});