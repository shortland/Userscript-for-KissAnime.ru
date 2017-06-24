// ==UserScript==
// @name         KissAnime Player
// @namespace    http://github.com/shortland
// @version      0.1
// @description  Ease of life video player additions
// @author       Ilan Kleiman
// @match        http://kissanime.ru/Anime/*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
/*
    hide generic ads automatically
*/
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".divCloseBut, .clear2, #adsIfrme6, #adsIfrme8, #divFloatRight, #divFloatLeft, #taboola-below-article-thumbnails, #adsIfrme7, #adsIfrme10 { display: none } ";
    document.body.appendChild(css);

})();
