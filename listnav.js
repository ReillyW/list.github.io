    var pages = [
        "opening/frontopeninglist.html",
        "opening/backopeninglist.html",
        "opening/openinglist.html",
        "day/frontdaylist.html",
        "day/backdaylist.html",
        "day/daylist.html",
        "night/frontclosingshift.html",
        "night/backclosingshift.html",
        "night/nightlist.html",
    ];

    window.onload = setup;

    function get(id) {
        return document.getElementById(id);
    }

    function setup(e) {
        var buttons = get('nav').getElementsByTagName('a');
        var previousButton = buttons[0];
        var homeButton = buttons[1];
        var nextButton = buttons[2];

        var link = document.location.href;

        var linkIndex = findLinkIndex(link);

        var previousLinkIndex = linkIndex-1;
        if (previousLinkIndex < 0) {
            previousLinkIndex = pages.length-1;
        }

        var nextLinkIndex = (linkIndex+1) % pages.length;

        previousButton.href = pages[previousLinkIndex];
        nextButton.href = pages[nextLinkIndex];
        homeButton.href = "index.html";

        if (pages[linkIndex].indexOf('/') != -1) {
            previousButton.href = "../" + pages[previousLinkIndex];
            nextButton.href = "../" + pages[nextLinkIndex];
            homeButton.href = "../index.html";
        }
    }

    function findLinkIndex(link) {
        for (var i=0; i<pages.length; i++) {
            if (link.indexOf(pages[i]) != -1){
                return i;
            }
        }
    }

    location.reload();