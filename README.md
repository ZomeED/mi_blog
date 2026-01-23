# Práctica: Despliegue de un sitio estático en GitHub Pages

## 📋 Descripción del Proyecto
Esta práctica consiste en la creación, versionado y despliegue automático de un sitio web estático (HTML, CSS y JS). El objetivo principal ha sido familiarizarse con el flujo de trabajo de **Git** (control de versiones local), **GitHub** (repositorio remoto) y **GitHub Pages** (hosting gratuito con despliegue continuo).

## 🚀 Despliegue (URL Pública)
El sitio está publicado y accesible en la siguiente dirección:
👉 **[https://ZomeED.github.io/mi_blog/](https://ZomeED.github.io/mi_blog/)**

---

## 🛠️ Tecnologías y Herramientas
* **HTML5:** Estructura semántica del blog.
* **CSS3:** Personalización de estilos (Paleta de colores azul profesional y tipografía).
* **JavaScript:** Lógica interactiva en el cliente.
* **Git & GitHub:** Control de versiones y repositorio remoto.
* **Visual Studio Code / Terminal:** Entorno de Git Bash en Windows 11.

---

## 📝 Desarrollo de la Práctica (Paso a Paso)

### 1. Creación de la Plantilla Base
Se creó la estructura de carpetas y los archivos iniciales (`index.html`, `style.css`, `script.js`) siguiendo el código proporcionado en el enunciado. Se inicializó el repositorio con `git init`.

Aquí se muestra la confirmación del primer commit donde Git registra los archivos creados:

> ![Primer commit](/img/commit_inicial.png)

### 2. Configuración del Repositorio Remoto (SSH)
Para conectar mi repositorio local con GitHub, he elegido el protocolo **SSH** (Secure Shell).

* **¿Por qué SSH?**
    He optado por este método porque es más seguro que HTTPS, ya que utiliza un par de claves criptográficas (pública y privada) para autenticar mi equipo. Además, facilita el trabajo diario al no requerir introducir usuario y contraseña cada vez que hago un `git push`.
* **Configuración:** Generé las claves con `ssh-keygen -t ed25519 -C "5600125@alu.murciaeduca.es"` y vinculé la clave pública en la configuración de mi cuenta de GitHub.

### 3. Commits Atómicos y Personalización
Siguiendo las buenas prácticas, he realizado cambios separados para mantener un historial limpio (Commits atómicos):

1.  **HTML (`Etapa 3`):** Personalicé el título de la pestaña y el encabezado principal (`<h1>`) para reflejar mi identidad.
2.  **CSS (`Etapa 4`):** Modifiqué la hoja de estilos eliminando los colores por defecto. Implementé una paleta de colores azules ("Dark Blue") para la cabecera y el pie de página, aumenté el tamaño del título principal y añadí sombras suaves al contenedor `main` para un aspecto más moderno.
3.  **JavaScript (`Etapa 5`):** Programé una función interactiva: al hacer clic en el título, este cambia a un color aleatorio y muestra una alerta de bienvenida.

### 4. Publicación en GitHub Pages
Configuré el repositorio para desplegarse desde la rama `main` en la carpeta raíz (`/`).
Esto ha habilitado un sistema de **Integración Continua (CI)** básica: cada vez que hago un `git push` desde mi terminal local, GitHub detecta los cambios, compila el sitio y actualiza la versión pública automáticamente sin intervención manual.

*(Nota: No se ha configurado un dominio personalizado externo, se utiliza el subdominio gratuito proporcionado por GitHub).*

---

## 🧐 Reflexión y Aprendizaje

Durante la realización de esta práctica en Windows 11, he reforzado varios conceptos clave:

* **Lo que más me costó:** La configuración inicial de las claves SSH en la terminal de Windows requirió atención para asegurar que el agente `ssh-agent` estuviera funcionando y la ruta del archivo fuera correcta.
* **Lo que he aprendido:**
    * La importancia de los **commits atómicos**: permiten entender la evolución del proyecto paso a paso mirando el historial (`git log`).
    * La potencia de **GitHub Pages**: es sorprendente cómo un simple `push` puede actualizar un sitio web en producción en cuestión de segundos.
    * La documentación (este README) es tan importante como el código, ya que explica el "porqué" y el "cómo" del proyecto.

---
*Autor: Jose Antonio Zomeño Pardo*

*Ciclo: Desarrollo de Aplicaciones Web 2º Curso*
