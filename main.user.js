// ==UserScript==
// @name         Fuck Notification
// @description  remove notifications
// @namespace    https://github.com/shosatojp/fuck-notification
// @homepage     https://github.com/shosatojp/fuck-notification
// @version      0.1
// @author       Sho Sato
// @match        *://*/*
// @require      file:///home/sho/repos/fuck-notification/main.user.js
// @updateURL    https://github.com/shosatojp/fuck-notification/raw/master/main.user.js?
// @downloadURL  https://github.com/shosatojp/fuck-notification/raw/master/main.user.js?
// @run-at       document-start
// @noframes
// ==/UserScript==

(() => {
    window.Notification = null;
})();
