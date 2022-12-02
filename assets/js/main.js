// jquery functionalities

$(document).ready(function(){
    $("#search-input").click(function(){
        $(this).css({"border-color":"#065fd4"})
    })
    $("search-btn").click(function(){
        $("#search-input").css({"border-color":"#717171"})
    })

    //toggle working of the navigation button
})

// functions of scrolling
function stopScrolling(value){
    if(value===1){
        $(document).ready(function(){
            $("#video-holder").css({"position":"fixed"})
        })
    }else if(value===2){
        $(document).ready(function(){
            $("#video-holder").css({"position":""})
        })
    }
}
