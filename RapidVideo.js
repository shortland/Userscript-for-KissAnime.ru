// ==UserScript==
// @name         RapidVideo No Popup
// @namespace    http://github.com/shortland
// @version      0.1
// @description  Remove popup ads from RapidVideo.com (OnePiece player at least)
// @author       Ilan Kleiman
// @match        https://www.rapidvideo.com/e/*
// @grant        none
// ==/UserScript==

// note: autoplay works when directly visiting the site. But does not work when visiting from KissAnime.ru, probably some html thing.

(function() {
    'use strict';
/*
    Autoplay for RapidVideo.com host
        &
    Removes popup ads from RapidVideo.com
*/
    var markup = document.documentElement.innerHTML;
    var uniqueFalsePlay = markup.replace(/(var playerInstance \= jwplayer\(\"home\_video\"\)\.setup\(\{\"autostart\"\:) false,/, "$1true,");
    var uniqueFalsePlay = markup.replace(/<!-- PopAds\.net Popunder Code for www\.rapidvideo\.com [.|\s|\S]+<\/script>/m, "");
    document.write(uniqueFalsePlay); // There's definitely a better way :(
})();
