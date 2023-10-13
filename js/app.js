// ELEMENTI DEL DOM
const giocaBtnDOMElement = document.querySelector('.play-btn');
const gridDOMElement = document.querySelector('.grid');

function play() {
  gridDOMElement.innerHTML = '';

  for (let i = 0; i < 100; i++) {
    const n = i + 1;
    const cellHtml = `<div class="cell">${n}</div>`;
    gridDOMElement.innerHTML += cellHtml;
  }
  let cellDOMElement = document.querySelectorAll('.cell');

  for (let i = 0; i < cellDOMElement.length; i++) {
    let n = i + 1;
    let currentCellDOMElement = cellDOMElement[i];

    currentCellDOMElement.addEventListener('click', function () {
      console.log(`Questa è la casella ${n}`);
    });
  }
}

giocaBtnDOMElement.addEventListener('click', play);
