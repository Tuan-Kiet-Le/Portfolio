//SHOW_MENU
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle)
{
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose)
{
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU FOR MOBILE

const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ADD BLUR HEADER
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

// EMAIL JS
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    //serviceID - templateID - #form - publickey
    emailjs.sendForm('service_krom60o','template_dne7k2w','#contact-form','JppGo25SC9muMBh8s')
    .then(()=>{
        //SHOW SENT MESSAGE
        contactMessage.textContent = 'Message sent successfully ✅'

        //REMOVE MESSAGE AFTER 5 SECONDS
        setTimeout(() =>{
            contactMessage.textContent= 'Message not sent (service error) ❌'
        }, 5000)

        //CLEAR INPUT FIELD
        contactForm.reset()
    }, () =>{
        //SHOW ERROR MESSAGE
        contactMessage.textContent = ''
    })
}

contactForm.addEventListener('submit', sendEmail)

// SHOW SCROLL UP
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //When the scroll is higher than 350 viewprot height, add
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
})

sr.reveal(`.home__data, .experience, .skills, .contact__container`)
sr.reveal(`.home__img`, {delay: 300})
sr.reveal(`.home__scroll`, {delay: 500})
sr.reveal(`.work__card, .services__card`, {interval: 50})
sr.reveal(`.about__content`, {origin: 'right'})
sr.reveal(`.about__img`, {origin: 'left'})







