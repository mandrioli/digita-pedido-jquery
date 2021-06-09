$(document).ready(function () {

    $('#codigo').focus();

    $('.form-control').keypress(function (e) {
        var code = null;
        code = (e.keyCode ? e.keyCode : e.which);
        return (code === 13) ? false : true;
    });

    $('.form-control').keydown(function (e) {

        var tot_fields = $('body').find('.form-control').length;
        var next_index = $('.form-control').index(this) + 1;

        if (e.keyCode === 13) {

            if (next_index == 1) {
                carregaProduto($('#codigo').val());
                next_index += 1; // pula campo
            }
            else if(next_index == 3) {
                next_index += 1;
            }

            if (tot_fields === next_index) {
                $('input[type=text]:eq(0)').focus();
                insereLinha();
                resetaCampos();
            }    
            else
                $('.form-control:eq(' + next_index + ')').focus();
        }

    });

    $('#formPedido').submit(function (e) {
        e.preventDefault();
        //var dados = $('#idForm').serialize();
    });

    $('#tamanho').change(function (e) {
        carregaValor($('#tamanho').val());
    });

    $('#incluir').click(function () {
        insereLinha();
    });
});

function resetaCampos() {
    $("input[type='text']").val('');
    $("#tamanho").html("<option value='0'>Selecione</option>");
    $("#temp").html('');
}

function insereLinha() {

    var cod = $('#codigo').val();
    var nome = $('#nome').val();
    var tam = $('#tamanho').val();
    var val = $('#valorUnit').val();
    var qtde = $('#qtde').val();

    var linha = "<tr>";
    linha += "<th scope='row'>"+cod+"</th>";
    linha += "<td>"+nome+"</td>";
    linha += "<td>"+tam+"</td>";
    linha += "<td>"+val+"</td>";
    linha += "<td>"+qtde+"</td>";
    linha += "<td></td>";
    linha += "</tr>";

    $('#tbPedido tbody').append(linha);
}

function carregaValor(tam) {
    var val = $('#val_' + tam).val();
    $('#valorUnit').val(val);
}

function carregaProduto(cod) {

    $.ajax({
        method: 'GET',
        url: '../busca-produto.php',
        data: { cod: cod },
        dataType: 'json',
        success: function (response, textStatus) {
            var len = Object.keys(response).length;
            if (len > 0) {
                $('#nome').val(response[0]['nome']);

                for (var i = 0; i < len; i++) {
                    var tam = response[i]['tam'];
                    var val = response[i]['val'];
                    $("#tamanho").append("<option value='" + tam + "'>" + tam + "</option>");
                    $("#temp").append("<input id='val_" + tam + "' value='" + val + "' type='hidden'></input>");
                }
            }
            else {
                $('#nome').val('Atenção: código não encontrado!').focus();
            }
        },
        error: function () {
            alert('Erro! ' + (errorThrow ? errorThrow : xhr.status));
        }
    });
}