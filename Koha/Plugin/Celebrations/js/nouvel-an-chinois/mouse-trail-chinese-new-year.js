
/*
    Section : Swing light
    Attribution :
      Code inspiré, modifié et adapté pour l'OPAC de Koha à partir du Pen original sur CodePen.io.
      Copyright (c) Tim Barden - https://codepen.io/timbarden/pen/ZBYWMe
*/


const trailDiv = document.createElement('div');
trailDiv.classList.add('trail');
document.body.appendChild(trailDiv);


const style = document.createElement('style');
style.textContent = `
.trail { position: fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; overflow:hidden; z-index:9999; }
.trail span { animation: bgColor 0.5s linear forwards; }
@keyframes bgColor { to { transform: scale(0.6); opacity:0; } }
`;
document.head.appendChild(style);


const chineseChars = ['新', '年', '快', '乐'];

function mouseMove(e) {
  const span = document.createElement('span');
  span.style.top = e.clientY + 'px';
  span.style.left = e.clientX + 'px';
  span.textContent = chineseChars[Math.floor(Math.random() * chineseChars.length)];
  document.querySelector('.trail').appendChild(span);

  span.addEventListener('animationend', () => span.remove());
}

document.querySelector('body').addEventListener('mousemove', mouseMove);
