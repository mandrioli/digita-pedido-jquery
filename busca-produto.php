<?php
require_once 'config/database.php';

$cod = 0;

if (isset($_GET['cod'])) {
    $cod = mysqli_real_escape_string($conn, trim($_GET['cod']));
}

if ($cod > 0) {

    $result = $conn->query("SELECT * FROM produtos WHERE cod_produto='{$cod}'");
    if ($result->num_rows > 0) {

        while ($row = $result->fetch_assoc()) {
            $cod = $row['cod_produto'];
            $nome = $row['nome'];
            $tam = $row['tamanho'];
            $val = $row['valor_unit'];
            $produtos[] = array(
                "cod"  => $cod, 
                "nome" => $nome, 
                "tam"  => $tam, 
                "val"  => $val
            );
        }
        echo json_encode($produtos);

    } else {
        echo json_encode(array());
    }
}
mysqli_close($conn);