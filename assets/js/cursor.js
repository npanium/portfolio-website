(function ($) {

    function customCursor() {
        var createCursor = function () {
            var cursor = $('<div class="cursor"></div>');
            body.append(cursor);
            return cursor;
        }

        var mouseX = function (event) {
            return event.clientX
        }

        var mouseY = function (event) {
            return event.clientY
        }

        var addEventListeners = function () {
            window.addEventListener('mousemove', _handleMouseMove);

            var subjectHover = 'a, button, input, .cursor-hover';
            body.on("mouseover", subjectHover, _handleMouseOver);
            body.on("mouseleave", subjectHover, _handleMouseLeave);
        }
        var _handleMouseMove = function (event) {
            cursor.css({"top": mouseY(event), "left": mouseX(event)})
        }

        var _handleMouseOver = function (event) {
            cursor.addClass('cursor--hovered');
        }
        var _handleMouseLeave = function (event) {
            cursor.removeClass('cursor--hovered');
        }

        var hideOriginCursor = function () {
            body.addClass('no-cursor');
        }

        var body = $('body');
        var cursor = createCursor();

        hideOriginCursor();
        addEventListeners();
    }

    function checkMobileDevice(){
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }

    $(document).ready(() => {
        !checkMobileDevice() ? customCursor() : void(0);
    });

}(jQuery));
