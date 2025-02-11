// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function agregarAmigo() {
    // Obtener el valor del input
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y final

    // Verificar que el input no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    // Crear un nuevo elemento <li>
    let li = document.createElement("li");
    li.textContent = nombre;

    // Agregar el <li> a la lista <ul> con id="listaAmigos"
    document.getElementById("listaAmigos").appendChild(li);

    // Limpiar el input después de agregar el amigo
    input.value = "";
}

function sortearAmigo() {
    let lista = document.getElementById("listaAmigos");
    let amigos = lista.getElementsByTagName("li");

    // Verificar si hay amigos en la lista
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    // Seleccionar un amigo al azar
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio].textContent;

    // Limpiar la lista de amigos
    lista.innerHTML = "";

    // Crear y agregar el amigo sorteado en la lista de resultados
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar resultados anteriores

    let li = document.createElement("li");
    li.textContent = `🎉 ${amigoSorteado} 🎉`;
    resultadoLista.appendChild(li);
}
