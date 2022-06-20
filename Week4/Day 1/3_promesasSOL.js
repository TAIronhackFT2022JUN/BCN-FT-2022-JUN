// Promise =>
// misma funcion pero retorna una Promesa
// tienen una function getDataPromise que retorna una promesa

function getDataPromise(position) {
  const data = [
    {
      id: "1234",
      title: "Dune",
      available: true,
    },
    {
      id: "5455",
      title: "Harry Potter",
      available: false,
    },
    {
      id: "3345",
      title: "Juego de Tronos",
      available: false,
    },
    {
      id: "3346",
      title: "Aladdin",
      available: true,
    },
  ];

  //Una promesa trae inyectados 2 parametros
  //resolve: funcion que debe ser llamada cuando todo va OK
  //          Al llamarla, se le daba pasar el resultado OK
  //reject: funcion que debe ser llamada cuando algo falla
  //          al llamarla se debe incluir un mensaje del error
  //   const miPromesa = new Promise((resolve, reject) => {
  //     if (data[position].available === false) {
  //       reject("No hay libros en esta ubicacion");
  //       throw new Error("Este titulo no esta disponible");
  //     } else {
  //       resolve(data[position]);
  //     }
  //   });

  //   return miPromesa;
  // }
  const miPromesa = new Promise((resolve, reject) => {
    if (data[position] === undefined) {
      reject("No hay libros en esta ubicacion");
    } else if (data[position].available === false) {
      reject("Este titulo no esta disponible");
    } else {
      resolve(data[position]);
    }
  });
  return miPromesa;
}

// async await

const obtainData = async (posicion) => {
  // async function obtainData() {
  try {
    // voy a intentar ejecutar este codigo
    const response = await getDataPromise(posicion);
    console.log(response);
  } catch (err) {
    // pero si fallo, ejecuto esta parte
    console.log(err);
  }
};

obtainData(2);

//ACTIVIDAD:
//Haz fork de este codesandbox:
//Haz que la promesa anterior de un error si el objeto retornado
//tiene available =false
//El mensaje de error debe ser 'Este titulo no esta disponible'
//El error 'No hay libros en esta ubicacion" debe seguir estando
