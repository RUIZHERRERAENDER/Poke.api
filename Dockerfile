FROM python:3.11.9-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia los requisitos de la aplicación
COPY requirements.txt . 

# Actualiza pip e instala las dependencias
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt 

# Copia el código de la aplicación
COPY . .

# Configura la variable de entorno para Flask
ENV FLASK_APP=proyecto1.py
ENV FLASK_RUN_HOST=0.0.0.0

# Comando para ejecutar la aplicación
CMD ["flask", "run"]