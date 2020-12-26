// $(".btn").click(function(){
//     // $(".test").css({"background-color":"orange","border-radius":"50%"})
//     $(".test").slideUp(1000,function()
//     {
//         $(".test").slideDown(1000,function(){
//             $(".test").fadeOut(1000)  
//         })
//     })
    
// })

// $(".btn").click(function(){

//     $(".test").slideUp(1000).slideDown(1000).hide(1000,function(){
//         $(".btn").css("color","green")
//     })  
// })

// $(".btn").click(function(){

//     $(".test").animate({"width":"600px"},2000)
//     $(".test").animate({"height":"450px"},2000,function(){
//         $(".test").animate({"border-radius":"50%"},1000)
//     })
// })

$(".wrapper").animate({"width":"100%"},1000)
$(".wrapper").animate({"height":window.innerHeight},1000,function(){
    $(".wrapper h1").slideDown(1000,function(){
        $(".wrapper .col-md-4").fadeIn(2000)
    })
})