# Taskflow App
Este es un proyecto para la gestión de tareas desarrollado en el marco del curso de desarrollo de Aplicaciones móviles de Coderhouse


# pasos para ejecutarlo localmente
npm install
npx expo start


# Tener en cuenta
Asegurarse de usar una version actualizada de node > 22


# Estado actual

La aplicacion cuenta con tres screens
ProfileScreen 
HomeScreen
AddTaskScreen

Por ahora todas se renderizan en la pantalla principal 
En ProfileScreen se muestra una tarjeta con info del usuario.
En HomeScreen se muestra la lista de tareas hardcodeadas en data/tasks 

En addTaskScreen aparece un formulario para cargar titulo, descripcion y categoria.
Hoy en dia el boton de enviar se habilita cuando el usuario escribe las primeras 3 letras en el titulo.
Cuando se toca el boton de enviar se validan que el titulo tenga 5 caracteres y la descripcion 10, sino se muestran los mensajes de error.

Idealmente se habilitaria el boton una vez que cumpla con las validaciones asi se evita la friccion con el usuario.

Pasos siguientes:

Agregar scroll para poder visualizar todas las tareas y separar todo en distintas pantallas. 