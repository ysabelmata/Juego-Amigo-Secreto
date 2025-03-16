let nombres = [];

        function agregarNombre() {
            let input = document.getElementById("nombre");
            let nombre = input.value.trim();

            if (nombre === "") {
                alert("Por favor, ingresa un nombre válido.");
                return;
            }
            if (nombres.includes(nombre)) {
                alert("Este nombre ya está en la lista.");
                return;
            }

            nombres.push(nombre);
            actualizarLista();
            input.value = "";
        }

        function actualizarLista() {
            let lista = document.getElementById("lista");
            lista.innerHTML = "";
            nombres.forEach(nombre => {
                let li = document.createElement("li");
                li.textContent = nombre;
                lista.appendChild(li);
            });
        }

        function sortearAmigo() {
            if (nombres.length === 0) {
                alert("No hay nombres en la lista para sortear.");
                return;
            }
            let ganador = nombres[Math.floor(Math.random() * nombres.length)];
            document.getElementById("resultado").textContent = "🎉 El amigo secreto es: " + ganador;
        }

        function reiniciarJuego() {
            nombres = [];
            actualizarLista();
            document.getElementById("resultado").textContent = "";
        }