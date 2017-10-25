<?php
include('php-riot-api.php');


$_POST = json_decode(file_get_contents('php://input'), true);
$server = htmlspecialchars($_POST["server"]);
$api = new riotapi($server);

$_POST = json_decode(file_get_contents('php://input'), true);
$id = htmlspecialchars($_POST["id"]);

$r = $api->getLeaguePosition($id);
print_r($r);
?>
