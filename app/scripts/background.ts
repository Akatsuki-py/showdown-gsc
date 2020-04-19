const extensionID = chrome.i18n.getMessage('@@extension_id');

type Redirect = {
    redirectUrl: string;
};

const pokeball = [
    'https://play.pokemonshowdown.com/fx/pokeball.png',
    'https://play.pokemonshowdown.com/sprites/pokemonicons-pokeball-sheet.png',
];

const move = [
    'https://play.pokemonshowdown.com/fx/waterwisp.png',
    'https://play.pokemonshowdown.com/fx/fireball.png',
    'https://play.pokemonshowdown.com/fx/poisonwisp.png',
    'https://play.pokemonshowdown.com/fx/rock1.png',
    'https://play.pokemonshowdown.com/fx/rock2.png',
    'https://play.pokemonshowdown.com/fx/rock3.png',
];

const redirectMove = (URL: string): Redirect => {
    const movePath = `chrome-extension://${extensionID}/images/move/`;

    switch (URL) {
        case move[0]:
            return {
                redirectUrl: movePath + `waterwisp.png`,
            };
        case move[1]:
            return {
                redirectUrl: movePath + `fireball.png`,
            };
        case move[2]:
            return {
                redirectUrl: movePath + `poisonwisp.png`,
            };
        case move[3]:
            return {
                redirectUrl: movePath + `rock.png`,
            };
        case move[4]:
            return {
                redirectUrl: movePath + `rock.png`,
            };
        case move[5]:
            return {
                redirectUrl: movePath + `rock.png`,
            };
        default:
            return {
                redirectUrl: '',
            };
    }
};

const redirectPokeball = (): Redirect => {
    return {
        redirectUrl: `chrome-extension://${extensionID}/images/others/pokeball.png`,
    };
};

chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        console.log(details.url);
        if (details.url.indexOf('battle.js') !== -1) {
            return { redirectUrl: `chrome-extension://${extensionID}/images/others/battle.js` };
        } else if (details.url.indexOf('graphics.js') !== -1) {
            return { redirectUrl: `chrome-extension://${extensionID}/images/others/graphics.js` };
        } else if (pokeball.indexOf(details.url) > -1) {
            return redirectPokeball();
        } else {
            return redirectMove(details.url);
        }
    },
    {
        urls: [
            'https://*.pokemonshowdown.com/js/battle.js?*',
            'https://*.pokemonshowdown.com/data/graphics.js?*',
            ...pokeball,
            ...move,
        ],
    },
    ['blocking'],
);
