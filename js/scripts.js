$(document).ready(function () {
    $('.mobile-menu').on('click', function () {
        $('.menu').slideToggle();
    })
})

$(document).on("change", ".choice-of-edition input", function () {
    var $target = $(event.target)
    $target.closest(".product-item").find(".price").text($target.data("price"))
})
