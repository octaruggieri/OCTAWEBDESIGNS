/*=============== SHOW MENU ===============*/
const NavMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*=== MENU SHOW ===*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        NavMenu.classList.add('show-menu')
    })
}

/*=== MENU HIDDEN ===*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        NavMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to
    window.scrollY >= 50 ? header.classList.add('blur-header')
                      : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll') 
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400, 
    //reset: true // Animation repeat
})

sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`)
sr.reveal(`.home__card`, {delay: 600, distance: '100px', interval: 100})
sr.reveal(`.about__data, .join__image`, {origin: 'right'})
sr.reveal(`.about__image, .join__data`, {origin: 'left'})
sr.reveal(`.popular__card`, {interval: 200})



const enviarMensaje = () => {
    const servicio = document.getElementById("servicio").value;
    const mensaje = `Hola, estoy interesado/a en el servicio de ${servicio}. ¿Podrías proporcionarme más información?`;
  
    const telefono = "3513466611";
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
  
    window.open(url);
  };
  
  const botonEnviar = document.getElementById("enviarWhatsApp");
  botonEnviar.addEventListener("click", enviarMensaje);






  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".home__bg");
    let currentIndex = 0;

    function changeBackgroundImage() {
        // Oculta todas las imágenes
        images.forEach(image => {
            image.classList.remove("active");
        });

        // Muestra la imagen activa
        images[currentIndex].classList.add("active");

        currentIndex = (currentIndex + 1) % images.length;

        // Cambiar la imagen de fondo cada 10 segundos (10000 milisegundos)
        setTimeout(changeBackgroundImage, 5000); // Cambia el tiempo aquí para ajustar la velocidad de cambio
    }

    // Inicia el cambio de imagen
    changeBackgroundImage();
});
