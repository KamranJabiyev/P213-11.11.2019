// "use strict";
// var x;
// console.log(x)

$(document).ready(function() {

    // $("#besh").click(function() {
    //     $(this).hide()
    // })

    // $("#show").click(function() {
    //     $("#test").slideUp(1000).css({ "background": "green", "border": "1px solid red" }).show(1000);
    // })
    // $("#stop").click(function() {
    //     $("#test").stop();
    // })
    // $(".test").click(function(e) {
    //     e.preventDefault();
    //     $(this).text("Ibrahim")
    // })

    // $("input").focus(function() {
    //     $(this).attr({ "type": "number", "value": 5 })
    // })
    // let i = 0;
    // $("#add").click(function() {
    //     // let li = $("<li class='test'></li>").text(i);
    //     // $("#list").after(li);
    //     // i++;
    //     $("#list").css({
    //         "color": "red",
    //         "background": "green"
    //     });
    // })
    // $("a").parentsUntil("body").click(function(e) {
    //     e.preventDefault();
    //     $(this).css("border", "1px solid red")
    // })
    $("#add").click(function() {
        console.log($("li").eq(3))
    })
});