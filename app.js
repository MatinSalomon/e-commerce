let container = document.querySelector('.container')
let h1 = document.querySelector('h1')

h1.innerText = 'productos'

const cards= []

for(let i=1; i < 7; i++){
  const card=  `
        <div class="card" style="width: 18rem; display: flex;">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt="...">
            <div class="card-body">
              <h5 class="card-title">dibu</h5>
              <p class="card-text">comelo dibu</p>
              <a href="#" class="btn btn-primary">comprar una mega dibu</a>
            </div>
         </div>
`
  cards.push(card)
}
container.innerHTML = cards.join().replaceAll(',', '')