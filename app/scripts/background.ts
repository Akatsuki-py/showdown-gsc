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
    'https://play.pokemonshowdown.com/fx/energyball.png',
    'https://play.pokemonshowdown.com/fx/electroball.png',
    'https://play.pokemonshowdown.com/fx/lightning.png',
    'https://play.pokemonshowdown.com/fx/icicle.png',
    'https://play.pokemonshowdown.com/fx/bottombite.png',
    'https://play.pokemonshowdown.com/fx/topbite.png',
    'https://play.pokemonshowdown.com/fx/caltrop.png',
    'https://play.pokemonshowdown.com/fx/heart.png',
    'https://play.pokemonshowdown.com/fx/shadowball.png',
    'https://play.pokemonshowdown.com/fx/web.png',
    'https://play.pokemonshowdown.com/fx/petal.png',
    'https://play.pokemonshowdown.com/fx/leaf1.png',
    'https://play.pokemonshowdown.com/fx/leaf2.png',
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
        case move[6]:
            return {
                redirectUrl: movePath + `energyball.png`,
            };
        case move[7]:
            return {
                redirectUrl: movePath + `electroball.png`,
            };
        case move[8]:
            return {
                redirectUrl: movePath + `lightning.png`,
            };
        case move[9]:
            return {
                redirectUrl: movePath + `icicle.png`,
            };
        case move[10]:
            return {
                redirectUrl: movePath + `bottombite.png`,
            };
        case move[11]:
            return {
                redirectUrl: movePath + `topbite.png`,
            };
        case move[12]:
            return {
                redirectUrl: movePath + `caltrop.png`,
            };
        case move[13]:
            return {
                redirectUrl: movePath + `heart.png`,
            };
        case move[14]:
            return {
                redirectUrl: movePath + `shadowball.png`,
            };
        case move[15]:
            return {
                redirectUrl: movePath + `web.png`,
            };
        case move[16]:
            return {
                redirectUrl: movePath + `petal.png`,
            };
        case move[17]:
            return {
                redirectUrl: movePath + `leaf.png`,
            };
        case move[18]:
            return {
                redirectUrl: movePath + `leaf.png`,
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
