<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");


if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}
// conexion a base de datos 
$servername='localhost';
$username='root';
$password='';
$dbname='clientes';
//---!!! codigo de conexion a base d datos!!!!

$conn=new mysqli($servername,$username,$password,$dbname);

// verificacion de conexion

if($conn->connect_error){
    http_response_code(500);
    die(json_encode(["error"=>"conexion fallida:".$conn->connect_error]));
}
$method= $_SERVER['REQUEST_METHOD'];

switch($method){
    case 'GET':
        $id = $_GET['id' ?? null];

        if($id){
            $stmt = $conn ->prepare('SELECT * FROM clientes WHERE id=?');
            $stmt ->bind_param('s',$id);// vinculo los pararametros tomando en cuenta que es un string
            $stmt -> execute();
            $result = $stmt->get_result();
            // convierto a array
            $cliente=$result->fetch_assoc();
            echo json_encode($cliente);
        }else{
            $result=$conn->query('SELECT * FROM clientes');
            $clientes =[];
            while($row=$result->fetch_assoc()){
                $clientes[]=$row;
            }
            echo json_encode($clientes);
        }
        break;
    case 'POST':    
        $input= json_decode(file_get_contents('php://input'),true);
        $id=$input['id'] ?? uniqid();// verifico que el id sea unico 
        $nombre=$input['nombre'];
        $email=$input['email'];
        $stmt=$conn->prepare('INSERT INTO clientes (id,nombre,email) values (?,?,?)');
        $stmt->bind_param('sss',$id,$nombre,$email);
        if($stmt->execute()){
            http_response_code(200);
            echo json_encode(["message"=>"Cliente Creado","id"=>$id]);
        }else{
            http_response_code(500);
            echo json_encode(["error"=>"no se creo el cliente"]);
        }
        break;
    case 'PUT':
        $input = json_decode(file_get_contents('php://input'),true);
        $id=$input['id'];
        $nombre=$input['nombre'];
        $email=$input['email'];
        $stmt=$conn->prepare("UPDATE clientes SET nombre=?,email=? WHERE id=?");
        $stmt->bind_param('sss',$nombre,$email,$id);
        if($stmt->execute()){
            http_response_code(200);
            echo json_encode(['message'=>"todo ok"]);

        }else{
            http_response_code(500);
            echo json_encode(['error'=>"todo mal"]);
        }
    break;
    case 'DELETE':
        $id=$_GET['id'];// para eliminar si o si tengo que obtener el iden
        $stmt= $conn->prepare('DELETE FROM clientes WHERE id=?');
        $stmt->bind_param("s",$id);
        if($stmt->execute()){
            http_response_code(200);
            echo json_encode(['message'=>"todo ok eliminado"]);

        }else{
            http_response_code(500);
            echo json_encode(['error'=>"todo mal no eliminado"]);
        }
        break;
    default:
        http_response_code(405);
        echo json_encode(['error'=>"todo mal no gusta php"]); 
}
$conn->close();// siempre tengo que cerrar la conexion

?>