class Producto{
  constructor(titulo, detalle, precio, stock, imagen){
    this.titulo = titulo,
    this.detalle = detalle,
    this.precio = precio,
    this.stock = stock,
    this.imagen = imagen
  }
}


const card = new Producto('peugeot 208', 'El Peugeot 208 es un automóvil de segmento B, producido por la marca francesa Peugeot desde 2012.', '50.000.000', '3',  'https://www.karvi.com.ar/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fstatic%2Fgallery%2Far%2Fdesktop%2Fpeugeot_208_2022_perfil_frente.jpg&w=1440&q=90')
let main = document.querySelector('main')
  
  main.innerHTML= `
  <div class="card" style="width: 18rem; display: flex;">
                <img src="${card.imagen}" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Nombre: ${card.titulo}</h5>
                  <p class="card-text">Detalle: ${card.detalle}</p>
                  <p class="card-text">Precio: ${card.precio}</p>
                  <p class="card-text">En stock: ${card.stock}</p>
                </div>
  </div>`