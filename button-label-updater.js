var buttonLabelUpdater = (function() {
    var validSectionNames = [''];

    function updateButtonLabel(buttonId, newLabel) {
        // get reference to address bar button and its underlying label
        var button = document.getElementById(buttonId);
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
        // remove protocol
        newLabel = newLabel.replace('https://', '');
    
        // finally set the label
        label.innerHTML = newLabel;
    }

    return {
        setup: function(buttonId) {
            window.addEventListener('load', function() {
                // find all valid section names
                var mainDiv = document.getElementById('main');
                var sections = mainDiv.getElementsByTagName('section');
                for (var i = 0; i < sections.length; ++i) {
                    validSectionNames.push(`#${sections[i].id.replace('-section', '')}`);
                }
        
                updateButtonLabel(buttonId, window.location.href);
            });
        
            window.addEventListener('hashchange', function(event) {
                var hash = location.hash;
                var newURL = event.newURL;
                if (!validSectionNames.includes(hash)) {
                    newURL = newURL.replace(hash, '#home');
                }
                updateButtonLabel(buttonId, newURL);
            });
        
        }
    }
})();

buttonLabelUpdater.setup('buttons01');
