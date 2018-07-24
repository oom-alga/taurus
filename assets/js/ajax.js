$(document).ready(function() {
    // Ajax
    $(".portfolio-item").click(function(){
        $("#ajax-page").css("top", "0%");
    });
    $(".ajax-page-close").click(function(){
        $("#ajax-page").css("top", "100%");
    });

    // Ajax One
    $(".portfolio-item.satu").click(function(){
    $.ajax({
        type: 'POST',
        url: "ajax1.html",
        data: $("#ajax-page"),
        success: function(data){
        if(!data.error){
            $("#ajax-data").html(data);
        }
        else{
            $("#ajax-data").html();
        }
        }
    });
    return false;
    });

    // Ajax Two
    $(".portfolio-item.dua").click(function(){
    $.ajax({
        type: 'POST',
        url: "ajax2.html",
        data: $("#ajax-page"),
        success: function(data){
            $("#ajax-data").html(data);
        }
    });
    return false;
    });

    // Ajax three
    $(".portfolio-item.tiga").click(function(){
    $.ajax({
        type: 'POST',
        url: "ajax3.html",
        data: $("#ajax-page"),
        success: function(data){
            $("#ajax-data").html(data);
        }
    });
    return false;
    });
});
