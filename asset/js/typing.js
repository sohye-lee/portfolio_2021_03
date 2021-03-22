// SENTENCES
const contents1 = [ 
    " Building Things", " Solving Problems", " Making Things Look Nice" 
];
const contents2 = [
    "Lived in Paris", "Lived in Seoul", "Now Live in Virginia"
]; 
const contents3 = [
    "Majored in Fine Arts", "Majored in Museum Studies", "Currently Major in Data Analytics"
];


// ELEMENTS IN WHICH SENTENCES WILL BE WRITTEN
const element1 = document.querySelector(".typing1");
const element2 = document.querySelector(".typing2");
const element3 = document.querySelector(".typing3");
// const element4 = document.querySelector(".typing4");


const speed = 110;
const pause = 800;

function typing(texts, element, i=0, index=1, direction=1) {
  let displayed = texts[i].substring(0, index);
  element.textContent = displayed;

  if (displayed.length >= texts[i].length) { // start removing after pause
    setTimeout(() => typing(texts, element, i, index-1, -1), pause);
  } else if (displayed.length === 0) { // go to next text after pause
    setTimeout(() => typing(texts, element, (i+1) % texts.length), pause);
  } else { // continue in the current direction
    setTimeout(() => typing(texts, element, i, index+direction, direction), speed);
  }
}

typing(contents1, element1);
typing(contents2, element2);
typing(contents3, element3);
