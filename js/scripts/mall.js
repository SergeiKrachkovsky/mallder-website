/**
 * @author Sergei Krachkovsky
 * @email  sergei.krachkovsky@hotmail.com
 */

(function ($) {
    if (!$('.mall-info').size()) {
        return;
    }
    function counters (init) {
        $('.mall-counters .counter').each(function () {
            var oldVal = $(this).find('.value .old');
            var newVal = $(this).find('.value .new');
            var c = parseInt($(this).find('.value').data('val'));
            var num = 0;
            var step = Math.floor(c * 0.05);
            if (step < 1) {
                step = 1;
            }
            function build (c, max, prev) {
                if (!max) {
                    max = c;
                }
                max += '';
                prev += '';
                c += '';
                if (max.length > c.length) {
                    for (var i = 0; i < max.length - c.length; i++) {
                        c = '0' + c;
                    }
                }
                if (max.length > prev.length) {
                    for (var i = 0; i < max.length - prev.length; i++) {
                        prev = '0' + prev;
                    }
                }
                var html = '';
                for (var i = 0; i < c.length; i ++) {
                    html += '<span>' + (prev !== undefined && c[i] == prev[i] ? '' : c[i]) + '</span>';
                }
                return html;
            }
            if (init) {
                newVal.html(build(num, c));
                return;
            }
            var interval = setInterval(function () {
                num += step;
                if (num >= c) {
                    oldVal.remove();
                    newVal.html(build(c, c));
                    clearInterval(interval);
                    return;
                }
                if (!oldVal.data('val')) {
                    oldVal.data('val', 0);
                }
                if (newVal.data('val')) {
                    oldVal.html(build(newVal.data('val'), c, oldVal.data('val')))
                        .data('val', newVal.data('val'));
                }
                newVal.data('val', num);
                newVal.html(build(num, c));
            }, 50);
        });
    }
    counters(true);
    $(window).bind('scroll.mc', function () {
        if (this.pageYOffset + this.innerHeight + 100 > $('.mall-counters').offset().top) {
            $(this).unbind('scroll.mc');
            counters();
        }
    });
    if (window.pageYOffset + window.innerHeight > $('.mall-counters').offset().top) {
        $(window).scroll();
    }
})(jQuery);