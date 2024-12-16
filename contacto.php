<?php
// Datos de conexión a la base de datos
$host = 'localhost'; // Servidor local de Laragon
$user = 'root';      // Usuario por defecto en Laragon
$password = '';      // Sin contraseña por defecto
$dbname = 'contacto_db'; // Nombre de tu base de datos

// Conexión a la base de datos usando MySQLi
$conn = new mysqli($host, $user, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Validar si el formulario ha sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener y limpiar los datos enviados desde el formulario
    $nombres = htmlspecialchars($_POST['name']);
    $apellidos = htmlspecialchars($_POST['lastName']);
    $tipo_documento = htmlspecialchars($_POST['tipo-documento']);
    $numero_documento = htmlspecialchars($_POST['docNumber']);
    $celular = htmlspecialchars($_POST['cell']);
    $correo = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['message']);

    // Preparar la sentencia SQL para evitar inyecciones SQL
    $stmt = $conn->prepare("INSERT INTO mensajes (nombres, apellidos, tipo_documento, numero_documento, celular, correo, mensaje) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $nombres, $apellidos, $tipo_documento, $numero_documento, $celular, $correo, $mensaje);

    // Ejecutar la sentencia y verificar si fue exitosa
    if ($stmt->execute()) {
        echo "<p>¡Mensaje enviado exitosamente!</p>";
    } else {
        echo "<p>Error al enviar el mensaje: " . $stmt->error . "</p>";
    }

    // Cerrar la sentencia y la conexión
    $stmt->close();
    $conn->close();
}
?>

