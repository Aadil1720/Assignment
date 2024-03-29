<?php
// Database configuration
$servername = "localhost"; // Replace with your servername
$username = "root"; // Replace with your username
$password = "mysql@1720"; // Replace with your password
$database = "ecommerceDB"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
?>