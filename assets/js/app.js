
document.documentElement.style.overflow = "hidden";
document.body.style.overflow = "hidden";
// Définition des variables et initialisation de l'animation SplitType
let typeSplit;

function runSplit() {
  typeSplit = new SplitType(".split__lines", {
    types: "lines, words"
  });
  $(".line").append("<div class='line__mask'></div>");
  createAnimation();
}

// Gestion du redimensionnement de la fenêtre
let windowWidth = $(window).innerWidth();
window.addEventListener("resize", function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    typeSplit.revert();
    runSplit();
  }
});

// Création de l'animation avec GSAP et ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function createAnimation() {
  $(".line").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top 40%",
        end: "bottom bottom",
        scrub: 3
      }
    });
    let delay = index * 10;
    tl.to($(this).find(".line__mask"), {
      width: "0%",
      duration: 9,
      delay: delay
    });
  });
}

window.onload = function () {
  runSplit();

  // Sélectionnez les éléments que vous voulez animer
  const h1 = document.querySelector('h1');
  const circle = document.querySelector('.circle__link');
  const h2__content = document.querySelectorAll(' .title span');
  const links = document.querySelectorAll('li a');
  const small = document.querySelectorAll(' h3');
  const galleryContainer = document.querySelector('.scroll__container'); // Container de la galerie
  const projetprestext = document.querySelectorAll('.projet__pres__text');


  // Commencez l'animation pour le h2 dès que la page est chargée
  gsap.to(h2__content, {
    rotateX: 0,
    translateY: 0,
    delay: 1,
    duration: 0.8,
    stagger: .02,
    opacity: 1,
    ease: CustomEase.create("custom", "M0,0 C0.435,0.25 0.15,0.965 1,1 "),
  });

  gsap.from(h1, {
    delay: 0.5,
    duration: 0.2,
    autoAlpha: 0,
    ease: CustomEase.create("custom", "M0,0 C0.435,0.25 0.15,0.965 1,1 "),
    y: -20
  });
  gsap.from(small, {
    delay: 1.5,
    duration: .3,
    autoAlpha: 0,
    stagger: .02,
    opacity: 1,
    ease: CustomEase.create("custom", "M0,0 C0.435,0.25 0.15,0.965 1,1 "),
    y: -20
  });

  gsap.from(circle, {
    delay: 2,
    duration: .7,
    autoAlpha: 0,
    stagger: .02,
    opacity: 1,
    ease: CustomEase.create("custom", "M0,0 C0.435,0.25 0.15,0.965 1,1 "),
    y: -20,
    onComplete: function () {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  });

  gsap.from(galleryContainer, {
    delay: 2.1,
    duration: .7,
    autoAlpha: 0,
    stagger: .02,
    opacity: 1,
    ease: CustomEase.create("custom", "M0,0 C0.435,0.25 0.15,0.965 1,1 "),
    y: -20,
    onComplete: function () {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  });

  gsap.from(projetprestext, {
    delay: 1.5,
    duration: 0.5,
    autoAlpha: 0,
    ease: CustomEase.create("custom", "M0,0 C0.435,0.25 0.15,0.965 1,1 "),
    y: -20
  });
  
  // Animer chaque lien individuellement
  links.forEach((link, index) => {
    gsap.from(link, {
      delay: 1 + index * 0.2,
      duration: 0.2,
      autoAlpha: 0,
      ease: CustomEase.create("custom", "M0,0 C0.435,0.25 0.15,0.965 1,1 "),
      y: -20
    });
  });

};

gsap.registerPlugin(ScrollTrigger);

const scrollContainer = document.querySelector('.scroll__container');
const imageContainer = document.querySelectorAll('.image__container');
const images = document.querySelectorAll('.img__gallery');
const gallery = document.querySelector('.parent');
const middleImage = document.querySelector('.div2');

gsap.set([gallery], {
  scale: 1
});



gsap.to(gallery, {
  scale: 3.4,
  scrollTrigger: {
    trigger: scrollContainer,
    start: 'top top',
    end: 'bottom -10%',
    pin: true,
    ease: "power2",
    scrub: 1, // Change this to 0.5
    immediateRender: false,

  },
});

images.forEach((img) => {
  gsap.to(img, {
    scale: 1.3,
    scrollTrigger: {
      trigger: scrollContainer,
      start: 'top top',
      end: 'bottom -1O%',
      scrub: 1,
      immediateRender: false,


    },
  });
});

// Ici on défini la valeur minimale et maximale pour --gap
const minGap = 30;
const maxGap = 50;

gsap.to(gallery.style, {
  "--gap": maxGap, // On définit la valeur finale de --gap
  scrollTrigger: {
    trigger: scrollContainer,
    start: "top 0%",
    end: "80% 80%",
    onUpdate: self => {
      // On change la valeur de --gap en fonction de la progression du défilement
      const newGap = minGap + (self.progress * (maxGap - minGap));
      gallery.style.setProperty('--gap', `${newGap}px`);
    },
    scrub: 0.5, // Change this to 0.5
  }
});

gsap.fromTo(".project", {
  y: "100vh"
}, {
  y: "-200vh",
  duration: 15000, // Ajustez selon vos besoins
  stagger: {
      amount: 9000, // Ajustez selon vos besoins
      each: 1000  // Ajustez selon vos besoins
  },
  
  scrollTrigger: {
      trigger: ".gallery__portfolio__projet",
      start: "top top",
      end: "60% -180%" + (window.innerHeight * 100),
      scrub: 1, // Suivi du défilement
      pin: true, // Épingler la section
  }
});


//  function Marquee(selector, speed) {
//  const parentSelector = document.querySelector(selector);
//  const clone = parentSelector.innerHTML;
//  const firstElement = parentSelector.children[0];
//  let i = 0;
//  let marqueeInterval;

//  parentSelector.insertAdjacentHTML('beforeend', clone);
//  parentSelector.insertAdjacentHTML('beforeend', clone);

//  function startMarquee() {
//  marqueeInterval = setInterval(function () {
// firstElement.style.marginLeft = `-${i}px`;
// if (i > firstElement.clientWidth) {
//  i = 0;
// }
// i = i + speed;
//  }, 0);
// }

//  function stopMarquee() {
//    clearInterval(marqueeInterval);
//  }

// parentSelector.addEventListener('mouseenter', stopMarquee);
//  parentSelector.addEventListener('mouseleave', startMarquee);

// startMarquee();
// }

// window.addEventListener('load', () => Marquee('.marquee', 0.4));