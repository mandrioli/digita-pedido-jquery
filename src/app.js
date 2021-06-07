$(document).ready(function() {

    $('#codigo').focus();

    $('.form-control').keypress(function(e) {
        var code = null;
        code = (e.keyCode ? e.keyCode : e.which);
        return (code === 13) ? false : true;
    });

    $('.form-control').keydown(function(e) {

        var tot_fields = $('body').find('.form-control').length;
        var next_index = $('.form-control').index(this) + 1;
        if (next_index == 1) next_index += 1; // pula o campo nome

        if (e.keyCode === 13) {
            if (tot_fields === next_index)
                $('input[type=text]:eq(0)').focus();
            else
                $('.form-control:eq('+next_index+')').focus();
        }

    });

    $('#incluir').click(function() {
        $.ajax({
            type: 'GET',
            url: 'busca-produto.php',
            dataType: 'html',
            success: function(text, textStatus) {
                $('#nome').val(text);
            },
            error: function() {
                alert('Erro! ' + (errorThrow ? errorThrow : xhr.status));
            }
        });
    });
});
