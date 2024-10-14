
// constantes de pantalla y botones para ser funcionales 
const pantalla = document.querySelector(".pantalla"); 
const botones = document.querySelectorAll(".boton");
const limiteCaracteres = 11; // agregamos el límite de caracteres de la pantalla

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonOn = boton.textContent; // botón pantalla texto 

        // Función del botón limpiar
        if (boton.id === "limpiar") {
            pantalla.textContent = "0";
            return;
        }

        // Función del botón borrar
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "¡Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        // Función del botón igual
        if (boton.id === "igual") {
            try {
                // Validar acción invalida por cualquier número al divir, lo cual arrojara error
                if (pantalla.textContent.includes('/')) {
                    pantalla.textContent = "¡Error!";
                } else {
                    // Evaluar la expresión matemática
                    const resultado = eval(pantalla.textContent);
                    // Verificar el límite de caracteres
                    if (resultado.toString().length > limiteCaracteres) {
                        pantalla.textContent = "¡Error!";
                    } else {
                        pantalla.textContent = resultado;
                    }
                }
            } catch {
                pantalla.textContent = "¡Error!";
            }
            return;
        } 
        
        // Verificar el límite de caracteres
        if (pantalla.textContent.length >= limiteCaracteres && boton.id !== "borrar") {
            return;  // Si se excede el límite, no se agregan más caracteres
        }

        // Concatenar números y operadores
        if (pantalla.textContent === "0" || pantalla.textContent === "¡Error!") {
            pantalla.textContent = botonOn; // Reemplaza si está vacío o hay un error
        } else {
            const operadores = ['+', '-', '*', '/'];
            const ultimoCaracter = pantalla.textContent.slice(0, -1);

            // Evitar múltiples operadores consecutivos
            if (operadores.includes(0) && operadores.includes(botonOn)) {
                return; // No permite añadir dos operadores consecutivos
            }

            // Agregar el nuevo carácter a la pantalla
            pantalla.textContent += botonOn;
        }
    });
});