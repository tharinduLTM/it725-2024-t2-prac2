const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}


// $(document).ready(function () {
//     // $('.materialboxed').materialbox();
//     $('#clickMeButton').click(() => {
//         clickMe();
//     })
// });

    $(document).ready(function(){

    $('#calculateDiscountButton').click(function(){
        const originalPrice = parseFloat($('#originalPrice').val());
        const discountPercentage = parseFloat($('#discountPercentage').val());

        $.ajax({
            url: `http://localhost:3040/calculateDiscount?originalPrice=${originalPrice}&discountPercentage=${discountPercentage}`,
            success: function(result){
                $('#discountAmount').text(`Discount Amount: $${result.data.discountAmount.toFixed(2)}`);
                $('#finalPrice').text(`Final Price: $${result.data.finalPrice.toFixed(2)}`);
            }
        })
    })

    })
