Primero **activar el entorno virtual**, para ello abrimos las carpetas en VisualStudio, y en la terminal ingresamos:

```bash
./venv/Scripts/activate


Sigue estos pasos para construir y ejecutar el contenedor Docker de la aplicación Flask:

Construcción de la imagen Docker: Abre Docker desktop, despues ejecuta el siguiente comando en la terminal de la carpeta "proyecto1" para construir la imagen:

docker build --force-rm -t flask-pokeapi . --no-cache

Luego, para iniciar el contenedor, utiliza el siguiente comando: 

docker run -p 5000:5000 -d --name Pokeapi flask-pokeapi:latest

Puedes visualizar en DockerDesktop la imagen y el contenedor creados.

Finalmente, la aplicación estará disponible en tu navegador en:

http://localhost:5000
