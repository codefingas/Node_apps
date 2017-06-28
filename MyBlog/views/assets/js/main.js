
// =====function for sliding the navbar====
$('#banner').mouseleave(function(){
        $('#needs_to_slide').removeClass("slide_up");
        $('#needs_to_slide').addClass("slide_down");
        $('#needs_to_slide').removeClass("slide_down_up_transparent");
    });
    $('#banner').mouseenter(function(){
        $('#needs_to_slide').addClass("slide_up");
        $('#needs_to_slide').removeClass("slide_down");
        $('#needs_to_slide').addClass("slide_down_up_transparent");
    });
  // =====end of function for sliding the navbar====


// ====FUNCTION FOR THE TOGGLING OF THE WEDDING INFO TAGS====


// the eventnames should always show by default ---ps: anyone containing 2 or three represents the section that it controls
$(".event_title_date").show(); 
$(".event_description_name").hide(); 
$(".event_title_name").hide(); 
$(".event_title_location").hide(); 

$(".event_title_date_2").show(); 
$(".event_description_name_2").hide(); 
$(".event_title_name_2").hide(); 
$(".event_title_location_2").hide(); 



$(".event_title_date_3").show(); 
$(".event_description_name_3").hide(); 
$(".event_title_name_3").hide(); 
$(".event_title_location_3").hide(); 

// end of -the eventname should always show by default

// function saying when the header is clicked item toggles ---ps: anyone containing 2 or three represents the section that it controls
$("#event_name").click(function(){
	$(".event_title_name").slideToggle("fast");
	$(".event_title_date").hide("fast"); 
	$(".event_description_name").hide("fast"); 
	$(".event_title_location").hide("fast"); 

});

$("#event_description").click(function(){
	$(".event_description_name").slideToggle("fast");
	$(".event_title_name").hide("fast");
	$(".event_title_date").hide("fast"); 
	$(".event_title_location").hide("fast"); 
});

$("#event_date").click(function(){
	$(".event_title_date").slideToggle("fast");
	$(".event_description_name").hide(); 
	$(".event_title_name").hide(); 
	$(".event_title_location").hide(); 
});

$("#event_location").click(function(){
	$(".event_title_location").slideToggle("fast");
	$(".event_title_name").hide("fast");
	$(".event_title_date").hide("fast"); 
	$(".event_description_name").hide("fast"); 
});



$("#event_name_2").click(function(){
	$(".event_title_name_2").slideToggle("fast");
	$(".event_title_date_2").hide("fast"); 
	$(".event_description_name_2").hide("fast"); 
	$(".event_title_location_2").hide("fast"); 

});

$("#event_description_2").click(function(){
	$(".event_description_name_2").slideToggle("fast");
	$(".event_title_name_2").hide("fast");
	$(".event_title_date_2").hide("fast"); 
	$(".event_title_location_2").hide("fast"); 
});

$("#event_date_2").click(function(){
	$(".event_title_date_2").slideToggle("fast");
	$(".event_description_name_2").hide(); 
	$(".event_title_name_2").hide(); 
	$(".event_title_location_2").hide(); 
});

$("#event_location_2").click(function(){
	$(".event_title_location_2").slideToggle("fast");
	$(".event_title_name_2").hide("fast");
	$(".event_title_date_2").hide("fast"); 
	$(".event_description_name_2").hide("fast"); 
});




$("#event_name_3").click(function(){
	$(".event_title_name_3").slideToggle("fast");
	$(".event_title_date_3").hide("fast"); 
	$(".event_description_name_3").hide("fast"); 
	$(".event_title_location_3").hide("fast"); 

});

$("#event_description_3").click(function(){
	$(".event_description_name_3").slideToggle("fast");
	$(".event_title_name_3").hide("fast");
	$(".event_title_date_3").hide("fast"); 
	$(".event_title_location_3").hide("fast"); 
});

$("#event_date_3").click(function(){
	$(".event_title_date_3").slideToggle("fast");
	$(".event_description_name_3").hide(); 
	$(".event_title_name_3").hide(); 
	$(".event_title_location_3").hide(); 
});

$("#event_location_3").click(function(){
	$(".event_title_location_3").slideToggle("fast");
	$(".event_title_name_3").hide("fast");
	$(".event_title_date_3").hide("fast"); 
	$(".event_description_name_3").hide("fast"); 
});




// end of function saying when the header is clicked item toggles ---ps: anyone containing 2 or three represents the section that it controls



//===js for changing between event section tabs===

		//====setting the event section 1 to show by default
		$(".section_1_item").show()
		$(".section_2_item").hide()
		$(".section_3_item").hide()
		$("#section_1").css("backgroundColor", "#E9E9E9");



$("#section_1").click(function(){
	$("#section_1").css("backgroundColor", "#E9E9E9");
	$("#section_2").css("backgroundColor", "white");
	$("#section_3").css("backgroundColor", "white");
	$(".section_1_item").show("slow")
	$(".section_2_item").hide("fast")
	$(".section_3_item").hide("fast")
})
$("#section_2").click(function(){
	$("#section_2").css("backgroundColor", "#E9E9E9");
	$("#section_1").css("backgroundColor", "white");
	$("#section_3").css("backgroundColor", "white");
	$(".section_2_item").show("slow")
	$(".section_1_item").hide("fast")
	$(".section_3_item").hide("fast")
})
$("#section_3").click(function(){
	$("#section_3").css("backgroundColor", "#E9E9E9");
	$("#section_1").css("backgroundColor", "white");
	$("#section_2").css("backgroundColor", "white");
	$(".section_3_item").show("slow")
	$(".section_1_item").hide("fast")
	$(".section_2_item").hide("fast")
})

//=====end of js for changing between section tabs




// ==============JS for the countdown========


function updateTimer(deadline){
	var time = deadline - new Date();
	return {
		'days': Math.floor( time/(1000*60*60*24) ),
		'hours': Math.floor((time/(1000*60*60)) % 24),
		'minutes' : Math.floor((time/1000/60) % 60),
		'seconds' : Math.floor((time/1000) % 60 ),
		'total' : time
	};
}
  

  function animateClock(span){
  	span.className = "turn";
  	setTimeout(function(){
  		span.className = "";
  	},700);
  };



function startTimer(id, deadline){
	var timerInterval = setInterval(function(){
		var clock = document.getElementById('clock');
		var timer = updateTimer(deadline);

		clock.innerHTML =`<span> ${timer.days}</span>
		<span> ${timer.hours}</span>
		<span> ${timer.minutes}</span>
		<span> ${timer.seconds}</span>`;


		var spans = clock.getElementsByTagName("span");
		animateClock(spans[3]);
		if (timer.seconds == 59) animateClock(spans[2]);
		if(timer.minutes == 59 && timer.seconds == 59) animateClock(spans[1]);
		if(timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59) animateClock(spans[0]);




		if(timer.total < 1){
			clearInterval(timerInterval);
			clock.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>';
		}
	}, 1000);
}

window.onload = function(){
	var deadline = new Date("July 20, 2017");
	startTimer("clock", deadline);
	scrollStoryToView();
};


// ==============End of JS for the countdown======

    function scrollStoryToView(){
		document.getElementById("our_story").scrollIntoView(true);
		document.getElementById("information").scrollIntoView(true);
		document.getElementById("invitation").scrollIntoView(true);
		document.getElementById("registry").scrollIntoView(true);
		document.getElementById("rsvp").scrollIntoView(true);
	}


	// ======End of js for sliding image=======



// function of activation or deactivating the button modals===
$(".modal_menu").hide()
$(".radio1").change(function(e){
	$(".buy_button_area").html(`<div class="buy_button_area">
                 <button class="btn btn-success pop_btn">buy</button>
                 </div>`);
	$(".modal_menu").show();
	$(".pop_btn").hide();
})

$(".radio2").change(function(e){
	$(".buy_button_area").html(`<div class="buy_button_area">
                 <button class="btn btn-success pop_btn">buy</button>
                 </div>`);
	$(".modal_menu").hide();
	$(".pop_btn").show();
});

//=====end of function for  activation or deactivating the button modals===



// ====function for sliding the navbar====
    $('#banner').mouseleave(function(){
        $('#needs_to_slide').removeClass("slide_up");
        $('#needs_to_slide').addClass("slide_down");
    });
    $('#banner').mouseenter(function(){
        $('#needs_to_slide').addClass("slide_up");
        $('#needs_to_slide').removeClass("slide_down");
    });
    // =====End of function for sliding the navbar=====


//=====function controlling the navbar toggle=====
$("#button_nav").click(function(){
	$("#myTopnav").toggle()
})

//=====End of function controlling the navbar toggle=====



//======function for telling the page to be at the top on page load and function for adding animated scrolling to page=====
$(document).ready(function(){
	window.scrollTo(0,0);
	$(".navbar a").on("click", function(event){
		if(this.hash !== ""){
			event.preventDefault();
			var hash = this.hash;
			 $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){
      window.location.hash = hash;
      });
    };
  });
});

//======adding animated scrolling to page======

//====function for toggling the navbar on small screens===

