### Paso a seguir para el laboratorio #2 lab-express-basic-site

- Forkeamos
- Clonamos
- Creamos el fichero package.json
```npm init -y```

- Creamos un script dentro del package.json:
```
"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
}
```
![package.json](https://user-images.githubusercontent.com/14861253/174856117-78a10a10-22fa-42a7-b859-22399f36f56e.png)

- Instalamos express 
```npm i express```

- Instalamos nodemon
```npm i nodemon```

- Creamos el app.js con lo siguiente, solo tenemos que crear los ENDPOINTS y apuntando a la carpeta "views" para renderizar la vista que queramos
```
// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));
// our sec Route:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));
// our third Route:
app.get('/gallery', (request, response, next) => response.sendFile(__dirname + '/views/gallery.html'));
// our fourth Route:
app.get('/work', (request, response, next) => response.sendFile(__dirname + '/views/work.html'));

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));
```

- Creamos la estructura de ficheros que nos pide el enunciado
    - Carpeta /public dentro de esta, carpeta /css y /images (y si tenemos scripts, carpeta /scripts)
    - Carpeta /views
        - Dentro de views 4 ficheros:
            1. home.html
            1. about.html
            1. gallery.html
            1. work.html

![estructura ficheros](https://user-images.githubusercontent.com/14861253/174856433-9ec08ca5-610b-460a-a86d-9a99f25e7405.png)

- Ejecutamos en terminal
```nodemon app.js``` 
o
```npm run dev```