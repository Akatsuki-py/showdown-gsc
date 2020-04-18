const extensionID = chrome.i18n.getMessage('@@extension_id');

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return { redirectUrl: `chrome-extension://${extensionID}/images/others/battle.js` };
    },
    { urls: ['https://*.pokemonshowdown.com/js/battle.js?*'] },
    ['blocking'],
);
