(function() {
    var title = '• WELCOME TO THE SHARK ZONE '.replaceAll(' ', '\xa0');

    function scrollTitle() {
        title = title.slice(2) + title.slice(0, 2);
        document.title = title;
    }

    window.addEventListener('load', function() {
        scrollTitle();
        setInterval(scrollTitle, 1000);
    });
})();
