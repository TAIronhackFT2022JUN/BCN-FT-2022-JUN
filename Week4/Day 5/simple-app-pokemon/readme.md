### Instrucciones
- Instalar dependencias
``` npm i ```

- Correr comando para agregar seeds
```node seeds/pokemon.seeds.js```

- En db/index.js cambiar el usuario y password de vuestro cluester en Mongo Atlas (o poned uno en local si trabajamos en local)
```const MONGO_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://USER:PASSWORD@cluster0.iypz8.mongodb.net/?retryWrites=true&w=majority";```