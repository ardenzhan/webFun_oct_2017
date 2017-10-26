
$(document).ready(function(){

    //HIDE, SHOW, TOGGLE
    $('.hide_show button:nth-of-type(1)').click(
        function(){$('.hide_show p').hide();
        }
    );
    $('.hide_show button:nth-of-type(2)').click(
        function(){$('.hide_show p').show();
        }
    );
    $('.hide_show button:nth-of-type(3)').click(
        function(){$('.hide_show p').toggle();
        }
    );
        
    // SLIDE
    $('.slide button:nth-of-type(1)').click(
        function(){$('.slide p').slideUp();
        }
    );
    $('.slide button:nth-of-type(2)').click(
        function(){$('.slide p').slideDown();
        }
    );
    $('.slide button:nth-of-type(3)').click(
        function(){$('.slide p').slideToggle();
        }
    );

    // FADE
    $('.fade button:nth-of-type(1)').click(
        function(){$('.fade p').fadeOut();
        }
    );
    $('.fade button:nth-of-type(2)').click(
        function(){$('.fade p').fadeIn();
        }
    );
    
    //ADD REMOVE class
    $('.add_remove button:nth-of-type(1)').click(
        function(){$('body').addClass('backgroundRed');
        }
    );
    $('.add_remove button:nth-of-type(2)').click(
        function(){$('body').removeClass('backgroundRed');
        }
    );

    //BEFORE AFTER
    $('.before_after button:nth-of-type(1)').click(
        function(){$('.before_after p').before($('.before_after b'));
        }
    );
    $('.before_after button:nth-of-type(2)').click(
        function(){$('.before_after p').after($('.before_after b'));
        }
    );
    $('.before_after button:nth-of-type(3)').click(
        function(){$('.before_after b').append('<h4>hello</h4>');
        }
    );
    $('.before_after button:nth-of-type(4)').click(
        function(){$('h4').remove();
        }
    );

    //HTML
    $('.htmldiv button').click(
        function(){$('.htmldiv span').html('<p>Hello</p>');
        }
    );

    //ATTR ATTRIBUTE
    $('.attr button:nth-of-type(1)').click(
        function(){
            var title = $('.attr p').attr('title');
            $('.attr em').text(title);}
    );

    //VAL
    $('.val button').click(
        function(){
            var text = $(this).text();
            $('.val input').val(text);
        }
    );

    //DATA
    $('.data button:first').click(
        function(){
            $('.data p').data("food", {one: "pineapple", two: "brisket", three: "water"});
        }
    );
    $('.data button:last').click(
        function(){
            $('.data span').text($('.data p').data("food").one);
        }
    )
}
);