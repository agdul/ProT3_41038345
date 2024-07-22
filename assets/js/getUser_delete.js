$(document).ready(function() {
    $('#staticBackdrop').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget); // Botón que activó el modal
        var userId = button.data('id'); // Obtener el ID del usuario
        var nombreUsuario = button.data('name');
        var nickName = button.data('nick');
        var urlEliminar = '<?php echo base_url("delete_user"); ?>'; // Reemplaza con la ruta real
        $('#userIdToDelete').text(userId); // Mostrar el ID en el modal
        $('#userNombre').text(nombreUsuario);
        $('#nickName').text(nickName);

        // Asigna la URL de eliminación al botón
        document.getElementById('eliminarUsuario').addEventListener('click', function() {
            window.location.href = urlEliminar + '/' + userId;
        });
    });
});