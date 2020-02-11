<?php
    $name=$_POST["name"];
    $tel=$_POST["tel"];
    $company=$_POST["company"];
    
    $from='alina.saliutina@gmail.com';
    $to='alina.saliutina@gmail.com';
    $sub="Feedback from Contacts";
    $message="Name: $name\nTelephone:$tel\nCompany:$company";
    mail($to,$sub,$message, "Content-type:text/plain;charset=UTF-8\r\nFrom:$from");
    ?>
