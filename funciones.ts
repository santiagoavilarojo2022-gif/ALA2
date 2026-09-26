import promptSync from 'prompt-sync';
const prompt = promptSync();
//export let tareas =[]; //variable global arreglo
export interface Tarea {
    titulo: string;
    descripcion: string;
    estado: string;
    fecha: string;
    vencimiento: string;
    dificultad: string;
    ultimaEdicion: string;
}
export let tareas: Tarea[] = [];
export function vertareas(): void{
 console.log('---LISTA DE TAREAS---');
   
 
 if(tareas.length === 0){
    console.log('no hay tareas subidas.');
    prompt('presiona enter para volver al menu' as string);
    return;
 }

 let opver : number; //opcion del menu para ver las tareas
 let opEditar: string;
 //mostrar las tareas
    do{
   console.log("\n¿Qué tareas deseas ver?");
        console.log("[1] Todas");
        console.log("[2] Pendientes");
        console.log("[3] En curso");
        console.log("[4] Terminadas");
        console.log("[0] Volver");
        opver = parseInt(prompt("> ") as string);

switch (opver){
    case 1: //le muestro todas las tareas en el array
          console.log('estas son todas tus tareas:');
          for(let i=0; i<tareas.length ; i++){
            console.log(`[${i + 1}] ${tareas[i].titulo}`);
          }
          let opTodas = parseInt(prompt("Si desea ver en detalle alguna tarea, ingrese el número de indice para verla o 0 para volver.\n> ") as string);

          //por si el usuario quiere ver los detalles de las tareas
        if (opTodas > 0 && opTodas <= tareas.length){
            let indiceReal = opTodas - 1; //para que el numero de usuario coincida con el indice del array
            console.log(`\n--- Detalles ---`);
                    console.log(`Título: ${tareas[indiceReal].titulo}`);
                    console.log(`Descripción: ${tareas[indiceReal].descripcion}`);
                    console.log(`Estado: ${tareas[indiceReal].estado}`);
                    console.log(`Última Edición: ${tareas[indiceReal].ultimaEdicion}`);
        }
        break;

        case 2:
             console.log('estas son todas las pendientes: ');
             let haypendientes: boolean = false; //booleana para averiguar si hay tareas pendientes

             for(let i=0; i<tareas.length; i++){
                if (tareas[i].estado == 'pendiente'){
                    console.log(`[${i + 1}] ${tareas[i].titulo}`);
                    //si hay tareas pendientes, muestra todas las que hay
                    haypendientes = true;
                }
            }

                if(haypendientes == false){
                    console.log('no hay tareas pendientes');
                    //si no hay tareas pendientes
                    break;
                }
                
                console.log('desea ver detalles de alguna tarea pendiente?');
                let oppendientes = parseInt(prompt("Introduce el número para verla o 0 para volver.\n> ") as string);
                //si hay tareas pendientes, el usuario elije que tarea ver en detalle
                if(oppendientes==0){
                    console.log('volviendo');
                    break;
                } else if (oppendientes>0 && oppendientes<=tareas.length){
                    let indice = oppendientes -1; //el indice es la posicion que elija el usuario 
                    if (tareas[indice].estado === 'pendiente') {
            console.log(`\n--- Detalles ---`);
            console.log(`Título: ${tareas[indice].titulo}`);
            console.log(`Descripción: ${tareas[indice].descripcion}`);
            console.log(`Estado: ${tareas[indice].estado}`);
            console.log(`Última Edición: ${tareas[indice].ultimaEdicion}`);
            console.log(`----------------`);
             opEditar = prompt("¿Deseas editar esta tarea? (S/N): ") as string;
            if (opEditar.toLowerCase() === 's') {
                editartarea(indice); // Llamo a la funcion y le pasamos el índice
            } else {
                console.log('Volviendo..')
            }
        } else {
            console.log('error, el indice no coincide con ninguna tarea pendiente');
        }

                }
                else {
                    console.log ('numero invalido');
                }

             
             break;
        case 3:
            console.log('estas son todas las tareas en curso:');
            let hayencurso = false;
            for(let i=0 ; i<tareas.length; i++){
                if (tareas[i].estado == 'en curso'){
                 console.log(`[${i + 1}] ${tareas[i].titulo}`); //muestro las tareas en curso
                 hayencurso = true;
                }
            }
               if (hayencurso == false){
                console.log('no hay tareas en curso');
                break;
               } 
               console.log('desea ver en detalle alguna tarea en curso?');
               
               let opencurso = parseInt(prompt("Introduce el número para verla o 0 para volver.\n> ") as string);
               //si hay tareas en curso, el usuario elije si quiere ver alguna en detalle y cual
              
               if (opencurso == 0){
                console.log ('volviendo..');
                break;
               } else if (opencurso>0 && opencurso<=tareas.length){
               let indice = opencurso -1;
               if (tareas[indice].estado == 'en curso'){
                 console.log(`\n--- Detalles ---`);
            console.log(`Título: ${tareas[indice].titulo}`);
            console.log(`Descripción: ${tareas[indice].descripcion}`);
            console.log(`Estado: ${tareas[indice].estado}`);
            console.log(`Última Edición: ${tareas[indice].ultimaEdicion}`);
            console.log(`----------------`);
             opEditar = prompt("¿Deseas editar esta tarea? (S/N): ") as string;
            if (opEditar.toLowerCase() === 's') {
                editartarea(indice); 
            } else {
                console.log('Volviendo..')
            }
               } else {
                console.log('error, el indice no coincide con ninguna tarea en curso ');
                break;
               }
               } else {
                console.log('numero invalido..');
                break;
               }
            
            break;
        case 4:
            console.log('estas son las tareas terminadas: ');
            let hayterminadas = false;
            for(let i=0; i<tareas.length; i++){
                if(tareas[i].estado == 'terminada'){
                console.log(`[${i + 1}] ${tareas[i].titulo}`); //muestro las tareas terminadas
                hayterminadas = true;
                }
            }
                if (hayterminadas == false){
                    console.log('no hay tareas terminadas');
                    break;
                }
                console.log('desea ver en detalle alguna tarea temrinada? ');
                let opterminada = parseInt(prompt("Introduce el número para verla o 0 para volver.\n> ") as string);
               //si hay tareas termoinadas, el usuario elije si quiere ver alguna en detalle y cual
               if (opterminada == 0){
                console.log('volviendo..');
                break;
               }  else if (opterminada>0 && opterminada <= tareas.length){
                let indice = opterminada -1;
                if (tareas[indice].estado =='terminada'){
                     console.log(`\n--- Detalles ---`);
            console.log(`Título: ${tareas[indice].titulo}`);
            console.log(`Descripción: ${tareas[indice].descripcion}`);
            console.log(`Estado: ${tareas[indice].estado}`);
            console.log(`Última Edición: ${tareas[indice].ultimaEdicion}`);
            console.log(`----------------`);
             opEditar = prompt("¿Deseas editar esta tarea? (S/N): ") as string;
            if (opEditar.toLowerCase() === 's') {
                editartarea(indice); 
            }
            else {
                console.log('Volviendo..')
            }
                } else{
                    console.log('no hay tarea terminada con ese indice.');
                    break;
                }
               } else {
                console.log('numero invalido..');
                break;
               }
            
            break;
}

    } while (opver != 0);
 }
 
 export function editartarea(indice : number) : void{
    console.log(`estas editando la tarea: ${tareas[indice].titulo}`);
    console.log(`si queres manteres los datos como estan, dejalo en blanco..`);
    console.log(`si deseas dejar en blanco un atributo, presione espacio.`);

    function procesarCambio(nuevovalor: string, valorantiguo: string) : string{
     if (nuevovalor == ""){ return valorantiguo} //conserva el atributo viejo
     if(nuevovalor == " "){ return  ""} //borra el atributo, lo deja en blanco
     return nuevovalor; //actualiza el atributo
    } //esta funcion la uso para cada atributo a la hora editar 

    // no puede quedar vacio
    let titulo = prompt(`1. Ingresa el título (Actual: ${tareas[indice].titulo}): `) as string;
    if (titulo === " ") {
        console.log("El título no puede quedar vacío. Se mantendrá el anterior.");
        titulo = ""; // como no puede quedar vacio, si aprieta el espacio, lo tomo como si hubiese tocado el enter y queda con el titulo que ya tiene
    }
    tareas[indice].titulo = procesarCambio(titulo, tareas[indice].titulo); //llamo a la funcion procesarcambio, nuevovalor toma titulo, y valorantiguo la tarea del indice del arreglo seleccionado

    //la descripcion puede quedar vacio, no uso restricciones como en titulo, asi con los demas atributos
    let desc = prompt(`2. Ingresa la descripción (Actual: ${tareas[indice].descripcion}): `);
    tareas[indice].descripcion = procesarCambio(desc, tareas[indice].descripcion);

    let estado = prompt(`3. Estado (Actual: ${tareas[indice].estado}): `);
    tareas[indice].estado = procesarCambio(estado, tareas[indice].estado);

    let dif = prompt(`4. Dificultad (Actual: ${tareas[indice].dificultad}): `);
    tareas[indice].dificultad = procesarCambio(dif, tareas[indice].dificultad);

    let venc = prompt(`5. Vencimiento (Actual: ${tareas[indice].vencimiento}): `);
    tareas[indice].vencimiento = procesarCambio(venc, tareas[indice].vencimiento);

    // Actualizo la fecha de última edición al día de hoy
    tareas[indice].ultimaEdicion = new Date().toLocaleDateString();

    console.log("\nDatos guardados");
    prompt("Presiona enter para continuar") as string;

 }


export function buscartarea(){
const nombreusuario = prompt('ingrese el nombre de la tarea que desea buscar: ')as string; //nombre usuario es para que ingrese el titulo de la tarea
let haytareas = false;
for(let i=0;i<tareas.length;i++){
    if (tareas[i].titulo === nombreusuario){
        haytareas = true;
        console.log(`[${i + 1}] ${tareas[i].titulo}`);
    } 
    
} 

if (haytareas == false){
    console.log('No se encontró ninguna tarea con ese nombre..');
    return;
}

let opbusqueda = parseInt(prompt('¿Desea ver la tarea en detalle? Introduzca el numero para verla, 0 para volver.\n> ')as string);

if (opbusqueda === 0 ){
    console.log('Volviendo..');
    return;
    
} else if (opbusqueda > 0 && opbusqueda <= tareas.length){
    
    let indice = opbusqueda - 1;

    console.log(`\n--- Detalles ---`);
    console.log(`Título: ${tareas[indice].titulo}`);
    console.log(`Descripción: ${tareas[indice].descripcion}`);
    console.log(`Estado: ${tareas[indice].estado}`);
    console.log(`----------------`);
} else {
    console.log('Indice invalido..');
    return;
}
}

export function agregartarea(){
    console.log("--- NUEVA TAREA ---");

    // 1. OBLIGATORIO:  do-while para que no pueda avanzar sin poner título
    let titulo;
    do {
        titulo = prompt('Ingrese el título de la tarea (Obligatorio): ')as string;
        if (titulo === "") {
            console.log("Error: El título no puede estar vacío.");
        }
    } while (titulo === "");

    // 2. OPCIONAL, puede quedar vacio ("")
    let descripcion = prompt('Ingrese la descripción (opcional): ')as string;

    // 3. POR DEFECTO: Pendiente
    let estado = prompt('Ingrese el estado (Pendiente, En curso, Terminada, Cancelada): ') as string;
    if (estado === "") {
        estado = "Pendiente";
    }

    // 4. POR DEFECTO: Fácil
    let dificultad = prompt('Ingrese la dificultad (Fácil, Medio, Difícil): ') as string;
    if (dificultad === "") {
        dificultad = "Fácil";
    }

    // 5. OPCIONAL, puede quedar vacio ("")
    let vencimiento = prompt('Ingrese la fecha de vencimiento (opcional): ') as string;

    // 6. FECHAS AUTOMÁTICAS
    let fechaactual = new Date().toLocaleDateString();

    const nuevatarea = {
        titulo: titulo, 
        descripcion: descripcion,
        estado: estado,
        fecha: fechaactual, // Se carga sola
        vencimiento: vencimiento,
        dificultad: dificultad,
        ultimaEdicion: fechaactual  // Inicia igual que la de creación
    };

    tareas.push(nuevatarea);
    console.log('\nTarea agregada correctamente');
    console.clear();
                }

 