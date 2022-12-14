// DATOS OBJETO
let fecha = new Date()
let arreglo = [1,2,3,4]
let objeto = {
  nombre: 'Maria',
  apellido: 'Abello',
  edad: 35
}

let primeraVariable
primeraVariable = 5

//COPIA DE UN ARREGLO/OBJETO
let objetoCopia = {...objeto} //spread
objetoCopia.nombre = 'Laura'
// console.log(objetoCopia)
// console.log(objeto)


//Actividad en clase
let nombre = 'Juan'
let edad = 35
let precio = 100
let series = ['GOT', 'Breaking Bad']

// let usuario = {
//   nombre: 'Juan',
//   edad: 35,
//   precio: 100,
//   series: ['GOT', 'Breaking Bad']
// }

let usuarios = [
  {
    nombre: 'Juan',
    edad: 35,
    precio: 100,
    series: ['GOT', 'Breaking Bad']
  },
  {
    nombre: 'Andres',
    edad: 28,
    precio: 150,
    series: ['Friends', 'Breaking Bad']
  }
]

usuarios.forEach(usuario => {
  usuario.edad++
  usuario.series.push('Dark')
})

// console.log(usuarios)

//LET - CONST

//const se usa para array, objetos y funciones
//let para variables

// funciones

// function sumar(num1, num2) {
//   let resultado = num1 + num2
//   return resultado
// }

// const restar = (num1, num2) => {
//   let resultado = num1 - num2
//   return resultado
// }
// console.log(restar(4,5))


const mostrarLista=(array)=>{
  if(array.length === 0) {
    console.log('Lista vacia')
  } else {
    array.forEach(elem=> console.log(elem))
    console.log(`la cantidad de elementos del array es ${array.length}`)
  }
}

// mostrarLista([1,2,3,6])

//clases

class Usuario {
  constructor(nombre, email, password){
    this.nombre = nombre
    this.email = email
    this.password = password
  }
  tieneEmail(){
    if(this.email){
      return true
    } else {
      return false
    }
  }
}

const usuario1 = new Usuario('Juan', 'juan@test.com', 'abcd123')
const usuario2 = new Usuario('Camila', 'camila@test.com', '1234abc')

// console.log( usuario1, usuario2)

//hands on lab

class Contador {
  constructor(nombre){
    this.nombre = nombre
    this.contadorInd = 0
  }
  static contadorGlobal = 0

  getResponsable(){
    console.log(this.nombre)
  }

  getCuentaIndividual(){
    console.log(`Individual ${this.nombre}: ${this.contadorInd}`)
  }

  getCuentaGlobal(){
    console.log(`Global ${Contador.contadorGlobal}`)
  }

  contar(){
    this.contadorInd++
    Contador.contadorGlobal++
  }
}

const contador1 = new Contador('juan')
const contador2 = new Contador('camila')

// console.log(contador1, contador2)
contador1.contar()
contador1.getResponsable()
contador1.getCuentaGlobal()
contador1.getCuentaIndividual()
