$(document).ready(function () {
    const $header = $('#header');

    const $window = $(window);

    const MAX_HEADER_TOP = 55;
    const HEADER_TRANSITION = 'top .2s ease-in-out';

    // ===== ФУНКЦІЯ: Оновлення положення header ===== //
    function updateHeaderTop(applyTransition = true) {
        const scrollTop = $window.scrollTop();
        const newTop = Math.max(0, MAX_HEADER_TOP - scrollTop);

        if (newTop === 0) {
            $header.addClass('float');
        } else {
            $header.removeClass('float');
        }

        if (!applyTransition) {
            $header.css('transition', 'none');
        }

        $header.css('top', `${newTop}px`);

        if (!applyTransition) {
            requestAnimationFrame(() => {
                $header.css('transition', HEADER_TRANSITION);
            });
        }
    }

    $window.on('scroll', function () {
        updateHeaderTop(true);
    });
});