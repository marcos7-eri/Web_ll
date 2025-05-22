<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$serverName = "LAPTOP-7ABANV7Q"; // o localhost
$database = "clientes";
$username = ""; // pon el usuario correcto
$password = ""; // pon la contraseña correcta

try {
    $conn = new PDO("sqlsrv:server=$serverName;Database=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $method = $_SERVER['REQUEST_METHOD'];

    switch ($method) {
        case 'GET':
            if (isset($_GET['id'])) {
                $stmt = $conn->prepare("SELECT * FROM clientes WHERE id = ?");
                $stmt->execute([$_GET['id']]);
                $result = $stmt->fetch(PDO::FETCH_ASSOC);
                echo json_encode($result ?: []);
            } else {
                $stmt = $conn->query("SELECT * FROM clientes");
                $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($result);
            }
            break;

        case 'POST':
            $data = json_decode(file_get_contents("php://input"), true);
            $stmt = $conn->prepare("INSERT INTO clientes (id, nombre, email) VALUES (?, ?, ?)");
            $stmt->execute([$data['id'], $data['nombre'], $data['email']]);
            echo json_encode(["mensaje" => "Cliente creado con éxito"]);
            break;

        case 'PUT':
            $data = json_decode(file_get_contents("php://input"), true);
            $stmt = $conn->prepare("UPDATE clientes SET nombre = ?, email = ? WHERE id = ?");
            $stmt->execute([$data['nombre'], $data['email'], $data['id']]);
            echo json_encode(["mensaje" => "Cliente actualizado"]);
            break;

        case 'DELETE':
            if (isset($_GET['id'])) {
                $stmt = $conn->prepare("DELETE FROM clientes WHERE id = ?");
                $stmt->execute([$_GET['id']]);
                echo json_encode(["mensaje" => "Cliente eliminado"]);
            } else {
                http_response_code(400);
                echo json_encode(["error" => "ID requerido para eliminar"]);
            }
            break;

        default:
            http_response_code(405);
            echo json_encode(["error" => "Método no permitido"]);
            break;
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Error de conexión: " . $e->getMessage()]);
}
?>
