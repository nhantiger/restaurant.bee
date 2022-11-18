$(document).ready(function () {
    var id_active = 'item_user'
    var id_content = 'item_user_content'
    $(`ul li[id = '${id_active}']`).addClass('item_active');
    $('.container_content').each(function (index, element) {
        $(this).attr('id') === id_content ? $(this).css('display','block') : $(this).css('display','none')
    });
    $('.menu_list_item').click(function (e) { 
        e.preventDefault();

        id_active = $(this).attr('id')
        id_content = `${$(this).attr('id')}_content`

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
        $('#order_info_modal').css('display','none');
    });
    $('#btn_open_modal_proccess').click(function (e) { 
        e.preventDefault();
        $('#user_proccess_modal').css('display','block');
    });
    $('.btn_open_remove_dinalog').click(function (e) { 
        e.preventDefault();
        $('.dinalog_remove').css('display','block');
    });
    $('.cancel_dinalog').click(function (e) { 
        e.preventDefault();
        $('.dinalog_remove').css({'display':'none'});
    });
    $('#btn_open_modal_order_info').click(function (e) { 
        e.preventDefault();
        $('#order_info_modal').css(
            'display','block'
        );
    });
    $('.cancel_proccess').click(function (e) { 
        e.preventDefault();
        $('#gallery_proccess_modal').css('display','none');
        $('#gallery_new_modal').css('display','none');
        $('#blog_new_modal').css('display','none');
    });
    $('#btn_open_modal_proccess_gallery').click(function (e) { 
        e.preventDefault();
        $('#gallery_proccess_modal').css('display','block');
    });
    $('#btn_new_gallery').click(function (e) { 
        e.preventDefault();
        $('#gallery_new_modal').css('display','block');
    });
    $('#btn_new_blog').click(function (e) { 
        e.preventDefault();
        $('#blog_new_modal').css('display','block');
    });
    $('#btn_open_modal_proccess_blog').click(function (e) { 
        e.preventDefault();
        $('#blog_proccess_modal').css('display','block');
    });
});