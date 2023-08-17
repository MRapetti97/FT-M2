$(document).ready(function () {
  $("#boton").on("click", (e) => {
    let lista = $("#lista");
    lista.empty();

    $.get("http://localhost:5000/amigos", function (response) {
      response.map((amigo) => {
        let elementoHTML = document.createElement("li");
        elementoHTML.innerText = `${amigo.name} es tu amigo número: ${amigo.id}`;
        elementoHTML.setAttribute("data-id", amigo.id); // Agregar atributo data-id
        lista.append(elementoHTML);
      });
    });
  });

  $("#search").on("click", () => {
    let id = $("#input").val();

    if (id) {
      $.get(`http://localhost:5000/amigos/${id}`, (response) => {
        $("#amigo").html(`Nombre: ${response.name}`);
      });
    } else {
      $("#amigo").html("Inserte un id");
    }
  });

  $("#delete").on("click", () => {
    let id = $("#inputDelete").val();

    if (id) {
      $.ajax({
        type: "DELETE",
        url: `http://localhost:5000/amigos/${id}`,
        success: () => {
          $("#success").html("Tu amigo fue eliminado con éxito");
          $("#inputDelete").val(""); // Limpiar el input después de la eliminación

          // Eliminar el amigo de la lista
          $(`li[data-id='${id}']`).remove();
        },
      });
    } else {
      $("#success").html("Inserta un id");
    }
  });
});
