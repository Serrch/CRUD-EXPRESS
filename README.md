# CRUD de Usuarios con Express

### Descripcion del proyecto 
Se trata de un pequeño CRUD de usuarios hecho con el framework de Express que maneja los datos de usuario con un archivo .JSON en lugar de una base de datos.

### Pasos para instalar el proyecto
1. Clonar el repositorio de Github
	Dirigete al repositorio da click en el boton "code" y despues en copiar la direccion del repositorio.
	
2. Abre una terminal git bash en la direccion donde deseas clonar el proyecto.

3. En la terminal ejecuta el comando  `git init` y despues 

	`git clone https://github.com/Serrch/CRUD-EXPRESS.git`
4. Una vez descargado el proyecto ve a tu editor de codigo, abre la consola y ejecuta  el comando `npm install` para instalar todas las dependencias del proyecto.

5. Corre el servidor utilizando `npm run dev nodemon` el servidor debe abrir en el puerto 5000.
`<link>` : <http://localhost:5000>
6. Si tienes ese puerto ocupado o prefieres otro puedes ir al archivo app.js y cambiarlo

```javascript  app.set('port', 5000); ```

### Imagenes del proyecto

1.Vista de usuarios

<a href="https://postimg.cc/vDqGVJTw" target="_blank"><img src="https://i.postimg.cc/fTZy6Zhy/Captura-de-pantalla-2024-11-20-233604.png" alt="Captura-de-pantalla-2024-11-20-233604"/></a>

2.Vista para agregar a un nuevo usuario

<a href="https://postimg.cc/xNCYZRsZ" target="_blank"><img src="https://i.postimg.cc/6qV3ybCB/Captura-de-pantalla-2024-11-20-233614.png" alt="Captura-de-pantalla-2024-11-20-233614"/></a>



## Tecnologías Utilizadas
- HTML5, CSS3
- JavaScript (ES6+)
- Bootstrap 5
- Fetch API / Async-Await
- Express
