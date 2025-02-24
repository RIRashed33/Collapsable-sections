document.querySelectorAll(".single-collapsable-item .collapse-toggle button").forEach(button => {
    button.addEventListener("click", function () {
        this.closest(".single-collapsable-item").classList.toggle("active");
    });
});


(function($){
    $(document).ready(function () {

        // $(".single-collapsable-item .collapse-toggle button").click(function () {
        //     let parent = $(this).closest(".single-collapsable-item");
            
        //     parent.toggleClass("active");
            
        //     //parent.find(".collapse-content").stop(true, true).slideToggle(); // Ensures smooth animation
        // });

    });
}(jQuery));