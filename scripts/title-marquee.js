var titleMarquee = (function() {
    var title = '';

    function scrollTitle() {
        title = title.slice(2) + title.slice(0, 2);
        document.title = title;
    }

    return {
        setup: function(titleString) {
            title = titleString;
            window.addEventListener('load', function() {
                scrollTitle();
                setInterval(scrollTitle, 1000);
            });
        }
    }
})();
