document.querySelectorAll(".single-collapsable-item .collapse-toggle button").forEach(button => {
    button.addEventListener("click", function () {
        this.closest(".single-collapsable-item").classList.toggle("active");
    });
});

document.querySelectorAll("button.collapsable-table-toggle").forEach(button => {
    button.addEventListener("click", function () {
        this.closest(".collapsable-content").classList.toggle("active");
    });
});

// (function($){
//     $(document).ready(function () {

//         $("button.collapsable-table-toggle").click(function () {
//             let parent = $(this).closest(".collapsable-content");
            
//             parent.toggleClass("active");
            
//             parent.find(".collapsable-table-content").stop(true, true).toggleClass("open").animate({
//                 maxWidth: "toggle"
//             }, 3000);
//         });

//     });
// }(jQuery));