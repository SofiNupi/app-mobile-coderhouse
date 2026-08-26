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


Checkpoint 4:
Se agrega una nueva screen con el detalle de cada tarea al clickear en cada una de las Task, se renderiza por conditional rendering por selectedTask
Se agregó el check en cada task para marcar como realizada o no realizada.
El formulario de Nueva tarea se pasó a un Modal para no contaminar la vista principal.
Se pueden eliminar tareas y cambiar de estado.

Proximo paso:
Mejorar estilos
Agregar Navegacion.


Checkpoint 5:
Se agregaron bottom Tabs para navegar entre distintos Stacks Home, Tasks, y Profile

Se incluyó el componente TaskStack que contiene el detalle.
Al hacer esto dejaron de funcionar las acciones sobre las tareas dentro del detailTask. Quedó en TODO para el próximo Checkpoint

Proximos pasos: 
Mejorar la home para mostrar estado de tareas pendientes etc
Agregar estado global


Checkpoint 6:
Se migraron los datos globales a Redux

Proximo paso:
Mejorar estilos
Agregar firebase para persistencia de datos