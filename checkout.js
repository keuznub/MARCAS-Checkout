class Producto{
  constructor(nombre, precio, cantidad, li){
    this.nombre=nombre;
    this.precio=precio;
    this.cantidad = cantidad;
    this.li = li;
  }
  getPrecio() {
    return (this.precio*this.cantidad).toFixed(2);
  }
}
var codigoPromocional = 1;
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
  
  var listaCarrito = document.getElementById("listaCarrito");
  var li = document.createElement("li");
  li.classList.add("list-group-item", "d-flex", "justify-content-between", "lh-sm", "producto");

  var producto = new Producto(nombreProducto, precio,cantidad, li);
  productosCarrito.push(producto);
  var div1 = document.createElement("div");
  div1.classList.add("btn-group", "me-2");
  div1.setAttribute("role", "group");

  var button1 = document.createElement("button");
  button1.classList.add("btn", "btn-primary", "add");
  button1.setAttribute("type", "button");
  button1.innerHTML = "<strong>-</strong>";
  button1.addEventListener("click", function(e){
    if(producto.cantidad <= 1){
      productosCarrito = productosCarrito.filter(item => item !== producto);
      li.remove();
    }else{
      producto.cantidad -= 1;
    }
    actualizarLista();
    actualizarValorTotal();
  })
  div1.appendChild(button1);


  
  var button2 = document.createElement("button");
  button2.classList.add("btn", "btn-primary", "add");
  button2.setAttribute("type", "button");
  button2.innerHTML = "<strong>+</strong>";
  button2.addEventListener("click", function(e){
      producto.cantidad += 1;
      console.log(producto);
      actualizarLista();
      actualizarValorTotal();
  })
  
  div1.appendChild(button2);
  
  var div = document.createElement("div");


  var h6 = document.createElement("h6");
  h6.classList.add("my-0");
  h6.id = "nombre";
  h6.innerHTML = ""+nombreProducto;


  var small = document.createElement("small");
  small.classList.add("text-body-secondary");
  small.id = "cantidad";
  small.innerHTML = ""+cantidad;


  var span = document.createElement("span");
  span.classList.add("text-body-scondary");


  var span2 = document.createElement("span");
  span2.classList.add("valor");
  span2.id = "precio";
  span2.innerHTML = ""+precio+"€";


  span.appendChild(span2);
  div.appendChild(h6);
  div.appendChild(small);
  li.appendChild(div1);
  li.appendChild(div);
  li.appendChild(span);
  
  listaCarrito.appendChild(li);
  li.style.overflow = "hidden";
  li.style.maxHeight = 0;
  
  setTimeout(function() {
    console.log("timeout hecho");
    
    li.style.overflow = "visible";
    li.style.maxHeight = "100px";

  }, 10); 
  

  


  console.log("añadiendo producto");
}

function añadirAlCarrito(){
  var nombreProducto = document.getElementById("addProducto").value;
  var numeroRandomPrecio = (Math.random() * (20 - 2) + 2);
  añadirProducto(nombreProducto, numeroRandomPrecio.toFixed(2), 1);
  actualizarValorTotal();
  var numeroPedidos = document.getElementById("numeroPedidos");
  numeroPedidos.innerHTML = productosCarrito.length;
  console.log("añadiendo al carrito");
}



function actualizarValorTotal(){
  var valorTotal = 0;
  productosCarrito.forEach(element =>{
    valorTotal += parseFloat(element.precio)*element.cantidad*codigoPromocional;
  }) 
  var elementoValorTotal = document.getElementById("valorTotal");
  elementoValorTotal.innerHTML = ""+valorTotal.toFixed(2);
}


function actualizarLista(){
  productosCarrito.forEach(e =>{
    e.li.querySelector("#nombre").innerHTML = e.nombre;
    e.li.querySelector("#cantidad").innerHTML = e.cantidad;
    e.li.querySelector("#precio").innerHTML = e.getPrecio() + "€";
  }) 
  var numeroPedidos = document.getElementById("numeroPedidos");
  numeroPedidos.innerHTML = productosCarrito.length;
}

function codigoPromocionalFunc(){
  console.log(document.getElementById("codigo").value);
  if(document.getElementById("codigo").value == "pepe"){
    codigoPromocional = 0.90;
    actualizarValorTotal();
  }
  else{

  }
}

function validarSubmit(){
  var error = document.getElementById("error");
  if(productosCarrito.length <= 0){
    error.style.display = "block";
    return false;
  }else{
    var numeroPedidoPHP = document.getElementById("numeroPedidoPHP");
    numeroPedidoPHP.value = (Math.random() * (99999 - 10000) + 10000).toFixed(0);
    error.style.display = "none";
    return true;
  }
}

function getCitys(e){
  console.log("Has hecho click" );
  console.log(e.value);
  if(e.value=="es"){
    habilitarOptions("es");
  }
  if(e.value=="uk"){
    habilitarOptions("uk");
  }
  if(e.value=="de"){
    habilitarOptions("de");
  }
  if(e.value=="fr"){
    habilitarOptions("fr");
  }
  if(e.value=="ua"){
    habilitarOptions("ua");
  }
  if(e.value=="eeuu"){
    habilitarOptions("eeuu");
  }
}

function habilitarOptions(variable){
  var select = document.getElementById("state");
  select.disabled = false;
  var opciones = document.querySelectorAll("#state option");
  var opcionesArray = Array.from(opciones);
  console.log("fuera foreach");
  console.log(opciones);
  console.log(opcionesArray);
  opcionesArray.forEach(element=>{
    console.log("dentro del foreach");
    console.log(element.classList);
    if(element.classList.contains(variable)){
      element.style.display = "block";
      console.log(variable + " block")
      element.selected = true;
    }
    else{
      console.log(variable + " none")
      element.style.display = "none";
    }
  })

}


/*
<div>
  <h6 class="my-0">Product name</h6>
  <small class="text-body-secondary">Brief description</small>
</div>
<span class="text-body-secondary"><span class="valor">12</span>€</span>
*/