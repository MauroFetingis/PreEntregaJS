//Lista de generos de radio//

// let radioRyb = ;
// let radioPop = ;
// let radioRock = ;
// let radioSoul = ;
// let radioFunk = ;
// let radioHiphop = ;
// let radioElectronica = ;
// let radioClasica = ;
// Comilla invertida `
//Función//

function escucharMusica() {
    let solicitarOpcion = prompt(`Por favor seleccione lo que desee realizar indicando con el Nº correspondiente:
    1: Escuchar Radio
    2: Pedir cancion  
    3: Salir 
    `);
    switch (solicitarOpcion) {
        case "1":
            let solicitarRadio = prompt(`Por favor seleccione a la radio que desee escuchar indicando con el Nº correspondiente:\n1. R&B \n2. Pop \n3. Rock \n4. Hip-Hop \n5. Electronica`);
            let cantidadHoras = Number(prompt("Por cuanto tiempo quiere escuchar?"));
            switch (solicitarRadio) {
                case "1":
                    alert("Escuchando la radio R&B por " + cantidadHoras+ " horas") ;
                    console.log("Reproduciendo playlist 1");
                    console.log("en lista playlist " + cantidadHoras);
                    break;
                case "2":
                    alert("Escuchando la radio Pop por " + cantidadHoras+ " horas") ;
                    console.log("Reproduciendo playlist 1");
                    console.log("en lista playlist " + cantidadHoras);
                    break;
                case "3":
                    alert("Escuchando la radio Rock por" + cantidadHoras+ " horas") ;
                    console.log("Reproduciendo playlist 1");
                    console.log("en lista playlist " + cantidadHoras);
                    break;
                case "4":
                    alert("Escuchando la radio Hip-Hop por" + cantidadHoras+ " horas") ;
                    console.log("Reproduciendo playlist 1");
                    console.log("en lista playlist " + cantidadHoras);
                    break;
                case "5":
                    alert("Escuchando la radio Electrónica por " + cantidadHoras + " horas");
                    console.log("Reproduciendo playlist 1");
                    console.log("en lista playlist " + cantidadHoras);
                    break;
                default:
                    console.log("ninguna opción seleccionada");
                    break;
            }
            break;

        case "2":
            let solicitarCancion = prompt("Por favor escriba que cancion quiere escuchar");
            let solicitarArtista = prompt("Por favor escriba el nombre del artista o grupo");
            alert("Reproduciendo " + solicitarCancion + " de " + solicitarArtista);
            console.log("Reproduciendo " + solicitarCancion + " de " + solicitarArtista);
            break;
        case "3":
            alert("Hasta Luego ^-^")
            break;
        default:
            alert("Hasta Luego ^-^")
            break;
    }
    
}
escucharMusica();