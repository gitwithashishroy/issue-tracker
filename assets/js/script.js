

// console.log("js is loaded");

// $(function(){
//     $("#ddselect").change(function(){
//         var displayinput = $("#ddselect option:selected").text(); 
//         $("#labelinput").val(displayinput) ; 
//     })
// })


 
$("#button").click(function() {  
    $("#box form").toggle("slow");
    return true;
});