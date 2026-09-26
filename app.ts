import promptSync from 'prompt-sync';
const prompt = promptSync();

// Traigo las funciones del otro archivo
import { vertareas, buscartarea, agregartarea } from './funciones.js';

function menu_principal(): void{
    console.log("Hola, ¿qué desea?");
    let op : number;
    do {
        console.log("\n----MENU-----");
        console.log("[1] Ver tareas");
        console.log("[2] Buscar Tarea");
        console.log("[3] Agregar tarea");
        console.log("[0] Salir");
        
        op = parseInt(prompt("> ") as string);
        
        switch (op){
            case 1: 
                vertareas();
                break;
            case 2:
                buscartarea();
                break;
            case 3:
                agregartarea();
                break;
            case 0:
                console.log('Adiós...');
                break;
            default:
                console.log('Opción inválida..');
                break;
        }
    } while (op !== 0);
}

menu_principal();