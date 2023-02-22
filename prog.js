const obtener = async () => {
  const edad = await prompt("Por favor ingrese edad ");
  saludar(edad);
}

const saludar = (edad) => {
  document.write ("Tu edad es  "+edad+"<br>  ")
  if (parseInt(edad) === 18) {
    document.write ("Puedes Votar, sera tu primera votacion")
  }else if(edad > 18){
    document.write ("Puedes Votar, de nuevo")
  }else {
    document.write ("Aun no puedes votar")
  }
}

obtener();