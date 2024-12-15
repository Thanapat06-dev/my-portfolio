// Sticky Bar
window.addEventListener("scroll", function() {
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Modal Portfolio
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

// Btn To Top
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

// Moon || Sun
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-theme", getCurrentIcon());
})

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

// Responsive close NavBar
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-item a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItems) => {
    navItems.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
})

// scroll follow
// window.addEventListener("scroll", () => {
//     const sections = document.querySelectorAll("section");
//     const scrollY = window.pageYOffset;

//     sections.forEach((current) => {
//         const sectionHeight = current.offsetHeight;
//         const sectionTop = current.offsetTop - 50; // Offset for better UX
//         const id = current.getAttribute("id");
        
//         // ตรวจสอบว่ามี id และลิงก์ที่ตรงกันก่อน
//         if (id) {
//             const link = document.querySelector(`.nav-items a[href*="${id}"]`);
//             if (link) {
//                 if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//                     link.classList.add("active");
//                 } else {
//                     link.classList.remove("active");
//                 }
//             }
//         }
//     });
// });



