let personas = []
function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre")
    let eApellido = document.getElementById("apellido")
    let vApellido = eApellido.value
    let eErrorApellido = document.getElementById("errorApellido")
    let fNombre = validarLargoMinimo(eNombre,vNombre,eErrorNombre)
    let fApellido = validarLargoMinimo(eApellido,vApellido,eErrorApellido)
    if(fNombre == "exito" && fApellido == "exito"){
        let p = {
            nombre:vNombre,
            apellido:vApellido
        }
        personas.push(p)
        console.log(personas)
        eNombre.value = ""
        eApellido.value = ""
        cargarDatos()
    }

}
function validarLargoMinimo(elemento,valor,eError){
    if(valor.length < 3 ){
        console.log("Pocos caracteres")
        alert("Debes ingresar mas de 3 caracteres")
        eError.innerText = "Debes ingresar mas de 3 caracteres!"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return "falla"
    }else{
        console.log("Todo bien")
        eError.innerText = ""
        elemento.style.backgroundColor = "green"
        return "exito"
    }
}
function cargarDatos(){
    console.log("Cargandoooo....")
    let mapPersonas = personas.map((p,index)=>{
        return "<tr><td>"+p.nombre+
                "</td><td>"+p.apellido+
                "</td><td><button type='button' value='"+index+"' onclick='eliminar("+index+")'>Eliminar</button>"+
                "<button onclick='actualizarFormulario("+index+")'>Actualizar</button></td></tr>"
    })
    let tablaPersonas = document.getElementById("tablaPersonas")
    let strTablaPersonas = mapPersonas.join("")
    tablaPersonas.innerHTML = strTablaPersonas 
    console.log(mapPersonas)
}

function eliminar(indice){
    personas = personas.filter((p,index)=>{
        if(index != indice){ /*mantengo las personas que no tienen el indice */
            return p
        }
    })
    cargarDatos();
    console.log(personas)
}
function actualizarFormulario(indice){
    let eNombre = document.getElementById("nombre1")
    let eApellido = document.getElementById("apellido1")
    let persona = personas.filter((p,index)=>{
        if(index == indice){
            return p
        }
    })
    console.log(persona)
    eNombre.value = persona[0].nombre
    eApellido.value = persona[0].apellido
    let btnActualizar = document.getElementById("btnActualizar")
    btnActualizar.value = indice
}
function actualizar(){
    let eNombre = document.getElementById("nombre1")
    let vNombre = eNombre.value
    let eApellido = document.getElementById("apellido1")
    let vApellido = eApellido.value
    let btnActualizar = document.getElementById("btnActualizar")
    let indice = btnActualizar.value
    personas = personas.map((p,index)=>{
        if(index == indice){
            return {
                nombre:vNombre,
                apellido:vApellido
            }
        }else{
            return p
        }
    })
    cargarDatos()
}