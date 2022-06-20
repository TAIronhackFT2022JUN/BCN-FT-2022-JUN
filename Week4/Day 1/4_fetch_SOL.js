// FETCH

//Fetch nos permite traer datos de una direccion de internet

setTimeout(() => {
  //Usamos fetch con la direccion API que queremos usar
  fetch("'https://api.spacexdata.com/v3/rockets/falcon10'")
    //Entra en el .then si todo ha ido bien
    .then((response) => {
      //Esta es la respuesta completa
      console.log("Respuesta", response);
      //Podemos acceder a laos valores de la respuesta
      console.log(response.type);
      console.log(response.url);
    })
    // Si algo ha fallado, entra en .catch, teniendo como
    // parametro el mensaje de error
    .catch((error) => {
      console.log(error);
    });
}, 2000);

//Actividad
//Ve a la documentacion de la API
//https://docs.spacexdata.com
//Busca el endpoint que devuelva la info de la empresa
//Haz un console.log() del founder incluido en la respuesta => Elon Musk
setTimeout(() => {
  //Usamos fetch con la direccion API que queremos usar
  fetch("https://api.spacexdata.com/v4/company") //https://api.spacexdata.com/v3/info o la v3 si alguien la usa
    //Entra en el .then si todo ha ido bien
    .then((response) => response.json())
    .then((data) => {
      //Esta es la respuesta completa
      console.log("Respuesta", data.founder);
    })
    // Si algo ha fallado, entra en .catch, teniendo como
    // parametro el mensaje de error
    .catch((error) => {
      console.log(error);
    });
}, 2000);

//CON LA DE LA POKEAPI DEVOLVER DITTO SOLO EL NOMBRE
// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   //Entra en el .then si todo ha ido bien
//   .then((response) => {
//     return response.json();
//   })
//   .then((returnThenAnterior) => {
//     console.log("Parsed response: ", returnThenAnterior.name);
//   })
//   // Si algo ha fallado, entra en .catch, teniendo como
//   // parametro el mensaje de error
//   .catch((error) => {
//     console.log(error);
//   });

//EXTRA
//Y en este mostramos las BADGE, que no nos lo pide, pero YOLO
/*
setTimeout(() => {
  //Usamos fetch con la direccion API que queremos usar
  fetch("https://api.spacexdata.com/v4/launches")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((launchObj) => {
        const patchImage = launchObj.links.patch.small;
        const imgElement = document.createElement("img");

        imgElement.setAttribute("src", patchImage);
        imgElement.setAttribute("width", 200);
        document.body.appendChild(imgElement);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}, 3000);
*/
