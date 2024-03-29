<?php
// Include database connection file
include_once("config.php");
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); // Allow the specified HTTP methods
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allow the specified headers

if(isset($_GET['searchCriteria']) && isset($_GET['query'])) {
    // Get search criteria and query parameters
    $searchCriteria = $_GET['searchCriteria'];
    $query = $_GET['query'];

    // Initialize an empty array to store results
    $results = array();

    // Prepare SQL query to fetch data from the database based on search criteria
    $sql = "SELECT o.*, p.* FROM orders o JOIN products p ON o.order_id = p.order_id WHERE o.$searchCriteria = ?";

    // Execute the SQL query with prepared statement
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $query);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if any results are found
    if ($result->num_rows > 0) {
        // Fetch and store results in the $results array
        while($row = $result->fetch_assoc()) {
            $results[] = $row;
        }
    }

    // Close prepared statement
    $stmt->close();

    // Return JSON response
    echo json_encode($results);
} else {
    // If search criteria or query parameters are missing, return an error response
    $response = array("error" => "Search criteria or query parameter is missing");
    echo json_encode($response);
}

// Close database connection
$conn->close();
?>
