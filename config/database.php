<?php
$envPath = realpath(dirname(__FILE__) . '/../env.ini');
$env = parse_ini_file($envPath);

try {
    $conn = new mysqli($env['host'], $env['username'], $env['password'], $env['database']);
    if ($conn->connect_errno)
        throw new Exception("Connection failed: " . $conn->connect_error);
 } 
 catch (Exception $e) {
    echo $e->getMessage();
 }