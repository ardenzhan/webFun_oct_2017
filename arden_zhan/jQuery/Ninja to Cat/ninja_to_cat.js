$(document).ready(function(){

    $('img').click(function() {
        console.log('data-alt-src value is', $(this).attr('data-alt-src'));

        var origSrc = $(this).attr('src');
        var altSrc = $(this).attr('data-alt-src');

        // $(this).replaceWith("<img src=" + altSrc +  
        // " data-alt-src=" + origSrc + ">");

        $(this).attr('src', altSrc);
        $(this).attr('data-alt-src', origSrc);
      });   
}
);