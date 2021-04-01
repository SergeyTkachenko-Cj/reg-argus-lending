$(function () {
	$('.openImgModal').on('click', function () {
		openImgModal($(this));
	});

	function openImgModal(btn) {
		$('.cert-modal').stop().fadeIn();
		$('.cert-modal img').attr('src', btn.attr('data-open'));
	}

	$(document).mouseup(function(e) {
		var container = $('.cert-modal img'),
			modal = $('.modal form'),
			formMsg = $('.response .text');

		if (!container.is(e.target) && container.has(e.target).length === 0) {
			$('.cert-modal').stop().fadeOut();
		}
		if (!formMsg.is(e.target) && formMsg.has(e.target).length === 0) {
			clearTimer(timer);
			$('.response').removeClass('active').stop().fadeOut();
		}
		if (!modal.is(e.target) && modal.has(e.target).length === 0) {
			$('.modal').stop().fadeOut(function () {
				$('.modal').removeClass('download opened');
				modal.find('input.error').removeClass('error');
				modal.find('label input').val('');
				modal.show();
			});
		}
	});

	$('.modal .close-btn').on('click', function () {
		$('.modal').removeClass('opened').stop().fadeOut();
	});
	$('.response .close-btn').on('click', function () {
		clearTimer(timer);
		$(this).parents('.response').stop().fadeOut();
	});
	$('.callback').on('click', function () {
		var modal = $('.modal');
		modal.addClass('opened').stop().fadeIn();
		modal.find('#download-file').attr('disabled', true)
	});

	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: $('.slider-wrapper .btn-row'),
		prevArrow: '<button class="prev-btn">\n' +
			'                    <svg width="15" height="21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
			'                         viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">\n' +
			'                        <path fill="#299064" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12\n' +
			'                            c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028\n' +
			'                            c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265\n' +
			'                            c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>\n' +
			'                    </svg>\n' +
			'                </button>',
		nextArrow: '<button class="next-btn">\n' +
			'                    <svg width="15" height="21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
			'                         viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">\n' +
			'                        <path fill="#299064" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12\n' +
			'                            c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028\n' +
			'                            c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265\n' +
			'                            c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>\n' +
			'                    </svg>\n' +
			'                </button>',

	});

	$('.certs-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button class="prev-btn">\n' +
			'                    <svg width="15" height="21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
			'                         viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">\n' +
			'                        <path fill="#299064" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12\n' +
			'                            c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028\n' +
			'                            c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265\n' +
			'                            c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>\n' +
			'                    </svg>\n' +
			'                </button>',
		nextArrow: '<button class="next-btn">\n' +
			'                    <svg width="15" height="21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
			'                         viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">\n' +
			'                        <path fill="#299064" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12\n' +
			'                            c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028\n' +
			'                            c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265\n' +
			'                            c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>\n' +
			'                    </svg>\n' +
			'                </button>',
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					variableWidth: false,
					centerMode: false
				}
			},
			{
				breakpoint: 1200,
				settings: {
					variableWidth: false,
					centerMode: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					variableWidth: true,
					centerMode: true
				}
			}
		]
	});

	$('.download-block .count-price').on('click', function () {
		$('.modal').addClass('download').find('#download-file').attr('disabled', false).val($(this).attr('data-file-name'));
	});

	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		if ($.attr(this, 'href').length > 1 && $($.attr(this, 'href')).length > 0) {
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 500);
		}
	});

	$('.toggle-list').on('click', function () {
		$(this).parents('.document-list-block').toggleClass('active').find('.document-list.hidden').stop().slideToggle();
	});

	$('.sbmt-btn').on('click', function (e) {
		e.preventDefault();
		var form = $(this).parents('.form');
		if (validateForm(form)) sendForm(form);
	});

	$('.download-btn').on('click', function (e) {
		e.preventDefault();
		var fileList;
		var fileListName = $('#download-file').val();
		var form = $(this).parents('.form');

		if ($(this).parents('.modal').hasClass('download')) {
			fileList = $('button[data-file-name=' + $('#download-file').val() + ']').attr('data-download');
		}

		if (validateForm(form)) {
			var email = $(this).parents('.form').find('input[name="email"]').val();
			var name = $(this).parents('.form').find('input[name="name"]').val();
			sendMultipleFiles(fileList, fileListName, email, name);
			sendForm(form);
		}
	});

	$('.bot-send-btn').on('click', function(e) {
		e.preventDefault();

		var form = $(this).parents('.form');

		if (validateForm(form)) sendForm(form);
	});

	$('.form label input').on('keyup', function() {
		$(this).removeClass('error');
	});

	var timer;
	function sendForm(form) {
		$.ajax({
			type: 'POST',
			url: 'send.php',
			data: form.serialize(),
			success: function(data){
				var success = $('.success');
				if (!form.hasClass(' in-form')) {
					form.parents('.modal').stop().fadeOut();
					timer = setTimeout(function () {
						success.removeClass('active').stop().fadeOut();
					}, 5000);
				}
				success.fadeIn();
				ym(42827294,'reachGoal','submittedForm');
			},
			error: function(data){
				var failure = $('.failure');
				if (!form.hasClass(' in-form')) {
					form.parents('.modal').stop().fadeOut();
					timer = setTimeout(function () {
						failure.removeClass('active').stop().fadeOut();
					}, 5000);
				}
				failure.fadeIn();
			},
			complete: function () {
				form.find('label input').val('');
			}
		});
	}

	function sendMultipleFiles(fileList, fileListName, email, name) {
		$.ajax({
			type: 'POST',
			url: 'sendFiles.php',
			data: 'email=' + email + '&name=' + name + '&files=' + fileList + '&filesName=' + fileListName
		});
	}

	function validateForm(form) {

			function validateEmail(email) {
				var re = /\S+@\S+\.\S+/;
				return re.test(email.trim());
			}

			function validatePhone(phone) {
				var re = /^\+?[0-9]+$/;
				return re.test(phone.trim());
			}

		form.find('label input').each(function () {
			if ($(this).val() === '' && this.name !== 'hidden-captcha') {
				$(this).addClass('error');
			} 
			else if (this.name === 'hidden-captcha' && $(this).val() !== '') {	// Anti-robots trick
				$(this).addClass('error');
			}
			else if (this.name === 'email' && !validateEmail($(this).val())) {
				$(this).addClass('error');
			}
			else if (this.name === 'phone' && !validatePhone($(this).val())) {
				$(this).addClass('error');
			}
			else {
				$(this).removeClass('error');
			}
		});

		return form.find('.error').length === 0;
	}

	function clearTimer(timer) {
		timer && clearTimeout(timer);
	}
});