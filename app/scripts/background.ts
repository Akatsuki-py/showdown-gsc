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
    'https://play.pokemonshowdown.com/fx/seed.png',
    'https://play.pokemonshowdown.com/fx/seedling.png',
];

const trainersDir = 'https://play.pokemonshowdown.com/sprites/trainers/';
const trainers = [
    trainersDir + 'aaron.png',
    trainersDir + 'acerola.png',
    trainersDir + 'acetrainer.png',
    trainersDir + 'acetrainerf.png',
    trainersDir + 'acetrainersnow.png',
    trainersDir + 'acetrainersnowf.png',
    trainersDir + 'agatha-gen3.png',
    trainersDir + 'anabel.png',
    trainersDir + 'beauty.png',
    trainersDir + 'bertha.png',
    trainersDir + 'biker.png',
    trainersDir + 'birdkeeper.png',
    trainersDir + 'blackbelt.png',
    trainersDir + 'blaine.png',
    trainersDir + 'blue.png',
    trainersDir + 'boarder.png',
    trainersDir + 'brock.png',
    trainersDir + 'bruno.png',
    trainersDir + 'bugcatcher.png',
    trainersDir + 'bugsy.png',
    trainersDir + 'burglar.png',
    trainersDir + 'caitlin.png',
    trainersDir + 'camper.png',
    trainersDir + 'chuck.png',
    trainersDir + 'clair.png',
    trainersDir + 'drasna.png',
    trainersDir + 'erika.png',
    trainersDir + 'ethan.png',
    trainersDir + 'eusine.png',
    trainersDir + 'falkner.png',
    trainersDir + 'firebreather.png',
    trainersDir + 'fisherman.png',
    trainersDir + 'fisherman-gen4.png',
    trainersDir + 'gentleman.png',
    trainersDir + 'grimsley.png',
    trainersDir + 'hala.png',
    trainersDir + 'hiker.png',
    trainersDir + 'hiker-gen7.png',
    trainersDir + 'hiker-gen4.png',
    trainersDir + 'janine.png',
    trainersDir + 'jasmine.png',
    trainersDir + 'juggler.png',
    trainersDir + 'kahili.png',
    trainersDir + 'karen.png',
    trainersDir + 'kimonogirl.png',
    trainersDir + 'koga.png',
    trainersDir + 'lance.png',
    trainersDir + 'lass.png',
    trainersDir + 'ltsurge.png',
    trainersDir + 'malva.png',
    trainersDir + 'marshal.png',
    trainersDir + 'medium.png',
    trainersDir + 'misty.png',
    trainersDir + 'morty.png',
    trainersDir + 'olivia.png',
    trainersDir + 'picnicker.png',
    trainersDir + 'pokefan.png',
    trainersDir + 'pokefanf.png',
    trainersDir + 'policeman-gen4.png',
    trainersDir + 'policeman.png',
    trainersDir + 'pryce.png',
    trainersDir + 'psychic-gen4.png',
    trainersDir + 'psychic.png',
    trainersDir + 'red.png',
    trainersDir + 'rocketgrunt.png',
    trainersDir + 'rocketgruntf.png',
    trainersDir + 'sabrina.png',
    trainersDir + 'li.png',
    trainersDir + 'sage.png',
    trainersDir + 'sailor.png',
    trainersDir + 'schoolkid.png',
    trainersDir + 'scientist.png',
    trainersDir + 'sidney.png',
    trainersDir + 'siebold.png',
    trainersDir + 'silver.png',
    trainersDir + 'skier.png',
    trainersDir + 'supernerd.png',
    trainersDir + 'swimmerf.png',
    trainersDir + 'swimmer.png',
    trainersDir + 'tamer-gen3.png',
    trainersDir + 'teacher.png',
    trainersDir + 'twins.png',
    trainersDir + 'whitney.png',
    trainersDir + 'will.png',
    trainersDir + 'youngster.png',
    trainersDir + 'pokemaniac.png',
    trainersDir + 'palmer.png',
    trainersDir + 'molayne.png',
    trainersDir + 'flint.png',
    trainersDir + 'winona.png',
    trainersDir + 'teamrocket.png',
];

const redirectTrainer = (URL: string): Redirect => {
    const elite4Dir = `chrome-extension://${extensionID}/images/trainer/elite4/`;
    const gen3Dir = `chrome-extension://${extensionID}/images/trainer/gen3/`;

    const doPNG = (dir: string, name: string) => {
        return dir + name + '.png';
    };

    switch (URL) {
        case trainers[0]:
            return {
                redirectUrl: doPNG(elite4Dir, 'aaron'),
            };
        case trainers[1]:
            return {
                redirectUrl: doPNG(elite4Dir, 'acerola'),
            };
        case trainers[6]:
            return {
                redirectUrl: doPNG(elite4Dir, 'agatha'),
            };
        case trainers[7]:
            return {
                redirectUrl: doPNG(gen3Dir, 'anabel'),
            };
        case trainers[8]:
            return {
                redirectUrl: doPNG(trainersDir, 'beauty-gen2jp'),
            };
        case trainers[9]:
            return {
                redirectUrl: doPNG(elite4Dir, 'bertha'),
            };
        case trainersDir + 'caitlin.png':
            return {
                redirectUrl: doPNG(elite4Dir, 'caitlin'),
            };
        case trainersDir + 'drasna.png':
            return {
                redirectUrl: doPNG(elite4Dir, 'drasna'),
            };
        case trainersDir + 'fisherman.png':
            return {
                redirectUrl: doPNG(trainersDir, 'fisherman-gen2jp'),
            };
        case trainersDir + 'fisherman-gen4.png':
            return {
                redirectUrl: doPNG(trainersDir, 'fisherman-gen2jp'),
            };
        case trainersDir + 'grimsley.png':
            return {
                redirectUrl: doPNG(elite4Dir, 'grimsley'),
            };
        case trainersDir + 'hala.png':
            return {
                redirectUrl: doPNG(elite4Dir, 'hala'),
            };
        case trainersDir + 'kahili.png':
            return {
                redirectUrl: doPNG(elite4Dir, 'kahili'),
            };
        case trainersDir + 'malva.png':
            return {
                redirectUrl: doPNG(elite4Dir, 'malva'),
            };
        case trainersDir + 'marshal.png':
            return {
                redirectUrl: doPNG(elite4Dir, 'marshal'),
            };
        case trainersDir + 'medium.png':
            return {
                redirectUrl: doPNG(trainersDir, 'medium-gen2jp'),
            };
        case trainersDir + 'olivia.png':
            return {
                redirectUrl: doPNG(elite4Dir, 'olivia'),
            };
        case trainersDir + 'policeman-gen4.png':
            return {
                redirectUrl: doPNG(trainersDir, 'officer-gen2'),
            };
        case trainersDir + 'policeman.png':
            return {
                redirectUrl: doPNG(trainersDir, 'officer-gen2'),
            };
        case trainersDir + 'li.png':
            return {
                redirectUrl: doPNG(trainersDir, 'sage-gen2'),
            };
        case trainersDir + 'schoolkid.png':
            return {
                redirectUrl: doPNG(trainersDir, 'schoolboy-gen2'),
            };
        case trainersDir + 'sidney.png':
            return {
                redirectUrl: doPNG(elite4Dir, 'sidney'),
            };
        case trainersDir + 'siebold.png':
            return {
                redirectUrl: doPNG(elite4Dir, 'siebold'),
            };
        case trainersDir + 'swimmer.png':
            return {
                redirectUrl: doPNG(trainersDir, 'swimmerm-gen2'),
            };
        case trainersDir + 'tamer-gen3.png':
            return {
                redirectUrl: doPNG(trainersDir, 'tamer-gen1rb'),
            };
        case trainersDir + 'pokemaniac.png':
            return {
                redirectUrl: doPNG(trainersDir, 'pokemaniac-gen1rb'),
            };
        case trainersDir + 'palmer.png':
            return {
                redirectUrl: doPNG(gen3Dir, 'palmer'),
            };
        case trainersDir + 'molayne.png':
            return {
                redirectUrl: doPNG(elite4Dir, 'molayne'),
            };
        case trainersDir + 'flint.png':
            return {
                redirectUrl: doPNG(elite4Dir, 'flint'),
            };
        case trainersDir + 'winona.png':
            return {
                redirectUrl: doPNG(gen3Dir, 'winona'),
            };
        case trainersDir + 'teamrocket.png':
            return {
                redirectUrl: doPNG(trainersDir, 'jessiejames-gen1'),
            };
        default: {
            const URLgen2 =
                URL.replace('-gen7', '')
                    .replace('-gen4', '')
                    .replace('.png', '') + '-gen2.png';
            return {
                redirectUrl: URLgen2,
            };
        }
    }
};

const redirectMove = (URL: string): Redirect => {
    const movePath = `chrome-extension://${extensionID}/images/move/`;
    const prefix = 'https://play.pokemonshowdown.com/fx/';

    URL = URL.replace(prefix, '');
    switch (URL) {
        case 'rock1.png':
        case 'rock2.png':
        case 'rock3.png':
            return {
                redirectUrl: movePath + 'rock.png',
            };
        default:
            return {
                redirectUrl: movePath + URL,
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
        } else if (trainers.indexOf(details.url) > -1) {
            return redirectTrainer(details.url);
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
            ...trainers,
        ],
    },
    ['blocking'],
);
