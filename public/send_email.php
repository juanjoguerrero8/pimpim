<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "pimpimfotomatones@gmail.com";
    $headers = "From: $name <$email>";
    $body = "Mensaje de: $name\nCorreo electrónico: $email\n\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "¡El correo electrónico se envió con éxito!";
    } else {
        echo "¡Hubo un error al enviar el correo electrónico!";
    }
}
?>
