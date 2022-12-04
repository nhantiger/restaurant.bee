$(document).ready(function () {
    $('.btn_add_menu').click(function (e) { 
        e.preventDefault();
    });
    $('#btn_submit_booktable').click(function (e) { 
        e.preventDefault();
        console.log($("#booktable_form").serializeArray());
    });
});