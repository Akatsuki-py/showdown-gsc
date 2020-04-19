const extensionID = chrome.i18n.getMessage('@@extension_id');

chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        console.log(details.url);
        if (details.url.indexOf('battle.js') !== -1) {
            return { redirectUrl: `chrome-extension://${extensionID}/images/others/battle.js` };
        } else if (details.url.indexOf('graphics.js') !== -1) {
            return { redirectUrl: `chrome-extension://${extensionID}/images/others/graphics.js` };
        }
        return { redirectUrl: `chrome-extension://${extensionID}/images/others/battle.js` };
    },
    {
        urls: [
            'https://*.pokemonshowdown.com/js/battle.js?*',
            'https://*.pokemonshowdown.com/data/graphics.js?*',
        ],
    },
    ['blocking'],
);
