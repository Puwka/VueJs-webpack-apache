<?php
include('php-riot-api.php');
include('FileSystemCache.php');

$_POST = json_decode(file_get_contents('php://input'), true);
$server = htmlspecialchars($_POST["server"]);
$api = new riotapi($server, new FileSystemCache('cache/'));

$_POST = json_decode(file_get_contents('php://input'), true);
$id = htmlspecialchars($_POST["id"]);

$r = $api->getLeague($id);
print_r($r);
?>
