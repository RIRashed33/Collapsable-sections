document.querySelectorAll(".single-collapsable-item .collapse-toggle button").forEach(button => {
    button.addEventListener("click", function () {
        this.closest(".single-collapsable-item").classList.toggle("active");
    });
});

document.querySelectorAll(".table-collapse-container .collasable-images, .table-collapse-container .collapsable-content").forEach(button => {
    button.addEventListener("click", function () {
        this.closest(".table-collapse-container").classList.toggle("active");
    });
});


document.querySelectorAll('.collasable-images, .collapsable-content').forEach(content => {
    content.addEventListener('mouseenter', () => {
        content.closest(".table-collapse-container").classList.add("hover");
    });

    content.addEventListener('mouseleave', () => {
        content.closest(".table-collapse-container").classList.remove("hover");
    });
});


// (function($){
//     $(document).ready(function () {

//         $("button.collapsable-table-toggle").click(function () {
//             let parent = $(this).closest(".table-collapse-container");
            
//             parent.toggleClass("active");
            
//             parent.find(".right-collapsable-content").stop(true, true).toggleClass("open").animate({
//                 maxWidth: "toggle"
//             }, 3000);
//         });

//     });
// }(jQuery));