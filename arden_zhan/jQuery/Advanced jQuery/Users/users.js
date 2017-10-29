$(document).ready(function(){
    $('form').submit(
        function(){
            var firstName = ($('.firstname').val());
            var lastName = ($('.lastname').val());
            var email = ($('.email').val());
            var phone = ($('.phone').val());
            
            //console.log($(this).serialize());
            //console.log(firstName, lastName, email, phone);

            $('tbody').append(
                `<tr>
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                </tr>`
            );
            return false;
        }
    );
    // Can use .submit() to also submit. So button can be outside form
    // $('button').click(function(){
    //     $('form').submit();
    // });
}
);