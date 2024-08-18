let menu = document.querySelector("#menu-bars")
let navbar = document.querySelector(".navbar");




menu.onclick = () => {
    navbar.classList.toggle("active");
    menu.classList.toggle("fa-times")
}




window.onscroll = () => {
  menu.classList.remove("fa-times")
  navbar.classList.remove("active")
}



let icons = document.querySelectorAll("#home .at-container .about .icons a");
let icons2 = document.querySelectorAll("#home .at-container .img .icons a");

let currentIndex = 0;
let intervalId;
function lightUpIcons() {
    intervalId = setInterval(() => {
        resetIcons()
        icons[currentIndex].style.animation = 'lightUp 0.5s forwards ease';
        icons2[currentIndex].style.animation = 'lightUp 0.5s forwards ease';
        currentIndex = (currentIndex + 1) % icons.length; 
    }, 1000); 
}

function resetIcons() {
    icons.forEach(icon => {
        icon.style.animation = 'none';
    });
     icons2.forEach(icon => {
        icon.style.animation = 'none';
    });

}

lightUpIcons();

document.querySelectorAll('.category').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.category').forEach(item => {
            item.classList.remove('active');
        });
        item.classList.add('active');

        document.querySelectorAll('.skills-body').forEach(item => {
            item.classList.remove('active');
        });

        const category = item.getAttribute("category")
        const body = document.querySelector('.skills-body[category="skill-' + category + '"]');
        body?.classList.add('active');
    });
});


document.querySelectorAll('.skill-card[data-progress]').forEach(card => {
    const progress = card.getAttribute('data-progress');
    card.style.setProperty('--progress', progress);
});






var swiper = new Swiper(".swipper", {
      spaceBetween: 20,
    centeredSlides: true,
    hashNavigation: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  loop: true,
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    640:{
        slidesPerView: 2
    },
    768:{
        slidesPerView: 2
    },
    1024:{
        slidesPerView: 3
    },
    }
  });