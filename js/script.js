const links = document.querySelectorAll('.nav__links li a');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const current = document.querySelector('.nav__links li a.active');

    if (current) {
      current.classList.add('expand');

      setTimeout(() => {
        current.classList.remove('active', 'expand');
        
        link.classList.add('active');
      }, 300); 
    } else {
      link.classList.add('active');
    }
  });
});





const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});





$(document).ready(function () {
  $(".testimonial-content").slick({
    arrows: false,
    dots: true,
    appendDots: $('.logo-bar'), 
    customPaging: function (slider, i) {
      return '<button></button>'; 
    }, 
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});



$(document).ready(function () {
  $(".blog-content").slick({
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
      responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            }
        ]
  });
});


 $(document).ready(function(){
    $('.card-content').slick({
      autoplay: false,
      arrows: true,  
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      adaptiveHeight: true,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ],
      prevArrow: `<div class="preve-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></div>`,
      nextArrow: `<div class="next-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></div>`
    });
    });

