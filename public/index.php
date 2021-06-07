<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <title>Digitação de Pedidos</title>
</head>

<body>
    <div class="container my-5 d-flex justify-content-center border border-primary">
        <h3>Digitação de Pedidos</h3>
    </div>

    <div class="container my-5 p-3 border border-primary">
        <!--<form action="" method="post">-->
        <div class="row p-2">
            <div class="col-md-1 pr-0">
                <label for="codigo">Código</label>
                <input type="text" class="form-control" name="codigo" id="codigo">
            </div>
            <div class="col-md-5 pr-0">
                <label for="nome">Nome</label>
                <input type="text" class="form-control" value="" name="nome" id="nome" readonly>
            </div>
            <div class="col-md-1 pr-0">
                <label for="tamanho">Tamanho</label>
                <select name="tamanho" id="tamanho" class="form-control">
                    <option value="P">P</option>
                    <option value="M">M</option>
                    <option value="G">G</option>
                </select>
            </div>
            <div class="col-md-2 pr-0">
                <label for="valor">Valor Und.</label>
                <input type="text" class="form-control" name="valor" id="valor">
            </div>
            <div class="col-md-1 pr-0">
                <label for="qtde">Qtde</label>
                <input type="text" class="form-control" name="qtde" id="qtde">
            </div>
            <div class="col-md-2 my-auto pt-4">
                <button id="incluir" class="btn btn-primary btn-block form-control">Incluir item</button>
            </div>
        </div>
        <!--</form>-->
    </div>
    
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>  
    <script src="../src/app.js"></script>

</body>

</html>