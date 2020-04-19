const extensionID = chrome.i18n.getMessage('@@extension_id');

chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        console.log(details.url);
        if (details.url.indexOf('battle.js') !== -1) {
            return { redirectUrl: `chrome-extension://${extensionID}/images/others/battle.js` };
        } else if (details.url.indexOf('graphics.js') !== -1) {
            return { redirectUrl: `chrome-extension://${extensionID}/images/others/graphics.js` };
        } else if (
            details.url == 'https://play.pokemonshowdown.com/fx/pokeball.png' ||
            details.url ==
                'https://play.pokemonshowdown.com/sprites/pokemonicons-pokeball-sheet.png'
        ) {
            return {
                redirectUrl: `chrome-extension://${extensionID}/images/others/pokeball.png`,
            };
        }
        return {
            redirectUrl: `chrome-extension://${extensionID}/images/others/battle.js`,
        };
    },
    {
        urls: [
            'https://*.pokemonshowdown.com/js/battle.js?*',
            'https://*.pokemonshowdown.com/data/graphics.js?*',
            'https://play.pokemonshowdown.com/fx/pokeball.png',
            'https://play.pokemonshowdown.com/sprites/pokemonicons-pokeball-sheet.png',
        ],
    },
    ['blocking'],
);
