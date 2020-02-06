<?php
    $name=$_POST["name"];
    $tel=$_POST["tel"];
    $textarea=$_POST["textarea"];
    
    $from='alina.saliutina@gmail.com';
    $to='alina.saliutina@gmail.com';
    $sub="Feedback form Contacts";
    $message="Name: $name\nTelephone:$tel\nMessage:$textarea";
    mail($to,$sub,$message, "Content-type:text/plain;charset=UTF-8\r\nFrom:$from");
    ?>
