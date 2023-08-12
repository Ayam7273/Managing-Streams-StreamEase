// var messageBox = document.querySelector('.js-message');
//   var btn = document.querySelector('.js-message-btn');
//   var card = document.querySelector('.js-profile-card');
//   var closeBtn = document.querySelectorAll('.js-message-close');

//   btn.addEventListener('click',function (e) {
//       e.preventDefault();
//       card.classList.add('active');
//   });

//   closeBtn.forEach(function (element, index) {
//      console.log(element);
//       element.addEventListener('click',function (e) {
//           e.preventDefault();
//           card.classList.remove('active');
//       });
//   });

/**
 * Created by Kupletsky Sergey on 17.10.14.
 *
 * Material Sidebar (Profile menu)
 * Tested on Win8.1 with browsers: Chrome 37, Firefox 32, Opera 25, IE 11, Safari 5.1.7
 * You can use this sidebar in Bootstrap (v3) projects. HTML-markup like Navbar bootstrap component will make your work easier.
 * Dropdown menu and sidebar toggle button works with JQuery and Bootstrap.min.js
 */

// Sidebar toggle
//
// -------------------



$(document).ready(function() {
    var overlay = $('.sidebar-overlay');

    $('.sidebar-toggle').on('click', function() {
        var sidebar = $('#sidebar');
        sidebar.toggleClass('open');
        if ((sidebar.hasClass('sidebar-fixed-left') || sidebar.hasClass('sidebar-fixed-right')) && sidebar.hasClass('open')) {
            overlay.addClass('active');
        } else {
            overlay.removeClass('active');
        }
    });

    overlay.on('click', function() {
        $(this).removeClass('active');
        $('#sidebar').removeClass('open');
    });

});

// Sidebar constructor
//
// -------------------
$(document).ready(function() {

    var sidebar = $('#sidebar');
    var sidebarHeader = $('#sidebar .sidebar-header');
    var sidebarImg = sidebarHeader.css('background-image');
    var toggleButtons = $('.sidebar-toggle');

    // Hide toggle buttons on default position
    toggleButtons.css('display', 'none');
    $('body').css('display', 'table');


    // Sidebar position
    $('#sidebar-position').change(function() {
        var value = $( this ).val();
        sidebar.removeClass('sidebar-fixed-left sidebar-fixed-right sidebar-stacked').addClass(value).addClass('open');
        if (value == 'sidebar-fixed-left' || value == 'sidebar-fixed-right') {
            $('.sidebar-overlay').addClass('active');
        }
        // Show toggle buttons
        if (value != '') {
            toggleButtons.css('display', 'initial');
            $('body').css('display', 'initial');
        } else {
            // Hide toggle buttons
            toggleButtons.css('display', 'none');
            $('body').css('display', 'table');
        }
    });

    // Sidebar theme
    $('#sidebar-theme').change(function() {
        var value = $( this ).val();
        sidebar.removeClass('sidebar-default sidebar-inverse sidebar-colored sidebar-colored-inverse').addClass(value)
    });

    // Header cover
    $('#sidebar-header').change(function() {
        var value = $(this).val();

        $('.sidebar-header').removeClass('header-cover').addClass(value);

        if (value == 'header-cover') {
            sidebarHeader.css('background-image', sidebarImg)
        } else {
            sidebarHeader.css('background-image', '')
        }
    });
});

/**
 * Created by Kupletsky Sergey on 08.09.14.
 *
 * Add JQuery animation to bootstrap dropdown elements.
 */

(function($) {
    var dropdown = $('.dropdown');

    // Add slidedown animation to dropdown
    dropdown.on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // Add slideup animation to dropdown
    dropdown.on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
})(jQuery);



(function(removeClass) {

	jQuery.fn.removeClass = function( value ) {
		if ( value && typeof value.test === "function" ) {
			for ( var i = 0, l = this.length; i < l; i++ ) {
				var elem = this[i];
				if ( elem.nodeType === 1 && elem.className ) {
					var classNames = elem.className.split( /\s+/ );

					for ( var n = classNames.length; n--; ) {
						if ( value.test(classNames[n]) ) {
							classNames.splice(n, 1);
						}
					}
					elem.className = jQuery.trim( classNames.join(" ") );
				}
			}
		} else {
			removeClass.call(this, value);
		}
		return this;
	}

})(jQuery.fn.removeClass);


// Wrapper
$(function () {
	$("#tabs").tabs();
	$("#tabs3").tabs();
});

$(document).ready(function () {
	$(".show-saved-one").hide();

	$("#card-one div.payment-card").on("click", function () {
		$(".payment-card img").attr(
			"src",
			"https://i.ibb.co/sFg4Zmt/imageedit-4-7428488427.png"
		);
		$("#card-one div.payment-card-selected").removeClass("payment-card-selected");
		$(this).addClass("payment-card-selected");
		$(this).children("img:first")[0].src = "https://reliant.org/img/bank.png";
	});

	$("#div-two div.payment-card").on("click", function () {
		$(".payment-card img").attr(
			"src",
			"https://i.ibb.co/sFg4Zmt/imageedit-4-7428488427.png"
		);
		$("#div-two div.payment-card-selected").removeClass("payment-card-selected");
		$(this).addClass("payment-card-selected");
		$(this).children("img:first")[0].src = "https://reliant.org/img/bank.png";
	});

	$(".add-payment-card-one").click(function () {
		$("#give-now-button-one").prop("disabled", true);
		$("#saved-methods-one").css("opacity", "0.3");
		$(".payment-card-one img").attr(
			"src",
			"https://i.ibb.co/sFg4Zmt/imageedit-4-7428488427.png"
		);
		$("#card-one div.payment-card-selected").removeClass("payment-card-selected");
		$("#saved-methods-one").addClass("disableall");
		ToggleEverythingOne();
	});

	$(".show-saved-one").click(function () {
		$(".payment-card-first-one").addClass("payment-card-selected");
		$(".payment-card-first-one").children("img:first")[0].src =
			"https://reliant.org/img/bank.png";
		$("#saved-methods-one").css("opacity", "1");
		$("#give-now-button-one").prop("disabled", false);
		$("#saved-methods-one").removeClass("disableall");
		ToggleEverythingOne();
	});

	function ToggleEverythingOne() {
		$(".panel-one").slideToggle("slow");
		$(".show-saved-one").slideToggle("slow");
		$(".add-payment-card-one").slideToggle("slow");
	}

	$("[aria-controls='tabs-1']").click(function () {
		if ($("#account-number-one").val() && $("#routing-number-one").val()) {
			$("#give-now-button-one").prop("disabled", false);
		} else {
			$("#give-now-button-one").prop("disabled", true);
		}
	});

	$("[aria-controls='tabs-2']").click(function () {
		if (
			$("#cc-name-one").val() &&
			$("#cc-number-one").val() &&
			$("#cc-month-one").val() &&
			$("#cc-year-one").val()
		) {
			$("#give-now-button-one").prop("disabled", false);
		} else {
			$("#give-now-button-one").prop("disabled", true);
		}
	});

	$("[aria-controls='tabs-3']").click(function () {
		$("#give-now-button-one").prop("disabled", false);
	});

	$("#account-number-one, #routing-number-one").on("input", function () {
		if ($("#account-number-one").val() && $("#routing-number-one").val()) {
			$("#give-now-button-one").prop("disabled", false);
		}

		if (!$("#account-number-one").val() || !$("#routing-number-one").val()) {
			$("#give-now-button-one").prop("disabled", true);
		}
	});

	$("#cc-name-one, #cc-number-one, #cc-month-one, #cc-year-one").on(
		"input",
		function () {
			if (
				$("#cc-name-one").val() &&
				$("#cc-number-one").val() &&
				$("#cc-month-one").val() &&
				$("#cc-year-one").val()
			) {
				$("#give-now-button-one").prop("disabled", false);
			}

			if (
				!$("#cc-name-one").val() ||
				!$("#cc-number-one").val() ||
				!$("#cc-month-one").val() ||
				!$("#cc-year-one").val()
			) {
				$("#give-now-button-one").prop("disabled", true);
			}
		}
	);

	$("[aria-controls='tabs-4']").click(function () {
		if ($("#account-number-two").val() && $("#routing-number-two").val()) {
			$("#give-now-button-two").prop("disabled", false);
		} else {
			$("#give-now-button-two").prop("disabled", true);
		}
	});

	$("[aria-controls='tabs-5']").click(function () {
		if (
			$("#cc-name-two").val() &&
			$("#cc-number-two").val() &&
			$("#cc-month-two").val() &&
			$("#cc-year-two").val()
		) {
			$("#give-now-button-two").prop("disabled", false);
		} else {
			$("#give-now-button-two").prop("disabled", true);
		}
	});

	$("[aria-controls='tabs-6']").click(function () {
		$("#give-now-button-two").prop("disabled", false);
	});

	$("#account-number-two, #routing-number-two").on("input", function () {
		if ($("#account-number-two").val() && $("#routing-number-two").val()) {
			$("#give-now-button-two").prop("disabled", false);
		}

		if (!$("#account-number-two").val() || !$("#routing-number-two").val()) {
			$("#give-now-button-two").prop("disabled", true);
		}
	});

	$("#cc-name-two, #cc-number-two, #cc-month-two, #cc-year-two").on(
		"input",
		function () {
			if (
				$("#cc-name-two").val() &&
				$("#cc-number-two").val() &&
				$("#cc-month-two").val() &&
				$("#cc-year-two").val()
			) {
				$("#give-now-button-two").prop("disabled", false);
			}

			if (
				!$("#cc-name-two").val() ||
				!$("#cc-number-two").val() ||
				!$("#cc-month-two").val() ||
				!$("#cc-year-two").val()
			) {
				$("#give-now-button-two").prop("disabled", true);
			}
		}
	);

	$("[aria-controls='tabs-7']").click(function () {
		if ($("#account-number-three").val() && $("#routing-number-three").val()) {
			$("#give-now-button-three").prop("disabled", false);
		} else {
			$("#give-now-button-three").prop("disabled", true);
		}
	});

	$("[aria-controls='tabs-8']").click(function () {
		if (
			$("#cc-name-three").val() &&
			$("#cc-number-three").val() &&
			$("#cc-month-three").val() &&
			$("#cc-year-three").val()
		) {
			$("#give-now-button-three").prop("disabled", false);
		} else {
			$("#give-now-button-three").prop("disabled", true);
		}
	});

	$("[aria-controls='tabs-9']").click(function () {
		$("#give-now-button-three").prop("disabled", false);
	});

	$("#account-number-three, #routing-number-three").on("input", function () {
		if ($("#account-number-three").val() && $("#routing-number-three").val()) {
			$(".add-payment-three").prop("disabled", false);
		}

		if (!$("#account-number-three").val() || !$("#routing-number-three").val()) {
			$(".add-payment-three").prop("disabled", true);
		}
	});

	$("#cc-name-three, #cc-number-three, #cc-month-three, #cc-year-three").on(
		"input",
		function () {
			if (
				$("#cc-name-three").val() &&
				$("#cc-number-three").val() &&
				$("#cc-month-three").val() &&
				$("#cc-year-three").val()
			) {
				$("#give-now-button-three").prop("disabled", false);
			}

			if (
				!$("#cc-name-three").val() ||
				!$("#cc-number-three").val() ||
				!$("#cc-month-three").val() ||
				!$("#cc-year-three").val()
			) {
				$("#give-now-button-three").prop("disabled", true);
			}
		}
	);
});
