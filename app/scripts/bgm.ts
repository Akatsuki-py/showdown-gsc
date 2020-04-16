import { injectScript } from './util';

const extensionID = chrome.i18n.getMessage('@@extension_id');
const url = `chrome-extension://${extensionID}/images/music/trainer.mp3`;

export const injectNewGraphicsJS = () => {
    injectScript(`chrome-extension://${extensionID}/images/others/graphics.js`, 'html');
};

const loadScript = `
const changeBGM = setInterval(function() {
    if (BattleSound.bgm.length == 1) {
        BattleSound.loadBgm('${url}', 0, 10000, BattleSound.bgm[0]);
        clearInterval(changeBGM);
    }
}, 100);
`;

export const injectLoadScript = () => {
    const th = document.getElementsByTagName('body')[0];
    const s = document.createElement('script');
    s.textContent = loadScript;
    return th.appendChild(s);
};
