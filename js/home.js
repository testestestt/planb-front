$('.item-accordion .collapse').on('show.bs.collapse', function () {
    $(this).addClass('active');

});
$('.item-accordion .collapse').on('hide.bs.collapse', function () {
    $(this).removeClass('active');
});