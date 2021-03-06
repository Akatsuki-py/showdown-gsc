const extensionID = chrome.i18n.getMessage('@@extension_id');

type Redirect = {
    redirectUrl: string;
};

const pokeball = [
    'https://play.pokemonshowdown.com/fx/pokeball.png',
    'https://play.pokemonshowdown.com/sprites/pokemonicons-pokeball-sheet.png',
];
const redirectPokeball = (): Redirect => {
    return {
        redirectUrl: `chrome-extension://${extensionID}/images/others/pokeball.png`,
    };
};

const fxDir = 'https://play.pokemonshowdown.com/fx/';
const moves = [
    `${fxDir}ball0.png`,
    `${fxDir}ball1.png`,
    `${fxDir}ball2.png`,
    `${fxDir}waterwisp.png`,
    `${fxDir}fireball.png`,
    `${fxDir}poisonwisp.png`,
    `${fxDir}rock1.png`,
    `${fxDir}rock2.png`,
    `${fxDir}rock3.png`,
    `${fxDir}energyball.png`,
    `${fxDir}electroball.png`,
    `${fxDir}lightning.png`,
    `${fxDir}icicle.png`,
    `${fxDir}bottombite.png`,
    `${fxDir}topbite.png`,
    `${fxDir}caltrop.png`,
    `${fxDir}heart.png`,
    `${fxDir}shadowball.png`,
    `${fxDir}web.png`,
    `${fxDir}petal.png`,
    `${fxDir}leaf1.png`,
    `${fxDir}leaf2.png`,
    `${fxDir}poisoncaltrop.png`,
    `${fxDir}shine.png`,
    `${fxDir}impact.png`,
    `${fxDir}rightslash.png`,
    `${fxDir}sword.png`,
    `${fxDir}chargeball.png`,
    `${fxDir}hiddenpower.png`,
    `${fxDir}flareball.png`,
    `${fxDir}pointer.png`,
    `${fxDir}angry.png`,
    `${fxDir}hitmarker.png`,
    `${fxDir}leftslash.png`,
    `${fxDir}fist.png`,
    `${fxDir}fist1.png`,
    `${fxDir}foot.png`,
    `${fxDir}seed.png`,
    `${fxDir}seedling.png`,
    `${fxDir}weather-sunnyday.jpg`,
    `${fxDir}weather-raindance.jpg`,
    `${fxDir}weather-sandstorm.jpg`,
    `${fxDir}bg-space.jpg`,
];
const redirectMove = (URL: string): Redirect => {
    const movePath = `chrome-extension://${extensionID}/images/move/`;
    const introPath = `chrome-extension://${extensionID}/images/intro/`;
    const prefix = 'https://play.pokemonshowdown.com/fx/';

    URL = URL.replace(prefix, '');
    switch (URL) {
        case 'rock1.png':
        case 'rock2.png':
        case 'rock3.png':
            return {
                redirectUrl: movePath + 'rock.png',
            };
        case 'leaf1.png':
        case 'leaf2.png':
            return {
                redirectUrl: movePath + 'leaf.png',
            };
        case 'weather-sunnyday.jpg':
            return {
                redirectUrl: movePath + 'weather-sunnyday.jpg',
            };
        case 'weather-raindance.jpg':
            return {
                redirectUrl: movePath + 'weather-raindance.jpg',
            };
        case 'weather-sandstorm.jpg':
            return {
                redirectUrl: movePath + 'weather-sandstorm.jpg',
            };
        case 'bg-space.jpg':
            return {
                redirectUrl: movePath + 'bg-space.jpg',
            };
        case 'ball0.png':
        case 'ball1.png':
        case 'ball2.png':
            return {
                redirectUrl: introPath + URL,
            };
        default:
            return {
                redirectUrl: movePath + URL,
            };
    }
};

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
    trainersDir + 'biker-gen4.png',
    trainersDir + 'byron.png',
    trainersDir + 'candice.png',
    trainersDir + 'crasherwake.png',
    trainersDir + 'fantina.png',
    trainersDir + 'gardenia.png',
    trainersDir + 'maylene.png',
    trainersDir + 'roark.png',
    trainersDir + 'volkner.png',
    trainersDir + 'ghetsis.png',
    trainersDir + 'ghetsis-gen5bw.png',
];
const redirectTrainer = (URL: string): Redirect => {
    const elite4Dir = `chrome-extension://${extensionID}/images/trainer/elite4/`;
    const gen3Dir = `chrome-extension://${extensionID}/images/trainer/gen3/`;
    const gen4Dir = `chrome-extension://${extensionID}/images/trainer/gen4/`;
    const gen5Dir = `chrome-extension://${extensionID}/images/trainer/gen5/`;

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
        case trainersDir + 'acetrainersnow.png':
            return {
                redirectUrl: doPNG(trainersDir, 'acetrainer-gen2'),
            };
        case trainersDir + 'acetrainersnowf.png':
            return {
                redirectUrl: doPNG(trainersDir, 'acetrainerf-gen2'),
            };
        case trainersDir + 'byron.png':
            return {
                redirectUrl: doPNG(gen4Dir, 'byron'),
            };
        case trainersDir + 'candice.png':
            return {
                redirectUrl: doPNG(gen4Dir, 'candice'),
            };
        case trainersDir + 'crasherwake.png':
            return {
                redirectUrl: doPNG(gen4Dir, 'crasherwake'),
            };
        case trainersDir + 'fantina.png':
            return {
                redirectUrl: doPNG(gen4Dir, 'fantina'),
            };
        case trainersDir + 'gardenia.png':
            return {
                redirectUrl: doPNG(gen4Dir, 'gardenia'),
            };
        case trainersDir + 'maylene.png':
            return {
                redirectUrl: doPNG(gen4Dir, 'maylene'),
            };
        case trainersDir + 'roark.png':
            return {
                redirectUrl: doPNG(gen4Dir, 'roark'),
            };
        case trainersDir + 'volkner.png':
            return {
                redirectUrl: doPNG(gen4Dir, 'volkner'),
            };
        case trainersDir + 'ghetsis.png':
        case trainersDir + 'ghetsis-gen5bw.png':
            return {
                redirectUrl: doPNG(gen5Dir, 'ghetsis'),
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

const musicDir = `chrome-extension://${extensionID}/images/music/`;
const musics = [
    'https://play.pokemonshowdown.com/audio/blue.mp3',
    'https://play.pokemonshowdown.com/audio/mura.mp3',
    'https://play.pokemonshowdown.com/audio/johto_gymleader.mp3',
    'https://play.pokemonshowdown.com/audio/kanto_gymleader.mp3',
    'https://play.pokemonshowdown.com/audio/Hop.mp3',
    'https://play.pokemonshowdown.com/audio/Marnie.mp3',
    'https://play.pokemonshowdown.com/audio/Oleana.mp3',
    'https://play.pokemonshowdown.com/audio/pp.mp3',
    'https://play.pokemonshowdown.com/audio/naljo_trainer.mp3',
    'https://play.pokemonshowdown.com/audio/trainer.mp3',
];
const redirectMusic = (URL: string): Redirect => {
    return {
        redirectUrl: decodeURI(
            musicDir + URL.replace('https://play.pokemonshowdown.com/audio/', ''),
        ),
    };
};

const seDir = `chrome-extension://${extensionID}/images/se/`;
const ses = [
    'https://play.pokemonshowdown.com/se/' + 'status_ailment/' + 'LeechSeedDamage.mp3',
    'https://play.pokemonshowdown.com/se/' + 'status_ailment/' + 'Poisoned.mp3',
    'https://play.pokemonshowdown.com/se/' + 'status_ailment/' + 'BurnDamage.mp3',
    'https://play.pokemonshowdown.com/se/' + 'status_ailment/' + 'Confused.mp3',
    'https://play.pokemonshowdown.com/se/' + 'status_ailment/' + 'Sleeping.mp3',
    'https://play.pokemonshowdown.com/se/' + 'ball_explode.mp3',
    'https://play.pokemonshowdown.com/se/' + 'fainted.mp3',
    'https://play.pokemonshowdown.com/se/' + 'hit.mp3',
    'https://play.pokemonshowdown.com/se/' + 'super_effective.mp3',
    'https://play.pokemonshowdown.com/se/' + 'not_very_effective.mp3',
];
const redirectSE = (URL: string): Redirect => {
    return {
        redirectUrl: seDir + URL.replace('https://play.pokemonshowdown.com/se/', ''),
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
        } else if (musics.indexOf(details.url) > -1) {
            return redirectMusic(details.url);
        } else if (ses.indexOf(details.url) > -1) {
            return redirectSE(details.url);
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
            ...musics,
            ...ses,
        ],
    },
    ['blocking'],
);
