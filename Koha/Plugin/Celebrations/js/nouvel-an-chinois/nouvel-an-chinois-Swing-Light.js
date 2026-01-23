
/*
    Section : Swing light
    Attribution :
      Code inspiré, modifié et adapté pour l'OPAC de Koha à partir du Pen original sur CodePen.io.
      Copyright (c) charleslai1994 - https://codepen.io/charleslai1994/pen/JxPyPV
*/

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.newyear-top')) return;

  const search = document.querySelector('#opac-main-search');
  if (!search) return;

  const box = document.createElement('div');
  box.className = 'newyear-top';

  for (let i = 1; i <= 4; i++) {
    const d = document.createElement('div');
    d.className = `decoration decoration${i}`;
    box.appendChild(d);
  }

  search.append(box);
});
