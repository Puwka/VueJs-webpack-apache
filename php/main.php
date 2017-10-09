<?php

	$recepient = "gorokhov.inc@gmail.com";
	$sitename = "SiteNoName";
	$_POST = json_decode(file_get_contents('php://input'), true);
	$name = htmlspecialchars($_POST["name"]);
	$phone = htmlspecialchars($_POST["phone"]);
	$message = "Name: $name \nPhone: $phone";

	$pagetitle = "New offer from $sitename";
	mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From");

?>
