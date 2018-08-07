

// $(".dropdown select").click(function(v){
//     console.log(v.target.value)
//    debugger;
//     $(this).addClass('active');
// });



$('select').change(function (v) {
    $(this).find(':selected').addClass('selected')
        .siblings('option').removeClass('selected');
    $(".eqalizer").removeClass().addClass("eqalizer")
    $(".eqalizer").addClass(v.target.value)

});

