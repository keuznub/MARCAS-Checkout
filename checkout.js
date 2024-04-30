class Producto{
  constructor(nombre, precio, cantidad){
    this.nombre=nombre;
    this.precio=precio;
    this.cantidad = cantidad;
  }
}
var productosCarrito = Array();


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()




function añadirProducto(nombreProducto, precio,cantidad){
  var producto = new Producto(nombreProducto, precio,cantidad);
  productosCarrito.push(producto);
  var listaCarrito = document.getElementById("listaCarrito");
  var li = document.createElement("li");
  li.classList.add("list-group-item", "d-flex justify-content-between", "lh-sm", "producto");
  listaCarrito.appendChild(li);

  var div1 = document.createElement("div");
  div1.classList.add("btn-group", "me-2");
  div1.setAttribute("role", "group");
  div1.appendChild(li);

  var button1 = document.createElement("button");
  button1.classList.add("btn", "btn-primary", "add");
  button1.setAttribute("type", "button");
  button1.innerHTML = "-";
  //EVENT CLICK
  button1.appendChild(div1);


  
  var button2 = document.createElement("button");
  button2.classList.add("btn", "btn-primary", "add");
  button2.setAttribute("type", "button");
  button2.innerHTML = "+";
  //EVENT CLICK
  button2.appendChild(div1);
  
  /*

  <div class="btn-group me-2" role="group" aria-label="First group">
      <button type="button" class="btn btn-primary add" onclick="">-</button>
      <button type="button" class="btn btn-primary remove" onclick="">+</button>              
  </div>
  */
  var div = document.createElement("div");
  li.appendChild(div);

  var h6 = document.createElement("h6");
  h6.classList.add("my-0");
  h6.innerHTML = producto.nombre;
  div.appendChild(h6);

  var small = document.createElement("small");
  small.classList.add("text-body-secondary");
  small.innerHTML = producto.cantidad;
  div.appendChild(small);

  var span = document.createElement("span");
  span.classList.add("text-body-scondary");
  span.innerHTML = "€";
  li.appendChild(span);

  var span2 = document.createElement("span");
  span2.classList.add("valor");
  span2.innerHTML = ""+producto.precio;
  span.appendChild(span2);
}

function añadirAlCarrito(){
  var nombreProducto = document.getElementById("addProducto");
  var numeroRandomPrecio = Math.random() * (20 - 2) + 2;
  añadirProducto(nombreProducto, numeroRandomPrecio, 1);
}



/*
<div>
  <h6 class="my-0">Product name</h6>
  <small class="text-body-secondary">Brief description</small>
</div>
<span class="text-body-secondary"><span class="valor">12</span>€</span>
*/