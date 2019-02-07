<?php 
echo '<h2>You posted:</h2><hr />'. $_POST['title'] . '<hr />' . stripslashes($_POST['myTextArea']);
?><?php
if($_POST[‘submit’]){
$recepient = «andrii_panchuck@ukr.net»; //пошта одержувача
$sitename = «Portfolio»;
$name = trim($_POST[«name»]);//імя полів форми
$phone = trim($_POST[«number»]);
$email = trim($_POST[«email»]);
$text = $_POST[«message»];
$pagetitle = «Нова заявка сайта \»$sitename\»»;
$message = «Імя: $name \nТелефон: $phone \n email: $email \nТекст: $text»;
if (mail($recepient, $pagetitle, $message, «Content-type: text/plain; charset=\»utf-8\»\n From: $recepient»))
{echo ‘<script>alert(«Повідомлення не відправлено»);»;</script>’;}
else{echo ‘<script>alert(«Повідомлення не відправлено»); «;</script>’;}
}?>
