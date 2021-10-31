window.addEventListener('DOMContentLoaded', function() {

    //  Tippy
    //  ==================================================================================================

    tippy('#tooltip-1', {
        content: 'Хорошего дня:))',
        theme: 'white-tech',
        trigger: 'click',
        trigger: 'mouseenter click',
    });

    tippy('#tooltip-2', {
        content: '<b>4500 мАч</b> - это примерно 30 часов активного использования устройства',
        theme: 'white-tech',
        trigger: 'click',
        trigger: 'mouseenter click',
        allowHTML: true,
    });

})