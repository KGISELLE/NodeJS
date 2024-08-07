# NodeJS
Este es el desarrollo de los ejercicios propuestos en el curso NodeJS: De cero a experto de Fernando Herrera en Udemy.

## Hello World - En Node
* Como agregamos codigo de JS en la consola del navegador, en este caso Chrome.
    ![Hola mundo en el navegador](assets/HolaMundoConsolaNavegador.png)
* Y como agregamos y ejecutamos codigo de JS con Node desde cualquier terminal (En este caso uso Warp, pero se puede usar git, powerShell, entre otros).
    ![Hola mundo en Terminal](assets/HolaMundoEnTerminal.png)
    Recordar que no tenemos la necesidad de agregar el console.log() para ver el resultado de la variable message.

Nota: para salirse de la terminal interactiva de Node en cualquier terminal Ctrl + C

## Archivos de JavaScript
Corriendo node en la terminal de VSC
    ![Node en VSC](assets/NodeInVSC.png)
* Recordar que como Node corre JS, la extension .js en el nombre del archivo es totalmente opcional, lo que si hay que recordar es estar dentro de la carpeta para poder correr el archivo directamente, en este caso la accedemos a la carpeta con 
    ```git
        cd 01-Fundamentos
    ```

## Leer Archivos - FileSystem
Link del repo para la documentacion oficial de React https://github.com/facebook/react
Vamos a hacer algo para poder leer nuestro README
* El utf8 es para especificar el tipo de encoding, si no hago esto es posible que me devuelva el binario del mismo.
    ![Leer archivos con Node- FileSystem](assets/FileSystem.png)

Ahora vamos a modificar data de ese archivo que estamos leyendo y con esta data modificada escribir un nuevo archivo.
    ![Modificar y escribir un nuevo archivo con Node- FileSystem](assets/writeFileSystem.png)