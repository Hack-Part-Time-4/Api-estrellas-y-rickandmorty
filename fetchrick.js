let path_api = 'https://rickandmortyapi.com/api/character/?page=19';

fetch(path_api)
  .then(Response => Response.json())
  .then(data => {
    let data_result = data.results; //almacenar la seccion results de la api
    console.log(data_result); //imprimir los datos almacenados

    //hacer un array con los personajes que estan vivos

    let data_vivos = []; //array vacio para ser rellenado
    data_result.map(data => { //hacer un recorrido de data_result
      if (data.status == 'Alive') { //si el status es 'alive' rellenar el array
        data_vivos.push(data)
      }
    })
    console.log(data_vivos); //imprimir el array rellenado
  });




