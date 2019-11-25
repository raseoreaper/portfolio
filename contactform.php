<?php

if (isset($_POST['submit'])){
    $nom = $_POST['nom'];
    $sujet = $_POST['sujet'];
    $courrielFrom = $_POST['courriel'];
    $message = $_POST['message'];

$mailTo = "ronaldjunior.rivesttrudel@hotmail.com";
$headers = "From: ".$courrielFrom;
$txt = "Recu courriel par ".$nom.".\n\n".$message;

mail($mailTo, $sujet, $txt, $headers);
header("Location: index.html?mailsend");
}
