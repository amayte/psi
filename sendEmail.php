<?php
$to = "mayte.magri@outlook.com";
$subject = "Mensagem do formulário de contato";
$name = $_POST["name"];
$message = $_POST["message"];
$headers = "From: email-do-remetente@seu-site.com" . "\r\n";
mail($to, $subject, $message, $headers);
?>
