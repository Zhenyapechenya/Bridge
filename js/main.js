$(function(){
    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0px',
        cssEase: 'ease',
        pauseOnHover: 'false',
        pauseOnFocus:'false',
        // variableWidth:'true',
        // responsive: [
        //     {
        //         breakpoint: 841,
        //         settings: {
        //             slidesToShow: 2
        //         }
        //     },
        //     {
        //         breakpoint: 601,
        //         settings: {
        //             slidesToShow: 1
        //         }
        //     },
        // ]
    });
});

// $(document).ready(function() {

// 	//E-mail Ajax Send
// 	$("form").submit(function() { //Change
//         console.log('123');
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php", //Change
// 			data: th.serialize()
// 		}).done(function() {
// 			alert("Thank you!");
// 			setTimeout(function() {
// 				// Done Functions
// 				th.trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});

// });

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
            }else {
                alert('Ошибка');
                form.classList.remove('_sending');
            }
        }else {
            alert('Заполните обязательные поля');
        }
    }

    function formValidate(e) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');
    
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }

        }
   }
   function formAddError(input) {
       input.parentElement.classList.add('_error');
       input.classList.add('_error');
   }
   function formRemoveError(input) {
       input.parentElement.classList.remove('_error');
       input.classList.remove('_error');
   }
   function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
   }
});