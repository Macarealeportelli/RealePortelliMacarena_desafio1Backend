class User {
  constructor (nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas
  }

  getFullName () {
    console.log( `Nombre Completo: ${this.nombre} ${this.apellido}`)
  }

  countMascotas () {
    let count = this.mascotas.length
    console.log(`Tiene ${count} mascotas`)
  }

  addBook (newBook) {
    this.libros.push(newBook)
  }

  getBookNames () {
    console.log(`Libros: ${this.libros} `)
  }

}

const user = new User('Maca', 'Reale', ['Harry Potter', 'Games of thrones', 'En el Limbo'], ['Gato', 'Perro'])
console.log(user)
console.log(user.getFullName())
console.log(user.countMascotas())
console.log(user.addBook('Cien años de soledad'))
console.log(user.getBookNames())