$(document).ready(function () {
    var id_active = 'item_user'
    var id_content = 'item_user_content'
    $(`ul li[id = '${id_active}']`).addClass('item_active');
    $('.container_content').each(function (index, element) {
        $(this).attr('id') === id_content ? $(this).css('display','block') : $(this).css('display','none')
    });
    $('.menu_list_item').click(function (e) { 
        e.preventDefault();
        console.log(id_active)
        id_active = $(this).attr('id')
        id_content = `${$(this).attr('id')}_content`
        console.log(id_content)
        $('.menu_list_item').each(function (index, element) {
            $(this).attr('id') === id_active ? $(this).addClass('item_active'): $(this).removeClass('item_active');
        });
        $('.container_content').each(function (index, element) {
            $(this).attr('id') === id_content ? $(this).css('display','block') : $(this).css('display','none')
        });
    });
    $("#user_info").click(function (e) { 
        e.preventDefault();
        $('#user_info_modal').css({'display':'block'});
    });
    $('.info_close_icon').click(function (e) { 
        e.preventDefault();
        $('#user_info_modal').css({'display':'none'});
    });
});