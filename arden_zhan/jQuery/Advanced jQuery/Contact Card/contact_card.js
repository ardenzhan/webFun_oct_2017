$(document).ready(function(){

    $('form').submit(
        function(){
            var firstName = ($('.firstname').val());
            var lastName = ($('.lastname').val());
            var description = ($('.description').val());

            $('.contacts_body').append(
                `<div description="${description}">
                    <h2>${firstName} ${lastName}</h2>
                    <p>Click for Description!</p>
                </div>`
            );

            return false;
        }
    );

    $('.contacts_body').on('click', 'div', function(){
        $(this).html($(this).attr('description'));
    });

});