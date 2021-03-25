const body = document.querySelector('body');
const bgchangeItems = document.querySelectorAll('.bgchange');
const borderchangeItems = document.querySelectorAll('borderchange');
const modeToggler = document.querySelector('.header__toggler');
const burger = document.querySelector('.header__burger');
const header = document.querySelector('.header');
const hiddenNav = document.querySelector('.header__hidden');
const mainPage = document.getElementById('main');
const buttons = document.querySelectorAll('button');
const arrowDown = document.querySelector('.main__arrow');
const arrowUp = document.querySelector('.up__arrow');
let   quotes = document.querySelectorAll('.quote__text');
var img = document.createElement('img');
var colorMode = 'black';


// FADE IN OUT EFFECT WItH SCROLL
const toShowItems = document.querySelectorAll('.fadeinout');
window.addEventListener('scroll', () => {
    toShowItems.forEach(section => {
        if((section.getBoundingClientRect().top < 900) && (section.getBoundingClientRect().top > -600)) {
            section.classList.add('fadein');
        } else {
            section.classList.remove('fadein')
        }
    })

})

// SET THE INITIAL COLOR MODE TO BLACK WHEN LOAD
window.onload =  () => {
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
    colorMode = 'black'
    hiddenNav.style.display = 'none';
    hiddenNav.style.backgroundColor = 'rgba(0,0,0, .9)';
};

// GSAP ANIMATIONS ON LOAD
gsap.from('.main__title', { opacity: 0, duration: 1.5, delay: .3, y: -40 });
gsap.from('.header', { opacity: 0, duration: 1.5, delay: .3, y: -30 });
gsap.from('#canvas__float', { opacity: 0, duration: 1.5, delay: .5, x: 40 });

// MODE TOGGLER BUTTON EFFECT
modeToggler.addEventListener('click', () => {
    // MODE BLACK (element's bg white, text & border white)
    if (modeToggler.classList.contains('right')) {
        // SET COLOR MODE TO BLACK
        colorMode = 'black';
        // TOGGLER TO LEFT
        modeToggler.classList.remove('right');
        modeToggler.classList.add('left');
        // TEXT COLOR TO WHITE (= BLACK MODE)
        body.classList.remove('mode__white');
        body.classList.add('mode__black');
        // HEADER BG TO BLACK
        header.classList.remove('white');
        header.classList.add('black');
        // BG ITEMS TO WHITE BG
        for (let i=0;i<bgchangeItems.length;i++) {
            bgchangeItems[i].classList.remove('black')
            bgchangeItems[i].classList.add('white')
        }
        // BORDER ITEMS TO WHITE BORDER
        for (let i=0;i<borderchangeItems.length;i++) {
            borderchangeItems[i].style.borderColor = 'var(--White)'
        }
        // BUTTONS TO BLACK MODE
        for (let i=0;i<buttons.length;i++) {
            buttons[i].classList.remove('when__white')
            buttons[i].classList.add('when__black')
        }
        // HIDDEN NAV BG TO BLACK
        hiddenNav.style.backgroundColor = 'rgba(0,0,0,.9)';
    } 
    // MODE WHITE (bg black, text & border white)
    else {
        // SET COLOR MODE TO WHITE
        colorMode = 'white';
        // TOGGLER TO RIGHT
        modeToggler.classList.remove('left');
        modeToggler.classList.add('right');
        // TEXT COLOR TO BLACK
        body.classList.remove('mode__black');
        body.classList.add('mode__white');
        // HEADER BG TO WHITE
        header.classList.remove('black');
        header.classList.add('white');
        // BG ITEMS TO BLACK BG
        for (let i=0;i<bgchangeItems.length;i++) {
            bgchangeItems[i].classList.remove('white')
            bgchangeItems[i].classList.add('black')
        }
        // BORDER ITEMS TO BLACK BORDER
        for (let i=0;i<borderchangeItems.length;i++) {
            borderchangeItems[i].style.borderColor = 'var(--Black)'
        }
        // BUTTONS TO WHITE MODE
        for (let i=0;i<buttons.length;i++) {
            buttons[i].classList.remove('when__black');
            buttons[i].classList.add('when__white');
        }
        // HIDDEN NAV BG TO WHITE
        hiddenNav.style.backgroundColor = 'rgba(255,255,255,.9)';
    }

    if (window.pageYOffset < mainPage.getClientRects()[0].height * 0.3 ) {
        header.classList.remove('white');
        header.classList.remove('black');
    }

    
});

// ON SCROLL NAV BACKGROUND
window.addEventListener('scroll', () => {
    if (window.pageYOffset > mainPage.getClientRects()[0].height * 0.2 ) {
        if (colorMode === 'black') {
            header.classList.remove('white');
            header.classList.add('black');
        }
        if (colorMode === 'white') {
            header.classList.remove('black');
            header.classList.add('white');
        }
        arrowDown.style.display = 'none';
        arrowUp.style.display = 'block';
    } else {
        header.classList.remove('white');
        header.classList.remove('black');
        arrowDown.style.display = 'block';
        arrowUp.style.display = 'none';
    }

});


// ARROW UP BUTTON EVENT HANDLER
arrowUp.addEventListener('click', () => {
    window.scrollTo(0,0);
});

// BURGER EFFECT

burger.addEventListener('click', () => {
    // BURGER TO X  + HIDDEN NAV TO BE DISPLAYED
    const bars = burger.children;
    if (burger.classList.contains('clicked')) {
        burger.classList.remove('clicked');
        for (let i=0; i<bars.length;i++) {
            bars[i].classList.remove('clicked');
        }
        hiddenNav.style.display = 'none';
        if (window.pageYOffset < mainPage.getClientRects()[0].height * 0.2 ) {
            header.classList.remove('white');
            header.classList.remove('black');
        }
    } else {
        burger.classList.add('clicked');
        // modeToggler = togglers[1];
        for (let i=0; i<bars.length;i++) {
            bars[i].classList.add('clicked');
        }
        hiddenNav.style.display = 'flex';
        if (colorMode === 'black') {
            header.classList.add('black');
        } else if (colorMode === 'white') {
            header.classList.add('white');
        }
    }

    
})

// QUOTE EFFECT
quotes.forEach(quote => {
    let letters = quote.textContent.split("");
    quote.textContent = "";
    letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i * 0.05}s`;
        quote.append(span);
    });
});


// RESIZE 
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        hiddenNav.style.display = 'none';
    }
})




