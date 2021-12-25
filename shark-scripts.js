(function() {
    var title = '• WELCOME TO THE SHARK ZONE '.replaceAll(' ', '\xa0');
    var validSectionNames = [];

    function scrollTitle() {
        title = title.slice(2) + title.slice(0, 2);
        document.title = title;
      }

    function updateButtonLabel(newLabel) {
        // get reference to address bar button and its underlying label
        var button = document.getElementById('buttons01');
        var labels = button.getElementsByTagName('span');
    
        // stop if the label doesn't exist or there are multiple for some reason
        if (labels.length != 1) {
            return;
        }
    
        var label = labels[0];
        // cleanup #home hash changes
        if (newLabel.includes('#home')) {
            newLabel = newLabel.replace('#home', '#');
        }
    
        // finally set the label
        label.innerHTML = newLabel;
    }
    
    window.onload = function() {
        // find all valid section names
        var mainDiv = document.getElementById('main');
        var sections = mainDiv.getElementsByTagName('section');
        for (var i = 0; i < sections.length; ++i) {
            validSectionNames.push('#' + sections[i].id.replace('-section', ''));
        }

        updateButtonLabel(window.location.href);
        scrollTitle();
        setInterval(scrollTitle, 1000);
    }

    window.onhashchange = function(e) {
        var hash = location.hash;
        if (validSectionNames.includes(hash)) {
            updateButtonLabel(e.newURL);
        }
    }
})();
