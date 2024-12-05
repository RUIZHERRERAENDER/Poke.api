Sigue estos pasos para construir y ejecutar el contenedor Docker de la aplicación Flask.
## Construcción de la imagen Docker
Abre Docker desktop 
Ejecuta el siguiente comando en la terminal de la carpeta "proyecto1" para construir la imagen:
docker build --force-rm -t flask-pokeapi . --no-cache
Luego, para iniciar el contenedor, utiliza el siguiente comando: 
docker run -p 5000:5000 -d --name Pokeapi flask-pokeapi:latest
Finalmente, la aplicación estará disponible en tu navegador en:
http://localhost:5000
