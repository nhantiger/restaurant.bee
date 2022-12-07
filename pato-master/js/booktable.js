

$(document).ready(function () {
    var food = sessionStorage.getItem('arrayfood').split('$$')
    var foods = food.map(function(item,index){
       return  item!==''? JSON.parse(item): item
    })
    foods.pop()
    $('#food_list').html(foods.map(function(item){
        return `<div class="food_item d-flex align-items-center mt-3">
        <span class="text-uppercase mr-2">${item.Ten}</span>
        <div class="btn_remove_food btn btn-danger" value='${JSON.stringify(item)}'><i class="fa fa-remove"></i></div>
      </div>`
    }));
    $('.btn_add_menu').click(function (e) { 
        e.preventDefault();
    });
    $('#btn_submit_booktable').click(function (e) { 
        e.preventDefault();
        console.log($("#booktable_form").serializeArray());
    });
});