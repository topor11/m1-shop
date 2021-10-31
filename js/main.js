document.addEventListener('DOMContentLoaded', function() {
    const slider = new ChiefSlider('.slider', {
        loop: true,
        autoplay: true,
        interval: 900,
    });

    const selectSingle = document.querySelector('.select');
    const selectSingle_title = selectSingle.querySelector('.select__title');
    const selectSingle_labels = selectSingle.querySelectorAll('.select__label');

    // Toggle menu
    selectSingle_title.addEventListener('click', () => {
        if ('active' === selectSingle.getAttribute('data-state')) {
            selectSingle.setAttribute('data-state', '');
        } else {
            selectSingle.setAttribute('data-state', 'active');
        }
    });

    // Close when click to option
    for (let i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener('click', (evt) => {
            selectSingle_title.textContent = evt.target.textContent;
            selectSingle.setAttribute('data-state', '');
        });
    }


    $('a.catalog-content__link').click(function() {
        if ($(this).attr("data") == "no") {
            $(".selectItem-param .selectItem-size").hide();
        } else {
            $(".selectItem-param .selectItem-size").show();
        }
        var title, size, comItem;
        var img = $(this).parent().siblings().children('img').attr('src');

        title = $(this).siblings("h3").text();



        $(".popup").fadeIn(500);
        $("body").append("<div id='overlay'></div>");
        $('#overlay').show().css('opacity', '0.8');
        $('.popup-left__image').prepend("<img src=" + img + ">");
        $('.popup-right__title').html(title);

        $('#comments').val(title);
        $('.selectItem-param input').removeAttr('checked');
        $('.selectItem-cont label:first-child input').prop('checked', true);
        $(".popup input[name='comment']").val(title + ' черный XS');
        $('.selectItem-param input').on('change', function() {
            comItem = '';
            $('.selectItem-param input:checked').each(function() {
                comItem += $(this).val() + ' ';
            });
            $(".popup input[name='comment']").val(title + ' ' + comItem);
        });
        $('a.close, #overlay').click(function() {
            $('.popup').fadeOut(100);
            $('#overlay').remove();
            $('.popup-left img').remove();
            return false;
        });
        $('.popup').click(function(e) {
            e.stopPropagation();
        });

        return false;
    });




});