// script.js


$(function(){
//    alert("hello");
    
//    $('#box').hide();
//    $('.thing').fadeOut();
//    $('h1').css("color","red");
    
    $('button').click(function(){
       $('#box').fadeOut(1000); 
    });
    
    // selectors.html
    
//    $('h2,h3,h4').css("border","solid 1px red");
//    $("#conatiner").css("border","solid 1px red");
//    $("p.lead").css("border","solid 1px red");
//    $("li:first").css("border","solid 1px red");
//    $("p:even").css("border","solid 1px red");
//    $("div em").css("border","solid 1px red");
//    $("div > p").css("border","solid 1px red");
//    $(":header").css("border","solid 1px red");
//    $('div:contains("Saad")').css("border","solid 1px red");
    
    
    // jQuery Event Methods
    
    
    $("#box").click(function(){
        alert("You just clicked the box");
        document.write("You just clicked the box");
    });
    
    
    $("input").blur(function(){
        if($(this).val()==""){
           $(this).css("border","solid 1px red");
            $("#box").text("Forgot to enter text?");
           }   
    });
    
    $('input').keydown(function(){
       if($(this).val()!==""){
           $(this).css("border","solid 1px #777");
           $("#box").text("Thanks for that!");
       } 
    });
    
    
    $("#box").hover(function(){
        $(this).text("You hovered in");
    }, function(){
        $(this).text("You hovered out");
    });
    
    
    /*******************
     jQuery Chaining
    ********************/
    
    $('.notification-bar').delay(1000).slideDown().delay(1000).fadeOut();
    
    
    /* ------------------
       jQuery Hide & Show
       ------------------ */
    
//    $('h1').delay(2000).fadeOut(2000);
//    $('div.hidden').show();
//    $('div.hidden').hide();
    
    $('#box1').click( function(){
        $(this).fadeTo( 2000, 0.2, function(){
           //when the animation is complete 
             $(this).slideUp();
        });
    } );
    
    $('div.hidden').slideDown();
    
    $('button').click(function(){
        $('#box1').slideToggle();                 
    });
    
    
     
    /* ------------------
        jQuery Animate
       ------------------ */
    
    $('#left').click(function(){
        $('.box').animate({
            left: "-=40px",
            fontSize: "+=2px"
        }, function(){
            // animation is complete
        });
        
    });
    
    $('#right').click(function(){
        $('.box').animate({
            left: "+=40px",
            fontSize: "-=2px"
        }, function(){
            // animation is complete
        });
        
    });
    
    $('#up').click(function(){
        $('.box').animate({
            top: "-=40px",
            opacity: "+=0.1"
        }, function(){
            // animation is complete
        });
        
    });
    
    $('#down').click(function(){
        $('.box').animate({
            top: "+=40px",
            opacity: "-=0.1 "
        }, function(){
            // animation is complete
        });
        
    });
    
    
     /* ------------------
        jQuery CSS
       ------------------ */
    $('#circle2').css({
        'display':'inline-block',
        'background':'#8a8d22',
        'color':'white',
        'text-align':'center',
        'line-height':'140px',
        'height':'140px',
        'width':'140px',
        'margin':'40px'
    }).addClass('circleShape');
    
    
    /* ------------------
        Car Racr 2.0
       ------------------ */
    
    // Click the go button
    
    $('#go').click(function(){
        
        // build a function that checks to see if a car has won the race
        
        function checkIfComplete(){
            if(isComplete==false){
                isComplete=true;
            }else{
                place='second';
            }
        }
        
        
        
        //Get the width of the car
        var carWidth = $('#car1').width();
    
        // Get the width of the race track
        var racetrackWidth = $(window).width() - carWidth;
    
        // Generate a random number betwenn 1 and 5000
    
        var raceTime1 = Math.floor( (Math.random()*5000) +1 );  
        var raceTime2 = Math.floor( (Math.random()*5000) +1 );
    
    
        // set a flag variable to false by default
        var isComplete = false;
        
        // set a flag variable to first by default
        var place = 'first';
    
        // animate car 1
        $('#car1').animate({
            // move the car width of the racetrack
            left: racetrackWidth
        }, raceTime1, function(){
            // animation is complete
            
            // run a function
            
            checkIfComplete();
            
            //give some text feedback in the race info box
            
            $('#raceinfo1 span').text("Finished in "+" place and clocked in at "+ raceTime1 + " milliseconds")
        });
        
         $('#car2').animate({
            // move the car width of the racetrack
            left: racetrackWidth
        }, raceTime2, function(){
            // animation is complete
            
            // run a function
            
            checkIfComplete();
            
            //give some text feedback in the race info box
            
            $('#raceinfo2 span').text("Finished in "+" place and clocked in at "+ raceTime2 + " milliseconds")
        });
    
                
 
    });
    
    
    // reset the race
    
    $('#reset').click(function(){
        $('.car').css("left","0");
        $('.raceInfo span').text("");
    })
    
    
    
});