// JS!
// voglio associare alla pressione dei 4 bottoni la scomparsa del gatto corrispondente

// ho sicuramente bisogno di recuperare un riferimento a tutti e 4 i bottoni
// tramite id:
// const button1 = document.getElementById('btn-1')
// const button2 = document.getElementById('btn-2')
// const button3 = document.getElementById('btn-3')
// const button4 = document.getElementById('btn-4')

// tramite classe "btn-outline-primary", riferita ad elementi dentro "btn-group"
// const allThe4Buttons = document.querySelectorAll(
//   '.btn-group > .btn-outline-primary'
// )
const allThe4Buttons = document.getElementsByClassName('btn-outline-primary')
console.log('allThe4Buttons', allThe4Buttons)

// ho sicuramente bisogno di recuperare un riferimento alle prime 4 cards
// const allTheCards = document.getElementsByClassName('card')
const allTheCards = document.querySelectorAll('.col > .card')
console.log('allTheCards', allTheCards)

// dovremo associare un comportamento alla pressione di OGNI bottone: il bottone 1
// farà scomparire il gatto 1, il bottone 2 il gatto 2 etc. etc.
// allThe4Buttons[0].addEventListener('click', (e) => {
//   console.log('EVENTO', e)
//   // farà cose alla pressione del PRIMO pulsante
//   allTheCards[0].classList.toggle('invisible')
//   // "invisible" / "visible"
//   // cambiamo l'etichetta del bottone cliccato
//   //   if (e.target.innerText === '1') {
//   //     e.target.innerText = 'clicca per riapparire'
//   //   } else {
//   //     e.target.innerText = '1'
//   //   }
// })

// BOSS FINALE: CICLO per associare a ogni bottone un comportamento diverso

for (let i = 0; i < allThe4Buttons.length; i++) {
  allThe4Buttons[i].addEventListener('click', (e) => {
    allTheCards[i].classList.toggle('invisible')
    if (
      // e.target.innerText === '1' ||
      // e.target.innerText === '2' ||
      // e.target.innerText === '3' ||
      // e.target.innerText === '4'
      // oppure...
      !e.target.innerText.includes('clicca')
      // se il bottone al momento non include "clicca"
    ) {
      e.target.innerText = 'clicca per riapparire'
    } else {
      e.target.innerText = e.target.getAttribute('id').slice(-1)
      // l'id sarebbe "btn-1", faccio uno .slice(-1) --> "1" (prendo un carattere dalla fine)
    }
  })
}
