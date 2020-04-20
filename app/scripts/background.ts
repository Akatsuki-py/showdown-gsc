const extensionID = chrome.i18n.getMessage('@@extension_id');

type Redirect = {
    redirectUrl: string;
};

const pokeball = [
    'https://play.pokemonshowdown.com/fx/pokeball.png',
    'https://play.pokemonshowdown.com/sprites/pokemonicons-pokeball-sheet.png',
];

const moves = [
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
    'https://play.pokemonshowdown.com/fx/poisoncaltrop.png',
    'https://play.pokemonshowdown.com/fx/shine.png',
    'https://play.pokemonshowdown.com/fx/impact.png',
    'https://play.pokemonshowdown.com/fx/rightslash.png',
    'https://play.pokemonshowdown.com/fx/sword.png',
    'https://play.pokemonshowdown.com/fx/hiddenpower.png',
    'https://play.pokemonshowdown.com/fx/flareball.png',
    'https://play.pokemonshowdown.com/fx/pointer.png',
    'https://play.pokemonshowdown.com/fx/angry.png',
    'https://play.pokemonshowdown.com/fx/hitmarker.png',
    'https://play.pokemonshowdown.com/fx/leftslash.png',
    'https://play.pokemonshowdown.com/fx/fist.png',
    'https://play.pokemonshowdown.com/fx/fist1.png',
    'https://play.pokemonshowdown.com/fx/foot.png',
];

const trainers = [];

const redirectMove = (URL: string): Redirect => {
    const movePath = `chrome-extension://${extensionID}/images/move/`;

    switch (URL) {
        case moves[0]:
            return {
                redirectUrl: movePath + `waterwisp.png`,
            };
        case moves[1]:
            return {
                redirectUrl: movePath + `fireball.png`,
            };
        case moves[2]:
            return {
                redirectUrl: movePath + `poisonwisp.png`,
            };
        case moves[3]:
            return {
                redirectUrl: movePath + `rock.png`,
            };
        case moves[4]:
            return {
                redirectUrl: movePath + `rock.png`,
            };
        case moves[5]:
            return {
                redirectUrl: movePath + `rock.png`,
            };
        case moves[6]:
            return {
                redirectUrl: movePath + `energyball.png`,
            };
        case moves[7]:
            return {
                redirectUrl: movePath + `electroball.png`,
            };
        case moves[8]:
            return {
                redirectUrl: movePath + `lightning.png`,
            };
        case moves[9]:
            return {
                redirectUrl: movePath + `icicle.png`,
            };
        case moves[10]:
            return {
                redirectUrl: movePath + `bottombite.png`,
            };
        case moves[11]:
            return {
                redirectUrl: movePath + `topbite.png`,
            };
        case moves[12]:
            return {
                redirectUrl: movePath + `caltrop.png`,
            };
        case moves[13]:
            return {
                redirectUrl: movePath + `heart.png`,
            };
        case moves[14]:
            return {
                redirectUrl: movePath + `shadowball.png`,
            };
        case moves[15]:
            return {
                redirectUrl: movePath + `web.png`,
            };
        case moves[16]:
            return {
                redirectUrl: movePath + `petal.png`,
            };
        case moves[17]:
            return {
                redirectUrl: movePath + `leaf.png`,
            };
        case moves[18]:
            return {
                redirectUrl: movePath + `leaf.png`,
            };
        case moves[19]:
            return {
                redirectUrl: movePath + `poisoncaltrop.png`,
            };
        case moves[20]:
            return {
                redirectUrl: movePath + `shine.png`,
            };
        case moves[21]:
            return {
                redirectUrl: movePath + `impact.png`,
            };
        case moves[22]:
            return {
                redirectUrl: movePath + `rightslash.png`,
            };
        case moves[23]:
            return {
                redirectUrl: movePath + `sword.png`,
            };
        case moves[24]:
            return {
                redirectUrl: movePath + `hiddenpower.png`,
            };
        case moves[25]:
            return {
                redirectUrl: movePath + `flareball.png`,
            };
        case moves[26]:
            return {
                redirectUrl: movePath + `pointer.png`,
            };
        case moves[27]:
            return {
                redirectUrl: movePath + `angry.png`,
            };
        case moves[28]:
            return {
                redirectUrl: movePath + `hitmarker.png`,
            };
        case moves[29]:
            return {
                redirectUrl: movePath + `leftslash.png`,
            };
        case moves[30]:
            return {
                redirectUrl: movePath + `fist.png`,
            };
        case moves[31]:
            return {
                redirectUrl: movePath + `fist1.png`,
            };
        case moves[32]:
            return {
                redirectUrl: movePath + `foot.png`,
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
            ...moves,
        ],
    },
    ['blocking'],
);
