<p>Primero <strong>activar el entorno virtual</strong>, para ello abrimos las carpetas en VisualStudio, y en la terminal ingresamos:</p>

<pre><code>./venv/Scripts/activate</code></pre>

<p>Sigue estos pasos para <strong>construir y ejecutar el contenedor Docker</strong> de la aplicación Flask:</p>

<p><strong>Construcción de la imagen Docker:</strong> Abre Docker desktop, después ejecuta el siguiente comando en la terminal de la carpeta "proyecto1" para construir la imagen:</p>

<pre><code>docker build --force-rm -t flask-pokeapi . --no-cache</code></pre>

<p>Luego, para <strong>iniciar el contenedor</strong>, utiliza el siguiente comando:</p>

<pre><code>docker run -p 5000:5000 -d --name Pokeapi flask-pokeapi:latest</code></pre>

<p>Puedes visualizar en <strong>DockerDesktop</strong> la imagen y el contenedor creados.</p>

<p>Finalmente, la aplicación estará disponible en tu navegador en:</p>

<p><a href="http://localhost:5000" target="_blank" style="color: blue;">http://localhost:5000</a></p>
