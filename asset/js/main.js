const body = document.querySelector('body');
const bgchangeItems = document.querySelectorAll('.bgchange');
const borderchangeItems = document.querySelectorAll('borderchange');
const modeToggler = document.querySelector('.header__toggler');
const header = document.querySelector('.header');
const buttons = document.querySelectorAll('button');
const arrowDown = document.querySelector('.main__arrow');
var img = document.createElement('img');
var textColor = 'white';

// SET THE INITIAL COLOR MODE TO BLACK WHEN LOAD
window.onload = () => {
    body.classList.add('mode__black');
    for (let i=0;i<bgchangeItems.length;i++) {
        bgchangeItems[i].classList.add('white');
    }
    for (let i=0;i<borderchangeItems.length;i++) {
        borderchangeItems[i].style.borderColor = 'var(--White)';
    }
    for (let i=0;i<buttons.length;i++) {
        buttons[i].classList.remove('when__white');
        buttons[i].classList.add('when__black');
    }
    img.src = './asset/img/arrowDown_gray.png';
    arrowDown.appendChild(img);
    
};

// GSAP ANIMATIONS ON LOAD
gsap.from('.main__title', { opacity: 0, duration: 1.5, delay: .3, y: -40 });
gsap.from('.header', { opacity: 0, duration: 1.5, delay: .3, y: -30 });
gsap.from('#canvas__float', { opacity: 0, duration: 1.5, delay: .5, x: 40 });

// MODE TOGGLER BUTTON EFFECT
modeToggler.addEventListener('click', () => {
    if (modeToggler.classList.contains('right')) {
        // MODE WHITE (bg white, text & border black)
        modeToggler.classList.remove('right');
        modeToggler.classList.add('left');
        body.classList.remove('mode__white');
        body.classList.add('mode__black');
        // header.classList.remove('white');
        // header.classList.add('black');
        for (let i=0;i<bgchangeItems.length;i++) {
            bgchangeItems[i].classList.remove('black')
            bgchangeItems[i].classList.add('white')
        }
        for (let i=0;i<borderchangeItems.length;i++) {
            borderchangeItems[i].style.borderColor = 'var(--White)'
        }
        for (let i=0;i<buttons.length;i++) {
            buttons[i].classList.remove('when__white')
            buttons[i].classList.add('when__black')
        }
        textColor = 'white';
    } else {
        // MODE WHITE (bg black, text & border white)
        modeToggler.classList.remove('left');
        modeToggler.classList.add('right');
        body.classList.remove('mode__black');
        body.classList.add('mode__white');
        // header.classList.remove('black');
        // header.classList.add('white');

        for (let i=0;i<bgchangeItems.length;i++) {
            bgchangeItems[i].classList.remove('white')
            bgchangeItems[i].classList.add('black')
        }
        for (let i=0;i<borderchangeItems.length;i++) {
            borderchangeItems[i].style.borderColor = 'var(--Black)'
        }
        for (let i=0;i<buttons.length;i++) {
            buttons[i].classList.remove('when__black');
            buttons[i].classList.add('when__white');
        }
        textColor = 'black';
    }
});

// ON SCROLL NAV BACKGROUND
window.addEventListener('scroll', () => {
    const mainPage = document.getElementById('main');
    if (window.pageYOffset > mainPage.getClientRects()[0].height * 0.4 ) {
        if (textColor = 'white') {
            header.classList.remove('white');
            header.classList.add('black');
        } else {
            header.classList.remove('black');
            header.classList.add('white');
        }
    } else {
        header.classList.remove('white');
        header.classList.remove('black');
    }

    console.log(window.pageYOffset);
    console.log(mainPage.getClientRects()[0].height);
})


// MODE TOGGLING EFFECT

