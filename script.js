class Persona {
    cosntructor(nombre, apellido, edad, dni, nota) {
    this.nombre = nombre 
    this.apellido = apellido
    this.edad = edad
    this.dni = dni
    this.edad = edad
} }


const persona1 = new Persona ("Santiago", "Lazarec", 23, 41716247, 8) 
const persona2 = new Persona ("Ivan", "Vallejo", 22, 42616258, 10)
const persona3 = new Persona ("Juan", "Gimenez", 24, 39598357, 6)
const persona4 = new Persona ("Pedro", "Sanchez", 27, 35712684, 4)  

const personas = [persona1, persona2, persona3, persona4]

let divPersonas = document.getElementById("divPersonas")

personas.forEach(persona => {
    divPersonas.innerHTML += `
    <div id="${personaEnArray.dni}"> 
        <p> Nombre: ${personaenArray.nombre} </p>
        <p> Apellido: ${personaenArray.apellido} </p>
        <p> Edad: ${personaenArray.edad} </p>
        <p> Nota: ${personaenArray.nota} </p>
    </div>

    `
})


