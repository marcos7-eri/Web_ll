<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "clientes";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(["error" => "Conexión fallida: " . $conn->connect_error]));
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Nuevo endpoint para obtener próximo ID
        if (isset($_GET['action']) && $_GET['action'] == 'get_next_id') {
            $result = $conn->query("SELECT IFNULL(MAX(id), 0) + 1 AS next_id FROM productos");
            echo json_encode($result->fetch_assoc());
            break;
        }
        
        $id = $_GET['id'] ?? null;
        if ($id) {
            $stmt = $conn->prepare("SELECT * FROM productos WHERE id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $result = $stmt->get_result();
            $producto = $result->fetch_assoc();
            echo json_encode($producto);
        } else {
            $result = $conn->query("SELECT * FROM productos ORDER BY id");
            $productos = [];
            while ($row = $result->fetch_assoc()) {
                $productos[] = $row;
            }
            echo json_encode($productos);
        }
        break;

    case 'POST':
        $input = json_decode(file_get_contents('php://input'), true);
        $nombre = $input['nombre'];
        $precio = $input['precio'];
        $descripcion = $input['descripcion'];
        
        // Insertar sin ID (la base de datos lo asignará automáticamente)
        $stmt = $conn->prepare("INSERT INTO productos (nombre, precio, descripcion) VALUES (?, ?, ?)");
        $stmt->bind_param("sds", $nombre, $precio, $descripcion);
        
        if ($stmt->execute()) {
            $newId = $stmt->insert_id; // Obtenemos el ID asignado
            http_response_code(201);
            echo json_encode([
                "message" => "Producto creado",
                "id" => $newId
            ]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Error al crear producto: " . $conn->error]);
        }
        break;

    case 'PUT':
        $input = json_decode(file_get_contents('php://input'), true);
        $id = $input['id'];
        $nombre = $input['nombre'];
        $precio = $input['precio'];
        $descripcion = $input['descripcion'];
        $stmt = $conn->prepare("UPDATE productos SET nombre = ?, precio = ?, descripcion = ? WHERE id = ?");
        $stmt->bind_param("sdsi", $nombre, $precio, $descripcion, $id);
        if ($stmt->execute()) {
            echo json_encode(["message" => "Producto actualizado"]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Error al actualizar producto"]);
        }
        break;

    case 'DELETE':
        $id = $_GET['id'];
        $stmt = $conn->prepare("DELETE FROM productos WHERE id = ?");
        $stmt->bind_param("i", $id);
        if ($stmt->execute()) {
            echo json_encode(["message" => "Producto eliminado"]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Error al eliminar producto"]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "Método no permitido"]);
}

$conn->close();
?>